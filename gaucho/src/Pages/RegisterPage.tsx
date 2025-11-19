import { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

type ApiResponse = {
  success?: boolean;
  message?: string;
  [key: string]: unknown;
};

export const RegisterPage: React.FC = () => {
  const params = useParams<{ code?: string, state?: string }>();
  const location = useLocation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');

  const codeFromUrl = useMemo(() => {
    if (params.code) return {code: params.code, state: params.state};
    const searchParams = new URLSearchParams(location.search);
    const queryCode = searchParams.get('code');
    const queryState = searchParams.get('state');
    return {code: queryCode ?? '', state: queryState ?? ''};
  }, [params.code, params.state, location.search]);

  useEffect(() => {
    const register = async () => {
      if (!codeFromUrl) {
        setStatus('error');
        setMessage('Código no encontrado en la URL.');
        return;
      }

      try {
        setStatus('loading');
        setMessage('Registrando...');

        const response = await fetch(`https://whatsapp-server.gaucholab.com/api/tiendanube/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code: codeFromUrl.code, state: codeFromUrl.state }),
        });

        const data: ApiResponse = await response.json().catch(() => ({}));

        if (!response.ok) {
          const errorMessage = (data && data.message) || 'No se pudo registrar.';
          throw new Error(errorMessage);
        }

        setStatus('success');
        setMessage('Página registrada exitosamente');
      } catch (error: unknown) {
        const fallbackMessage = error instanceof Error ? error.message : 'Ocurrió un error inesperado.';
        setStatus('error');
        setMessage(fallbackMessage);
      }
    };

    register();
  }, [codeFromUrl]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
        <h1 className="text-2xl font-bold text-white mb-2">Registro de página</h1>
        {status === 'loading' && (
          <p className="text-white/80">{message}</p>
        )}
        {status === 'success' && (
          <p className="text-green-400">{message}</p>
        )}
        {status === 'error' && (
          <p className="text-red-400">{message}</p>
        )}
        {status !== 'loading' && codeFromUrl && (
          <p className="text-white/60 mt-4 break-all">
            Código: <span className="text-[#F2BF5D]">{codeFromUrl.code}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;


