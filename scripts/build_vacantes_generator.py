import json
import os

with open('public/vacantes/images.json', 'r') as f:
    images = json.load(f)

logo_data = images['logo']
header_creative = images['headerCreative']
header_tech = images['headerTech']
header_office = images['headerOffice']
header_field = images['headerField']

html_content = f'''<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generador de Vacantes y Piezas Corporativas - i2 Services S.A.S.</title>
  <link rel="icon" type="image/png" href="{logo_data}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <!-- Vendor libraries for offline / online export -->
  <script src="/vacantes/vendor/html2canvas.min.js"></script>
  <script>if (typeof html2canvas === 'undefined') {{ document.write('<script src="vendor/html2canvas.min.js"><\\/script>'); }}</script>
  <script>if (typeof html2canvas === 'undefined') {{ document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"><\\/script>'); }}</script>
  <script src="/vacantes/vendor/jspdf.umd.min.js"></script>
  <script>if (typeof window.jspdf === 'undefined') {{ document.write('<script src="vendor/jspdf.umd.min.js"><\\/script>'); }}</script>
  <script>if (typeof window.jspdf === 'undefined') {{ document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"><\\/script>'); }}</script>

  <style>
    :root {{
      --navy-950: #040B17;
      --navy-900: #06152B;
      --navy-800: #0B2144;
      --navy-700: #14305D;
      --navy-card: #0D2244;
      --cyan: #01BBDC;
      --cyan-light: #38BDF8;
      --slate-400: #94A3B8;
      --slate-300: #CBD5E1;
      --slate-200: #E2E8F0;
      --ease: cubic-bezier(0.23, 1, 0.32, 1);
    }}

    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}

    body {{
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      background-color: #06152B;
      color: #F8FAFC;
      height: 100vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }}

    /* Custom subtle scrollbars */
    ::-webkit-scrollbar {{
      width: 6px;
      height: 6px;
    }}
    ::-webkit-scrollbar-track {{
      background: #040B17;
    }}
    ::-webkit-scrollbar-thumb {{
      background: #14305D;
      border-radius: 3px;
    }}
    ::-webkit-scrollbar-thumb:hover {{
      background: var(--cyan);
    }}

    /* Top App Header */
    .app-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 28px;
      background: #06152B;
      border-bottom: 1px solid rgba(1, 187, 220, 0.15);
      position: sticky;
      top: 0;
      z-index: 50;
      flex-shrink: 0;
    }}

    .brand-section {{
      display: flex;
      align-items: center;
      gap: 16px;
    }}

    .brand-logo-img {{
      height: 32px;
      width: auto;
      filter: brightness(0) invert(1);
    }}

    .brand-title h1 {{
      font-size: 16px;
      font-weight: 800;
      letter-spacing: -0.2px;
      color: #FFFFFF;
    }}

    .brand-title p {{
      font-size: 12px;
      color: var(--cyan);
      font-weight: 600;
    }}

    .header-actions {{
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }}

    .btn {{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 18px;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      border: none;
      transition: all 180ms var(--ease);
      user-select: none;
      text-decoration: none;
    }}

    .btn-cyan {{
      background: var(--cyan);
      color: #040B17;
      box-shadow: 0 4px 14px rgba(1, 187, 220, 0.25);
    }}
    .btn-cyan:hover {{
      background: #38BDF8;
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(1, 187, 220, 0.35);
    }}

    .btn-outline {{
      background: rgba(11, 33, 68, 0.8);
      border: 1px solid rgba(113, 140, 193, 0.3);
      color: #F8FAFC;
    }}
    .btn-outline:hover {{
      background: #14305D;
      border-color: var(--cyan);
      color: #FFFFFF;
    }}

    .btn-secondary {{
      background: transparent;
      color: #94A3B8;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }}
    .btn-secondary:hover {{
      color: #FFFFFF;
      background: rgba(255, 255, 255, 0.05);
    }}

    /* Main Workspace Layout */
    .workspace {{
      display: grid;
      grid-template-columns: 460px 1fr;
      flex: 1;
      height: calc(100vh - 65px);
      min-height: 0;
      overflow: hidden;
      background: #06152B;
    }}

    @media (max-width: 1180px) {{
      body {{
        height: auto;
        overflow-y: auto;
      }}
      .workspace {{
        grid-template-columns: 1fr;
        height: auto;
        min-height: calc(100vh - 65px);
        overflow: visible;
      }}
      .controls-panel {{
        height: auto !important;
        max-height: none !important;
        overflow: visible !important;
      }}
      .preview-panel {{
        height: auto !important;
        min-height: 700px;
        overflow: visible !important;
      }}
    }}

    /* Controls Panel */
    .controls-panel {{
      background: #06152B;
      border-right: 1px solid rgba(255, 255, 255, 0.08);
      padding: 24px;
      padding-bottom: 60px;
      overflow-y: auto;
      height: 100%;
    }}

    .panel-section {{
      background: #091C38;
      border: 1px solid rgba(113, 140, 193, 0.18);
      border-radius: 14px;
      padding: 18px;
      margin-bottom: 18px;
    }}

    .section-title {{
      font-size: 13px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--cyan);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }}

    /* Preset Buttons */
    .preset-grid {{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }}

    .preset-btn {{
      padding: 10px 12px;
      background: rgba(11, 33, 68, 0.7);
      border: 1px solid rgba(113, 140, 193, 0.25);
      border-radius: 10px;
      color: #E2E8F0;
      font-size: 12px;
      font-weight: 600;
      text-align: left;
      cursor: pointer;
      transition: all 160ms var(--ease);
      display: flex;
      flex-direction: column;
      gap: 2px;
    }}
    .preset-btn span.badge {{
      font-size: 10px;
      color: var(--cyan);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }}
    .preset-btn:hover {{
      background: #14305D;
      border-color: var(--cyan);
      transform: translateY(-1px);
    }}
    .preset-btn.active {{
      background: #01BBDC;
      color: #040B17;
      border-color: #01BBDC;
      box-shadow: 0 4px 12px rgba(1, 187, 220, 0.3);
    }}
    .preset-btn.active span.badge {{
      color: #040B17;
    }}

    /* Form Inputs */
    .form-group {{
      margin-bottom: 14px;
    }}
    .form-group:last-child {{
      margin-bottom: 0;
    }}

    label {{
      display: block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #94A3B8;
      margin-bottom: 6px;
    }}

    input[type="text"],
    input[type="email"],
    textarea,
    select {{
      width: 100%;
      background: #040B17;
      border: 1px solid rgba(113, 140, 193, 0.25);
      border-radius: 8px;
      padding: 9px 12px;
      color: #FFFFFF;
      font-family: inherit;
      font-size: 13px;
      outline: none;
      transition: border-color 160ms ease, box-shadow 160ms ease;
    }}
    input:focus,
    textarea:focus,
    select:focus {{
      border-color: var(--cyan);
      box-shadow: 0 0 0 2px rgba(1, 187, 220, 0.2);
    }}

    textarea {{
      resize: vertical;
      min-height: 85px;
      line-height: 1.5;
    }}

    .helper-text {{
      font-size: 11px;
      color: #64748B;
      margin-top: 4px;
    }}

    /* Image Selector */
    .image-selector-grid {{
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 6px;
      margin-bottom: 10px;
    }}

    .img-option {{
      height: 60px;
      border-radius: 8px;
      overflow: hidden;
      border: 2px solid transparent;
      cursor: pointer;
      position: relative;
      transition: all 160ms var(--ease);
      background: #040B17;
    }}
    .img-option img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }}
    .img-option:hover {{
      transform: scale(1.03);
      border-color: rgba(1, 187, 220, 0.5);
    }}
    .img-option.active {{
      border-color: var(--cyan);
      box-shadow: 0 0 0 2px rgba(1, 187, 220, 0.4);
    }}

    .img-option.img-none {{
      border: 1.5px dashed rgba(113, 140, 193, 0.35);
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(4, 11, 23, 0.8);
    }}
    .img-option.img-none:hover {{
      border-color: #EF4444;
      background: rgba(239, 68, 68, 0.1);
    }}
    .img-option.img-none.active {{
      border-color: #EF4444;
      box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.4);
    }}
    .no-photo-badge {{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      color: #94A3B8;
      font-size: 9.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      text-align: center;
      padding: 4px;
    }}
    .no-photo-badge svg {{
      color: #EF4444;
    }}

    /* Preview Canvas Area */
    .preview-panel {{
      background: radial-gradient(circle at 50% 30%, #081B38 0%, #030813 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 20px;
      overflow-y: auto;
      overflow-x: auto;
      height: 100%;
      position: relative;
    }}

    .preview-toolbar {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 820px;
      margin-bottom: 20px;
      background: rgba(6, 21, 43, 0.8);
      border: 1px solid rgba(113, 140, 193, 0.2);
      border-radius: 12px;
      padding: 8px 16px;
      backdrop-filter: blur(8px);
    }}

    .zoom-controls {{
      display: flex;
      align-items: center;
      gap: 6px;
    }}

    .zoom-btn {{
      padding: 4px 10px;
      background: rgba(11, 33, 68, 0.8);
      border: 1px solid rgba(113, 140, 193, 0.2);
      color: #CBD5E1;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
    }}
    .zoom-btn:hover, .zoom-btn.active {{
      background: var(--cyan);
      color: #040B17;
      border-color: var(--cyan);
    }}

    /* ========================================================
       POSTER CANVAS (EXACT 4:5 POSTER, 800 x 1000 px)
       ======================================================== */
    .poster-scale-wrapper {{
      position: relative;
      width: 800px;
      height: 1000px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      transition: width 180ms ease, height 180ms ease;
      flex-shrink: 0;
      margin-bottom: 24px;
    }}

    .poster-container {{
      width: 800px;
      height: 1000px;
      background: #06152B;
      border-radius: 16px;
      box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(113, 140, 193, 0.2);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transform-origin: top center;
      transition: transform 180ms ease;
      flex-shrink: 0;
    }}

    /* Top Photography Header Layer */
    .poster-header {{
      position: relative;
      width: 100%;
      height: 320px;
      overflow: hidden;
    }}

    .poster-bg-img {{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      filter: brightness(0.92) contrast(1.05);
    }}

    /* Smooth organic dark curve transition connecting photo to body */
    .poster-header-overlay {{
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(6, 21, 43, 0.15) 0%, rgba(6, 21, 43, 0.45) 50%, #06152B 98%);
      pointer-events: none;
    }}

    /* Organic curved wave overlay on bottom of header */
    .poster-header-wave {{
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 110px;
      pointer-events: none;
    }}

    /* Floating White Browser Window Card on Top Left */
    .browser-card {{
      position: absolute;
      top: 26px;
      left: 36px;
      width: 200px;
      background: #FFFFFF;
      border-radius: 14px;
      box-shadow: 0 16px 36px -6px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(0, 0, 0, 0.08);
      padding: 10px 14px 12px 14px;
      z-index: 10;
    }}

    .browser-dots {{
      display: flex;
      align-items: center;
      gap: 5px;
      padding-bottom: 8px;
      border-bottom: 1px solid #E2E8F0;
      margin-bottom: 10px;
    }}
    .browser-dot {{
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #94A3B8;
    }}

    .browser-logo-wrap {{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px 4px;
    }}
    .browser-logo-wrap img {{
      height: 48px;
      width: auto;
      object-fit: contain;
    }}

    /* Top Right Brand Tagline */
    .poster-top-tagline {{
      position: absolute;
      top: 20px;
      right: 36px;
      text-align: right;
      z-index: 10;
    }}

    .top-tagline-text {{
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #FFFFFF;
      line-height: 1.4;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
    }}

    .top-tagline-line {{
      width: 38px;
      height: 3px;
      background: var(--cyan);
      border-radius: 2px;
      margin-top: 8px;
      margin-left: auto;
      box-shadow: 0 0 10px var(--cyan);
    }}

    /* Poster Body */
    .poster-body {{
      padding: 0 36px 20px 36px;
      flex: 1;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 5;
      margin-top: -30px;
    }}

    /* Vacancy Pill */
    .vacancy-pill {{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 4px 14px;
      background: rgba(11, 33, 68, 0.85);
      border: 1px solid rgba(1, 187, 220, 0.35);
      border-radius: 20px;
      width: fit-content;
      margin-bottom: 10px;
    }}
    .vacancy-pill-icon {{
      color: var(--cyan);
      font-size: 13px;
    }}
    .vacancy-pill-text {{
      font-size: 13px;
      font-weight: 700;
      color: #FFFFFF;
      letter-spacing: 0.04em;
    }}

    /* Big Headline */
    .poster-job-title {{
      font-size: 34px;
      font-weight: 900;
      color: #FFFFFF;
      line-height: 1.12;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      margin-bottom: 4px;
      word-break: break-word;
    }}

    .poster-job-subtitle {{
      font-size: 15px;
      font-weight: 700;
      color: var(--cyan);
      letter-spacing: 0.04em;
      margin-bottom: 22px;
    }}

    /* 2-Column Grid */
    .poster-columns {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      flex: 1;
    }}

    .column-section {{
      margin-bottom: 16px;
    }}

    .col-heading {{
      font-size: 13px;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--cyan);
      margin-bottom: 7px;
    }}

    .col-paragraph {{
      font-size: 11.5px;
      line-height: 1.55;
      color: var(--slate-200);
      font-weight: 400;
      text-align: justify;
    }}

    .bullet-list {{
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }}

    .bullet-item {{
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 11px;
      line-height: 1.45;
      color: #F1F5F9;
    }}

    .bullet-dot {{
      width: 4.5px;
      height: 4.5px;
      border-radius: 50%;
      background: var(--cyan);
      margin-top: 6px;
      flex-shrink: 0;
    }}

    /* Important info key-value list */
    .info-list {{
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 11px;
      line-height: 1.4;
      color: #F1F5F9;
    }}
    .info-list-item strong {{
      color: var(--cyan);
      font-weight: 700;
      letter-spacing: 0.02em;
    }}

    /* Callout Banner (Optional) */
    .callout-box {{
      background: rgba(11, 33, 68, 0.7);
      border: 1px solid rgba(1, 187, 220, 0.25);
      border-radius: 10px;
      padding: 10px 14px;
      font-size: 10.5px;
      line-height: 1.45;
      color: #E2E8F0;
      margin-top: 10px;
    }}
    .callout-box strong {{
      color: #FFFFFF;
    }}

    /* Bottom Highlight Pill Bar */
    .poster-highlight-bar {{
      background: rgba(11, 33, 68, 0.85);
      border: 1px solid rgba(1, 187, 220, 0.4);
      border-radius: 16px;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: auto;
      margin-bottom: 12px;
      box-shadow: 0 8px 24px rgba(4, 11, 23, 0.6);
    }}

    .highlight-item {{
      display: flex;
      align-items: center;
      gap: 12px;
    }}

    .highlight-icon-wrap {{
      width: 34px;
      height: 34px;
      border-radius: 10px;
      background: rgba(1, 187, 220, 0.15);
      border: 1px solid rgba(1, 187, 220, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--cyan);
      flex-shrink: 0;
    }}

    .highlight-content {{
      display: flex;
      flex-direction: column;
    }}
    .highlight-title {{
      font-size: 12px;
      font-weight: 800;
      color: #FFFFFF;
      line-height: 1.25;
    }}
    .highlight-sub {{
      font-size: 10.5px;
      color: var(--slate-300);
      font-weight: 500;
    }}
    .highlight-sub.cyan {{
      color: var(--cyan);
      font-weight: 800;
      font-size: 12px;
    }}

    /* Poster Bottom Footer */
    .poster-footer {{
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 8px;
      padding-bottom: 4px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      position: relative;
    }}

    .footer-left {{
      font-size: 8.5px;
      font-weight: 800;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #475569;
      line-height: 1.3;
    }}

    .footer-center {{
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 15px;
      font-weight: 800;
      color: #FFFFFF;
      letter-spacing: 0.02em;
    }}
    .footer-mail-icon {{
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 1.5px solid #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
    }}

    /* Geometric pixel grid in bottom right corner */
    .footer-pixel-grid {{
      display: grid;
      grid-template-columns: repeat(4, 9px);
      gap: 3px;
      opacity: 0.6;
    }}
    .pixel-tile {{
      width: 9px;
      height: 9px;
      background: #0B2144;
      border-radius: 2px;
    }}
    .pixel-tile.cyan {{
      background: var(--cyan);
      opacity: 0.7;
    }}

    /* Toast Notification */
    .toast {{
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #01BBDC;
      color: #040B17;
      padding: 12px 22px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 800;
      box-shadow: 0 10px 30px rgba(1, 187, 220, 0.4);
      z-index: 999;
      display: flex;
      align-items: center;
      gap: 10px;
      transform: translateY(100px);
      opacity: 0;
      transition: all 260ms var(--ease);
      pointer-events: none;
    }}
    .toast.show {{
      transform: translateY(0);
      opacity: 1;
    }}

    /* ============================================================
       ONBOARDING TUTORIAL & GUIDED TOUR STYLES
       ============================================================ */
    .btn-tour {{
      background: rgba(1, 187, 220, 0.12);
      border: 1px solid rgba(1, 187, 220, 0.4);
      color: #38BDF8;
      position: relative;
    }}
    .btn-tour:hover {{
      background: rgba(1, 187, 220, 0.22);
      border-color: #38BDF8;
      color: #FFFFFF;
      box-shadow: 0 4px 16px rgba(1, 187, 220, 0.3);
    }}
    .tour-pulse {{
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #01BBDC;
      box-shadow: 0 0 0 0 rgba(1, 187, 220, 0.7);
      animation: tourPulse 2s infinite;
    }}
    @keyframes tourPulse {{
      0% {{
        box-shadow: 0 0 0 0 rgba(1, 187, 220, 0.7);
      }}
      70% {{
        box-shadow: 0 0 0 8px rgba(1, 187, 220, 0);
      }}
      100% {{
        box-shadow: 0 0 0 0 rgba(1, 187, 220, 0);
      }}
    }}

    /* Tour Overlay Backdrop */
    .tour-overlay {{
      position: fixed;
      inset: 0;
      z-index: 99990;
      pointer-events: none;
      opacity: 0;
      transition: opacity 240ms var(--ease);
    }}
    .tour-overlay.active {{
      opacity: 1;
      pointer-events: auto;
    }}
    .tour-overlay.center-mode {{
      background: rgba(4, 11, 23, 0.82);
      backdrop-filter: blur(4px);
    }}

    /* Spotlight Cutout Hole with Glowing Cyan Border */
    .tour-spotlight {{
      position: fixed;
      border-radius: 14px;
      box-shadow: 0 0 0 9999px rgba(4, 11, 23, 0.82), 0 0 0 3px #01BBDC, 0 0 30px rgba(1, 187, 220, 0.5);
      pointer-events: none;
      transition: all 300ms var(--ease);
      opacity: 0;
      z-index: 99991;
    }}
    .tour-spotlight.visible {{
      opacity: 1;
    }}

    /* Floating Bubble Card */
    .tour-bubble {{
      position: fixed;
      z-index: 99999;
      width: 440px;
      max-width: calc(100vw - 32px);
      background: linear-gradient(145deg, #0D2244 0%, #06152B 100%);
      border: 1px solid rgba(1, 187, 220, 0.45);
      border-radius: 18px;
      padding: 22px 24px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(1, 187, 220, 0.25);
      backdrop-filter: blur(20px);
      transition: top 320ms var(--ease), left 320ms var(--ease), transform 320ms var(--ease), opacity 240ms var(--ease);
      opacity: 0;
      transform: scale(0.96);
      color: #F8FAFC;
    }}
    .tour-bubble.visible {{
      opacity: 1;
      transform: scale(1);
    }}
    .tour-bubble.center {{
      width: 480px;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) scale(1) !important;
    }}

    /* Pointing Arrow */
    .tour-arrow {{
      position: absolute;
      width: 14px;
      height: 14px;
      background: #0D2244;
      border: 1px solid rgba(1, 187, 220, 0.45);
      transform: rotate(45deg);
      pointer-events: none;
    }}
    .tour-arrow.arrow-left {{
      left: -8px;
      top: 36px;
      border-top: none;
      border-right: none;
    }}
    .tour-arrow.arrow-right {{
      right: -8px;
      top: 36px;
      border-bottom: none;
      border-left: none;
    }}
    .tour-arrow.arrow-top {{
      top: -8px;
      right: 48px;
      border-bottom: none;
      border-right: none;
    }}
    .tour-arrow.arrow-bottom {{
      bottom: -8px;
      left: 36px;
      border-top: none;
      border-left: none;
    }}
    .tour-arrow.arrow-hidden {{
      display: none;
    }}

    /* Bubble Content */
    .tour-bubble-header {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
    }}
    .tour-badge {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(1, 187, 220, 0.15);
      border: 1px solid rgba(1, 187, 220, 0.4);
      color: #38BDF8;
      font-size: 11px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 20px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }}
    .tour-close-btn {{
      background: transparent;
      border: none;
      color: #94A3B8;
      cursor: pointer;
      padding: 4px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 160ms var(--ease);
    }}
    .tour-close-btn:hover {{
      color: #FFFFFF;
      background: rgba(255, 255, 255, 0.1);
    }}

    .tour-bubble-title {{
      font-size: 17px;
      font-weight: 800;
      color: #FFFFFF;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
      line-height: 1.3;
    }}
    .tour-bubble-body {{
      font-size: 13px;
      color: #CBD5E1;
      line-height: 1.55;
      margin-bottom: 20px;
    }}

    .tour-bubble-footer {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 14px;
      gap: 12px;
    }}
    .tour-dots {{
      display: flex;
      align-items: center;
      gap: 6px;
    }}
    .tour-dot {{
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      transition: all 200ms var(--ease);
      cursor: pointer;
    }}
    .tour-dot.active {{
      width: 20px;
      border-radius: 10px;
      background: var(--cyan);
      box-shadow: 0 0 10px rgba(1, 187, 220, 0.6);
    }}

    .tour-nav-btns {{
      display: flex;
      align-items: center;
      gap: 8px;
    }}
    .btn-tour-skip {{
      background: transparent;
      border: none;
      color: #94A3B8;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      padding: 6px 10px;
      border-radius: 6px;
      transition: color 160ms var(--ease);
    }}
    .btn-tour-skip:hover {{
      color: #FFFFFF;
      text-decoration: underline;
    }}
    .btn-tour-prev {{
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #CBD5E1;
      padding: 7px 14px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      transition: all 160ms var(--ease);
    }}
    .btn-tour-prev:hover {{
      background: rgba(255, 255, 255, 0.12);
      color: #FFFFFF;
    }}
    .btn-tour-next {{
      background: var(--cyan);
      border: none;
      color: #040B17;
      padding: 7px 16px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(1, 187, 220, 0.35);
      transition: all 160ms var(--ease);
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }}
    .btn-tour-next:hover {{
      background: #38BDF8;
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(1, 187, 220, 0.45);
    }}

  </style>
</head>
<body>

  <!-- Top Application Header -->
  <header class="app-header">
    <div class="brand-section">
      <img src="{logo_data}" alt="i2 Services" class="brand-logo-img">
      <div class="brand-title">
        <h1>Generador de Vacantes</h1>
        <p>i2 Services S.A.S. · Creative Suite</p>
      </div>
    </div>

    <div class="header-actions" id="stepExport">
      <button class="btn btn-tour" id="btnStartTour" onclick="startTutorial(true)" title="Ver tutorial guiado paso a paso">
        <span class="tour-pulse"></span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
        <span>¿Cómo funciona? (Tutorial)</span>
      </button>
      <button class="btn btn-secondary" onclick="resetDefaults()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        Restablecer
      </button>

      <button class="btn btn-outline" onclick="copyImageToClipboard()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        Copiar Imagen
      </button>

      <button class="btn btn-cyan" onclick="exportAsJPEG()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        Descargar JPEG (HD)
      </button>

      <button class="btn btn-outline" onclick="exportAsPDF()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        Descargar PDF
      </button>
    </div>
  </header>

  <!-- Workspace: Controls Left, Live Preview Right -->
  <main class="workspace">
    
    <!-- Controls Sidebar -->
    <aside class="controls-panel">
      
      <!-- 1. Presets Rápidos -->
      <div class="panel-section" id="stepPresets">
        <div class="section-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
          Plantillas Rápidas (1 Clic)
        </div>
        <div class="preset-grid">
          <button class="preset-btn active" onclick="loadPreset('social')">
            <span class="badge">Ejemplo 1</span>
            Social Media Manager
          </button>
          <button class="preset-btn" onclick="loadPreset('diseno')">
            <span class="badge">Ejemplo 2</span>
            Diseñador/a Gráfico/a
          </button>
          <button class="preset-btn" onclick="loadPreset('geologo')">
            <span class="badge">Minería</span>
            Geólogo/a Senior
          </button>
          <button class="preset-btn" onclick="loadPreset('legal')">
            <span class="badge">Legal</span>
            Abogado/a Corporativo
          </button>
        </div>
      </div>

      <!-- 2. Cargo y Subtítulo -->
      <div class="panel-section" id="stepJobTitle">
        <div class="section-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Título del Cargo
        </div>
        <div class="form-group">
          <label>Insignia Superior</label>
          <input type="text" id="inputBadge" value="Vacante" oninput="updatePoster()">
        </div>
        <div class="form-group">
          <label>Título de la Vacante</label>
          <input type="text" id="inputTitle" value="SOCIAL MEDIA MANAGER." oninput="updatePoster()">
        </div>
        <div class="form-group">
          <label>Subtítulo / Especialidad</label>
          <input type="text" id="inputSubtitle" value="(Perfil Digital + Distribución)" oninput="updatePoster()">
        </div>
      </div>

      <!-- 3. Fotografía de Cabecera -->
      <div class="panel-section" id="stepHeaderPhoto">
        <div class="section-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
          Fotografía de Cabecera
        </div>
        <div class="image-selector-grid">
          <div class="img-option active" id="opt-creative" onclick="selectImage('creative')" title="Estudio Creativo & Video (Limpio)">
            <img src="{header_creative}" alt="Estudio Creativo">
          </div>
          <div class="img-option" id="opt-tech" onclick="selectImage('tech')" title="Tecnología & Analítica (Limpio)">
            <img src="{header_tech}" alt="Tecnología">
          </div>
          <div class="img-option" id="opt-office" onclick="selectImage('office')" title="Oficina Medellín Torre Davivienda">
            <img src="{header_office}" alt="Oficina Davivienda">
          </div>
          <div class="img-option" id="opt-field" onclick="selectImage('field')" title="Operación de Campo Antioquia">
            <img src="{header_field}" alt="Campo Antioquia">
          </div>
          <div class="img-option img-none" id="opt-none" onclick="selectImage('none')" title="Sin fotografía (Fondo corporativo)">
            <div class="no-photo-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              <span>Sin Foto</span>
            </div>
          </div>
        </div>

        <div style="margin-bottom: 12px;">
          <button type="button" class="btn btn-secondary" onclick="removePhoto()" style="padding: 7px 12px; font-size: 11px; width: 100%; justify-content: center; color: #FDA4AF; border-color: rgba(239, 68, 68, 0.3);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
            Quitar / Dejar Sin Fotografía de Fondo
          </button>
        </div>

        <div class="form-group">
          <label>O Subir Foto Personalizada</label>
          <input type="file" id="customPhotoInput" accept="image/*" onchange="handleCustomPhoto(event)" style="font-size:12px; color:#94A3B8;">
        </div>

        <div class="form-group">
          <label>Tagline Superior Derecho</label>
          <input type="text" id="inputTopTagline" value="TECNOLOGÍA QUE IMPULSA POSIBILIDADES" oninput="updatePoster()">
        </div>
      </div>

      <!-- 4. Contenido Principal: Objetivo y Responsabilidades -->
      <div class="panel-section" id="stepObjective">
        <div class="section-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          Columna Izquierda
        </div>
        <div class="form-group">
          <label>Título Sección 1</label>
          <input type="text" id="inputCol1Title1" value="OBJETIVO DEL ROL" oninput="updatePoster()">
        </div>
        <div class="form-group">
          <label>Párrafo Objetivo</label>
          <textarea id="inputObjective" rows="3" oninput="updatePoster()">Gestionar y potenciar la presencia digital de las compañías y del CEO, creando contenido estratégico que eduque, genere confianza y fortalezca la narrativa frente a inversionistas globales.</textarea>
        </div>
        <div class="form-group">
          <label>Título Sección 2</label>
          <input type="text" id="inputCol1Title2" value="RESPONSABILIDADES" oninput="updatePoster()">
        </div>
        <div class="form-group">
          <label>Viñetas de Responsabilidades (1 por línea)</label>
          <textarea id="inputResponsibilities" rows="6" oninput="updatePoster()">Gestionar el calendario de publicaciones en X, LinkedIn, Instagram y YouTube.
Crear y programar contenido digital: gráficos, carruseles, reels, citas y piezas educativas.
Reutilizar entrevistas, presentaciones y contenido de campo en formatos digitales dinámicos.
Desarrollar series educativas sobre temas estratégicos (plata, cobre, IA, tendencias macro).
Coordinar revisiones con el equipo de comunicaciones y relaciones con inversionistas.
Monitorear métricas de engagement y proponer mejoras de crecimiento.
Alinear el contenido con el calendario corporativo (conferencias, anuncios, catalizadores).</textarea>
          <p class="helper-text">Cada salto de línea crea automáticamente una viñeta.</p>
        </div>
      </div>

      <!-- 5. Columna Derecha: Perfil, Requisitos y Competencias -->
      <div class="panel-section" id="stepRequirements">
        <div class="section-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Columna Derecha
        </div>
        <div class="form-group">
          <label>Título Sección 1</label>
          <input type="text" id="inputCol2Title1" value="PERFIL QUE BUSCAMOS" oninput="updatePoster()">
        </div>
        <div class="form-group">
          <label>Requisitos (1 por línea)</label>
          <textarea id="inputRequirements" rows="5" oninput="updatePoster()">Experiencia gestionando redes sociales corporativas o de marca personal.
Capacidad para crear contenido claro, atractivo y alineado con narrativa estratégica.
Manejo de herramientas como Canva, CapCut, Premiere u otras similares.
Entendimiento de algoritmos y tendencias digitales.
Nivel de inglés conversacional para coordinación internacional.</textarea>
        </div>
        
        <div class="form-group">
          <label>Título Sección 2 (Opcional)</label>
          <input type="text" id="inputCol2Title2" value="" placeholder="Ej: COMPETENCIAS O HERRAMIENTAS" oninput="updatePoster()">
        </div>
        <div class="form-group">
          <label>Competencias / Puntos Adicionales (Opcional, 1 por línea)</label>
          <textarea id="inputCompetencies" rows="3" placeholder="Puntos adicionales (dejar vacío si no se requiere)..." oninput="updatePoster()"></textarea>
          <p class="helper-text">La información de ciudad, jornada y modalidad se muestra automáticamente en la barra inferior.</p>
        </div>

        <div class="form-group">
          <label>Llamado / Nota de Postulación (Opcional)</label>
          <textarea id="inputCallout" rows="3" placeholder="Ej: Si cumples con el perfil, envía tu CV a..." oninput="updatePoster()"></textarea>
          <p class="helper-text">Caja destacada al pie de la columna derecha.</p>
        </div>
      </div>

      <!-- 6. Barra Inferior y Contacto -->
      <div class="panel-section" id="stepContact">
        <div class="section-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          Datos de Contacto y Fechas
        </div>
        <div class="form-group">
          <label>Ubicación</label>
          <input type="text" id="inputLocation" value="Medellín, Colombia" oninput="updatePoster()">
        </div>
        <div class="form-group">
          <label>Modalidad / Jornada</label>
          <input type="text" id="inputModality" value="Presencial | Tiempo completo" oninput="updatePoster()">
        </div>
        <div class="form-group">
          <label>Habilidad Clave Central (Opcional)</label>
          <input type="text" id="inputHighlightExtra" value="" placeholder="Ej: Excelente manejo de Social Media" oninput="updatePoster()">
        </div>
        <div class="form-group">
          <label>Texto de Fecha</label>
          <input type="text" id="inputDeadlineLabel" value="Recepción de hojas de vida:" oninput="updatePoster()">
        </div>
        <div class="form-group">
          <label>Fecha Límite</label>
          <input type="text" id="inputDeadline" value="10 de Noviembre del 2026" oninput="updatePoster()">
        </div>
        <div class="form-group">
          <label>Correo Electrónico para Postulaciones</label>
          <input type="email" id="inputEmail" value="yurany.sanchez@i2services.co" oninput="updatePoster()">
        </div>
        <div class="form-group">
          <label>Lema Inferior Izquierdo</label>
          <input type="text" id="inputFooterTag" value="PEOPLE · TECHNOLOGY · REAL IMPACT" oninput="updatePoster()">
        </div>
      </div>

    </aside>

    <!-- Live Preview Canvas -->
    <section class="preview-panel" id="stepPreview">
      
      <!-- Toolbar -->
      <div class="preview-toolbar">
        <div style="font-size:12px; font-weight:700; color:#CBD5E1; display:flex; align-items:center; gap:8px;">
          <span style="width:8px; height:8px; border-radius:50%; background:#10B981; display:inline-block;"></span>
          Vista Previa en Vivo (800 × 1000 px)
        </div>
        
        <div class="zoom-controls">
          <button class="zoom-btn" onclick="setZoom(0.7)">70%</button>
          <button class="zoom-btn active" id="btnZoomFit" onclick="setZoom('fit')">Ajustar</button>
          <button class="zoom-btn" onclick="setZoom(1.0)">100%</button>
        </div>
      </div>

      <!-- Poster Artboard (800 x 1000 px) -->
      <div class="poster-scale-wrapper" id="posterScaleWrapper">
        <div class="poster-container" id="posterArtboard">
        
        <!-- 1. Header with Photo & Organic Curve Overlay -->
        <div class="poster-header">
          <img src="{header_creative}" alt="Banner" class="poster-bg-img" id="posterHeaderImg">
          
          <div class="poster-header-overlay"></div>

          <!-- SVG Organic Wave for smooth transition into body -->
          <svg class="poster-header-wave" viewBox="0 0 800 110" preserveAspectRatio="none">
            <path d="M0,0 C180,95 380,105 800,45 L800,110 L0,110 Z" fill="#06152B" />
          </svg>

          <!-- Floating Browser Mockup Window Card on Top Left -->
          <div class="browser-card">
            <div class="browser-dots">
              <span class="browser-dot" style="background:#EF4444;"></span>
              <span class="browser-dot" style="background:#F59E0B;"></span>
              <span class="browser-dot" style="background:#10B981;"></span>
            </div>
            <div class="browser-logo-wrap">
              <img src="{logo_data}" alt="i2 Services Logo">
            </div>
          </div>

          <!-- Top Right Tagline -->
          <div class="poster-top-tagline">
            <div class="top-tagline-text" id="posterTopTagline">
              TECNOLOGÍA<br>QUE IMPULSA<br>POSIBILIDADES
            </div>
            <div class="top-tagline-line"></div>
          </div>
        </div>

        <!-- 2. Poster Body -->
        <div class="poster-body">
          
          <!-- Badge -->
          <div class="vacancy-pill">
            <span class="vacancy-pill-icon">❖</span>
            <span class="vacancy-pill-text" id="posterBadge">Vacante</span>
          </div>

          <!-- Title & Subtitle -->
          <h2 class="poster-job-title" id="posterTitle">SOCIAL MEDIA MANAGER.</h2>
          <div class="poster-job-subtitle" id="posterSubtitle">(Perfil Digital + Distribución)</div>

          <!-- 2 Columns of Content -->
          <div class="poster-columns">
            
            <!-- Column 1: Objetivo + Responsabilidades -->
            <div class="poster-col">
              <div class="column-section">
                <div class="col-heading" id="posterCol1Heading1">OBJETIVO DEL ROL</div>
                <p class="col-paragraph" id="posterObjective">
                  Gestionar y potenciar la presencia digital de las compañías y del CEO, creando contenido estratégico que eduque, genere confianza y fortalezca la narrativa frente a inversionistas globales.
                </p>
              </div>

              <div class="column-section" style="margin-bottom:0;">
                <div class="col-heading" id="posterCol1Heading2">RESPONSABILIDADES</div>
                <ul class="bullet-list" id="posterResponsibilities">
                  <!-- Injected dynamically -->
                </ul>
              </div>
            </div>

            <!-- Column 2: Perfil y Requisitos (Limpio, sin repetir datos de la barra) -->
            <div class="poster-col">
              <div class="column-section">
                <div class="col-heading" id="posterCol2Heading1">PERFIL QUE BUSCAMOS</div>
                <ul class="bullet-list" id="posterRequirements">
                  <!-- Injected dynamically -->
                </ul>
              </div>

              <!-- Optional Section 2 for extra skills or competencies -->
              <div class="column-section" id="posterCol2Section2" style="display:none; margin-bottom:12px;">
                <div class="col-heading" id="posterCol2Heading2">COMPETENCIAS</div>
                <ul class="bullet-list" id="posterCompetencies">
                  <!-- Injected dynamically -->
                </ul>
              </div>

              <!-- Postulation Callout Box -->
              <div class="callout-box" id="posterCalloutBox" style="display:none;">
                <span id="posterCalloutText"></span>
              </div>
            </div>

          </div>

          <!-- 3. Bottom Highlight Card Bar -->
          <div class="poster-highlight-bar" id="posterHighlightBar">
            
            <!-- Location -->
            <div class="highlight-item">
              <div class="highlight-icon-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="highlight-content">
                <span class="highlight-title" id="posterLocation">Medellín, Colombia</span>
                <span class="highlight-sub" id="posterModality">Presencial | Tiempo completo</span>
              </div>
            </div>

            <!-- Middle Extra (Optional) -->
            <div class="highlight-item" id="highlightExtraItem" style="display:none;">
              <div class="highlight-icon-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div class="highlight-content">
                <span class="highlight-title" id="posterHighlightExtraTitle">Habilidad Clave</span>
                <span class="highlight-sub" id="posterHighlightExtraSub">Requisito</span>
              </div>
            </div>

            <!-- Calendar / Deadline -->
            <div class="highlight-item">
              <div class="highlight-icon-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              </div>
              <div class="highlight-content">
                <span class="highlight-sub" id="posterDeadlineLabel">Recepción de hojas de vida:</span>
                <span class="highlight-sub cyan" id="posterDeadline">10 de Noviembre del 2026</span>
              </div>
            </div>

          </div>

          <!-- 4. Footer -->
          <div class="poster-footer">
            <div class="footer-left" id="posterFooterTag">
              PEOPLE<br>TECHNOLOGY<br>REAL IMPACT
            </div>

            <div class="footer-center">
              <div class="footer-mail-icon">✉</div>
              <span id="posterEmail">yurany.sanchez@i2services.co</span>
            </div>

            <div class="footer-pixel-grid">
              <div class="pixel-tile"></div>
              <div class="pixel-tile cyan"></div>
              <div class="pixel-tile"></div>
              <div class="pixel-tile cyan"></div>
              <div class="pixel-tile cyan"></div>
              <div class="pixel-tile"></div>
              <div class="pixel-tile cyan"></div>
              <div class="pixel-tile"></div>
            </div>
          </div>

        </div>

      </div>
      </div>

    </section>

  </main>

  <!-- Toast Notification -->
  <div class="toast" id="toastNotification">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span id="toastMessage">Operación exitosa</span>
  </div>

  <script>
    // Embedded image assets
    const ASSETS = {{
      headerCreative: "{header_creative}",
      headerTech: "{header_tech}",
      headerOffice: "{header_office}",
      headerField: "{header_field}"
    }};

    let currentHeaderImage = ASSETS.headerCreative;

    // Presets Database
    const PRESETS = {{
      social: {{
        badge: "Vacante",
        title: "SOCIAL MEDIA MANAGER.",
        subtitle: "(Perfil Digital + Distribución)",
        headerImg: ASSETS.headerCreative,
        topTagline: "TECNOLOGÍA\\nQUE IMPULSA\\nPOSIBILIDADES",
        col1Heading1: "OBJETIVO DEL ROL",
        objective: "Gestionar y potenciar la presencia digital de las compañías y del CEO, creando contenido estratégico que eduque, genere confianza y fortalezca la narrativa frente a inversionistas globales.",
        col1Heading2: "RESPONSABILIDADES",
        responsibilities: [
          "Gestionar el calendario de publicaciones en X, LinkedIn, Instagram y YouTube.",
          "Crear y programar contenido digital: gráficos, carruseles, reels, citas y piezas educativas.",
          "Reutilizar entrevistas, presentaciones y contenido de campo en formatos digitales dinámicos.",
          "Desarrollar series educativas sobre temas estratégicos (plata, cobre, IA, tendencias macro).",
          "Coordinar revisiones con el equipo de comunicaciones y relaciones con inversionistas.",
          "Monitorear métricas de engagement y proponer mejoras de crecimiento.",
          "Alinear el contenido con el calendario corporativo (conferencias, anuncios, catalizadores)."
        ],
        col2Heading1: "PERFIL QUE BUSCAMOS",
        requirements: [
          "Experiencia gestionando redes sociales corporativas o de marca personal.",
          "Capacidad para crear contenido claro, atractivo y alineado con narrativa estratégica.",
          "Manejo de herramientas como Canva, CapCut, Premiere u otras similares.",
          "Entendimiento de algoritmos y tendencias de crecimiento digital.",
          "Inglés conversacional para interacción con equipos y socios internacionales."
        ],
        col2Heading2: "",
        competencies: [],
        callout: "Si cumples con el perfil y quieres sumarte a un equipo dinámico, envía tu CV con el asunto 'Vacante Social Media Manager' a yurany.sanchez@i2services.co",
        location: "Medellín, Colombia",
        modality: "Presencial | Tiempo completo",
        highlightExtra: "",
        deadlineLabel: "Recepción de hojas de vida:",
        deadline: "10 de Noviembre del 2026",
        email: "yurany.sanchez@i2services.co",
        footerTag: "PEOPLE\\nTECHNOLOGY\\nREAL IMPACT"
      }},

      diseno: {{
        badge: "Vacante",
        title: "DISEÑADOR/A GRÁFICO/A Y CREADOR/A DE CONTENIDO",
        subtitle: "(PERFIL CREATIVO + ESTRATÉGICO + AUDIOVISUAL)",
        headerImg: ASSETS.headerCreative,
        topTagline: "TECNOLOGÍA\\nQUE IMPULSA\\nPOSIBILIDADES",
        col1Heading1: "Objetivo del Cargo",
        objective: "Buscamos un/a Diseñador/a Gráfico/a integral, creativo/a y apasionado/a por las marcas, con un sólido criterio visual y capacidad para llevar la identidad gráfica a múltiples formatos digitales. Participará en la creación visual, producción de contenido, edición de video básico, gestión de redes sociales y medición de resultados.",
        col1Heading2: "Responsabilidades Principales",
        responsibilities: [
          "Diseñar piezas gráficas estáticas y animadas para redes sociales, sitio web y material corporativo.",
          "Velar por la coherencia estética e identidad de las marcas asignadas.",
          "Planificar y dirigir sesiones de fotografía y grabación de video corporativo.",
          "Manejar equipos de fotografía y video (cámaras DSLR/Mirrorless e iluminación básica).",
          "Realizar edición de video básico en formatos ágiles para redes sociales.",
          "Programar y publicar contenidos en distintas plataformas digitales.",
          "Extraer y reportar métricas clave para proponer mejoras basadas en datos."
        ],
        col2Heading1: "Requisitos y Perfil",
        requirements: [
          "Formación en Diseño Gráfico, Publicidad, Comunicación Audiovisual o afines.",
          "Mínimo 3 años de experiencia demostrable en creación de contenido (portafolio indispensable).",
          "Inglés intermedio - alto B2/C1 (redactar y mantener conversaciones de trabajo).",
          "Excelente sensibilidad visual, buen gusto y atención rigurosa al detalle."
        ],
        col2Heading2: "Competencias Técnicas",
        competencies: [
          "Dominio avanzado de Photoshop, Illustrator y Lightroom.",
          "Edición de video ágil en CapCut, Premiere o Filmora.",
          "Social Media & Analítica (Meta Business Suite, TikTok Center, Metricool)."
        ],
        callout: "Si cumples con el perfil y quieres sumarte a un equipo dinámico, envía tu CV junto con el enlace a tu Portafolio a diseno@i2services.co con el asunto 'Vacante Diseñador/a Gráfico/a'",
        location: "Medellín, Antioquia",
        modality: "100% Presencial | Tiempo completo",
        highlightExtra: "Excelente manejo de Social Media",
        deadlineLabel: "Recepción de portafolios y hojas de vida:",
        deadline: "25 de Octubre del 2026",
        email: "diseno@i2services.co",
        footerTag: "PEOPLE\\nTECHNOLOGY\\nREAL IMPACT"
      }},

      geologo: {{
        badge: "Convocatoria Minera",
        title: "GEÓLOGO/A SENIOR DE EXPLORACIÓN.",
        subtitle: "(Cartografía + Sondajes + QA/QC)",
        headerImg: ASSETS.headerField,
        topTagline: "TECNOLOGÍA\\nQUE IMPULSA\\nPOSIBILIDADES",
        col1Heading1: "OBJETIVO DEL ROL",
        objective: "Liderar y supervisar la campaña técnica de perforación diamantina, registro geológico de testigos (core logging) y control de calidad QA/QC para proyectos mineros de exploración en Antioquia bajo estándares internacionales NI 43-101 / JORC.",
        col1Heading2: "RESPONSABILIDADES",
        responsibilities: [
          "Supervisar plataformas de perforación diamantina en campo.",
          "Logueo geológico, geotécnico y estructural de testigos de perforación.",
          "Administración rigurosa del protocolo de muestreo y envío a laboratorio (ALS/SGS).",
          "Modelamiento geológico 3D preliminar en Leapfrog Geo.",
          "Elaboración de informes técnicos de avance para la gerencia en Medellín y casa matriz.",
          "Cumplimiento estricto de normas de seguridad industrial y relaciones comunitarias."
        ],
        col2Heading1: "PERFIL REQUERIDO",
        requirements: [
          "Profesional en Geología o Ingeniería Geológica con matrícula profesional vigente.",
          "Mínimo 5 años de experiencia en exploración de metales preciosos o pórfidos.",
          "Manejo de software especializado (Leapfrog, ArcGIS/QGIS, Excel avanzado).",
          "Nivel de inglés técnico fluido (reportes a casa matriz canadiense/australiana).",
          "Disponibilidad para turnos de campo en campamento."
        ],
        col2Heading2: "COMPETENCIAS TÉCNICAS",
        competencies: [
          "Protocolos de muestreo y control QA/QC según estándares NI 43-101 / JORC.",
          "Registro geológico, geotécnico y estructural de testigos de perforación."
        ],
        callout: "Si cumples con el perfil, envía tu hoja de vida con el asunto 'Vacante Geólogo/a Senior' a operaciones@i2services.co",
        location: "Antioquia, Colombia",
        modality: "Turnos 14x7 · Campamento",
        highlightExtra: "Estándares NI 43-101 / JORC",
        deadlineLabel: "Recepción de postulaciones:",
        deadline: "15 de Noviembre del 2026",
        email: "operaciones@i2services.co",
        footerTag: "PEOPLE\\nTECHNOLOGY\\nREAL IMPACT"
      }},

      legal: {{
        badge: "Oportunidad Laboral",
        title: "ABOGADO/A CORPORATIVO & MINERO.",
        subtitle: "(ANM + Cumplimiento + Contratos)",
        headerImg: ASSETS.headerOffice,
        topTagline: "TECNOLOGÍA\\nQUE IMPULSA\\nPOSIBILIDADES",
        col1Heading1: "OBJETIVO DEL ROL",
        objective: "Garantizar la seguridad jurídica de las concesiones mineras, trámites ante la Agencia Nacional de Minería (ANM), contratos comerciales de exploración, debida diligencia SAGRILAFT y gobierno corporativo para clientes listados en bolsas internacionales (TSX/ASX).",
        col1Heading2: "RESPONSABILIDADES",
        responsibilities: [
          "Gestión de títulos mineros y radicación de trámites en Anna Minería.",
          "Seguimiento y control de pagos de cánones superficiarios y pólizas minero-ambientales.",
          "Elaboración y revisión de contratos de servidumbre, obra civil y prestación de servicios.",
          "Cumplimiento corporativo SAGRILAFT y prevención de lavado de activos.",
          "Atención de requerimientos ante la ANM, Corantioquia y secretarías de minas.",
          "Auditoría legal preventiva de expedientes mineros y societarios."
        ],
        col2Heading1: "PERFIL PROFESIONAL",
        requirements: [
          "Abogado/a graduado/a con especialización en Derecho Minero, Comercial o Ambiental.",
          "Mínimo 3 años de experiencia en el sector minero-energético o firmas corporativas.",
          "Dominio comprobado de la plataforma Anna Minería y normativa ANM.",
          "Nivel de inglés profesional avanzado (C1/B2 indispensable).",
          "Excelente capacidad de redacción contractual y negociación."
        ],
        col2Heading2: "ÁREAS DE ENFOQUE",
        competencies: [
          "Cumplimiento corporativo SAGRILAFT y prevención de lavado de activos.",
          "Auditoría preventiva de expedientes mineros, cánones y pólizas ante la ANM."
        ],
        callout: "Si cumples con el perfil, envía tu hoja de vida con el asunto 'Vacante Abogado/a Corporativo' a legal@i2services.co",
        location: "Medellín, Colombia",
        modality: "Torre Davivienda · Tiempo Completo",
        highlightExtra: "Derecho Minero & Anna Minería",
        deadlineLabel: "Recepción de hojas de vida:",
        deadline: "30 de Noviembre del 2026",
        email: "legal@i2services.co",
        footerTag: "PEOPLE\\nTECHNOLOGY\\nREAL IMPACT"
      }}
    }};

    // Update Poster from Form Inputs
    function updatePoster() {{
      // Badge
      document.getElementById('posterBadge').innerText = document.getElementById('inputBadge').value || 'Vacante';

      // Title & Subtitle
      document.getElementById('posterTitle').innerText = document.getElementById('inputTitle').value || 'TÍTULO DEL CARGO';
      document.getElementById('posterSubtitle').innerText = document.getElementById('inputSubtitle').value || '';

      // Top Tagline
      const topTagline = document.getElementById('inputTopTagline').value || 'TECNOLOGÍA QUE IMPULSA POSIBILIDADES';
      document.getElementById('posterTopTagline').innerHTML = topTagline.replace(/\\n/g, '<br>');

      // Col 1
      document.getElementById('posterCol1Heading1').innerText = document.getElementById('inputCol1Title1').value || 'OBJETIVO';
      document.getElementById('posterObjective').innerText = document.getElementById('inputObjective').value || '';

      document.getElementById('posterCol1Heading2').innerText = document.getElementById('inputCol1Title2').value || 'RESPONSABILIDADES';
      
      const respText = document.getElementById('inputResponsibilities').value || '';
      const respLines = respText.split('\\n').filter(l => l.trim().length > 0);
      const respList = document.getElementById('posterResponsibilities');
      respList.innerHTML = '';
      respLines.forEach(line => {{
        const clean = line.replace(/^[•\\-\\*]\\s*/, '');
        const li = document.createElement('li');
        li.className = 'bullet-item';
        li.innerHTML = '<span class="bullet-dot"></span><span>' + escapeHtml(clean) + '</span>';
        respList.appendChild(li);
      }});

      // Col 2: Perfil y Requisitos
      document.getElementById('posterCol2Heading1').innerText = document.getElementById('inputCol2Title1').value || 'PERFIL QUE BUSCAMOS';
      const reqText = document.getElementById('inputRequirements').value || '';
      const reqLines = reqText.split('\\n').filter(l => l.trim().length > 0);
      const reqList = document.getElementById('posterRequirements');
      reqList.innerHTML = '';
      reqLines.forEach(line => {{
        const clean = line.replace(/^[•\\-\\*]\\s*/, '');
        const li = document.createElement('li');
        li.className = 'bullet-item';
        li.innerHTML = '<span class="bullet-dot"></span><span>' + escapeHtml(clean) + '</span>';
        reqList.appendChild(li);
      }});

      // Col 2: Sección 2 (Competencias opcionales)
      const sec2Heading = (document.getElementById('inputCol2Title2').value || '').trim();
      const compText = (document.getElementById('inputCompetencies').value || '').trim();
      const sec2Wrap = document.getElementById('posterCol2Section2');
      const compList = document.getElementById('posterCompetencies');
      if (compText && sec2Heading) {{
        sec2Wrap.style.display = 'block';
        document.getElementById('posterCol2Heading2').innerText = sec2Heading;
        compList.innerHTML = '';
        const compLines = compText.split('\\n').filter(l => l.trim().length > 0);
        compLines.forEach(line => {{
          const clean = line.replace(/^[•\\-\\*]\\s*/, '');
          const li = document.createElement('li');
          li.className = 'bullet-item';
          li.innerHTML = '<span class="bullet-dot"></span><span>' + escapeHtml(clean) + '</span>';
          compList.appendChild(li);
        }});
      }} else {{
        sec2Wrap.style.display = 'none';
      }}

      // Callout Box
      const callout = document.getElementById('inputCallout').value.trim();
      const calloutBox = document.getElementById('posterCalloutBox');
      if (callout) {{
        calloutBox.style.display = 'block';
        document.getElementById('posterCalloutText').innerText = callout;
      }} else {{
        calloutBox.style.display = 'none';
      }}

      // Bottom highlight bar
      document.getElementById('posterLocation').innerText = document.getElementById('inputLocation').value || '';
      document.getElementById('posterModality').innerText = document.getElementById('inputModality').value || '';

      const highlightExtra = document.getElementById('inputHighlightExtra').value.trim();
      const extraItem = document.getElementById('highlightExtraItem');
      if (highlightExtra) {{
        extraItem.style.display = 'flex';
        document.getElementById('posterHighlightExtraTitle').innerText = highlightExtra;
        document.getElementById('posterHighlightExtraSub').innerText = 'Destacado';
      }} else {{
        extraItem.style.display = 'none';
      }}

      document.getElementById('posterDeadlineLabel').innerText = document.getElementById('inputDeadlineLabel').value || 'Recepción:';
      document.getElementById('posterDeadline').innerText = document.getElementById('inputDeadline').value || '';

      // Footer
      document.getElementById('posterEmail').innerText = document.getElementById('inputEmail').value || 'info@i2services.co';
      const footerTag = document.getElementById('inputFooterTag').value || 'PEOPLE\\nTECHNOLOGY\\nREAL IMPACT';
      document.getElementById('posterFooterTag').innerHTML = footerTag.replace(/\\n/g, '<br>');
    }}

    function escapeHtml(text) {{
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }}

    // Select preset
    function loadPreset(key) {{
      const p = PRESETS[key];
      if (!p) return;

      document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
      event?.currentTarget?.classList?.add('active');

      document.getElementById('inputBadge').value = p.badge;
      document.getElementById('inputTitle').value = p.title;
      document.getElementById('inputSubtitle').value = p.subtitle;
      document.getElementById('inputTopTagline').value = p.topTagline.replace(/\\n/g, ' ');
      document.getElementById('inputCol1Title1').value = p.col1Heading1;
      document.getElementById('inputObjective').value = p.objective;
      document.getElementById('inputCol1Title2').value = p.col1Heading2;
      document.getElementById('inputResponsibilities').value = p.responsibilities.join('\\n');
      document.getElementById('inputCol2Title1').value = p.col2Heading1;
      document.getElementById('inputRequirements').value = p.requirements.join('\\n');
      document.getElementById('inputCol2Title2').value = p.col2Heading2 || '';
      document.getElementById('inputCompetencies').value = (p.competencies || []).join('\\n');
      document.getElementById('inputCallout').value = p.callout;
      document.getElementById('inputLocation').value = p.location;
      document.getElementById('inputModality').value = p.modality;
      document.getElementById('inputHighlightExtra').value = p.highlightExtra;
      document.getElementById('inputDeadlineLabel').value = p.deadlineLabel;
      document.getElementById('inputDeadline').value = p.deadline;
      document.getElementById('inputEmail').value = p.email;
      document.getElementById('inputFooterTag').value = p.footerTag;

      if (p.headerImg) {{
        currentHeaderImage = p.headerImg;
        document.getElementById('posterHeaderImg').src = p.headerImg;
      }}

      updatePoster();
      showToast('Plantilla "' + p.title.split(' ')[0] + '" cargada con éxito');
    }}

    // Select Image
    function selectImage(key) {{
      document.querySelectorAll('.img-option').forEach(el => el.classList.remove('active'));
      const target = document.getElementById('opt-' + key);
      if (target) target.classList.add('active');

      const imgEl = document.getElementById('posterHeaderImg');

      if (key === 'none') {{
        currentHeaderImage = null;
        imgEl.style.display = 'none';
        showToast('Fotografía desactivada (Fondo corporativo)');
        return;
      }}

      imgEl.style.display = 'block';
      if (key === 'creative') currentHeaderImage = ASSETS.headerCreative;
      else if (key === 'tech') currentHeaderImage = ASSETS.headerTech;
      else if (key === 'office') currentHeaderImage = ASSETS.headerOffice;
      else if (key === 'field') currentHeaderImage = ASSETS.headerField;

      imgEl.src = currentHeaderImage;
      showToast('Imagen de cabecera actualizada');
    }}

    // Remove / Clear Photo
    function removePhoto() {{
      selectImage('none');
      const fileInput = document.getElementById('customPhotoInput');
      if (fileInput) fileInput.value = '';
    }}

    // Custom Photo Upload
    function handleCustomPhoto(event) {{
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {{
        currentHeaderImage = e.target.result;
        document.getElementById('posterHeaderImg').src = currentHeaderImage;
        document.querySelectorAll('.img-option').forEach(el => el.classList.remove('active'));
        showToast('Foto personalizada cargada');
      }};
      reader.readAsDataURL(file);
    }}

    // Reset Defaults
    function resetDefaults() {{
      loadPreset('social');
    }}

    // Zoom Controls
    function setZoom(val) {{
      const el = document.getElementById('posterArtboard');
      const wrapper = document.getElementById('posterScaleWrapper');
      document.querySelectorAll('.zoom-btn').forEach(b => b.classList.remove('active'));

      let scale = 1.0;
      if (val === 'fit') {{
        document.getElementById('btnZoomFit').classList.add('active');
        const previewPanel = document.querySelector('.preview-panel');
        const toolbar = document.querySelector('.preview-toolbar');
        const availH = (previewPanel ? previewPanel.clientHeight : window.innerHeight - 65) - (toolbar ? toolbar.offsetHeight + 40 : 80);
        const availW = (previewPanel ? previewPanel.clientWidth : window.innerWidth - 460) - 60;
        const scaleH = availH / 1000;
        const scaleW = availW / 800;
        scale = Math.min(1.0, Math.max(0.35, Math.min(scaleH, scaleW)));
      }} else {{
        if (typeof event !== 'undefined' && event && event.currentTarget && event.currentTarget.classList) {{
          event.currentTarget.classList.add('active');
        }} else if (val === 0.7) {{
          const btn = Array.from(document.querySelectorAll('.zoom-btn')).find(b => b.textContent.includes('70%'));
          if (btn) btn.classList.add('active');
        }} else if (val === 1.0) {{
          const btn = Array.from(document.querySelectorAll('.zoom-btn')).find(b => b.textContent.includes('100%'));
          if (btn) btn.classList.add('active');
        }}
        scale = val;
      }}

      el.style.transform = `scale(${{scale}})`;
      if (wrapper) {{
        wrapper.style.width = `${{Math.round(800 * scale)}}px`;
        wrapper.style.height = `${{Math.round(1000 * scale)}}px`;
      }}
    }}

    // Toast Notification Helper
    function showToast(msg) {{
      const t = document.getElementById('toastNotification');
      document.getElementById('toastMessage').innerText = msg;
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 2600);
    }}

    // ==========================================
    // EXPORT FUNCTIONS: JPEG & PDF
    // ==========================================
    async function renderCanvasHighRes() {{
      const poster = document.getElementById('posterArtboard');
      showToast('Generando diseño en alta resolución...');
      
      // Temporarily reset transform for 1:1 crisp render
      const prevTransform = poster.style.transform;
      poster.style.transform = 'none';

      try {{
        const canvas = await html2canvas(poster, {{
          scale: 2, // 2x scale = 1600 x 2000 px crystal-clear crisp output
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#06152B',
          logging: false
        }});
        poster.style.transform = prevTransform;
        return canvas;
      }} catch (err) {{
        poster.style.transform = prevTransform;
        throw err;
      }}
    }}

    async function exportAsJPEG() {{
      try {{
        const canvas = await renderCanvasHighRes();
        const title = (document.getElementById('inputTitle').value || 'vacante')
          .toLowerCase()
          .replace(/[^a-z0-9]/g, '-')
          .replace(/-+/g, '-');
        
        const link = document.createElement('a');
        link.download = `vacante-i2services-${{title}}.jpg`;
        link.href = canvas.toDataURL('image/jpeg', 0.94);
        link.click();

        showToast('¡JPEG descargado en alta resolución!');
      }} catch (err) {{
        console.error(err);
        alert('Error al generar JPEG. Asegúrate de permitir descargas en tu navegador.');
      }}
    }}

    async function exportAsPDF() {{
      try {{
        const canvas = await renderCanvasHighRes();
        const imgData = canvas.toDataURL('image/jpeg', 0.94);

        const {{ jsPDF }} = window.jspdf;
        // Flyer aspect ratio 800 x 1000 = 4:5
        // Standard portrait page in mm
        const pdf = new jsPDF({{
          orientation: 'portrait',
          unit: 'mm',
          format: [200, 250] // exactly 4:5 ratio
        }});

        pdf.addImage(imgData, 'JPEG', 0, 0, 200, 250);

        const title = (document.getElementById('inputTitle').value || 'vacante')
          .toLowerCase()
          .replace(/[^a-z0-9]/g, '-')
          .replace(/-+/g, '-');

        pdf.save(`vacante-i2services-${{title}}.pdf`);
        showToast('¡PDF descargado con éxito!');
      }} catch (err) {{
        console.error(err);
        alert('Error al generar PDF: ' + err.message);
      }}
    }}

    async function copyImageToClipboard() {{
      try {{
        const canvas = await renderCanvasHighRes();
        canvas.toBlob(async (blob) => {{
          try {{
            await navigator.clipboard.write([
              new ClipboardItem({{ 'image/png': blob }})
            ]);
            showToast('¡Imagen copiada al portapapeles! Lista para pegar.');
          }} catch (clipErr) {{
            console.warn('Direct clipboard copy blocked, initiating download fallback', clipErr);
            exportAsJPEG();
          }}
        }}, 'image/png');
      }} catch (err) {{
        console.error(err);
        alert('No se pudo copiar al portapapeles directamente. Se descargará el archivo.');
        exportAsJPEG();
      }}
    }}

    // Auto-fit zoom on window resize
    window.addEventListener('resize', () => {{
      if (document.getElementById('btnZoomFit').classList.contains('active')) {{
        setZoom('fit');
      }}
    }});

    // Initialize on load
    window.addEventListener('DOMContentLoaded', () => {{
      updatePoster();
      setZoom('fit');
    }});
  </script>

  <!-- Tour Guided Onboarding Elements -->
  <div class="tour-overlay" id="tourOverlay" onclick="handleTourBackdropClick(event)">
    <div class="tour-spotlight" id="tourSpotlight"></div>
    <div class="tour-bubble" id="tourBubble" onclick="event.stopPropagation()">
      <div class="tour-arrow"></div>
      <div class="tour-bubble-header">
        <div class="tour-badge" id="tourBadge">Paso 1 de 8</div>
        <button class="tour-close-btn" onclick="closeTour()" title="Cerrar tutorial">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="tour-bubble-title" id="tourTitle">
        <span id="tourIcon">⚡</span>
        <span id="tourTitleText">Título</span>
      </div>
      <div class="tour-bubble-body" id="tourContent">
        Contenido explicativo...
      </div>
      <div class="tour-bubble-footer">
        <div class="tour-dots" id="tourDots"></div>
        <div class="tour-nav-btns">
          <button class="btn-tour-skip" onclick="closeTour()">Saltar tutorial</button>
          <button class="btn-tour-prev" id="btnTourPrev" onclick="prevTourStep()">← Anterior</button>
          <button class="btn-tour-next" id="btnTourNext" onclick="nextTourStep()">Siguiente →</button>
        </div>
      </div>
    </div>
  </div>


  <script>
    // ============================================================
    // ONBOARDING TUTORIAL & GUIDED TOUR JAVASCRIPT
    // ============================================================
    const TOUR_STEPS = [
      {{
        target: null, // Center modal
        badge: "Bienvenida",
        icon: "👋",
        title: "¡Bienvenido/a al Creador de Vacantes!",
        content: `
          <p style="margin-bottom:12px; line-height:1.5;">Esta plataforma fue creada para que <b>cualquier persona</b> pueda diseñar afiches de ofertas de empleo con la imagen corporativa oficial de <b>i2 Services</b> en menos de 2 minutos.</p>
          <div style="background:rgba(1,187,220,0.08); border:1px solid rgba(1,187,220,0.25); border-radius:10px; padding:12px 14px; margin-bottom:12px;">
            <div style="font-weight:700; color:#38BDF8; margin-bottom:4px; font-size:12px;">🎯 Lo que puedes hacer aquí:</div>
            <div style="font-size:12px; color:#CBD5E1; line-height:1.4;">Crearás afiches modernos listos para compartir por WhatsApp, publicar en LinkedIn o imprimir, sin necesidad de saber diseño gráfico ni programas complicados.</div>
          </div>
          <p style="font-size:12px; color:#94A3B8;">¿Hacemos un recorrido guiado rápido de 1 minuto para ver cómo funciona paso a paso?</p>
        `,
        btnNext: "Iniciar recorrido guiado →",
        placement: "center"
      }},
      {{
        target: "#stepPresets",
        badge: "Paso 1 de 8",
        icon: "⚡",
        title: "Plantillas Rápidas (1 Clic)",
        content: `
          <p style="margin-bottom:10px; line-height:1.5;"><b>¡No tienes que empezar en blanco!</b></p>
          <p style="margin-bottom:10px; line-height:1.5;">Haz clic en cualquiera de estos 4 botones de ejemplo (<i>Social Media, Diseñador/a, Geólogo/a o Abogado/a</i>). Al presionar uno, el formulario se llenará automáticamente con textos y fotos profesionales que luego puedes editar.</p>
          <div style="background:rgba(255,255,255,0.05); border-left:3px solid #01BBDC; padding:8px 12px; border-radius:4px; font-size:12px; color:#E2E8F0;">
            💡 <b>Tip:</b> Prueba dar clic en un ejemplo ahora mismo para ver cómo cambia la vista previa.
          </div>
        `,
        placement: "right"
      }},
      {{
        target: "#stepJobTitle",
        badge: "Paso 2 de 8",
        icon: "📝",
        title: "Nombre del Cargo e Insignia",
        content: `
          <p style="margin-bottom:10px; line-height:1.5;">Aquí personalizas los datos principales del rol:</p>
          <ul style="padding-left:18px; margin-bottom:10px; font-size:12px; color:#CBD5E1; line-height:1.5;">
            <li style="margin-bottom:4px;"><b>Insignia Superior:</b> Por defecto dice <i>"Vacante"</i>, pero puedes cambiarlo a <i>"Convocatoria"</i>, <i>"Pasantía"</i> o <i>"Nueva Posición"</i>.</li>
            <li style="margin-bottom:4px;"><b>Título de la Vacante:</b> El nombre del puesto en mayúsculas (ej: <i>ANALISTA CONTABLE</i>, <i>INGENIERO DE MINAS</i>).</li>
            <li><b>Subtítulo:</b> Especialidad o área de enfoque (ej: <i>Perfil Senior · Medellín</i>).</li>
          </ul>
        `,
        placement: "right"
      }},
      {{
        target: "#stepHeaderPhoto",
        badge: "Paso 3 de 8",
        icon: "📸",
        title: "Fotografía de Cabecera",
        content: `
          <p style="margin-bottom:10px; line-height:1.5;">Elige la foto que mejor represente la vacante haciendo clic en una de las opciones oficiales:</p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:11px; margin-bottom:10px; color:#CBD5E1;">
            <div style="background:rgba(255,255,255,0.04); padding:6px 8px; border-radius:6px;">🎨 <b>Estudio:</b> Creativos / Media</div>
            <div style="background:rgba(255,255,255,0.04); padding:6px 8px; border-radius:6px;">💻 <b>Tecnología:</b> TI / Datos</div>
            <div style="background:rgba(255,255,255,0.04); padding:6px 8px; border-radius:6px;">🏢 <b>Oficina:</b> Legal / Admin</div>
            <div style="background:rgba(255,255,255,0.04); padding:6px 8px; border-radius:6px;">⛰️ <b>Campo:</b> Geología / Mina</div>
          </div>
          <p style="font-size:12px; color:#94A3B8; line-height:1.4;">También puedes subir una foto propia o presionar <b>"Quitar / Dejar Sin Fotografía"</b> para un fondo corporativo minimalista azul.</p>
        `,
        placement: "right"
      }},
      {{
        target: "#stepObjective",
        badge: "Paso 4 de 8",
        icon: "🎯",
        title: "Misión y Responsabilidades",
        content: `
          <p style="margin-bottom:10px; line-height:1.5;">En esta sección defines el objetivo general del cargo y las funciones que realizará el colaborador.</p>
          <div style="background:rgba(16,185,129,0.12); border:1px solid rgba(16,185,129,0.3); border-radius:8px; padding:10px 12px; margin-bottom:8px;">
            <div style="font-weight:700; color:#34D399; font-size:12px; margin-bottom:4px;">✨ La magia de las viñetas automáticas:</div>
            <div style="font-size:12px; color:#E2E8F0; line-height:1.4;">No necesitas poner guiones ni números. Simplemente escribe una función y presiona la tecla <b>Enter</b>. Cada salto de línea se convertirá al instante en una viñeta gráfica en el afiche.</div>
          </div>
        `,
        placement: "right"
      }},
      {{
        target: "#stepRequirements",
        badge: "Paso 5 de 8",
        icon: "📋",
        title: "Perfil y Requisitos Buscados",
        content: `
          <p style="margin-bottom:10px; line-height:1.5;">Especifica aquí lo que debe tener el candidato ideal:</p>
          <ul style="padding-left:18px; margin-bottom:10px; font-size:12px; color:#CBD5E1; line-height:1.5;">
            <li style="margin-bottom:3px;">Años de experiencia laboral.</li>
            <li style="margin-bottom:3px;">Título universitario o carrera técnica requerida.</li>
            <li style="margin-bottom:3px;">Herramientas o software que debe dominar.</li>
            <li>Nivel de inglés o idiomas adicionales.</li>
          </ul>
          <p style="font-size:12px; color:#94A3B8;">Al igual que en las responsabilidades, cada <b>Enter</b> crea una nueva viñeta.</p>
        `,
        placement: "right"
      }},
      {{
        target: "#stepContact",
        badge: "Paso 6 de 8",
        icon: "📅",
        title: "Contacto, Ciudad y Fechas",
        content: `
          <p style="margin-bottom:10px; line-height:1.5;">Estos datos se mostrarán en la barra informativa inferior del afiche:</p>
          <ul style="padding-left:18px; margin-bottom:10px; font-size:12px; color:#CBD5E1; line-height:1.5;">
            <li style="margin-bottom:4px;"><b>Ubicación y Modalidad:</b> Ej. <i>Medellín, Colombia · Presencial</i>.</li>
            <li style="margin-bottom:4px;"><b>Fecha Límite:</b> Hasta qué fecha se reciben postulaciones.</li>
            <li><b>Correo Electrónico:</b> La dirección oficial a donde los aspirantes deben enviar su hoja de vida (ej: <i>yurany.sanchez@i2services.co</i>).</li>
          </ul>
        `,
        placement: "right"
      }},
      {{
        target: "#stepPreview",
        badge: "Paso 7 de 8",
        icon: "👁️",
        title: "Vista Previa en Tiempo Real",
        content: `
          <p style="margin-bottom:10px; line-height:1.5;"><b>¡Todo lo que escribas se actualiza aquí al instante!</b></p>
          <p style="margin-bottom:10px; line-height:1.5;">No tienes que presionar guardar ni esperar. Puedes ver exactamente cómo quedará el afiche final con su proporción 4:5 perfecta.</p>
          <div style="background:rgba(255,255,255,0.05); padding:8px 12px; border-radius:6px; font-size:12px; color:#CBD5E1;">
            🔍 Usa los botones de zoom arriba (<b>Ajustar</b>, <b>100%</b>, <b>70%</b>) para adaptar el tamaño a tu pantalla.
          </div>
        `,
        placement: "left"
      }},
      {{
        target: "#stepExport",
        badge: "Paso 8 de 8",
        icon: "🚀",
        title: "¡Descarga y Comparte tu Vacante!",
        content: `
          <p style="margin-bottom:10px; line-height:1.5;">Cuando tu diseño esté listo, tienes 3 formas de exportarlo en la barra superior:</p>
          <ul style="padding-left:18px; margin-bottom:10px; font-size:12px; color:#CBD5E1; line-height:1.5;">
            <li style="margin-bottom:6px;"><b>Descargar JPEG (HD):</b> Imagen ultra nítida de alta resolución, ideal para LinkedIn, estados de WhatsApp, Instagram o portal web.</li>
            <li style="margin-bottom:6px;"><b>Descargar PDF:</b> Documento vectorial para imprimir en tamaño carta/afiche o enviar por correo.</li>
            <li><b>Copiar Imagen:</b> La copia al portapapeles para pegarla directo (Ctrl+V) en WhatsApp Web, Slack o correo sin guardar archivos.</li>
          </ul>
        `,
        placement: "bottom-end"
      }},
      {{
        target: null, // Center modal
        badge: "¡Felicitaciones!",
        icon: "🎉",
        title: "¡Ya eres un/a experto/a!",
        content: `
          <p style="margin-bottom:12px; line-height:1.5;">Ya conoces todos los pasos para crear vacantes y piezas corporativas en segundos.</p>
          <div style="background:rgba(1,187,220,0.1); border:1px solid rgba(1,187,220,0.3); border-radius:10px; padding:12px 14px; margin-bottom:14px;">
            <div style="font-weight:700; color:#38BDF8; margin-bottom:4px; font-size:13px;">💡 Recuerda:</div>
            <div style="font-size:12px; color:#E2E8F0; line-height:1.4;">Si alguna vez tienes dudas, solo haz clic en el botón <b>"¿Cómo funciona? (Tutorial)"</b> en la barra superior para volver a ver esta guía interactiva cuando quieras.</div>
          </div>
          <p style="font-size:12px; color:#94A3B8;">¡Muchos éxitos encontrando el mejor talento para i2 Services!</p>
        `,
        btnNext: "¡Entendido! Empezar a crear ✨",
        placement: "center"
      }}
    ];

    let currentTourStep = 0;
    let isTourActive = false;

    // Explicit global exposure
    window.startTutorial = startTutorial;
    window.closeTour = closeTour;
    window.nextTourStep = nextTourStep;
    window.prevTourStep = prevTourStep;
    window.goToTourStep = goToTourStep;
    window.handleTourBackdropClick = handleTourBackdropClick;

    function startTutorial(isManual = false) {{
      isTourActive = true;
      currentTourStep = 0;
      const overlay = document.getElementById('tourOverlay');
      overlay.classList.add('active');
      renderTourStep();
    }}

    function closeTour() {{
      isTourActive = false;
      const overlay = document.getElementById('tourOverlay');
      overlay.classList.remove('active');
      overlay.classList.remove('center-mode');
      document.getElementById('tourSpotlight').classList.remove('visible');
      document.getElementById('tourBubble').classList.remove('visible');
      try {{
        localStorage.setItem('i2_vacantes_tour_seen', 'true');
      }} catch (e) {{}}
    }}

    function nextTourStep() {{
      if (currentTourStep < TOUR_STEPS.length - 1) {{
        currentTourStep++;
        renderTourStep();
      }} else {{
        closeTour();
        showToast('¡Tutorial completado! Ya puedes crear tu vacante.');
      }}
    }}

    function prevTourStep() {{
      if (currentTourStep > 0) {{
        currentTourStep--;
        renderTourStep();
      }}
    }}

    function goToTourStep(index) {{
      if (index >= 0 && index < TOUR_STEPS.length) {{
        currentTourStep = index;
        renderTourStep();
      }}
    }}

    function handleTourBackdropClick(event) {{
      // Don't close immediately on background click to prevent accidental closes
    }}

    function renderTourStep() {{
      const step = TOUR_STEPS[currentTourStep];
      const bubbleEl = document.getElementById('tourBubble');
      const spotlightEl = document.getElementById('tourSpotlight');

      // Update contents
      document.getElementById('tourBadge').textContent = step.badge;
      document.getElementById('tourIcon').textContent = step.icon;
      document.getElementById('tourTitleText').textContent = step.title;
      document.getElementById('tourContent').innerHTML = step.content;

      // Update Next button label
      const btnNext = document.getElementById('btnTourNext');
      if (step.btnNext) {{
        btnNext.innerHTML = step.btnNext;
      }} else if (currentTourStep === TOUR_STEPS.length - 1) {{
        btnNext.innerHTML = "¡Entendido! Empezar a crear ✨";
      }} else {{
        btnNext.innerHTML = "Siguiente →";
      }}

      // Hide or show Prev button
      const btnPrev = document.getElementById('btnTourPrev');
      btnPrev.style.display = currentTourStep === 0 ? 'none' : 'inline-block';

      // Render Dots
      const dotsContainer = document.getElementById('tourDots');
      dotsContainer.innerHTML = '';
      TOUR_STEPS.forEach((_, idx) => {{
        const dot = document.createElement('div');
        dot.className = 'tour-dot' + (idx === currentTourStep ? ' active' : '');
        dot.title = `Ir al paso ${{idx + 1}}`;
        dot.onclick = () => goToTourStep(idx);
        dotsContainer.appendChild(dot);
      }});

      // Show bubble
      bubbleEl.classList.add('visible');

      // If target exists, scroll into view if inside panel
      if (step.target) {{
        const targetEl = document.querySelector(step.target);
        if (targetEl) {{
          const panel = document.querySelector('.controls-panel');
          if (panel && panel.contains(targetEl)) {{
            const panelRect = panel.getBoundingClientRect();
            const targetRect = targetEl.getBoundingClientRect();
            const offset = (targetRect.top - panelRect.top) - (panelRect.height / 2) + (targetRect.height / 2);
            panel.scrollBy({{ top: offset, behavior: 'smooth' }});
          }}

          // Delay slightly for smooth scroll before positioning
          setTimeout(() => {{
            positionTourBubble(targetEl, step.placement, bubbleEl, spotlightEl);
          }}, 180);
          return;
        }}
      }}

      // Fallback or center
      positionTourBubble(null, 'center', bubbleEl, spotlightEl);
    }}

    function positionTourBubble(targetEl, placement, bubbleEl, spotlightEl) {{
      const arrowEl = bubbleEl.querySelector('.tour-arrow');
      arrowEl.className = 'tour-arrow';

      if (!targetEl || placement === 'center') {{
        spotlightEl.classList.remove('visible');
        bubbleEl.classList.add('center');
        arrowEl.classList.add('arrow-hidden');
        document.getElementById('tourOverlay').classList.add('center-mode');
        return;
      }}

      document.getElementById('tourOverlay').classList.remove('center-mode');
      const rect = targetEl.getBoundingClientRect();
      const pad = 8;

      // Spotlight coordinates
      spotlightEl.style.top = Math.max(0, rect.top - pad) + 'px';
      spotlightEl.style.left = Math.max(0, rect.left - pad) + 'px';
      spotlightEl.style.width = (rect.width + pad * 2) + 'px';
      spotlightEl.style.height = (rect.height + pad * 2) + 'px';
      spotlightEl.classList.add('visible');

      bubbleEl.classList.remove('center');

      const margin = 16;
      const vWidth = window.innerWidth;
      const vHeight = window.innerHeight;
      const bubbleWidth = bubbleEl.offsetWidth || 440;
      const bubbleHeight = bubbleEl.offsetHeight || 320;

      let top, left;

      if (placement === 'right' && (rect.right + 20 + bubbleWidth <= vWidth - margin)) {{
        left = rect.right + 20;
        top = rect.top + (rect.height / 2) - (bubbleHeight / 2);
        arrowEl.classList.add('arrow-left');
        const clampedTop = Math.max(margin, Math.min(vHeight - bubbleHeight - margin, top));
        const arrowTop = Math.max(16, Math.min(bubbleHeight - 24, (rect.top + rect.height / 2) - clampedTop - 7));
        arrowEl.style.top = arrowTop + 'px';
        arrowEl.style.left = '-7px';
        arrowEl.style.right = 'auto';
        arrowEl.style.bottom = 'auto';
        top = clampedTop;
      }} else if (placement === 'left' && (rect.left - 20 - bubbleWidth >= margin)) {{
        left = rect.left - bubbleWidth - 20;
        top = rect.top + (rect.height / 2) - (bubbleHeight / 2);
        arrowEl.classList.add('arrow-right');
        const clampedTop = Math.max(margin, Math.min(vHeight - bubbleHeight - margin, top));
        const arrowTop = Math.max(16, Math.min(bubbleHeight - 24, (rect.top + rect.height / 2) - clampedTop - 7));
        arrowEl.style.top = arrowTop + 'px';
        arrowEl.style.right = '-7px';
        arrowEl.style.left = 'auto';
        arrowEl.style.bottom = 'auto';
        top = clampedTop;
      }} else if (placement === 'bottom-end') {{
        top = rect.bottom + 16;
        left = Math.max(margin, Math.min(rect.right - bubbleWidth, vWidth - bubbleWidth - margin));
        arrowEl.classList.add('arrow-top');
        const arrowRight = Math.max(20, Math.min(bubbleWidth - 30, (left + bubbleWidth) - (rect.right - 80)));
        arrowEl.style.right = arrowRight + 'px';
        arrowEl.style.top = '-7px';
        arrowEl.style.left = 'auto';
        arrowEl.style.bottom = 'auto';
      }} else {{
        // Fallback: place below or center
        if (rect.bottom + 20 + bubbleHeight <= vHeight - margin) {{
          top = rect.bottom + 20;
          left = Math.max(margin, Math.min(vWidth - bubbleWidth - margin, rect.left));
          arrowEl.classList.add('arrow-top');
          arrowEl.style.top = '-7px';
          arrowEl.style.right = '40px';
          arrowEl.style.left = 'auto';
          arrowEl.style.bottom = 'auto';
        }} else {{
          top = Math.max(margin, rect.top - bubbleHeight - 20);
          left = Math.max(margin, Math.min(vWidth - bubbleWidth - margin, rect.left));
          arrowEl.classList.add('arrow-bottom');
          arrowEl.style.bottom = '-7px';
          arrowEl.style.left = '40px';
          arrowEl.style.top = 'auto';
          arrowEl.style.right = 'auto';
        }}
      }}

      top = Math.max(margin, Math.min(vHeight - bubbleHeight - margin, top));
      left = Math.max(margin, Math.min(vWidth - bubbleWidth - margin, left));

      bubbleEl.style.top = top + 'px';
      bubbleEl.style.left = left + 'px';
    }}

    // Keyboard navigation for tutorial
    window.addEventListener('keydown', (e) => {{
      if (!isTourActive) return;
      if (e.key === 'Escape') {{
        closeTour();
      }} else if (e.key === 'ArrowRight' || e.key === 'Enter') {{
        nextTourStep();
      }} else if (e.key === 'ArrowLeft') {{
        prevTourStep();
      }}
    }});

    // Reposition tour on resize if active
    window.addEventListener('resize', () => {{
      if (isTourActive) {{
        renderTourStep();
      }}
    }});

    // Auto-launch tour on first visit
    window.addEventListener('load', () => {{
      try {{
        const hasSeen = localStorage.getItem('i2_vacantes_tour_seen');
        if (!hasSeen) {{
          setTimeout(() => {{
            startTutorial(false);
          }}, 800);
        }}
      }} catch (e) {{}}
    }});
  </script>

</body>
</html>
'''

with open('public/generador-vacantes.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

os.makedirs('public/vacantes', exist_ok=True)
with open('public/vacantes/generador-vacantes.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

with open('public/vacantes/index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print('Generated public/generador-vacantes.html, public/vacantes/generador-vacantes.html, and public/vacantes/index.html successfully!')
