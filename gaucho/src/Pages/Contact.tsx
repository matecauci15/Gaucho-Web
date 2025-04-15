
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Send, CheckCircle, AlertCircle, Loader2, User, Mail, MessageSquare, MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const schema = yup.object({
  name: yup.string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: yup.string()
    .required('El email es obligatorio')
    .email('Debe ser un email válido'),
  subject: yup.string()
    .required('El asunto es obligatorio')
    .min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: yup.string()
    .required('El mensaje es obligatorio')
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
});

type FormData = yup.InferType<typeof schema>;

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null);
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [characterCount, setCharacterCount] = useState({ message: 0 });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, dirtyFields, isValid }
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const messageValue = watch('message');

  useEffect(() => {
    if (messageValue) {
      setCharacterCount(prev => ({ ...prev, message: messageValue.length }));
    } else {
      setCharacterCount(prev => ({ ...prev, message: 0 }));
    }
  }, [messageValue]);

  // Limpiar timeout si existe al desmontar el componente
  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  // Mock submission con mejor manejo de errores
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        // Simular éxito con 95% de probabilidad, error con 5%
        const shouldSucceed = Math.random() < 0.95;
        setTimeout(() => {
          if (shouldSucceed) {
            resolve(data);
          } else {
            reject(new Error('Network error'));
          }
        }, 1500);
      });
      
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
      
      const id = setTimeout(() => setSubmitStatus('idle'), 5000);
      setTimeoutId(id);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      const id = setTimeout(() => setSubmitStatus('idle'), 5000);
      setTimeoutId(id);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const getInputStyles = (fieldName: keyof FormData) => {
    const baseStyles = 'w-full px-4 py-3 border rounded-lg transition-all duration-300';
    const focusStyles = 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900';
    const errorStyles = 'border-red-500 focus:ring-red-500 bg-gray-800 text-red-300';
    const successStyles = 'border-green-500 focus:ring-green-500 bg-gray-800 text-white';
    const focusedStyles = 'border-yellow-500 focus:ring-yellow-500';
    const defaultStyles = 'border-gray-700 bg-gray-800 text-white placeholder-gray-400';
    
    if (focusedField === fieldName) return `${baseStyles} ${focusStyles} ${focusedStyles}`;
    if (errors[fieldName]) return `${baseStyles} ${focusStyles} ${errorStyles}`;
    if (dirtyFields[fieldName] && !errors[fieldName]) return `${baseStyles} ${focusStyles} ${successStyles}`;
    return `${baseStyles} ${focusStyles} ${defaultStyles}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 mt-10">
          <h1 className="text-4xl font-bold mb-4 relative inline-block" style={{ color: '#80A8D6' }}>
            Contáctanos
            <span className="absolute -bottom-2 left-0 right-0 h-1 transform" style={{ backgroundColor: '#F2BF5D' }}></span>
          </h1>
          <p className="text-xl mt-6" style={{ color: '#80A8D6' }}>
            ¿Tienes un proyecto en mente? Creemos algo increíble juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario de contacto */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 md:p-10 relative border border-gray-800" style={{ backgroundColor: '#1A1A1A', borderColor: 'rgba(128, 168, 214, 0.2)' }}>
            {/* Línea superior decorativa */}
            <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: '#F2BF5D' }}></div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative">
              {/* Form header */}
              <h2 className="text-2xl font-semibold mb-6" style={{ color: '#80A8D6' }}>Envíanos un mensaje</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name field */}
                <div className="relative group">
                  <label className="block text-sm font-medium mb-1 transition-all group-focus-within:text-blue-400" style={{ color: '#FFFFFF' }}>
                    Nombre
                  </label>
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200 
                      ${focusedField === 'name' ? 'text-yellow-400' : 'text-gray-500'}`} 
                      style={focusedField === 'name' ? { color: '#F2BF5D' } : {}} />
                    <input
                      {...register('name')}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`${getInputStyles('name')} pl-12`}
                      placeholder="Tu nombre"
                      style={{ backgroundColor: '#242424', color: '#FFFFFF' }}
                    />
                    <div className={`absolute right-3 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${errors.name ? 'opacity-100' : 'opacity-0'}`}>
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    </div>
                    <div className={`absolute right-3 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${dirtyFields.name && !errors.name ? 'opacity-100' : 'opacity-0'}`}>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                  <div className="h-6">
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400 animate-fadeIn">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email field */}
                <div className="relative group">
                  <label className="block text-sm font-medium mb-1 transition-all group-focus-within:text-blue-400" style={{ color: '#FFFFFF' }}>
                    Email
                  </label>
                  <div className="relative">
                    <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200
                      ${focusedField === 'email' ? 'text-yellow-400' : 'text-gray-500'}`}
                      style={focusedField === 'email' ? { color: '#F2BF5D' } : {}} />
                    <input
                      {...register('email')}
                      type="email"
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`${getInputStyles('email')} pl-12`}
                      placeholder="tu@email.com"
                      style={{ backgroundColor: '#242424', color: '#FFFFFF' }}
                    />
                    <div className={`absolute right-3 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${errors.email ? 'opacity-100' : 'opacity-0'}`}>
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    </div>
                    <div className={`absolute right-3 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${dirtyFields.email && !errors.email ? 'opacity-100' : 'opacity-0'}`}>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                  <div className="h-6">
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400 animate-fadeIn">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Subject field */}
              <div className="relative group">
                <label className="block text-sm font-medium mb-1 transition-all group-focus-within:text-blue-400" style={{ color: '#FFFFFF' }}>
                  Asunto
                </label>
                <div className="relative">
                  <MessageSquare className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200
                    ${focusedField === 'subject' ? 'text-yellow-400' : 'text-gray-500'}`}
                    style={focusedField === 'subject' ? { color: '#F2BF5D' } : {}} />
                  <input
                    {...register('subject')}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className={`${getInputStyles('subject')} pl-12`}
                    placeholder="¿De qué se trata?"
                    style={{ backgroundColor: '#242424', color: '#FFFFFF' }}
                  />
                  <div className={`absolute right-3 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${errors.subject ? 'opacity-100' : 'opacity-0'}`}>
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <div className={`absolute right-3 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${dirtyFields.subject && !errors.subject ? 'opacity-100' : 'opacity-0'}`}>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                </div>
                <div className="h-6">
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400 animate-fadeIn">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message field */}
              <div className="relative group">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium transition-all group-focus-within:text-blue-400" style={{ color: '#FFFFFF' }}>
                    Mensaje
                  </label>
                  <span className={`text-xs transition-colors duration-300 ${characterCount.message < 10 ? 'text-red-400' : 'text-gray-400'}`}>
                    {characterCount.message} caracteres {characterCount.message < 10 ? `(mínimo: 10)` : ''}
                  </span>
                </div>
                <div className="relative">
                  <textarea
                    {...register('message')}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className={`${getInputStyles('message')} resize-none`}
                    placeholder="Tu mensaje aquí..."
                    style={{ backgroundColor: '#242424', color: '#FFFFFF' }}
                  />
                  <div className={`absolute right-3 top-6 transition-opacity duration-300 ${errors.message ? 'opacity-100' : 'opacity-0'}`}>
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <div className={`absolute right-3 top-6 transition-opacity duration-300 ${dirtyFields.message && !errors.message ? 'opacity-100' : 'opacity-0'}`}>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                </div>
                <div className="h-6">
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400 animate-fadeIn">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className={`
                    w-full py-4 px-6 rounded-lg text-white font-medium
                    transition-all duration-300 transform
                    ${(isSubmitting || !isValid) ? 
                      'cursor-not-allowed opacity-70 border border-gray-600' : 
                      'hover:-translate-y-1'
                    }
                    flex items-center justify-center space-x-3 relative overflow-hidden
                  `}
                  style={
                    (isSubmitting || !isValid) ? 
                    { backgroundColor: '#333333', color: '#999999' } : 
                    { backgroundColor: '#F2BF5D', color: '#1A1A1A' }
                  }
                >
                  <span className="relative flex items-center justify-center space-x-3">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Enviando mensaje...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar mensaje</span>
                      </>
                    )}
                  </span>
                </button>
              </div>

              {/* Status messages */}
              <div className="relative h-16">
                {submitStatus === 'success' && (
                  <div className="absolute w-full animate-slideUp">
                    <div className="bg-green-900 text-green-300 p-4 rounded-lg flex items-center justify-between border border-green-700">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">¡Mensaje enviado con éxito!</span>
                      </div>
                      <button 
                        className="text-green-300 hover:text-green-100 transition-colors duration-300"
                        onClick={() => setSubmitStatus('idle')}
                      >
                        <span className="sr-only">Cerrar</span>
                        &times;
                      </button>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="absolute w-full animate-slideUp">
                    <div className="bg-red-900 text-red-300 p-4 rounded-lg flex items-center justify-between border border-red-700">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5" />
                        <span className="font-medium">No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.</span>
                      </div>
                      <button 
                        className="text-red-300 hover:text-red-100 transition-colors duration-300"
                        onClick={() => setSubmitStatus('idle')}
                      >
                        <span className="sr-only">Cerrar</span>
                        &times;
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
          
          {/* Sección de Mapa y Contacto */}
          <div className="flex flex-col space-y-6">
            {/* Mapa de Google */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden h-64 lg:h-80 relative border border-gray-800" style={{ backgroundColor: '#1A1A1A', borderColor: 'rgba(128, 168, 214, 0.2)' }}>
              <div className="absolute inset-0 border border-yellow-500 opacity-30 rounded-lg pointer-events-none z-10" style={{ borderColor: '#F2BF5D' }}></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.2676857821375!2d-60.64740992369567!3d-32.944499471850326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1dc9b6d36d%3A0x97b9e79bdc3c6e09!2sEspa%C3%B1a%20810%2C%20S2000%20Rosario%2C%20Santa%20Fe%2C%20Argentina!5e0!3m2!1ses!2sar!4v1712008169811!5m2!1ses!2sar" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la empresa"
                className="w-full h-full filter grayscale"
              ></iframe>
            </div>
            
            {/* Información de Contacto */}
            <div className="bg-gray-900 rounded-lg shadow-lg p-8 relative border border-gray-800" style={{ backgroundColor: '#1A1A1A', borderColor: 'rgba(128, 168, 214, 0.2)' }}>
              <h2 className="text-2xl font-bold mb-8 flex items-center" style={{ color: '#80A8D6' }}>
                Estamos aquí para ti
                <div className="h-px flex-grow ml-4 rounded-full" style={{ backgroundColor: '#F2BF5D' }}></div>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gray-800 p-3 rounded-lg transition-all duration-300 group-hover:scale-105" style={{ backgroundColor: '#242424' }}>
                    <MapPin className="w-6 h-6" style={{ color: '#F2BF5D' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1" style={{ color: '#80A8D6' }}>Dirección</h3>
                    <p className="text-gray-300" style={{ color: '#FFFFFF' }}>España 810</p>
                    <p className="text-gray-300" style={{ color: '#FFFFFF' }}>Rosario, Santa Fe</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gray-800 p-3 rounded-lg transition-all duration-300 group-hover:scale-105" style={{ backgroundColor: '#242424' }}>
                    <Mail className="w-6 h-6" style={{ color: '#F2BF5D' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1" style={{ color: '#80A8D6' }}>Email</h3>
                    <p className="text-gray-300" style={{ color: '#FFFFFF' }}>info@tuempresa.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gray-800 p-3 rounded-lg transition-all duration-300 group-hover:scale-105" style={{ backgroundColor: '#242424' }}>
                    <Phone className="w-6 h-6" style={{ color: '#F2BF5D' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1" style={{ color: '#80A8D6' }}>Teléfono</h3>
                    <p className="text-gray-300" style={{ color: '#FFFFFF' }}>+54 341 456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gray-800 p-3 rounded-lg transition-all duration-300 group-hover:scale-105" style={{ backgroundColor: '#242424' }}>
                    <Clock className="w-6 h-6" style={{ color: '#F2BF5D' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1" style={{ color: '#80A8D6' }}>Horario</h3>
                    <p className="text-gray-300" style={{ color: '#FFFFFF' }}>Lun a Vie: 9:00 - 17:00</p>
                  </div>
                </div>
              </div>
              
              {/* Redes Sociales */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="font-semibold text-lg mb-4" style={{ color: '#80A8D6' }}>Síguenos en redes</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110" style={{ backgroundColor: '#242424' }}>
                    <Instagram className="w-5 h-5" style={{ color: '#F2BF5D' }} />
                  </a>
                  <a href="#" className="bg-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110" style={{ backgroundColor: '#242424' }}>
                    <Facebook className="w-5 h-5" style={{ color: '#F2BF5D' }} />
                  </a>
                  <a href="#" className="bg-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110" style={{ backgroundColor: '#242424' }}>
                    <Twitter className="w-5 h-5" style={{ color: '#F2BF5D' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};