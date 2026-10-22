#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import base64

with open('public/i2-services-logo.png', 'rb') as f:
    logo_b64 = base64.b64encode(f.read()).decode('utf-8')

logo_data_uri = f"data:image/png;base64,{logo_b64}"

generador_html = f'''<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generador de Firmas Corporativas - i2 Services S.A.S.</title>
  <link rel="icon" type="image/png" href="{logo_data_uri}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {{
      --navy: #08172E;
      --navy-dark: #050E1D;
      --navy-card: #0D1F3C;
      --cyan: #01BBDC;
      --cyan-light: #5BE2F8;
      --slate: #718CC1;
      --border: rgba(113, 140, 193, 0.25);
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
      height: 42px;
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
      background: rgba(1, 187, 220, 0.15);
      border: 1px solid rgba(1, 187, 220, 0.4);
      color: var(--cyan);
      padding: 9px 18px;
      border-radius: 9999px;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.2s;
    }}

    .badge-doc:hover {{
      background: rgba(1, 187, 220, 0.25);
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
      box-shadow: 0 0 0 2px rgba(1, 187, 220, 0.25);
    }}

    .preview-box {{
      background: #050E1D;
      border: 1px solid rgba(113, 140, 193, 0.25);
      border-radius: 14px;
      padding: 24px;
      min-height: 240px;
      overflow-x: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
      box-shadow: 0 4px 14px rgba(1, 187, 220, 0.35);
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
        <img src="{logo_data_uri}" alt="i2 Services S.A.S.">
        <div class="brand-title">
          <h1>Generador de Firmas Corporativas</h1>
          <p>Executive VIP Card &bull; Identidad Oficial i2 Services S.A.S.</p>
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
          <input type="email" id="inputEmail" value="john.doe@i2services.com.co" oninput="updateSignature()">
        </div>
      </div>

      <!-- VISTA PREVIA Y ACCIONES -->
      <div class="card">
        <div class="card-title">
          <span>Vista Previa de la Firma (Executive VIP Card)</span>
          <span style="font-size: 11px; background: rgba(1, 187, 220, 0.15); color: var(--cyan); padding: 3px 10px; border-radius: 4px; font-weight: 700;">Logo Embebido</span>
        </div>

        <!-- CONTENEDOR DE LA FIRMA -->
        <div class="preview-box" id="signatureContainer"></div>

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
          Esta plantilla utiliza las etiquetas oficiales de Microsoft 365 (<code style="color: var(--cyan);">%%DisplayName%%</code>, <code style="color: var(--cyan);">%%Title%%</code>, <code style="color: var(--cyan);">%%MobileNumber%%</code>, etc.) junto con el logotipo embebido en alta fidelidad y diseño executive card. Al activarla en el <strong>Centro de Administración de Exchange</strong>, se inyecta automáticamente con los datos de cada persona.
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
          <p>Escribe tus datos arriba y haz clic en el botón <strong>"Copiar Firma para Outlook"</strong>. Se copia con la tarjeta oscura ejecutiva, el logo y los botones interactivos.</p>
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
    const LOGO_DATA_URI = "{logo_data_uri}";

    function updateSignature() {{
      const name = document.getElementById('inputName').value || 'John Doe';
      const title = document.getElementById('inputTitle').value || 'Director de Operaciones';
      const dept = document.getElementById('inputDept').value;
      const mobile = document.getElementById('inputMobile').value;
      const phone = document.getElementById('inputPhone').value;
      const email = document.getElementById('inputEmail').value || 'john.doe@i2services.com.co';

      const titleSubtitle = dept ? `${{title}} &nbsp;|&nbsp; ${{dept}}` : title;

      let phonesHtml = '';
      if (mobile) {{
        phonesHtml += `
          <tr>
            <td style="width: 22px; padding: 2px 0; vertical-align: middle;">
              <span style="display: inline-block; width: 17px; height: 17px; background: #01BBDC; color: #08172E; border-radius: 4px; font-size: 9.5px; font-weight: 900; text-align: center; line-height: 17px;">M</span>
            </td>
            <td style="padding: 2px 0; vertical-align: middle;">
              <a href="tel:${{mobile.replace(/\\s+/g, '')}}" style="color: #FFFFFF; text-decoration: none; font-weight: 600;">${{mobile}}</a>
            </td>
          </tr>
        `;
      }}
      if (phone) {{
        phonesHtml += `
          <tr>
            <td style="width: 22px; padding: 2px 0; vertical-align: middle;">
              <span style="display: inline-block; width: 17px; height: 17px; background: #182C48; color: #718CC1; border-radius: 4px; font-size: 9.5px; font-weight: 900; text-align: center; line-height: 17px; border: 1px solid #1E3D66;">T</span>
            </td>
            <td style="padding: 2px 0; vertical-align: middle;">
              <a href="tel:${{phone.replace(/\\s+/g, '')}}" style="color: #E2E8F0; text-decoration: none;">${{phone}}</a>
            </td>
          </tr>
        `;
      }}

      const html = `
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#091B36" style="background-color: #091B36; background: linear-gradient(140deg, #0C2245 0%, #061122 100%); border: 1px solid #1E3D66; border-radius: 12px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; font-size: 13px; line-height: 1.4; color: #FFFFFF; max-width: 600px; width: 100%; border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-shadow: 0 8px 25px rgba(0,0,0,0.35); overflow: hidden;">
  <tr>
    <td colspan="3" height="3" bgcolor="#01BBDC" style="height: 3px; background: linear-gradient(90deg, #01BBDC 0%, #5BE2F8 50%, #718CC1 100%); line-height: 3px; font-size: 1px; padding: 0;">&nbsp;</td>
  </tr>
  <tr>
    <td valign="middle" align="center" style="padding: 22px 18px 20px 22px; vertical-align: middle; width: 155px; text-align: center; border-right: 1px solid rgba(1, 187, 220, 0.25);">
      <a href="https://i2services.com.co" target="_blank" style="text-decoration: none; display: block;">
        <img src="${{LOGO_DATA_URI}}" alt="i2 Services S.A.S." width="135" style="display: block; width: 135px; max-width: 135px; height: auto; border: 0; margin: 0 auto 12px auto;" />
      </a>
      <div style="display: inline-block; padding: 3px 9px; background: rgba(1, 187, 220, 0.12); border: 1px solid rgba(1, 187, 220, 0.35); border-radius: 20px; font-size: 8.5px; font-weight: 700; color: #01BBDC; letter-spacing: 0.8px; text-transform: uppercase;">
        OPERACIONES MINERAS
      </div>
      <div style="font-size: 9px; color: #718CC1; margin-top: 8px; line-height: 1.35; font-weight: 500;">
        Torre 2, San Fernando Plaza<br><strong style="color: #CBD5E1;">Medellín, Colombia</strong>
      </div>
    </td>
    <td width="2" bgcolor="#01BBDC" style="width: 2px; background-color: #01BBDC; padding: 0; font-size: 1px; line-height: 1px;">&nbsp;</td>
    <td valign="top" style="padding: 20px 22px 18px 20px; vertical-align: top;">
      <div style="font-size: 18px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.3px; margin: 0 0 2px 0; font-family: 'Segoe UI', Arial, sans-serif;">
        ${{name}}
      </div>
      <div style="font-size: 11.5px; font-weight: 700; color: #01BBDC; text-transform: uppercase; letter-spacing: 0.8px; margin: 0 0 4px 0; font-family: 'Segoe UI', Arial, sans-serif;">
        ${{titleSubtitle}}
      </div>
      <div style="font-size: 10.5px; font-weight: 500; color: #718CC1; margin: 0 0 12px 0;">
        i2 Services S.A.S. &nbsp;<span style="color: #01BBDC;">•</span>&nbsp; Mining &amp; Strategic Operations
      </div>
      <table cellpadding="0" cellspacing="0" border="0" style="font-size: 11px; line-height: 1.5; color: #CBD5E1; font-family: 'Segoe UI', Arial, sans-serif;">
        ${{phonesHtml}}
        <tr>
          <td style="width: 22px; padding: 2px 0; vertical-align: middle;">
            <span style="display: inline-block; width: 17px; height: 17px; background: #01BBDC; color: #08172E; border-radius: 4px; font-size: 9.5px; font-weight: 900; text-align: center; line-height: 17px;">@</span>
          </td>
          <td style="padding: 2px 0; vertical-align: middle;">
            <a href="mailto:${{email}}" style="color: #01BBDC; text-decoration: none; font-weight: 600;">${{email}}</a>
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
</table>`;

      document.getElementById('signatureContainer').innerHTML = html;
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
      const container = document.getElementById('signatureContainer');
      const htmlContent = container.innerHTML;
      const textContent = container.innerText;

      try {{
        if (navigator.clipboard && window.ClipboardItem) {{
          const typeHtml = 'text/html';
          const typeText = 'text/plain';
          const blobHtml = new Blob([htmlContent], {{ type: typeHtml }});
          const blobText = new Blob([textContent], {{ type: typeText }});
          const data = [new ClipboardItem({{ [typeHtml]: blobHtml, [typeText]: blobText }})];
          await navigator.clipboard.write(data);
          showToast('✅ ¡Firma Executive copiada! Pégala (Ctrl+V / Cmd+V) en Outlook');
        }} else {{
          const range = document.createRange();
          range.selectNode(container);
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
      const container = document.getElementById('signatureContainer');
      navigator.clipboard.writeText(container.innerHTML).then(() => {{
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

    // Load M365 template
    fetch('/email-signatures/firma-m365-dinamica.html')
      .then(res => res.text())
      .then(code => {{
        document.getElementById('m365CodeBlock').textContent = code;
      }})
      .catch(() => {{
        document.getElementById('m365CodeBlock').textContent = '<!-- Abre firma-m365-dinamica.html para copiar el código -->';
      }});

    updateSignature();
  </script>
</body>
</html>
'''

with open('public/email-signatures/generador-firmas.html', 'w', encoding='utf-8') as f:
    f.write(generador_html)

print("Updated generador-firmas.html with embedded logo data URI and Executive Card layout.")
