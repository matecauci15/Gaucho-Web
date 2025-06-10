// server.js - Backend con Express y SendGrid + Firma personalizada
const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configurar SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware de seguridad
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));

// Rate limiting - máximo 5 emails por hora por IP
const emailRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 5,
  message: {
    error: 'Demasiados emails enviados. Intenta nuevamente en una hora.',
    code: 'RATE_LIMIT_EXCEEDED'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Función para generar la firma HTML
const getHtmlSignature = () => {
  return `
    <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #F2BF5D;">
      <table style="font-family: Arial, sans-serif; font-size: 14px;">
        <tr>
          <td style="padding-right: 20px; vertical-align: top;">
            <!-- Aquí puedes agregar tu logo si tienes uno -->
            <div style="width: 80px; height: 80px; background-color: #F2BF5D; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <span style="color: #1a1a1a; font-weight: bold; font-size: 24px;">GL</span>
            </div>
          </td>
          <td style="vertical-align: top;">
            <div style="color: #333;">
              <p style="margin: 0 0 5px 0; font-weight: bold; font-size: 16px; color: #1a1a1a;">
                [Tu Nombre]
              </p>
              <p style="margin: 0 0 5px 0; color: #80A8D6; font-weight: 600;">
                [Tu Cargo] - GauchoLab
              </p>
              <p style="margin: 0 0 3px 0; color: #666;">
                📧 info@gaucholab.com
              </p>
              <p style="margin: 0 0 3px 0; color: #666;">
                📱 +54 9 341 397 7076
              </p>
              <p style="margin: 0 0 3px 0; color: #666;">
                📍 España 810, Rosario, Santa Fe
              </p>
              <p style="margin: 10px 0 0 0;">
                <a href="https://gaucholab.com" style="color: #80A8D6; text-decoration: none; font-weight: 600;">
                  🌐 gaucholab.com
                </a>
              </p>
            </div>
          </td>
        </tr>
      </table>
    </div>
  `;
};

// Función para generar la firma de texto plano
const getTextSignature = () => {
  return `
    
---
[GauchoLab]
📧 info@gaucholab.com
📱 +54 9 341 397 7076
📍 España 810, Rosario, Santa Fe
🌐 gaucholab.com
  `;
};

// Validación de datos
const validateContactForm = (data) => {
  const errors = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push('El nombre debe tener al menos 2 caracteres');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Email inválido');
  }
  
  if (!data.subject || data.subject.trim().length < 5) {
    errors.push('El asunto debe tener al menos 5 caracteres');
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.push('El mensaje debe tener al menos 10 caracteres');
  }
  
  return errors;
};

// Sanitizar datos
const sanitizeData = (data) => {
  return {
    name: data.name.trim().substring(0, 100),
    email: data.email.trim().toLowerCase().substring(0, 100),
    subject: data.subject.trim().substring(0, 200),
    message: data.message.trim().substring(0, 2000)
  };
};

