#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script de actualización integral de Firmas e Identidad Corporativa i2 Services S.A.S.
Genera plantillas con logo embebido (Base64) y diseño executive card con 'cariño'.
"""

import base64
import os

with open('public/i2-services-logo.png', 'rb') as f:
    logo_b64 = base64.b64encode(f.read()).decode('utf-8')

logo_data_uri = f"data:image/png;base64,{logo_b64}"
print("Logo Data URI ready. Length:", len(logo_data_uri))

# -------------------------------------------------------------------------
# 1. PLANTILLA ESTÁTICA JOHN DOE (HIGH-END EXECUTIVE CARD)
# -------------------------------------------------------------------------
firma_estatica_html = f'''<!-- =======================================================================
  i2 SERVICES S.A.S. - FIRMA DE CORREO CORPORATIVO (EXECUTIVE VIP CARD)
  ======================================================================= -->
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#091B36" style="background-color: #091B36; background: linear-gradient(140deg, #0C2245 0%, #061122 100%); border: 1px solid #1E3D66; border-radius: 12px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; font-size: 13px; line-height: 1.4; color: #FFFFFF; max-width: 600px; width: 100%; border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-shadow: 0 8px 25px rgba(0,0,0,0.35); overflow: hidden;">
  <!-- FRANJA SUPERIOR CIAN DECORATIVA -->
  <tr>
    <td colspan="3" height="3" bgcolor="#01BBDC" style="height: 3px; background: linear-gradient(90deg, #01BBDC 0%, #5BE2F8 50%, #718CC1 100%); line-height: 3px; font-size: 1px; padding: 0;">&nbsp;</td>
  </tr>

  <tr>
    <!-- COLUMNA 1: LOGOTIPO & IDENTIDAD DE MARCA -->
    <td valign="middle" align="center" style="padding: 22px 18px 20px 22px; vertical-align: middle; width: 155px; text-align: center; border-right: 1px solid rgba(1, 187, 220, 0.25);">
      <a href="https://i2services.com.co" target="_blank" style="text-decoration: none; display: block;">
        <img src="{logo_data_uri}" alt="i2 Services S.A.S." width="135" style="display: block; width: 135px; max-width: 135px; height: auto; border: 0; margin: 0 auto 12px auto;" />
      </a>
      <!-- BADGE DE ÁREA -->
      <div style="display: inline-block; padding: 3px 9px; background: rgba(1, 187, 220, 0.12); border: 1px solid rgba(1, 187, 220, 0.35); border-radius: 20px; font-size: 8.5px; font-weight: 700; color: #01BBDC; letter-spacing: 0.8px; text-transform: uppercase;">
        OPERACIONES MINERAS
      </div>
      <!-- SEDE -->
      <div style="font-size: 9px; color: #718CC1; margin-top: 8px; line-height: 1.35; font-weight: 500;">
        Torre 2, San Fernando Plaza<br><strong style="color: #CBD5E1;">Medellín, Colombia</strong>
      </div>
    </td>

    <!-- SEPARADOR VERTICAL CIAN -->
    <td width="2" bgcolor="#01BBDC" style="width: 2px; background-color: #01BBDC; padding: 0; font-size: 1px; line-height: 1px;">&nbsp;</td>

    <!-- COLUMNA 2: DATOS DEL REMITENTE -->
    <td valign="top" style="padding: 20px 22px 18px 20px; vertical-align: top;">
      <!-- NOMBRE -->
      <div style="font-size: 18px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.3px; margin: 0 0 2px 0; font-family: 'Segoe UI', Arial, sans-serif;">
        John Doe
      </div>

      <!-- CARGO -->
      <div style="font-size: 11.5px; font-weight: 700; color: #01BBDC; text-transform: uppercase; letter-spacing: 0.8px; margin: 0 0 4px 0; font-family: 'Segoe UI', Arial, sans-serif;">
        Director de Operaciones &nbsp;|&nbsp; Exploración Estratégica
      </div>

      <!-- EMPRESA & SUBTÍTULO -->
      <div style="font-size: 10.5px; font-weight: 500; color: #718CC1; margin: 0 0 12px 0;">
        i2 Services S.A.S. &nbsp;<span style="color: #01BBDC;">•</span>&nbsp; Mining &amp; Strategic Operations
      </div>

      <!-- TABLA DE CONTACTO CON MICRO-BADGES -->
      <table cellpadding="0" cellspacing="0" border="0" style="font-size: 11px; line-height: 1.5; color: #CBD5E1; font-family: 'Segoe UI', Arial, sans-serif;">
        <!-- CELULAR / WHATSAPP -->
        <tr>
          <td style="width: 22px; padding: 2px 0; vertical-align: middle;">
            <span style="display: inline-block; width: 17px; height: 17px; background: #01BBDC; color: #08172E; border-radius: 4px; font-size: 9.5px; font-weight: 900; text-align: center; line-height: 17px;">M</span>
          </td>
          <td style="padding: 2px 0; vertical-align: middle;">
            <a href="tel:+573001234567" style="color: #FFFFFF; text-decoration: none; font-weight: 600;">+57 300 123 4567</a>
          </td>
        </tr>
        <!-- TELÉFONO OFICINA -->
        <tr>
          <td style="width: 22px; padding: 2px 0; vertical-align: middle;">
            <span style="display: inline-block; width: 17px; height: 17px; background: #182C48; color: #718CC1; border-radius: 4px; font-size: 9.5px; font-weight: 900; text-align: center; line-height: 17px; border: 1px solid #1E3D66;">T</span>
          </td>
          <td style="padding: 2px 0; vertical-align: middle;">
            <a href="tel:+576044445566" style="color: #E2E8F0; text-decoration: none;">+57 (604) 444 5566</a>
          </td>
        </tr>
        <!-- EMAIL -->
        <tr>
          <td style="width: 22px; padding: 2px 0; vertical-align: middle;">
            <span style="display: inline-block; width: 17px; height: 17px; background: #01BBDC; color: #08172E; border-radius: 4px; font-size: 9.5px; font-weight: 900; text-align: center; line-height: 17px;">@</span>
          </td>
          <td style="padding: 2px 0; vertical-align: middle;">
            <a href="mailto:john.doe@i2services.com.co" style="color: #01BBDC; text-decoration: none; font-weight: 600;">john.doe@i2services.com.co</a>
          </td>
        </tr>
        <!-- SITIO WEB -->
        <tr>
          <td style="width: 22px; padding: 2px 0; vertical-align: middle;">
            <span style="display: inline-block; width: 17px; height: 17px; background: #182C48; color: #718CC1; border-radius: 4px; font-size: 9.5px; font-weight: 900; text-align: center; line-height: 17px; border: 1px solid #1E3D66;">W</span>
          </td>
          <td style="padding: 2px 0; vertical-align: middle;">
            <a href="https://i2services.com.co" target="_blank" style="color: #FFFFFF; text-decoration: none; font-weight: 600;">www.i2services.com.co</a>
          </td>
        </tr>
      </table>

      <!-- BOTÓN DE LLAMADO A LA ACCIÓN (AGENDAR REUNIÓN) -->
      <div style="margin-top: 12px; padding-top: 8px; border-top: 1px solid rgba(113, 140, 193, 0.2);">
        <a href="https://i2services.com.co/#contact" target="_blank" style="display: inline-block; padding: 5px 13px; background: #01BBDC; color: #08172E; font-size: 9.5px; font-weight: 800; text-decoration: none; border-radius: 5px; letter-spacing: 0.5px; text-transform: uppercase;">
          Agendar Presentación &bull; Schedule Call
        </a>
        <span style="font-size: 9.5px; color: #718CC1; margin-left: 10px; vertical-align: middle;">
          14 Títulos ANM &bull; 44 Solicitudes
        </span>
      </div>
    </td>
  </tr>
</table>

<!-- AVISO LEGAL DISCRETO -->
<table cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; margin-top: 8px;">
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
print("Updated firma-ejemplo-estatica.html with embedded logo and executive card.")

# -------------------------------------------------------------------------
# 2. PLANTILLA M365 DINÁMICA
# -------------------------------------------------------------------------
firma_m365_html = f'''<!-- =======================================================================
  i2 SERVICES S.A.S. - REGLA CENTRALIZADA DE FLUJO DE CORREO MICROSOFT 365
  ESTILO: EXECUTIVE VIP CARD CON LOGO E IDENTIDAD CORPORATIVA
  ======================================================================= -->
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#091B36" style="background-color: #091B36; background: linear-gradient(140deg, #0C2245 0%, #061122 100%); border: 1px solid #1E3D66; border-radius: 12px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; font-size: 13px; line-height: 1.4; color: #FFFFFF; max-width: 600px; width: 100%; border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-shadow: 0 8px 25px rgba(0,0,0,0.35); overflow: hidden;">
  <!-- FRANJA SUPERIOR CIAN -->
  <tr>
    <td colspan="3" height="3" bgcolor="#01BBDC" style="height: 3px; background: linear-gradient(90deg, #01BBDC 0%, #5BE2F8 50%, #718CC1 100%); line-height: 3px; font-size: 1px; padding: 0;">&nbsp;</td>
  </tr>

  <tr>
    <!-- COLUMNA 1: LOGOTIPO OFICIAL EMBEBIDO -->
    <td valign="middle" align="center" style="padding: 22px 18px 20px 22px; vertical-align: middle; width: 155px; text-align: center; border-right: 1px solid rgba(1, 187, 220, 0.25);">
      <a href="https://i2services.com.co" target="_blank" style="text-decoration: none; display: block;">
        <img src="{logo_data_uri}" alt="i2 Services S.A.S." width="135" style="display: block; width: 135px; max-width: 135px; height: auto; border: 0; margin: 0 auto 12px auto;" />
      </a>
      <div style="display: inline-block; padding: 3px 9px; background: rgba(1, 187, 220, 0.12); border: 1px solid rgba(1, 187, 220, 0.35); border-radius: 20px; font-size: 8.5px; font-weight: 700; color: #01BBDC; letter-spacing: 0.8px; text-transform: uppercase;">
        OPERACIONES MINERAS
      </div>
      <div style="font-size: 9px; color: #718CC1; margin-top: 8px; line-height: 1.35; font-weight: 500;">
        Torre 2, San Fernando Plaza<br><strong style="color: #CBD5E1;">Medellín, Colombia</strong>
      </div>
    </td>

    <!-- SEPARADOR VERTICAL CIAN -->
    <td width="2" bgcolor="#01BBDC" style="width: 2px; background-color: #01BBDC; padding: 0; font-size: 1px; line-height: 1px;">&nbsp;</td>

    <!-- COLUMNA 2: ATRIBUTOS DINÁMICOS DE M365 -->
    <td valign="top" style="padding: 20px 22px 18px 20px; vertical-align: top;">
      <!-- NOMBRE -->
      <div style="font-size: 18px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.3px; margin: 0 0 2px 0; font-family: 'Segoe UI', Arial, sans-serif;">
        %%DisplayName%%
      </div>

      <!-- CARGO Y DEPARTAMENTO -->
      <div style="font-size: 11.5px; font-weight: 700; color: #01BBDC; text-transform: uppercase; letter-spacing: 0.8px; margin: 0 0 4px 0; font-family: 'Segoe UI', Arial, sans-serif;">
        %%Title%%%%#Department%% &nbsp;|&nbsp; %%Department%%%%/Department%%
      </div>

      <!-- EMPRESA -->
      <div style="font-size: 10.5px; font-weight: 500; color: #718CC1; margin: 0 0 12px 0;">
        i2 Services S.A.S. &nbsp;<span style="color: #01BBDC;">•</span>&nbsp; Mining &amp; Strategic Operations
      </div>

      <!-- CONTACTO -->
      <table cellpadding="0" cellspacing="0" border="0" style="font-size: 11px; line-height: 1.5; color: #CBD5E1; font-family: 'Segoe UI', Arial, sans-serif;">
        <tr>
          <td style="width: 22px; padding: 2px 0; vertical-align: middle;">
            <span style="display: inline-block; width: 17px; height: 17px; background: #01BBDC; color: #08172E; border-radius: 4px; font-size: 9.5px; font-weight: 900; text-align: center; line-height: 17px;">M</span>
          </td>
          <td style="padding: 2px 0; vertical-align: middle;">
            <a href="tel:%%MobileNumber%%" style="color: #FFFFFF; text-decoration: none; font-weight: 600;">%%MobileNumber%%</a>
          </td>
        </tr>
        <tr>
          <td style="width: 22px; padding: 2px 0; vertical-align: middle;">
            <span style="display: inline-block; width: 17px; height: 17px; background: #182C48; color: #718CC1; border-radius: 4px; font-size: 9.5px; font-weight: 900; text-align: center; line-height: 17px; border: 1px solid #1E3D66;">T</span>
          </td>
          <td style="padding: 2px 0; vertical-align: middle;">
            <a href="tel:%%PhoneNumber%%" style="color: #E2E8F0; text-decoration: none;">%%PhoneNumber%%</a>
          </td>
        </tr>
        <tr>
          <td style="width: 22px; padding: 2px 0; vertical-align: middle;">
            <span style="display: inline-block; width: 17px; height: 17px; background: #01BBDC; color: #08172E; border-radius: 4px; font-size: 9.5px; font-weight: 900; text-align: center; line-height: 17px;">@</span>
          </td>
          <td style="padding: 2px 0; vertical-align: middle;">
            <a href="mailto:%%Email%%" style="color: #01BBDC; text-decoration: none; font-weight: 600;">%%Email%%</a>
          </td>
        </tr>
        <tr>
          <td style="width: 22px; padding: 2px 0; vertical-align: middle;">
            <span style="display: inline-block; width: 17px; height: 17px; background: #182C48; color: #718CC1; border-radius: 4px; font-size: 9.5px; font-weight: 900; text-align: center; line-height: 17px; border: 1px solid #1E3D66;">W</span>
          </td>
          <td style="padding: 2px 0; vertical-align: middle;">
            <a href="https://i2services.com.co" target="_blank" style="color: #FFFFFF; text-decoration: none; font-weight: 600;">www.i2services.com.co</a>
          </td>
        </tr>
      </table>

      <!-- CTA -->
      <div style="margin-top: 12px; padding-top: 8px; border-top: 1px solid rgba(113, 140, 193, 0.2);">
        <a href="https://i2services.com.co/#contact" target="_blank" style="display: inline-block; padding: 5px 13px; background: #01BBDC; color: #08172E; font-size: 9.5px; font-weight: 800; text-decoration: none; border-radius: 5px; letter-spacing: 0.5px; text-transform: uppercase;">
          Agendar Presentación &bull; Schedule Call
        </a>
        <span style="font-size: 9.5px; color: #718CC1; margin-left: 10px; vertical-align: middle;">
          14 Títulos ANM &bull; 44 Solicitudes
        </span>
      </div>
    </td>
  </tr>
</table>

<table cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; margin-top: 8px;">
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
print("Updated firma-m365-dinamica.html with embedded logo and executive card.")
