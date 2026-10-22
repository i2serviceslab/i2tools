#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generación de Firmas Corporativas i2 Services S.A.S.
Diseño Refinado y Minimalista:
- Logotipo oficial en blanco puro con punto cian y eslogan 'YOUR GROUND, OUR EXPERIENCE'.
- Sin barra de títulos/solicitudes inferior (eliminada por solicitud).
- Íconos gráficos reales (móvil, teléfono, email, web, ubicación).
- Bordes suaves y elegantes (rgba(113, 140, 193, 0.22)).
"""

import base64
import json
import os

with open('public/i2-services-logo-white.png', 'rb') as f:
    logo_white_b64 = base64.b64encode(f.read()).decode('utf-8')

logo_white_uri = f"data:image/png;base64,{logo_white_b64}"

with open('/tmp/icons_b64.json', 'r') as f:
    icons = json.load(f)

icon_mobile_uri = f"data:image/png;base64,{icons['mobile']}"
icon_phone_uri  = f"data:image/png;base64,{icons['phone']}"
icon_email_uri  = f"data:image/png;base64,{icons['email']}"
icon_web_uri    = f"data:image/png;base64,{icons['web']}"
icon_pin_uri    = f"data:image/png;base64,{icons['pin']}"

with open('public/animations/particle-wave.json', 'r') as f:
    particle_wave_json_str = f.read().strip()

print("All asset data URIs prepared.")

# -------------------------------------------------------------------------
# 1. FIRMA ESTÁTICA JOHN DOE (REFINED MINIMALIST CARD - SIN BARRA INFERIOR)
# -------------------------------------------------------------------------
firma_estatica_html = f'''<!-- =======================================================================
  i2 SERVICES S.A.S. - FIRMA DE CORREO CORPORATIVO OFICIAL
  ESTILO: REFINED CORPORATE CARD (Idéntico al sitio web de i2 Services)
  ======================================================================= -->
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#08172E" style="background-color: #08172E; border: 1px solid rgba(113, 140, 193, 0.22); border-radius: 12px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; font-size: 13px; line-height: 1.4; color: #FFFFFF; max-width: 580px; width: 100%; border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
  <tr>
    <td style="padding: 22px 26px;">
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
        <tr>
          <!-- COLUMNA 1: LOGOTIPO EN BLANCO Y ESLOGAN OFICIAL -->
          <td valign="middle" align="center" style="padding-right: 24px; vertical-align: middle; width: 150px; text-align: center;">
            <a href="https://i2services.co" target="_blank" style="text-decoration: none; display: block;">
              <img src="{logo_white_uri}" alt="i2 Services S.A.S." width="138" style="display: block; width: 138px; max-width: 138px; height: auto; border: 0; margin: 0 auto;" />
            </a>
            <!-- ESLOGAN OFICIAL EN CIAN -->
            <div style="font-size: 8.5px; font-weight: 700; color: #01BBDC; letter-spacing: 1.2px; text-transform: uppercase; margin-top: 10px; font-family: 'Segoe UI', Arial, sans-serif;">
              YOUR GROUND, OUR EXPERIENCE
            </div>
          </td>

          <!-- SEPARADOR VERTICAL SUAVE -->
          <td width="1" bgcolor="#1E3352" style="width: 1px; background-color: rgba(113, 140, 193, 0.2); padding: 0; font-size: 1px; line-height: 1px;">&nbsp;</td>

          <!-- COLUMNA 2: DATOS DEL REMITENTE -->
          <td valign="top" style="padding-left: 24px; vertical-align: top;">
            <!-- NOMBRE -->
            <div style="font-size: 18px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.2px; margin: 0 0 3px 0; font-family: 'Segoe UI', Arial, sans-serif;">
              John Doe
            </div>

            <!-- CARGO -->
            <div style="font-size: 11px; font-weight: 700; color: #01BBDC; text-transform: uppercase; letter-spacing: 0.8px; margin: 0 0 14px 0; font-family: 'Segoe UI', Arial, sans-serif;">
              Director de Operaciones &nbsp;|&nbsp; Exploración Estratégica
            </div>

            <!-- TABLA DE CONTACTO CON ÍCONOS REALES -->
            <table cellpadding="0" cellspacing="0" border="0" style="font-size: 11px; line-height: 1.5; color: #CBD5E1; font-family: 'Segoe UI', Arial, sans-serif;">
              <!-- MÓVIL / WHATSAPP -->
              <tr>
                <td style="width: 20px; padding: 2px 0; vertical-align: middle;">
                  <img src="{icon_mobile_uri}" width="14" height="14" alt="Móvil" style="display: block; width: 14px; height: 14px; border: 0;" />
                </td>
                <td style="padding: 2px 0 2px 6px; vertical-align: middle;">
                  <a href="tel:+573001234567" style="color: #FFFFFF; text-decoration: none; font-weight: 500;">+57 300 123 4567</a>
                </td>
              </tr>
              <!-- TELÉFONO FIJO -->
              <tr>
                <td style="width: 20px; padding: 2px 0; vertical-align: middle;">
                  <img src="{icon_phone_uri}" width="14" height="14" alt="Tel" style="display: block; width: 14px; height: 14px; border: 0;" />
                </td>
                <td style="padding: 2px 0 2px 6px; vertical-align: middle;">
                  <a href="tel:+576044445566" style="color: #CBD5E1; text-decoration: none;">+57 (604) 444 5566</a>
                </td>
              </tr>
              <!-- CORREO ELECTRÓNICO -->
              <tr>
                <td style="width: 20px; padding: 2px 0; vertical-align: middle;">
                  <img src="{icon_email_uri}" width="14" height="14" alt="Email" style="display: block; width: 14px; height: 14px; border: 0;" />
                </td>
                <td style="padding: 2px 0 2px 6px; vertical-align: middle;">
                  <a href="mailto:john.doe@i2services.co" style="color: #01BBDC; text-decoration: none; font-weight: 500;">john.doe@i2services.co</a>
                </td>
              </tr>
              <!-- SITIO WEB -->
              <tr>
                <td style="width: 20px; padding: 2px 0; vertical-align: middle;">
                  <img src="{icon_web_uri}" width="14" height="14" alt="Web" style="display: block; width: 14px; height: 14px; border: 0;" />
                </td>
                <td style="padding: 2px 0 2px 6px; vertical-align: middle;">
                  <a href="https://i2services.co" target="_blank" style="color: #FFFFFF; text-decoration: none; font-weight: 600;">i2services.co</a>
                </td>
              </tr>
              <!-- SEDE -->
              <tr>
                <td style="width: 20px; padding: 2px 0; vertical-align: middle;">
                  <img src="{icon_pin_uri}" width="14" height="14" alt="Ubicación" style="display: block; width: 14px; height: 14px; border: 0;" />
                </td>
                <td style="padding: 2px 0 2px 6px; vertical-align: middle; color: #94A3B8; font-size: 10px;">
                  Cra. 43A # 1-50, San Fernando Plaza, Torre 2, Medellín, Colombia
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<!-- AVISO LEGAL DISCRETO -->
<table cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; width: 100%; margin-top: 8px;">
  <tr>
    <td style="padding: 4px 6px;">
      <p style="font-size: 8.5px; line-height: 1.35; color: #64748B; margin: 0; font-family: Arial, sans-serif; text-align: justify;">
        <strong style="color: #475569;">AVISO DE CONFIDENCIALIDAD:</strong> La información contenida en este mensaje y sus anexos es confidencial y para uso exclusivo del destinatario. Cualquier divulgación, copia o retención no autorizada está prohibida bajo la legislación aplicable. i2 Services S.A.S.
      </p>
    </td>
  </tr>
</table>
'''

with open('public/email-signatures/firma-ejemplo-estatica.html', 'w', encoding='utf-8') as f:
    f.write(firma_estatica_html)
print("Updated firma-ejemplo-estatica.html without bottom metrics bar.")

# -------------------------------------------------------------------------
# 2. FIRMA DINÁMICA M365 (REFINED CORPORATE CARD - SIN BARRA INFERIOR)
# -------------------------------------------------------------------------
firma_m365_html = f'''<!-- =======================================================================
  i2 SERVICES S.A.S. - REGLA CENTRALIZADA DE FLUJO DE CORREO MICROSOFT 365
  ESTILO: REFINED CORPORATE CARD (Idéntico al sitio web de i2 Services)
  ======================================================================= -->
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#08172E" style="background-color: #08172E; border: 1px solid rgba(113, 140, 193, 0.22); border-radius: 12px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; font-size: 13px; line-height: 1.4; color: #FFFFFF; max-width: 580px; width: 100%; border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
  <tr>
    <td style="padding: 22px 26px;">
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
        <tr>
          <!-- COLUMNA 1: LOGOTIPO EN BLANCO Y ESLOGAN OFICIAL -->
          <td valign="middle" align="center" style="padding-right: 24px; vertical-align: middle; width: 150px; text-align: center;">
            <a href="https://i2services.co" target="_blank" style="text-decoration: none; display: block;">
              <img src="{logo_white_uri}" alt="i2 Services S.A.S." width="138" style="display: block; width: 138px; max-width: 138px; height: auto; border: 0; margin: 0 auto;" />
            </a>
            <div style="font-size: 8.5px; font-weight: 700; color: #01BBDC; letter-spacing: 1.2px; text-transform: uppercase; margin-top: 10px; font-family: 'Segoe UI', Arial, sans-serif;">
              YOUR GROUND, OUR EXPERIENCE
            </div>
          </td>

          <!-- SEPARADOR VERTICAL SUAVE -->
          <td width="1" bgcolor="#1E3352" style="width: 1px; background-color: rgba(113, 140, 193, 0.2); padding: 0; font-size: 1px; line-height: 1px;">&nbsp;</td>

          <!-- COLUMNA 2: ATRIBUTOS DINÁMICOS DE M365 -->
          <td valign="top" style="padding-left: 24px; vertical-align: top;">
            <!-- NOMBRE -->
            <div style="font-size: 18px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.2px; margin: 0 0 3px 0; font-family: 'Segoe UI', Arial, sans-serif;">
              %%DisplayName%%
            </div>

            <!-- CARGO Y DEPARTAMENTO -->
            <div style="font-size: 11px; font-weight: 700; color: #01BBDC; text-transform: uppercase; letter-spacing: 0.8px; margin: 0 0 14px 0; font-family: 'Segoe UI', Arial, sans-serif;">
              %%Title%%%%#Department%% &nbsp;|&nbsp; %%Department%%%%/Department%%
            </div>

            <!-- TABLA DE CONTACTO CON ÍCONOS REALES -->
            <table cellpadding="0" cellspacing="0" border="0" style="font-size: 11px; line-height: 1.5; color: #CBD5E1; font-family: 'Segoe UI', Arial, sans-serif;">
              <tr>
                <td style="width: 20px; padding: 2px 0; vertical-align: middle;">
                  <img src="{icon_mobile_uri}" width="14" height="14" alt="Móvil" style="display: block; width: 14px; height: 14px; border: 0;" />
                </td>
                <td style="padding: 2px 0 2px 6px; vertical-align: middle;">
                  <a href="tel:%%MobileNumber%%" style="color: #FFFFFF; text-decoration: none; font-weight: 500;">%%MobileNumber%%</a>
                </td>
              </tr>
              <tr>
                <td style="width: 20px; padding: 2px 0; vertical-align: middle;">
                  <img src="{icon_phone_uri}" width="14" height="14" alt="Tel" style="display: block; width: 14px; height: 14px; border: 0;" />
                </td>
                <td style="padding: 2px 0 2px 6px; vertical-align: middle;">
                  <a href="tel:%%PhoneNumber%%" style="color: #CBD5E1; text-decoration: none;">%%PhoneNumber%%</a>
                </td>
              </tr>
              <tr>
                <td style="width: 20px; padding: 2px 0; vertical-align: middle;">
                  <img src="{icon_email_uri}" width="14" height="14" alt="Email" style="display: block; width: 14px; height: 14px; border: 0;" />
                </td>
                <td style="padding: 2px 0 2px 6px; vertical-align: middle;">
                  <a href="mailto:%%Email%%" style="color: #01BBDC; text-decoration: none; font-weight: 500;">%%Email%%</a>
                </td>
              </tr>
              <tr>
                <td style="width: 20px; padding: 2px 0; vertical-align: middle;">
                  <img src="{icon_web_uri}" width="14" height="14" alt="Web" style="display: block; width: 14px; height: 14px; border: 0;" />
                </td>
                <td style="padding: 2px 0 2px 6px; vertical-align: middle;">
                  <a href="https://i2services.co" target="_blank" style="color: #FFFFFF; text-decoration: none; font-weight: 600;">i2services.co</a>
                </td>
              </tr>
              <tr>
                <td style="width: 20px; padding: 2px 0; vertical-align: middle;">
                  <img src="{icon_pin_uri}" width="14" height="14" alt="Ubicación" style="display: block; width: 14px; height: 14px; border: 0;" />
                </td>
                <td style="padding: 2px 0 2px 6px; vertical-align: middle; color: #94A3B8; font-size: 10px;">
                  Cra. 43A # 1-50, San Fernando Plaza, Torre 2, Medellín, Colombia
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<table cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; width: 100%; margin-top: 8px;">
  <tr>
    <td style="padding: 4px 6px;">
      <p style="font-size: 8.5px; line-height: 1.35; color: #64748B; margin: 0; font-family: Arial, sans-serif; text-align: justify;">
        <strong style="color: #475569;">AVISO DE CONFIDENCIALIDAD:</strong> La información contenida en este mensaje y sus anexos es confidencial y para uso exclusivo del destinatario. Cualquier divulgación, copia o retención no autorizada está prohibida bajo la legislación aplicable. i2 Services S.A.S.
      </p>
    </td>
  </tr>
</table>
'''

with open('public/email-signatures/firma-m365-dinamica.html', 'w', encoding='utf-8') as f:
    f.write(firma_m365_html)
print("Updated firma-m365-dinamica.html without bottom metrics bar.")

# -------------------------------------------------------------------------
# 3. GENERADOR DE FIRMAS WEB (SIN BARRA INFERIOR)
# -------------------------------------------------------------------------
generador_html = f'''<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generador de Firmas Corporativas - i2 Services S.A.S.</title>
  <link rel="icon" type="image/png" href="{logo_white_uri}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <script src="lottie.min.js"></script>
  <script>if (typeof lottie === 'undefined') {{ document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"><\\/script>'); }}</script>
  <style>
    :root {{
      --navy: #08172E;
      --navy-dark: #050E1D;
      --navy-card: #0D1F3C;
      --cyan: #01BBDC;
      --cyan-light: #5BE2F8;
      --slate: #718CC1;
      --border: rgba(113, 140, 193, 0.2);
      --text-light: #F8FAFC;
      --text-muted: #94A3B8;
    }}

    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}

    body {{
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      background: radial-gradient(circle at 10% 20%, #0A1E3D 0%, #050E1D 90%);
      color: var(--text-light);
      min-height: 100vh;
      padding: 30px 20px;
    }}

    .container {{
      max-width: 1240px;
      margin: 0 auto;
    }}

    header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 24px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 30px;
      flex-wrap: wrap;
      gap: 16px;
    }}

    .brand {{
      display: flex;
      align-items: center;
      gap: 16px;
    }}

    .brand img {{
      height: 38px;
      width: auto;
    }}

    .brand-title h1 {{
      font-size: 20px;
      font-weight: 800;
      letter-spacing: -0.3px;
      color: #fff;
    }}

    .brand-title p {{
      font-size: 13px;
      color: var(--cyan);
      font-weight: 600;
    }}

    .badge-doc {{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(1, 187, 220, 0.12);
      border: 1px solid rgba(1, 187, 220, 0.3);
      color: var(--cyan);
      padding: 9px 18px;
      border-radius: 9999px;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.2s;
    }}

    .badge-doc:hover {{
      background: rgba(1, 187, 220, 0.22);
      transform: translateY(-1px);
    }}

    .tabs {{
      display: flex;
      gap: 10px;
      margin-bottom: 25px;
    }}

    .tab-btn {{
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 10px 22px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }}

    .tab-btn.active {{
      background: var(--cyan);
      color: var(--navy-dark);
      border-color: var(--cyan);
    }}

    .grid-layout {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }}

    @media (max-width: 1024px) {{
      .grid-layout {{
        grid-template-columns: 1fr;
      }}
    }}

    .card {{
      background: var(--navy-card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }}

    .card-title {{
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }}

    .form-group {{
      margin-bottom: 14px;
    }}

    label {{
      display: block;
      font-size: 12px;
      font-weight: 700;
      color: var(--slate);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
    }}

    input {{
      width: 100%;
      background: rgba(8, 23, 46, 0.85);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 11px 14px;
      color: #fff;
      font-size: 14px;
      font-family: inherit;
      outline: none;
      transition: border-color 0.2s;
    }}

    input:focus {{
      border-color: var(--cyan);
      box-shadow: 0 0 0 2px rgba(1, 187, 220, 0.2);
    }}

    .preview-box {{
      background: #050E1D;
      border: 1px solid rgba(113, 140, 193, 0.15);
      border-radius: 14px;
      padding: 24px;
      min-height: 240px;
      overflow-x: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }}

    .card-preview-wrapper {{
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      background-color: #08172E;
      border: 1px solid rgba(113, 140, 193, 0.22);
      max-width: 580px;
      width: 100%;
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.45);
      transition: all 0.3s ease;
    }}

    .card-preview-wrapper:hover {{
      border-color: rgba(1, 187, 220, 0.5);
      box-shadow: 0 16px 45px rgba(1, 187, 220, 0.15);
    }}

    .lottie-particle-layer {{
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      opacity: 0.17;
      mix-blend-mode: screen;
      z-index: 1;
      overflow: hidden;
    }}

    .lottie-particle-layer svg {{
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      display: block;
    }}

    .card-content-layer {{
      position: relative;
      z-index: 2;
    }}

    .actions {{
      display: flex;
      gap: 12px;
      margin-top: 20px;
      flex-wrap: wrap;
    }}

    .btn {{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 13px 22px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
      flex: 1;
      min-width: 180px;
    }}

    .btn-primary {{
      background: var(--cyan);
      color: var(--navy-dark);
      box-shadow: 0 4px 14px rgba(1, 187, 220, 0.3);
    }}

    .btn-primary:hover {{
      background: var(--cyan-light);
      transform: translateY(-1px);
    }}

    .btn-secondary {{
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid var(--border);
      color: #fff;
    }}

    .btn-secondary:hover {{
      background: rgba(255, 255, 255, 0.15);
    }}

    .toast {{
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: #01BBDC;
      color: #08172E;
      padding: 14px 26px;
      border-radius: 10px;
      font-weight: 800;
      font-size: 14px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 9999;
    }}

    .toast.show {{
      transform: translateY(0);
      opacity: 1;
    }}

    .instructions-card {{
      margin-top: 30px;
      background: rgba(8, 23, 46, 0.6);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 24px;
    }}

    .instructions-card h3 {{
      font-size: 16px;
      color: var(--cyan);
      margin-bottom: 14px;
    }}

    .steps-list {{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }}

    .step-item {{
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.06);
      padding: 16px;
      border-radius: 10px;
    }}

    .step-number {{
      display: inline-block;
      width: 24px;
      height: 24px;
      background: var(--cyan);
      color: var(--navy-dark);
      font-weight: 800;
      font-size: 12px;
      border-radius: 50%;
      text-align: center;
      line-height: 24px;
      margin-bottom: 8px;
    }}

    .step-item h4 {{
      font-size: 14px;
      color: #fff;
      margin-bottom: 4px;
    }}

    .step-item p {{
      font-size: 12px;
      color: var(--text-muted);
      line-height: 1.5;
    }}

    .code-preview {{
      background: #050E1D;
      border: 1px solid var(--border);
      padding: 18px;
      border-radius: 10px;
      color: #A5B4FC;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      line-height: 1.6;
      max-height: 280px;
      overflow-y: auto;
      white-space: pre-wrap;
    }}
  </style>
</head>
<body>

  <div class="container">
    <header>
      <div class="brand">
        <img src="{logo_white_uri}" alt="i2 Services S.A.S.">
        <div class="brand-title">
          <h1>Generador de Firmas Corporativas</h1>
          <p>Identidad Oficial &bull; i2 Services S.A.S. (Web Matching)</p>
        </div>
      </div>
      <div>
        <a href="/email-signatures/tutorial-firmas-outlook-i2services.pdf" target="_blank" class="badge-doc">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
          Descargar Manual Oficial en PDF
        </a>
      </div>
    </header>

    <div class="tabs">
      <button class="tab-btn active" id="tabPersonal" onclick="switchTab('personal')">Generador Individual (Copiar a Outlook)</button>
      <button class="tab-btn" id="tabM365" onclick="switchTab('m365')">Plantilla M365 (Regla Centralizada Exchange)</button>
    </div>

    <!-- VISTA 1: GENERADOR PERSONAL -->
    <div id="viewPersonal" class="grid-layout">
      <!-- FORMULARIO -->
      <div class="card">
        <div class="card-title">
          <span>Ingresa tus Datos</span>
          <span style="font-size: 12px; color: var(--cyan); font-weight: normal;">Vista previa en tiempo real</span>
        </div>

        <div class="form-group">
          <label>Nombre Completo</label>
          <input type="text" id="inputName" value="John Doe" oninput="updateSignature()">
        </div>

        <div class="form-group">
          <label>Cargo / Rol</label>
          <input type="text" id="inputTitle" value="Director de Operaciones" oninput="updateSignature()">
        </div>

        <div class="form-group">
          <label>Área o Especialidad</label>
          <input type="text" id="inputDept" value="Exploración Estratégica" oninput="updateSignature()">
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group">
            <label>Celular / WhatsApp</label>
            <input type="text" id="inputMobile" value="+57 300 123 4567" oninput="updateSignature()">
          </div>
          <div class="form-group">
            <label>Teléfono Fijo / PBX</label>
            <input type="text" id="inputPhone" value="+57 (604) 444 5566" oninput="updateSignature()">
          </div>
        </div>

        <div class="form-group">
          <label>Correo Electrónico Corporativo</label>
          <input type="email" id="inputEmail" value="john.doe@i2services.co" oninput="updateSignature()">
        </div>
      </div>

      <!-- VISTA PREVIA Y ACCIONES -->
      <div class="card">
        <div class="card-title">
          <span>Vista Previa de la Firma</span>
          <span style="font-size: 11px; background: rgba(1, 187, 220, 0.15); color: var(--cyan); padding: 3px 10px; border-radius: 4px; font-weight: 700;">Logo Blanco • Particle Wave • Íconos</span>
        </div>

        <!-- CONTENEDOR DE LA FIRMA CON LOTTIE PARTICLE WAVE INTEGRADO -->
        <div class="preview-box">
          <div class="card-preview-wrapper" id="cardPreviewWrapper">
            <div id="lottieParticleBg" class="lottie-particle-layer"></div>
            <div class="card-content-layer" id="signatureContentLayer"></div>
          </div>

          <table cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; width: 100%; margin-top: 8px;">
            <tr>
              <td style="padding: 4px 6px;">
                <p style="font-size: 8.5px; line-height: 1.35; color: #64748B; margin: 0; font-family: Arial, sans-serif; text-align: justify;">
                  <strong style="color: #475569;">AVISO DE CONFIDENCIALIDAD:</strong> La información contenida en este mensaje y sus anexos es confidencial y para uso exclusivo del destinatario. Cualquier divulgación, copia o retención no autorizada está prohibida bajo la legislación aplicable. i2 Services S.A.S.
                </p>
              </td>
            </tr>
          </table>
        </div>

        <div class="actions">
          <button class="btn btn-primary" onclick="copyRichSignature()">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
            Copiar Firma para Outlook
          </button>
          <button class="btn btn-secondary" onclick="copyHtmlSource()">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
            Copiar HTML
          </button>
        </div>
      </div>
    </div>

    <!-- VISTA 2: PLANTILLA M365 DINÁMICA -->
    <div id="viewM365" class="grid-layout" style="display: none;">
      <div class="card" style="grid-column: span 2;">
        <div class="card-title">
          <span>Plantilla para Regla de Flujo de Correo en Exchange Online (Microsoft 365)</span>
          <span style="font-size: 12px; color: var(--cyan);">100% Centralizada y Automática</span>
        </div>
        <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px; line-height: 1.6;">
          Esta plantilla utiliza las etiquetas oficiales de Microsoft 365 (<code style="color: var(--cyan);">%%DisplayName%%</code>, <code style="color: var(--cyan);">%%Title%%</code>, <code style="color: var(--cyan);">%%MobileNumber%%</code>, etc.) con el logotipo oficial en blanco puro, eslogan y líneas sutiles sin elementos innecesarios.
        </p>

        <div class="code-preview" id="m365CodeBlock"></div>

        <div class="actions" style="margin-top: 16px;">
          <button class="btn btn-primary" onclick="copyM365Code()">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
            Copiar Código HTML para Regla M365
          </button>
          <a href="/email-signatures/firma-m365-dinamica.html" download="firma-m365-i2services.html" class="btn btn-secondary" style="text-decoration: none;">
            Descargar archivo .html
          </a>
        </div>
      </div>
    </div>

    <!-- INSTRUCCIONES DE INSTALACIÓN -->
    <div class="instructions-card">
      <h3>¿Cómo pegar la firma en Outlook? (Pasos rápidos)</h3>
      <div class="steps-list">
        <div class="step-item">
          <span class="step-number">1</span>
          <h4>Genera y Copia</h4>
          <p>Escribe tus datos arriba y haz clic en el botón <strong>"Copiar Firma para Outlook"</strong>. Se copia con la tarjeta corporativa limpia, el logo blanco y los íconos.</p>
        </div>
        <div class="step-item">
          <span class="step-number">2</span>
          <h4>Abre Outlook</h4>
          <p>En Outlook de escritorio ve a <strong>Archivo &gt; Opciones &gt; Correo &gt; Firmas</strong> (en Mac: <strong>Outlook &gt; Configuración &gt; Firmas</strong>).</p>
        </div>
        <div class="step-item">
          <span class="step-number">3</span>
          <h4>Pega y Guarda</h4>
          <p>Crea una firma llamada "i2 Oficial", haz clic en el recuadro de edición y presiona <kbd>Ctrl+V</kbd> (o <kbd>Cmd+V</kbd> en Mac). ¡Listo!</p>
        </div>
      </div>
    </div>
  </div>

  <div id="toast" class="toast">Firma copiada al portapapeles</div>

  <script>
    const LOGO_WHITE_URI = "{logo_white_uri}";
    const ICON_MOBILE = "{icon_mobile_uri}";
    const ICON_PHONE  = "{icon_phone_uri}";
    const ICON_EMAIL  = "{icon_email_uri}";
    const ICON_WEB    = "{icon_web_uri}";
    const ICON_PIN    = "{icon_pin_uri}";

    const PARTICLE_WAVE_JSON = __PARTICLE_WAVE_JSON__;
    let lottieAnim = null;

    function initLottieBg() {{
      const container = document.getElementById('lottieParticleBg');
      if (!container) return;
      if (typeof lottie === 'undefined') {{
        setTimeout(initLottieBg, 250);
        return;
      }}
      if (lottieAnim) return;
      try {{
        lottieAnim = lottie.loadAnimation({{
          container: container,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: PARTICLE_WAVE_JSON,
          rendererSettings: {{
            preserveAspectRatio: 'xMidYMid slice',
            clearCanvas: true
          }}
        }});
        lottieAnim.setSpeed(0.35);
      }} catch (err) {{
        console.error('Lottie init error:', err);
      }}
    }}

    function buildSignatureTableHtml(isForEmail = false) {{
      const name = document.getElementById('inputName').value || 'John Doe';
      const title = document.getElementById('inputTitle').value || 'Director de Operaciones';
      const dept = document.getElementById('inputDept').value;
      const mobile = document.getElementById('inputMobile').value;
      const phone = document.getElementById('inputPhone').value;
      const email = document.getElementById('inputEmail').value || 'john.doe@i2services.co';

      const titleSubtitle = dept ? `${{title}} &nbsp;|&nbsp; ${{dept}}` : title;

      let phonesHtml = '';
      if (mobile) {{
        phonesHtml += `
          <tr>
            <td style="width: 20px; padding: 2px 0; vertical-align: middle;">
              <img src="${{ICON_MOBILE}}" width="14" height="14" alt="Móvil" style="display: block; width: 14px; height: 14px; border: 0;" />
            </td>
            <td style="padding: 2px 0 2px 6px; vertical-align: middle;">
              <a href="tel:${{mobile.replace(/\\s+/g, '')}}" style="color: #FFFFFF; text-decoration: none; font-weight: 500;">${{mobile}}</a>
            </td>
          </tr>
        `;
      }}
      if (phone) {{
        phonesHtml += `
          <tr>
            <td style="width: 20px; padding: 2px 0; vertical-align: middle;">
              <img src="${{ICON_PHONE}}" width="14" height="14" alt="Tel" style="display: block; width: 14px; height: 14px; border: 0;" />
            </td>
            <td style="padding: 2px 0 2px 6px; vertical-align: middle;">
              <a href="tel:${{phone.replace(/\\s+/g, '')}}" style="color: #CBD5E1; text-decoration: none;">${{phone}}</a>
            </td>
          </tr>
        `;
      }}

      const bgStyle = isForEmail ? 'background-color: #08172E; border: 1px solid rgba(113, 140, 193, 0.22); border-radius: 12px;' : 'background-color: transparent;';
      const bgAttr = isForEmail ? 'bgcolor="#08172E"' : '';

      return `
<table cellpadding="0" cellspacing="0" border="0" ${{bgAttr}} style="${{bgStyle}} font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; font-size: 13px; line-height: 1.4; color: #FFFFFF; max-width: 580px; width: 100%; border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
  <tr>
    <td style="padding: 22px 26px;">
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
        <tr>
          <td valign="middle" align="center" style="padding-right: 24px; vertical-align: middle; width: 150px; text-align: center;">
            <a href="https://i2services.co" target="_blank" style="text-decoration: none; display: block;">
              <img src="${{LOGO_WHITE_URI}}" alt="i2 Services S.A.S." width="138" style="display: block; width: 138px; max-width: 138px; height: auto; border: 0; margin: 0 auto;" />
            </a>
            <div style="font-size: 8.5px; font-weight: 700; color: #01BBDC; letter-spacing: 1.2px; text-transform: uppercase; margin-top: 10px; font-family: 'Segoe UI', Arial, sans-serif;">
              YOUR GROUND, OUR EXPERIENCE
            </div>
          </td>
          <td width="1" bgcolor="#1E3352" style="width: 1px; background-color: rgba(113, 140, 193, 0.2); padding: 0; font-size: 1px; line-height: 1px;">&nbsp;</td>
          <td valign="top" style="padding-left: 24px; vertical-align: top;">
            <div style="font-size: 18px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.2px; margin: 0 0 3px 0; font-family: 'Segoe UI', Arial, sans-serif;">
              ${{name}}
            </div>
            <div style="font-size: 11px; font-weight: 700; color: #01BBDC; text-transform: uppercase; letter-spacing: 0.8px; margin: 0 0 14px 0; font-family: 'Segoe UI', Arial, sans-serif;">
              ${{titleSubtitle}}
            </div>
            <table cellpadding="0" cellspacing="0" border="0" style="font-size: 11px; line-height: 1.5; color: #CBD5E1; font-family: 'Segoe UI', Arial, sans-serif;">
              ${{phonesHtml}}
              <tr>
                <td style="width: 20px; padding: 2px 0; vertical-align: middle;">
                  <img src="${{ICON_EMAIL}}" width="14" height="14" alt="Email" style="display: block; width: 14px; height: 14px; border: 0;" />
                </td>
                <td style="padding: 2px 0 2px 6px; vertical-align: middle;">
                  <a href="mailto:${{email}}" style="color: #01BBDC; text-decoration: none; font-weight: 500;">${{email}}</a>
                </td>
              </tr>
              <tr>
                <td style="width: 20px; padding: 2px 0; vertical-align: middle;">
                  <img src="${{ICON_WEB}}" width="14" height="14" alt="Web" style="display: block; width: 14px; height: 14px; border: 0;" />
                </td>
                <td style="padding: 2px 0 2px 6px; vertical-align: middle;">
                  <a href="https://i2services.co" target="_blank" style="color: #FFFFFF; text-decoration: none; font-weight: 600;">i2services.co</a>
                </td>
              </tr>
              <tr>
                <td style="width: 20px; padding: 2px 0; vertical-align: middle;">
                  <img src="${{ICON_PIN}}" width="14" height="14" alt="Ubicación" style="display: block; width: 14px; height: 14px; border: 0;" />
                </td>
                <td style="padding: 2px 0 2px 6px; vertical-align: middle; color: #94A3B8; font-size: 10px;">
                  Cra. 43A # 1-50, San Fernando Plaza, Torre 2, Medellín, Colombia
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
    }}

    function updateSignature() {{
      const contentLayer = document.getElementById('signatureContentLayer');
      if (contentLayer) {{
        contentLayer.innerHTML = buildSignatureTableHtml(false);
      }}
      initLottieBg();
    }}

    function showToast(message) {{
      const toast = document.getElementById('toast');
      toast.innerText = message;
      toast.classList.add('show');
      setTimeout(() => {{
        toast.classList.remove('show');
      }}, 3000);
    }}

    async function copyRichSignature() {{
      const emailTable = buildSignatureTableHtml(true);
      const disclaimer = `
<table cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; width: 100%; margin-top: 8px;">
  <tr>
    <td style="padding: 4px 6px;">
      <p style="font-size: 8.5px; line-height: 1.35; color: #64748B; margin: 0; font-family: Arial, sans-serif; text-align: justify;">
        <strong style="color: #475569;">AVISO DE CONFIDENCIALIDAD:</strong> La información contenida en este mensaje y sus anexos es confidencial y para uso exclusivo del destinatario. Cualquier divulgación, copia o retención no autorizada está prohibida bajo la legislación aplicable. i2 Services S.A.S.
      </p>
    </td>
  </tr>
</table>`;
      const fullHtml = emailTable + disclaimer;
      const textContent = 'John Doe - i2 Services S.A.S. - i2services.co';

      try {{
        if (navigator.clipboard && window.ClipboardItem) {{
          const blobHtml = new Blob([fullHtml], {{ type: 'text/html' }});
          const blobText = new Blob([textContent], {{ type: 'text/plain' }});
          const data = [new ClipboardItem({{ 'text/html': blobHtml, 'text/plain': blobText }})];
          await navigator.clipboard.write(data);
          showToast('✅ ¡Firma copiada! Pégala (Ctrl+V / Cmd+V) en Outlook');
        }} else {{
          const range = document.createRange();
          range.selectNode(document.getElementById('cardPreviewWrapper'));
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
          document.execCommand('copy');
          window.getSelection().removeAllRanges();
          showToast('✅ ¡Firma copiada con éxito!');
        }}
      }} catch (err) {{
        console.error(err);
        showToast('Presiona Ctrl+C para copiar la selección');
      }}
    }}

    function copyHtmlSource() {{
      const emailTable = buildSignatureTableHtml(true);
      const disclaimer = `
<table cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; width: 100%; margin-top: 8px;">
  <tr>
    <td style="padding: 4px 6px;">
      <p style="font-size: 8.5px; line-height: 1.35; color: #64748B; margin: 0; font-family: Arial, sans-serif; text-align: justify;">
        <strong style="color: #475569;">AVISO DE CONFIDENCIALIDAD:</strong> La información contenida en este mensaje y sus anexos es confidencial y para uso exclusivo del destinatario. Cualquier divulgación, copia o retención no autorizada está prohibida bajo la legislación aplicable. i2 Services S.A.S.
      </p>
    </td>
  </tr>
</table>`;
      navigator.clipboard.writeText(emailTable + disclaimer).then(() => {{
        showToast('✅ Código HTML copiado');
      }});
    }}

    function copyM365Code() {{
      const m365Code = document.getElementById('m365CodeBlock').textContent;
      navigator.clipboard.writeText(m365Code).then(() => {{
        showToast('✅ Código de regla M365 copiado');
      }});
    }}

    function switchTab(tab) {{
      if (tab === 'personal') {{
        document.getElementById('viewPersonal').style.display = 'grid';
        document.getElementById('viewM365').style.display = 'none';
        document.getElementById('tabPersonal').classList.add('active');
        document.getElementById('tabM365').classList.remove('active');
      }} else {{
        document.getElementById('viewPersonal').style.display = 'none';
        document.getElementById('viewM365').style.display = 'grid';
        document.getElementById('tabPersonal').classList.remove('active');
        document.getElementById('tabM365').classList.add('active');
      }}
    }}

    fetch('/email-signatures/firma-m365-dinamica.html')
      .then(res => res.text())
      .then(code => {{
        document.getElementById('m365CodeBlock').textContent = code;
      }})
      .catch(() => {{
        document.getElementById('m365CodeBlock').textContent = '<!-- Código listo en firma-m365-dinamica.html -->';
      }});

    updateSignature();
  </script>
</body>
</html>
'''

generador_html = generador_html.replace('__PARTICLE_WAVE_JSON__', particle_wave_json_str)

with open('public/email-signatures/generador-firmas.html', 'w', encoding='utf-8') as f:
    f.write(generador_html)
print("Updated generador-firmas.html with live Lottie particle wave card background.")
