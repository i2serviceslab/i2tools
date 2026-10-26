import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'api-dev-middleware',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url === '/api/health' && req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ status: 'ok', dev: true, resendConfigured: Boolean(process.env.RESEND_API_KEY) }));
            return;
          }

          if (req.url === '/api/contact' && req.method === 'POST') {
            let bodyStr = '';
            req.on('data', (chunk) => {
              bodyStr += chunk;
            });

            req.on('end', async () => {
              try {
                const body = JSON.parse(bodyStr || '{}');
                console.log('[Dev Server /api/contact] Recibido:', body);

                const apiKey = process.env.RESEND_API_KEY;
                if (!apiKey) {
                  console.log('[Dev Server /api/contact] Simulación exitosa (RESEND_API_KEY no configurada localmente)');
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({
                    success: true,
                    simulated: true,
                    message: 'Consulta recibida en entorno de desarrollo.'
                  }));
                  return;
                }

                // If apiKey is available in dev environment
                const { Resend } = await import('resend');
                const resend = new Resend(apiKey);
                const targetEmail = process.env.CONTACT_NOTIFICATION_EMAIL || 'info@i2services.co';

                const { error } = await resend.emails.send({
                  from: process.env.RESEND_FROM_EMAIL || 'i2 Services Web <contacto@i2services.co>',
                  to: [targetEmail],
                  replyTo: body.email,
                  subject: `[Dev Web] Nueva Solicitud: ${body.company} - ${body.name}`,
                  html: `<h3>Nueva consulta desde la web (DEV)</h3><p><strong>Nombre:</strong> ${body.name}</p><p><strong>Empresa:</strong> ${body.company}</p><p><strong>Email:</strong> ${body.email}</p><p><strong>Teléfono:</strong> ${body.phone}</p><p><strong>Mensaje:</strong> ${body.message}</p>`
                });

                if (error) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, error: error.message }));
                  return;
                }

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, message: 'Enviado vía Resend' }));
              } catch (err: any) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, error: err.message || 'Error en middleware dev' }));
              }
            });
            return;
          }

          next();
        });
      }
    }
  ],
  server: {
    host: true,
    allowedHosts: true,
  },
});
