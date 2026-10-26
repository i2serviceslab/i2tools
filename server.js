import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 80;

// Middleware
app.use(compression());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Security Headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Healthcheck endpoint for Docker / EasyPanel
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'i2-services-web',
    timestamp: new Date().toISOString(),
    resendConfigured: Boolean(process.env.RESEND_API_KEY)
  });
});

// ==============================================================
// Transactional Contact Form Endpoint via Resend
// ==============================================================
app.post('/api/contact', async (req, res) => {
  const { name, company, email, phone, message } = req.body || {};

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Por favor complete todos los campos requeridos (nombre, correo y mensaje).'
    });
  }

  const cleanName = String(name).trim();
  const cleanCompany = String(company || 'No especificada').trim();
  const cleanEmail = String(email).trim().toLowerCase();
  const cleanPhone = String(phone || 'No especificado').trim();
  const cleanMessage = String(message).trim();

  console.log(`[i2 Contact] Recibida nueva consulta de: ${cleanName} (${cleanCompany}) - ${cleanEmail}`);

  const apiKey = process.env.RESEND_API_KEY;
  const targetEmail = process.env.CONTACT_NOTIFICATION_EMAIL || 'info@i2services.co';
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'i2 Services Web <contacto@i2services.co>';

  // Check if Resend API key is available
  if (!apiKey) {
    console.warn('[i2 Contact] AVISO: RESEND_API_KEY no está configurada aún en las variables de entorno.');
    console.warn(`[i2 Contact Payload Guardado]:\n  Nombre: ${cleanName}\n  Empresa: ${cleanCompany}\n  Email: ${cleanEmail}\n  Teléfono: ${cleanPhone}\n  Mensaje: ${cleanMessage}`);
    
    return res.json({
      success: true,
      pendingDns: true,
      message: 'Solicitud recibida correctamente en el servidor (Modo preparación DNS).'
    });
  }

  const resend = new Resend(apiKey);

  try {
    // 1. Email notification to i2 Services team
    const teamHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #08172E; color: #F8FAFC; margin: 0; padding: 24px; }
    .card { background-color: #0E223D; border: 1px solid #1E3A5F; border-radius: 12px; max-width: 600px; margin: 0 auto; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    .header { background: linear-gradient(135deg, #0A1B35 0%, #08172E 100%); padding: 24px; border-bottom: 2px solid #01BBDC; }
    .badge { display: inline-block; background: rgba(1, 187, 220, 0.15); border: 1px solid #01BBDC; color: #01BBDC; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 6px; }
    .title { color: #FFFFFF; font-size: 20px; font-weight: 800; margin: 12px 0 4px 0; }
    .subtitle { color: #94A3B8; font-size: 13px; margin: 0; }
    .content { padding: 24px; }
    .field { margin-bottom: 16px; }
    .label { font-size: 11px; font-weight: 700; color: #01BBDC; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
    .value { font-size: 15px; color: #FFFFFF; background: #08172E; padding: 10px 14px; border-radius: 8px; border: 1px solid #1E293B; word-break: break-word; }
    .message-box { font-size: 14px; line-height: 1.6; color: #E2E8F0; background: #08172E; padding: 14px; border-radius: 8px; border: 1px solid #1E293B; white-space: pre-wrap; }
    .cta-btn { display: inline-block; background: #01BBDC; color: #08172E; font-size: 13px; font-weight: 800; text-decoration: none; padding: 12px 20px; border-radius: 8px; margin-top: 10px; text-transform: uppercase; letter-spacing: 0.5px; }
    .footer { padding: 16px 24px; background: #08172E; border-top: 1px solid #1E293B; text-align: center; font-size: 12px; color: #64748B; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="badge">Nuevo Contacto Web</div>
      <h1 class="title">${cleanCompany}</h1>
      <p class="subtitle">Solicitud recibida a través del portal oficial i2services.co</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Contacto / Solicitante</div>
        <div class="value"><strong>${cleanName}</strong></div>
      </div>
      <div class="field">
        <div class="label">Compañía Minera / Empresa</div>
        <div class="value">${cleanCompany}</div>
      </div>
      <div class="field">
        <div class="label">Correo Electrónico Corporativo</div>
        <div class="value"><a href="mailto:${cleanEmail}" style="color: #38BDF8; text-decoration: none;">${cleanEmail}</a></div>
      </div>
      <div class="field">
        <div class="label">Teléfono / WhatsApp</div>
        <div class="value">
          ${cleanPhone} 
          ${cleanPhone !== 'No especificado' ? `&nbsp;•&nbsp; <a href="https://wa.me/${cleanPhone.replace(/[^0-9]/g, '')}" style="color: #38BDF8; text-decoration: none;">Abrir en WhatsApp →</a>` : ''}
        </div>
      </div>
      <div class="field">
        <div class="label">Detalles de la Operación / Necesidad</div>
        <div class="message-box">${cleanMessage}</div>
      </div>
      <div style="text-align: center; margin-top: 24px;">
        <a href="mailto:${cleanEmail}?subject=Re:%20Contacto%20i2%20Services%20S.A.S.%20-%20${encodeURIComponent(cleanCompany)}" class="cta-btn">Responder Directamente al Cliente →</a>
      </div>
    </div>
    <div class="footer">
      i2 Services S.A.S. • Torre Davivienda Of. 610, El Poblado, Medellín • Formulario Web
    </div>
  </div>
</body>
</html>
`;

    const { error: teamError } = await resend.emails.send({
      from: fromEmail,
      to: [targetEmail],
      replyTo: cleanEmail,
      subject: `[i2 Services Web] Nueva Solicitud: ${cleanCompany} - ${cleanName}`,
      html: teamHtml
    });

    if (teamError) {
      console.error('[i2 Contact] Error enviando correo al equipo:', teamError);
      return res.status(500).json({
        success: false,
        error: 'Hubo un inconveniente al enviar su consulta. Por favor intente nuevamente o escríbanos a info@i2services.co'
      });
    }

    // 2. Automated Confirmation Receipt to the prospect
    try {
      const clientHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #08172E; color: #F8FAFC; margin: 0; padding: 24px; }
    .card { background-color: #0E223D; border: 1px solid #1E3A5F; border-radius: 12px; max-width: 580px; margin: 0 auto; overflow: hidden; }
    .header { background: linear-gradient(135deg, #0A1B35 0%, #08172E 100%); padding: 28px 24px; border-bottom: 2px solid #01BBDC; text-align: center; }
    .logo-text { font-size: 22px; font-weight: 900; color: #FFFFFF; letter-spacing: -0.5px; }
    .logo-text span { color: #01BBDC; }
    .content { padding: 32px 24px; font-size: 15px; line-height: 1.6; color: #E2E8F0; }
    .highlight { color: #01BBDC; font-weight: 700; }
    .box { background: #08172E; border: 1px solid #1E293B; border-radius: 8px; padding: 18px; margin: 20px 0; }
    .footer { padding: 20px; background: #08172E; border-top: 1px solid #1E293B; text-align: center; font-size: 12px; color: #64748B; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="logo-text">i2 <span>Services S.A.S.</span></div>
      <p style="color: #94A3B8; font-size: 13px; margin: 6px 0 0 0;">Exploración y Asesoría Estratégica</p>
    </div>
    <div class="content">
      <p>Estimado(a) <strong>${cleanName}</strong>,</p>
      
      <p>Hemos recibido satisfactoriamente su solicitud de información correspondiente a <strong>${cleanCompany}</strong> a través de nuestro sitio web.</p>
      
      <div class="box">
        <p style="margin: 0; font-size: 13px; color: #94A3B8;">Resumen de su solicitud:</p>
        <p style="margin: 8px 0 0 0; color: #FFFFFF; font-style: italic;">"${cleanMessage}"</p>
      </div>

      <p>Nuestro equipo directivo en Medellín evaluará su requerimiento y se pondrá en contacto con usted a la mayor brevedad posible para coordinar una reunión inicial o resolver sus inquietudes operativas.</p>

      <p style="margin-top: 24px;">Atentamente,</p>
      <p style="margin: 0;"><strong>Gerencia de Operaciones</strong><br><span style="color: #94A3B8; font-size: 13px;">i2 Services S.A.S.</span></p>
    </div>
    <div class="footer">
      Cra. 43A #1 Sur 188, Of. 610 • Torre Davivienda, El Poblado, Medellín<br>
      Tel: +57 323 375 0471 • <a href="https://i2services.co" style="color: #01BBDC; text-decoration: none;">i2services.co</a>
    </div>
  </div>
</body>
</html>
`;

      await resend.emails.send({
        from: fromEmail,
        to: [cleanEmail],
        subject: `Hemos recibido su solicitud | i2 Services S.A.S.`,
        html: clientHtml
      });
    } catch (clientErr) {
      console.warn('[i2 Contact] No se pudo enviar acuse al cliente (no crítico):', clientErr);
    }

    return res.json({
      success: true,
      message: 'Consulta enviada exitosamente.'
    });

  } catch (err) {
    console.error('[i2 Contact] Error inesperado en el servidor:', err);
    return res.status(500).json({
      success: false,
      error: 'Error interno al procesar el mensaje. Por favor intente más tarde.'
    });
  }
});

// ==============================================================
// Friendly redirects for the 3 official i2 tools
// ==============================================================
app.get('/firmas', (req, res) => res.redirect(301, '/firmas/'));
app.get('/generador-firmas', (req, res) => res.redirect(301, '/email-signatures/generador-firmas.html'));
app.get('/vacantes', (req, res) => res.redirect(301, '/vacantes/'));
app.get('/generador-vacantes', (req, res) => res.redirect(301, '/generador-vacantes.html'));

// Serve static assets from Vite's dist directory
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath, {
  maxAge: '30d',
  immutable: true,
  setHeaders: (res, filePath) => {
    // Don't cache index.html
    if (filePath.endsWith('index.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
  }
}));

// SPA Fallback for React router / client routes (Express 5 compatible)
app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start listening
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ i2 Services Production Server running on http://0.0.0.0:${PORT}`);
  console.log(`  Resend Integration: ${process.env.RESEND_API_KEY ? 'ACTIVE' : 'STANDBY (Awaiting RESEND_API_KEY)'}`);
});