// Endpoint para enviar emails
app.post('/api/contact', emailRateLimit, async (req, res) => {
  try {
    // Validar datos
    const validationErrors = validateContactForm(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        errors: validationErrors
      });
    }

    // Sanitizar datos
    const { name, email, subject, message } = sanitizeData(req.body);

    // Configurar el email para GauchoLab
    const emailToCompany = {
      to: 'info@gaucholab.com',
      from: {
        email: process.env.SENDGRID_FROM_EMAIL, // Tu email verificado en SendGrid
        name: 'Formulario de Contacto - GauchoLab'
      },
      replyTo: email,
      subject: `[Contacto Web] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: #1a1a1a; padding: 30px; border-radius: 10px; border-top: 4px solid #F2BF5D;">
            <h2 style="color: #80A8D6; margin-bottom: 20px;">Nuevo mensaje desde el sitio web</h2>
            
            <div style="background-color: #242424; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #F2BF5D; margin-bottom: 15px;">Información del contacto:</h3>
              <p style="color: #ffffff; margin: 8px 0;"><strong>Nombre:</strong> ${name}</p>
              <p style="color: #ffffff; margin: 8px 0;"><strong>Email:</strong> ${email}</p>
              <p style="color: #ffffff; margin: 8px 0;"><strong>Asunto:</strong> ${subject}</p>
            </div>
            
            <div style="background-color: #242424; padding: 20px; border-radius: 8px;">
              <h3 style="color: #F2BF5D; margin-bottom: 15px;">Mensaje:</h3>
              <p style="color: #ffffff; line-height: 1.6; white-space: pre-line;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #333;">
              <p style="color: #999; font-size: 12px;">
                Este mensaje fue enviado desde el formulario de contacto de gaucholab.com<br>
                Fecha: ${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
        Nuevo mensaje desde el sitio web
        
        Información del contacto:
        Nombre: ${name}
        Email: ${email}
        Asunto: ${subject}
        
        Mensaje:
        ${message}
        
        ---
        Este mensaje fue enviado desde el formulario de contacto de gaucholab.com
        Fecha: ${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}
      `
    };

    // Email de confirmación para el cliente (CON FIRMA)
    const emailToClient = {
      to: email,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL,
        name: 'GauchoLab'
      },
      subject: 'Hemos recibido tu mensaje - GauchoLab',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: #1a1a1a; padding: 30px; border-radius: 10px; border-top: 4px solid #F2BF5D;">
            <h2 style="color: #80A8D6; margin-bottom: 20px;">¡Gracias por contactarnos!</h2>
            
            <p style="color: #ffffff; line-height: 1.6; margin-bottom: 20px;">
              Hola ${name},
            </p>
            
            <p style="color: #ffffff; line-height: 1.6; margin-bottom: 20px;">
              Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible. 
              Nuestro equipo revisará tu consulta y te responderemos dentro de las próximas 24-48 horas.
            </p>
            
            <div style="background-color: #242424; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #F2BF5D; margin-bottom: 15px;">Resumen de tu mensaje:</h3>
              <p style="color: #ffffff; margin: 8px 0;"><strong>Asunto:</strong> ${subject}</p>
              <p style="color: #ffffff; margin: 8px 0;"><strong>Mensaje:</strong></p>
              <p style="color: #ffffff; line-height: 1.6; white-space: pre-line; font-style: italic;">${message}</p>
            </div>
            
            <p style="color: #ffffff; line-height: 1.6; margin-bottom: 20px;">
              Si tienes alguna pregunta urgente, también puedes contactarnos directamente:
            </p>
            
            <div style="background-color: #242424; padding: 15px; border-radius: 8px;">
              <p style="color: #ffffff; margin: 5px 0;">📧 <strong>Email:</strong> info@gaucholab.com</p>
              <p style="color: #ffffff; margin: 5px 0;">📱 <strong>Teléfono:</strong> +54 9 341 397 7076</p>
              <p style="color: #ffffff; margin: 5px 0;">📍 <strong>Dirección:</strong> España 810, Rosario, Santa Fe</p>
            </div>
            
            <p style="color: #ffffff; line-height: 1.6; margin-top: 20px;">
              ¡Esperamos poder ayudarte pronto!
            </p>
            
            <!-- FIRMA PERSONALIZADA -->
            ${getHtmlSignature()}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
              <p style="color: #999; font-size: 12px; text-align: center;">
                Este es un mensaje automático. Por favor, no respondas a este email.
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
        ¡Gracias por contactarnos!
        
        Hola ${name},
        
        Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
        
        Resumen de tu mensaje:
        Asunto: ${subject}
        Mensaje: ${message}
        
        Contacto directo:
        Email: info@gaucholab.com
        Teléfono: +54 9 341 397 7076
        Dirección: España 810, Rosario, Santa Fe
        
        ¡Esperamos poder ayudarte pronto!
        ${getTextSignature()}
        
        ---
        Este es un mensaje automático. Por favor, no respondas a este email.
      `
    };

    // Enviar ambos emails
    await Promise.all([
      sgMail.send(emailToCompany),
      sgMail.send(emailToClient)
    ]);

    console.log(`Email enviado exitosamente desde ${email} - Asunto: ${subject}`);

    res.status(200).json({
      success: true,
      message: 'Mensaje enviado exitosamente'
    });

  } catch (error) {
    console.error('Error al enviar email:', error);
    
    // Log más detallado del error
    if (error.response) {
      console.error('SendGrid Error:', error.response.body);
    }
    
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor. Por favor, intenta nuevamente.',
      code: 'INTERNAL_ERROR'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'GauchoLab Contact API'
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint no encontrado'
  });
});

// Manejo global de errores
app.use((error, req, res, next) => {
  console.error('Error no manejado:', error);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
  console.log(`SendGrid configurado: ${process.env.SENDGRID_API_KEY ? 'Sí' : 'No'}`);
});