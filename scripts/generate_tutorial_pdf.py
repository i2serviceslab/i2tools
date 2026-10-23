#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Manual Técnico de Firmas Corporativas en Outlook & Microsoft 365
Generador de Documento PDF Profesional para i2 Services S.A.S.
DISEÑO: REFINED DARK THEME CON LOGOTIPO BLANCO OFICIAL
"""

import os
import sys
import zlib
import struct

PAGE_BG     = (0.024, 0.059, 0.118)   # #060F1E - Fondo Oscuro Profundo
NAVY        = (0.031, 0.090, 0.180)   # #08172E - Azul Marino Base
NAVY_CARD   = (0.051, 0.122, 0.235)   # #0D1F3C - Tarjetas Elevadas
CARD_BORDER = (0.118, 0.208, 0.341)   # #1E3557 - Borde Sutil
CYAN        = (0.004, 0.733, 0.863)   # #01BBDC - Cian Eléctrico
SLATE       = (0.443, 0.549, 0.757)   # #718CC1 - Azul Acero Secundario
WHITE       = (1.000, 1.000, 1.000)   # #FFFFFF - Texto Destacado
TEXT_LIGHT  = (0.941, 0.961, 0.980)   # #F0F5FA - Texto Principal
TEXT_MUTED  = (0.580, 0.647, 0.737)   # #94A3BC - Texto Secundario
CODE_BG     = (0.016, 0.039, 0.078)   # #040A14 - Fondo de Código
CODE_TEXT   = (0.647, 0.706, 0.988)   # #A5B4FC - Sintaxis de Código

def decode_png_rgba(path):
    with open(path, 'rb') as f:
        data = f.read()
    pos = 8
    width, height = None, None
    idat = []
    while pos < len(data):
        length = struct.unpack('>I', data[pos:pos+4])[0]
        ctype = data[pos+4:pos+8]
        chunk = data[pos+8:pos+8+length]
        pos += 12 + length
        if ctype == b'IHDR':
            width, height, bitdepth, colortype = struct.unpack('>IIBB', chunk[:10])
        elif ctype == b'IDAT':
            idat.append(chunk)
        elif ctype == b'IEND':
            break
            
    decompressed = zlib.decompress(b''.join(idat))
    stride = width * 4
    rgb = bytearray()
    alpha = bytearray()
    
    prev_row = bytearray(stride)
    src_pos = 0
    for y in range(height):
        filter_type = decompressed[src_pos]
        src_pos += 1
        curr_row = bytearray(decompressed[src_pos:src_pos+stride])
        src_pos += stride
        
        if filter_type == 1:
            for i in range(4, stride):
                curr_row[i] = (curr_row[i] + curr_row[i-4]) & 0xFF
        elif filter_type == 2:
            for i in range(stride):
                curr_row[i] = (curr_row[i] + prev_row[i]) & 0xFF
        elif filter_type == 3:
            for i in range(stride):
                left = curr_row[i-4] if i >= 4 else 0
                up = prev_row[i]
                curr_row[i] = (curr_row[i] + ((left + up) >> 1)) & 0xFF
        elif filter_type == 4:
            for i in range(stride):
                a = curr_row[i-4] if i >= 4 else 0
                b = prev_row[i]
                c = prev_row[i-4] if i >= 4 else 0
                p = a + b - c
                pa = abs(p - a)
                pb = abs(p - b)
                pc = abs(p - c)
                if pa <= pb and pa <= pc:
                    pr = a
                elif pb <= pc:
                    pr = b
                else:
                    pr = c
                curr_row[i] = (curr_row[i] + pr) & 0xFF
                
        prev_row = curr_row
        for x in range(width):
            px = x * 4
            rgb.extend(curr_row[px:px+3])
            alpha.append(curr_row[px+3])
            
    return width, height, bytes(rgb), bytes(alpha)


class SimplePDF:
    def __init__(self, filename, logo_path='public/i2-services-logo-white.png'):
        self.filename = filename
        self.objects = []
        self.pages = []
        self.width = 612.0
        self.height = 792.0
        
        self.logo_w, self.logo_h, rgb, alpha = decode_png_rgba(logo_path)
        self.comp_rgb = zlib.compress(rgb)
        self.comp_alpha = zlib.compress(alpha)
        
    def create_page(self):
        page = Page(self.width, self.height)
        self.pages.append(page)
        return page
        
    def save(self):
        pdf_objs = []
        pdf_objs.append("<< /Type /Catalog /Pages 2 0 R >>")
        pdf_objs.append("")
        
        font_f1 = len(pdf_objs) + 1
        pdf_objs.append("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>")
        font_f2 = len(pdf_objs) + 1
        pdf_objs.append("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>")
        font_f3 = len(pdf_objs) + 1
        pdf_objs.append("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>")
        font_f4 = len(pdf_objs) + 1
        pdf_objs.append("<< /Type /Font /Subtype /Type1 /BaseFont /Courier /Encoding /WinAnsiEncoding >>")
        font_f5 = len(pdf_objs) + 1
        pdf_objs.append("<< /Type /Font /Subtype /Type1 /BaseFont /Courier-Bold /Encoding /WinAnsiEncoding >>")
        
        mask_idx = len(pdf_objs) + 1
        mask_dict = f"<< /Type /XObject /Subtype /Image /Width {self.logo_w} /Height {self.logo_h} /ColorSpace /DeviceGray /BitsPerComponent 8 /Filter /FlateDecode /Length {len(self.comp_alpha)} >>\nstream\n"
        pdf_objs.append((mask_dict, self.comp_alpha))
        
        logo_idx = len(pdf_objs) + 1
        logo_dict = f"<< /Type /XObject /Subtype /Image /Width {self.logo_w} /Height {self.logo_h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /FlateDecode /SMask {mask_idx} 0 R /Length {len(self.comp_rgb)} >>\nstream\n"
        pdf_objs.append((logo_dict, self.comp_rgb))
        
        font_dict = f"<< /F1 {font_f1} 0 R /F2 {font_f2} 0 R /F3 {font_f3} 0 R /F4 {font_f4} 0 R /F5 {font_f5} 0 R >>"
        xobj_dict = f"<< /Logo {logo_idx} 0 R >>"
        
        page_obj_refs = []
        for p in self.pages:
            content_bytes = p.get_stream()
            stream_obj_idx = len(pdf_objs) + 1
            stream_len = len(content_bytes)
            stream_str = f"<< /Length {stream_len} >>\nstream\n" + content_bytes + "\nendstream"
            pdf_objs.append(stream_str)
            
            page_obj_idx = len(pdf_objs) + 1
            page_str = (
                f"<< /Type /Page /Parent 2 0 R "
                f"/MediaBox [0 0 {self.width} {self.height}] "
                f"/Resources << /Font {font_dict} /XObject {xobj_dict} >> "
                f"/Contents {stream_obj_idx} 0 R >>"
            )
            pdf_objs.append(page_str)
            page_obj_refs.append(f"{page_obj_idx} 0 R")
            
        kids_str = " ".join(page_obj_refs)
        pdf_objs[1] = f"<< /Type /Pages /Kids [{kids_str}] /Count {len(self.pages)} >>"
        
        out = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
        xref_offsets = [0]
        
        for i, item in enumerate(pdf_objs, 1):
            offset = len(out)
            xref_offsets.append(offset)
            if isinstance(item, tuple):
                dict_part, bin_part = item
                out.extend(f"{i} 0 obj\n{dict_part}".encode('latin1'))
                out.extend(bin_part)
                out.extend(b"\nendstream\nendobj\n")
            else:
                out.extend(f"{i} 0 obj\n{item}\nendobj\n".encode('latin1'))
                
        startxref = len(out)
        out.extend(b"xref\n")
        out.extend(f"0 {len(pdf_objs) + 1}\n".encode('latin1'))
        out.extend(b"0000000000 65535 f \n")
        for offset in xref_offsets[1:]:
            out.extend(f"{offset:010d} 00000 n \n".encode('latin1'))
        out.extend(f"trailer\n<< /Size {len(pdf_objs) + 1} /Root 1 0 R >>\nstartxref\n{startxref}\n%%EOF\n".encode('latin1'))
        
        os.makedirs(os.path.dirname(self.filename), exist_ok=True)
        with open(self.filename, 'wb') as f:
            f.write(out)
        print(f"✓ PDF con logo blanco oficial generado: {self.filename} ({len(out)} bytes)")


class Page:
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self.commands = []
        self.rect(0, 0, width, height, fill_rgb=PAGE_BG)
        
    def escape_text(self, text):
        replacements = {
            'á': '\xe1', 'é': '\xe9', 'í': '\xed', 'ó': '\xf3', 'ú': '\xfa',
            'Á': '\xc1', 'É': '\xc9', 'Í': '\xcd', 'Ó': '\xd3', 'Ú': '\xda',
            'ñ': '\xf1', 'Ñ': '\xd1', 'ü': '\xfc', 'Ü': '\xdc',
            '¿': '\xbf', '¡': '\xa1', '•': '-', '—': '-', '–': '-',
            '“': '"', '”': '"', '‘': "'", '’': "'", '°': '\xb0',
            '»': '>>', '«': '<<', '™': '(TM)', '©': '(c)'
        }
        for k, v in replacements.items():
            text = text.replace(k, v)
        text = text.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')
        return text

    def draw_logo(self, x, y, w, h=None):
        if h is None:
            h = w / 4.096
        cmd = [
            "q",
            f"{w:.2f} 0 0 {h:.2f} {x:.2f} {y:.2f} cm",
            "/Logo Do",
            "Q"
        ]
        self.commands.append(" ".join(cmd))

    def rect(self, x, y, w, h, fill_rgb=None, stroke_rgb=None, line_width=1.0):
        cmd = ["q"]
        if fill_rgb:
            cmd.append(f"{fill_rgb[0]:.3f} {fill_rgb[1]:.3f} {fill_rgb[2]:.3f} rg")
        if stroke_rgb:
            cmd.append(f"{stroke_rgb[0]:.3f} {stroke_rgb[1]:.3f} {stroke_rgb[2]:.3f} RG")
            cmd.append(f"{line_width:.2f} w")
        cmd.append(f"{x:.2f} {y:.2f} {w:.2f} {h:.2f} re")
        if fill_rgb and stroke_rgb:
            cmd.append("B")
        elif fill_rgb:
            cmd.append("f")
        elif stroke_rgb:
            cmd.append("S")
        cmd.append("Q")
        self.commands.append(" ".join(cmd))

    def line(self, x1, y1, x2, y2, stroke_rgb=CARD_BORDER, line_width=1.0):
        cmd = [
            "q",
            f"{stroke_rgb[0]:.3f} {stroke_rgb[1]:.3f} {stroke_rgb[2]:.3f} RG",
            f"{line_width:.2f} w",
            f"{x1:.2f} {y1:.2f} m",
            f"{x2:.2f} {y2:.2f} l",
            "S",
            "Q"
        ]
        self.commands.append(" ".join(cmd))

    def text(self, text, x, y, font="F1", size=10, fill_rgb=TEXT_LIGHT):
        safe_str = self.escape_text(text)
        cmd = [
            "q",
            f"{fill_rgb[0]:.3f} {fill_rgb[1]:.3f} {fill_rgb[2]:.3f} rg",
            "BT",
            f"/{font} {size:.2f} Tf",
            f"1 0 0 1 {x:.2f} {y:.2f} Tm",
            f"({safe_str}) Tj",
            "ET",
            "Q"
        ]
        self.commands.append(" ".join(cmd))

    def wrap_text(self, text, max_chars=80):
        words = text.split(' ')
        lines = []
        cur = []
        cur_len = 0
        for w in words:
            if cur_len + len(w) + 1 > max_chars and cur:
                lines.append(' '.join(cur))
                cur = [w]
                cur_len = len(w)
            else:
                cur.append(w)
                cur_len += len(w) + 1
        if cur:
            lines.append(' '.join(cur))
        return lines

    def paragraph(self, text, x, y, font="F1", size=10, line_height=14, fill_rgb=TEXT_LIGHT, max_chars=82):
        lines = self.wrap_text(text, max_chars=max_chars)
        cur_y = y
        for l in lines:
            self.text(l, x, cur_y, font=font, size=size, fill_rgb=fill_rgb)
            cur_y -= line_height
        return cur_y

    def badge(self, label, x, y, font="F2", size=8.5, bg_rgb=CYAN, text_rgb=NAVY, padding_x=8, padding_y=3):
        approx_w = len(label) * size * 0.58 + padding_x * 2
        approx_h = size + padding_y * 2
        self.rect(x, y - padding_y, approx_w, approx_h, fill_rgb=bg_rgb)
        self.text(label, x + padding_x, y + 1, font=font, size=size, fill_rgb=text_rgb)
        return approx_w

    def callout(self, x, y, w, h, title, text, border_color=CYAN, bg_color=NAVY_CARD):
        self.rect(x, y, w, h, fill_rgb=bg_color, stroke_rgb=CARD_BORDER, line_width=1.0)
        self.rect(x, y, 3, h, fill_rgb=border_color)
        if title:
            self.text(title, x + 14, y + h - 18, font="F2", size=10.5, fill_rgb=CYAN)
            self.paragraph(text, x + 14, y + h - 33, font="F1", size=9.2, line_height=13, fill_rgb=TEXT_LIGHT, max_chars=int(w / 5.5))
        else:
            self.paragraph(text, x + 14, y + h - 18, font="F1", size=9.2, line_height=13, fill_rgb=TEXT_LIGHT, max_chars=int(w / 5.5))

    def code_box(self, x, y, w, lines, font_size=8.5, line_height=12):
        h = len(lines) * line_height + 16
        self.rect(x, y - h, w, h, fill_rgb=CODE_BG, stroke_rgb=CARD_BORDER, line_width=0.8)
        self.rect(x + 10, y - 10, 5, 5, fill_rgb=(0.93, 0.40, 0.38))
        self.rect(x + 19, y - 10, 5, 5, fill_rgb=(0.95, 0.77, 0.25))
        self.rect(x + 28, y - 10, 5, 5, fill_rgb=(0.38, 0.78, 0.30))
        cur_y = y - 22
        for l in lines:
            self.text(l, x + 12, cur_y, font="F4", size=font_size, fill_rgb=CODE_TEXT)
            cur_y -= line_height
        return y - h - 10

    def draw_header(self, page_num, total_pages=5, title_sec="MANUAL TÉCNICO DE FIRMAS CORPORATIVAS"):
        self.rect(0, 746, 612, 46, fill_rgb=NAVY)
        self.line(0, 746, 612, 746, stroke_rgb=CARD_BORDER, line_width=1.0)
        
        self.draw_logo(45, 755, 110, 26.8)
        self.text("•  " + title_sec, 168, 764, font="F1", size=9, fill_rgb=CYAN)
        self.text("REFINED THEME", 495, 764, font="F2", size=8.5, fill_rgb=SLATE)
        
        self.line(45, 42, 567, 42, stroke_rgb=CARD_BORDER, line_width=0.8)
        self.text("i2 Services S.A.S.  |  Dirección de Tecnología & Operaciones  |  i2services.co", 45, 28, font="F1", size=8, fill_rgb=TEXT_MUTED)
        self.text(f"Página {page_num} de {total_pages}", 510, 28, font="F2", size=8.5, fill_rgb=CYAN)

    def get_stream(self):
        return "\n".join(self.commands)


def build_tutorial_pdf():
    pdf_path = "/Users/i2carvajal/Documents/Proyectos/Creador web/public/email-signatures/tutorial-firmas-outlook-i2services.pdf"
    pdf = SimplePDF(pdf_path)

    # =========================================================================
    # PÁGINA 1: PORTADA EJECUTIVA
    # =========================================================================
    p1 = pdf.create_page()
    p1.rect(0, 510, 612, 282, fill_rgb=NAVY)
    p1.line(0, 510, 612, 510, stroke_rgb=CARD_BORDER, line_width=1.0)
    
    # Logo blanco oficial en portada
    p1.draw_logo(45, 705, 180, 43.9)
    p1.text("YOUR GROUND, OUR EXPERIENCE", 45, 688, font="F2", size=8, fill_rgb=CYAN)
    
    # Metadatos
    p1.rect(440, 530, 130, 230, fill_rgb=NAVY_CARD, stroke_rgb=CARD_BORDER, line_width=1.0)
    p1.text("IDENTIDAD:", 455, 725, font="F2", size=8, fill_rgb=CYAN)
    p1.text("Oficial Web Card", 455, 712, font="F1", size=8.5, fill_rgb=WHITE)
    p1.text("LOGOTIPO:", 455, 685, font="F2", size=8, fill_rgb=CYAN)
    p1.text("Blanco Puro Oficial", 455, 672, font="F1", size=8.5, fill_rgb=WHITE)
    p1.text("VERSIÓN:", 455, 645, font="F2", size=8, fill_rgb=CYAN)
    p1.text("2.1 (Refined)", 455, 632, font="F1", size=8.5, fill_rgb=WHITE)
    p1.text("FECHA:", 455, 605, font="F2", size=8, fill_rgb=CYAN)
    p1.text("Octubre 2026", 455, 592, font="F1", size=8.5, fill_rgb=WHITE)

    # Título principal
    p1.badge("ESTÁNDAR OFICIAL DE IDENTIDAD CORPORATIVA", 45, 650, font="F2", size=8.5, bg_rgb=CYAN, text_rgb=NAVY)
    p1.text("Firmas Corporativas Dinámicas en HTML", 45, 620, font="F2", size=20, fill_rgb=WHITE)
    p1.text("Diseño Refinado con Logotipo Blanco, Íconos y Autorrelleno Centralizado", 45, 598, font="F1", size=11, fill_rgb=CYAN)
    p1.text("i2 Services S.A.S. • Medellín, Colombia", 45, 580, font="F1", size=9.5, fill_rgb=SLATE)

    y = 480
    p1.text("1. Resumen Ejecutivo del Proyecto", 45, y, font="F2", size=13.5, fill_rgb=WHITE)
    y -= 16
    y = p1.paragraph(
        "El presente manual documenta el despliegue de las firmas de correo corporativo para i2 Services S.A.S. "
        "con el diseño Refined Corporate Card: una tarjeta estructurada en fondo azul marino (#08172E), "
        "logotipo oficial en blanco puro con el eslogan 'YOUR GROUND, OUR EXPERIENCE', bordes sutiles sin líneas duras, "
        "e íconos gráficos dedicados para cada canal de comunicación. A través de las reglas de flujo de correo de "
        "Microsoft 365 (Exchange Online), el sistema inyecta automáticamente los datos de cada colaborador "
        "(John Doe, Cargo, Teléfono, Celular y Correo) sin requerir diseño individual.",
        45, y, font="F1", size=9.2, line_height=13.5, fill_rgb=TEXT_LIGHT, max_chars=84
    )

    y -= 26
    p1.text("2. Métodos de Implementación Disponibles", 45, y, font="F2", size=13, fill_rgb=WHITE)
    y -= 16

    card_h = 135
    p1.rect(45, y - card_h, 248, card_h, fill_rgb=NAVY_CARD, stroke_rgb=CARD_BORDER, line_width=1.0)
    p1.badge("RECOMENDADO (EMPRESA)", 55, y - 22, font="F2", size=8, bg_rgb=CYAN, text_rgb=NAVY)
    p1.text("Método 1: Regla Central M365", 55, y - 40, font="F2", size=11, fill_rgb=WHITE)
    p1.paragraph(
        "• Configuración única en Exchange Admin.\n"
        "• Autorrellena variables %%DisplayName%%, etc.\n"
        "• Funciona en Outlook Windows, Mac, Web y Móvil.\n"
        "• El usuario final no hace ningún paso.",
        55, y - 56, font="F1", size=8.5, line_height=12, fill_rgb=TEXT_MUTED, max_chars=36
    )

    p1.rect(319, y - card_h, 248, card_h, fill_rgb=NAVY_CARD, stroke_rgb=CARD_BORDER, line_width=1.0)
    p1.badge("OPCIONAL (LOCAL)", 329, y - 22, font="F2", size=8, bg_rgb=SLATE, text_rgb=WHITE)
    p1.text("Método 2: Generador Web Local", 329, y - 40, font="F2", size=11, fill_rgb=WHITE)
    p1.paragraph(
        "• Cada usuario abre el Generador Web i2.\n"
        "• Escribe sus datos y pulsa 'Copiar Firma'.\n"
        "• Pega en Configuración > Firmas de Outlook.\n"
        "• Permite ver la firma al redactar el correo.",
        329, y - 56, font="F1", size=8.5, line_height=12, fill_rgb=TEXT_MUTED, max_chars=36
    )

    p1.line(45, 42, 567, 42, stroke_rgb=CARD_BORDER, line_width=0.8)
    p1.text("i2 Services S.A.S.  |  Dirección de Tecnología & Operaciones  |  i2services.co", 45, 28, font="F1", size=8, fill_rgb=TEXT_MUTED)
    p1.text("Página 1 de 5", 510, 28, font="F2", size=8.5, fill_rgb=CYAN)


    # =========================================================================
    # PÁGINA 2: MÉTODO 1 - REGLA CENTRALIZADA EN EXCHANGE ONLINE
    # =========================================================================
    p2 = pdf.create_page()
    p2.draw_header(2, 5, "MÉTODO 1: REGLA CENTRALIZADA EN MICROSOFT 365")
    
    y = 715
    p2.text("Método 1: Configuración en Exchange Admin Center", 45, y, font="F2", size=14, fill_rgb=WHITE)
    y -= 15
    y = p2.paragraph(
        "Este es el método corporativo definitivo: se sube la plantilla HTML con la tarjeta refinada una sola vez "
        "en el servidor y Microsoft 365 inyecta automáticamente los datos de cada persona desde el directorio corporativo.",
        45, y, font="F1", size=9.2, line_height=13, fill_rgb=TEXT_MUTED, max_chars=82
    )

    y -= 18
    steps_m1 = [
        ("Paso 1: Acceso al Centro de Administración", 
         "El Administrador de TI ingresa con sus credenciales a admin.exchange.microsoft.com (Centro de administración de Exchange)."),
        ("Paso 2: Navegar a Reglas de Flujo de Correo", 
         "En el menú lateral izquierdo, haz clic en Flujo de correo (Mail flow) y luego selecciona Reglas (Rules)."),
        ("Paso 3: Crear Nueva Regla de Renuncia", 
         "Haz clic en el botón '+' (Agregar una regla) y selecciona 'Aplicar renuncias de responsabilidades' (Apply disclaimers). Asigna el nombre: 'Firma Corporativa i2 Services (Refined Card)'."),
        ("Paso 4: Definir la Condición del Remitente", 
         "En 'Aplicar esta regla si...', selecciona: 'El remitente' > 'está ubicado en' > 'Dentro de la organización' (Inside the organization). O alternativamente: remitentes del dominio '@i2services.co'."),
        ("Paso 5: Insertar el Código HTML con Logotipo Blanco e Íconos", 
         "En 'Hacer lo siguiente...', selecciona 'Anexar una renuncia' (Append a disclaimer). Haz clic en 'Escribir texto' y pega el contenido exacto del archivo firma-m365-dinamica.html."),
        ("Paso 6: Configurar Acción de Reserva (Fallback)", 
         "En caso de que el mensaje no admita HTML o esté cifrado, selecciona la opción 'Encapsular' (Wrap) o 'Ignorar' (Ignore)."),
        ("Paso 7: Agregar Excepción para Evitar Firmas Repetidas", 
         "Haz clic en '+' (Agregar excepción). Selecciona: 'El asunto o el cuerpo' > 'el cuerpo incluye cualquiera de estas palabras' > Escribe: 'AVISO DE CONFIDENCIALIDAD'. Esto evita que en una conversación de 10 respuestas la firma se repita 10 veces.")
    ]

    for title, desc in steps_m1:
        p2.rect(45, y - 3, 20, 16, fill_rgb=CYAN)
        p2.text(">", 52, y + 1, font="F2", size=10, fill_rgb=NAVY)
        p2.text(title, 72, y + 2, font="F2", size=9.8, fill_rgb=WHITE)
        y -= 13
        y = p2.paragraph(desc, 72, y, font="F1", size=8.5, line_height=11.5, fill_rgb=TEXT_LIGHT, max_chars=80)
        y -= 5

    y -= 6
    p2.callout(
        45, y - 55, 522, 55,
        "¿QUÉ HACE MICROSOFT AL ENVIAR EL CORREO?",
        "Cuando John Doe o cualquier colaborador envía un correo desde Outlook (PC, Mac, iPhone o Web), "
        "Exchange toma el HTML y reemplaza al instante %%DisplayName%% por su nombre, %%Title%% por su cargo y "
        "%%MobileNumber%% por su celular. Nadie tiene que diseñar nada en sus computadores personales.",
        border_color=CYAN, bg_color=NAVY_CARD
    )


    # =========================================================================
    # PÁGINA 3: ATRIBUTOS DINÁMICOS & GESTIÓN DE PERFILES EN M365
    # =========================================================================
    p3 = pdf.create_page()
    p3.draw_header(3, 5, "VARIABLES DINÁMICAS & GESTIÓN DE USUARIOS")

    y = 715
    p3.text("Atributos Disponibles en Microsoft 365 (Azure AD)", 45, y, font="F2", size=14, fill_rgb=WHITE)
    y -= 15
    y = p3.paragraph(
        "Exchange Online reconoce etiquetas especiales encerradas entre signos de porcentaje dobles (%%). "
        "A continuación se presenta la tabla de equivalencias con los campos del perfil de Microsoft 365:",
        45, y, font="F1", size=9.2, line_height=13, fill_rgb=TEXT_MUTED, max_chars=82
    )

    y -= 14
    p3.rect(45, y, 522, 20, fill_rgb=NAVY, stroke_rgb=CARD_BORDER, line_width=1.0)
    p3.text("Variable Microsoft 365", 52, y + 6, font="F2", size=9, fill_rgb=CYAN)
    p3.text("Campo en Azure AD / M365", 195, y + 6, font="F2", size=9, fill_rgb=WHITE)
    p3.text("Ejemplo en i2 Services S.A.S.", 378, y + 6, font="F2", size=9, fill_rgb=WHITE)
    y -= 20

    table_data = [
        ("%%DisplayName%%", "Nombre para mostrar (Nombre + Apellido)", "John Doe"),
        ("%%Title%%", "Cargo o Puesto de Trabajo", "Director de Operaciones"),
        ("%%Department%%", "Departamento / Área", "Exploración Estratégica"),
        ("%%MobileNumber%%", "Teléfono Móvil / WhatsApp", "+57 300 123 4567"),
        ("%%PhoneNumber%%", "Teléfono de Oficina / PBX", "+57 (604) 444 5566"),
        ("%%Email%%", "Dirección de Correo Principal", "john.doe@i2services.co"),
        ("%%Company%%", "Organización o Compañía", "i2 Services S.A.S."),
        ("%%Street%%", "Dirección Física de la Sede", "Cra. 43A #1 Sur 188, Of. 610, Torre Davivienda"),
        ("%%City%%, %%State%%", "Ciudad y Departamento", "El Poblado, Medellín"),
    ]

    for i, (var, fld, ex) in enumerate(table_data):
        bg = NAVY_CARD if i % 2 == 0 else NAVY
        p3.rect(45, y, 522, 19, fill_rgb=bg, stroke_rgb=CARD_BORDER, line_width=0.5)
        p3.text(var, 52, y + 5, font="F5", size=8.5, fill_rgb=CYAN)
        p3.text(fld, 195, y + 5, font="F1", size=8.5, fill_rgb=TEXT_LIGHT)
        p3.text(ex, 378, y + 5, font="F3", size=8.5, fill_rgb=SLATE)
        y -= 19

    y -= 18
    p3.text("¿Cómo Actualizar los Datos de un Colaborador?", 45, y, font="F2", size=13, fill_rgb=WHITE)
    y -= 14
    y = p3.paragraph(
        "Para que la firma dinámica muestre la información correcta, los perfiles de los usuarios deben tener sus "
        "campos diligenciados en Microsoft 365. Existen dos maneras de hacerlo:",
        45, y, font="F1", size=9.2, line_height=13, fill_rgb=TEXT_LIGHT, max_chars=82
    )

    y -= 14
    box_h = 78
    p3.rect(45, y - box_h, 250, box_h, fill_rgb=NAVY_CARD, stroke_rgb=CARD_BORDER, line_width=0.8)
    p3.text("Opción A: Por el Administrador de TI", 55, y - 16, font="F2", size=10, fill_rgb=CYAN)
    p3.paragraph(
        "1. Entrar a admin.microsoft.com\n"
        "2. Ir a Usuarios > Usuarios activos.\n"
        "3. Seleccionar usuario > 'Editar información'.\n"
        "4. Guardar teléfono móvil, cargo y oficina.",
        55, y - 30, font="F1", size=8.5, line_height=11.5, fill_rgb=TEXT_LIGHT, max_chars=36
    )

    p3.rect(317, y - box_h, 250, box_h, fill_rgb=NAVY_CARD, stroke_rgb=CARD_BORDER, line_width=0.8)
    p3.text("Opción B: Por el Mismo Usuario", 327, y - 16, font="F2", size=10, fill_rgb=CYAN)
    p3.paragraph(
        "1. El colaborador va a myaccount.microsoft.com\n"
        "2. Sección 'Información sobre mí'.\n"
        "3. Edita su número de celular y datos.\n"
        "4. Se sincroniza con la firma en minutos.",
        327, y - 30, font="F1", size=8.5, line_height=11.5, fill_rgb=TEXT_LIGHT, max_chars=36
    )

    y -= (box_h + 16)
    p3.text("Estructura de la Variable Condicional en el HTML:", 45, y, font="F2", size=11, fill_rgb=WHITE)
    y -= 10
    p3.code_box(45, y, 522, [
        "<!-- Si el departamento existe, lo muestra junto al cargo -->",
        "<div style=\"font-size: 11px; color: #01BBDC; text-transform: uppercase;\">",
        "  %%Title%%%%#Department%% &nbsp;|&nbsp; %%Department%%%%/Department%%",
        "</div>"
    ], font_size=8, line_height=12)


    # =========================================================================
    # PÁGINA 4: MÉTODO 2 - GENERADOR WEB & CLIENTES LOCALES DE OUTLOOK
    # =========================================================================
    p4 = pdf.create_page()
    p4.draw_header(4, 5, "MÉTODO 2: GENERADOR WEB & OUTLOOK LOCAL")

    y = 715
    p4.text("Método 2: Generador de Firmas Web y Outlook Local", 45, y, font="F2", size=14, fill_rgb=WHITE)
    y -= 15
    y = p4.paragraph(
        "Si la empresa prefiere que los usuarios vean su firma en pantalla mientras redactan el mensaje (en lugar "
        "de que se agregue al salir del servidor), hemos construido una herramienta web visual e interactiva "
        "lista para usar: generador-firmas.html con el logotipo oficial en blanco e íconos gráficos.",
        45, y, font="F1", size=9.2, line_height=13, fill_rgb=TEXT_MUTED, max_chars=82
    )

    y -= 16
    card_inst_h = 108
    p4.rect(45, y - card_inst_h, 522, card_inst_h, fill_rgb=NAVY_CARD, stroke_rgb=CARD_BORDER, line_width=1.0)
    p4.text("¿Cómo usar el Generador Web de i2 Services?", 55, y - 18, font="F2", size=11, fill_rgb=CYAN)
    p4.paragraph(
        "1. Abre generador-firmas.html en tu navegador (Google Chrome, Edge o Safari).\n"
        "2. Escribe tu Nombre, Cargo, Celular y Correo Corporativo en el panel izquierdo.\n"
        "3. Elige tu fondo favorito: 'Olas Animadas (GIF)' o 'Azul Marino Sólido'.\n"
        "4. Haz clic en 'Copiar Firma para Outlook' para copiar el diseño formateado.\n"
        "5. Pulsa 'Descargar Manual Oficial en PDF' para guardar esta guía localmente.",
        55, y - 34, font="F1", size=8.5, line_height=12.5, fill_rgb=TEXT_LIGHT, max_chars=82
    )

    y -= (card_inst_h + 20)
    p4.text("Instalación según tu Versión de Outlook", 45, y, font="F2", size=13, fill_rgb=WHITE)
    y -= 14

    w_col = 168
    col_h = 160
    p4.rect(45, y - col_h, w_col, col_h, fill_rgb=NAVY_CARD, stroke_rgb=CARD_BORDER, line_width=0.8)
    p4.text("Outlook Windows", 53, y - 16, font="F2", size=10, fill_rgb=WHITE)
    p4.text("Outlook 365 / 2019 / 2021", 53, y - 27, font="F1", size=7.5, fill_rgb=SLATE)
    p4.paragraph(
        "1. Ve a Archivo > Opciones.\n"
        "2. Clic en pestaña Correo.\n"
        "3. Clic en botón 'Firmas...'\n"
        "4. Clic en 'Nueva', escribe 'i2'.\n"
        "5. Presiona Ctrl + V.\n"
        "6. Asigna 'i2' en Nuevos y Respuestas.\n"
        "7. Clic en Aceptar.",
        53, y - 42, font="F1", size=8, line_height=11.5, fill_rgb=TEXT_LIGHT, max_chars=25
    )

    p4.rect(222, y - col_h, w_col, col_h, fill_rgb=NAVY_CARD, stroke_rgb=CARD_BORDER, line_width=0.8)
    p4.text("Outlook para Mac", 230, y - 16, font="F2", size=10, fill_rgb=WHITE)
    p4.text("macOS Sonoma / Sequoia", 230, y - 27, font="F1", size=7.5, fill_rgb=SLATE)
    p4.paragraph(
        "1. Menú: Outlook > Configuración.\n"
        "2. Haz clic en 'Firmas'.\n"
        "3. Clic en '+' para nueva firma.\n"
        "4. En el lienzo presiona Cmd + V.\n"
        "5. Asigna predeterminada para i2.\n"
        "6. Cierra la ventana.",
        230, y - 42, font="F1", size=8, line_height=11.5, fill_rgb=TEXT_LIGHT, max_chars=25
    )

    p4.rect(399, y - col_h, w_col, col_h, fill_rgb=NAVY_CARD, stroke_rgb=CARD_BORDER, line_width=0.8)
    p4.text("Outlook en la Web", 407, y - 16, font="F2", size=10, fill_rgb=WHITE)
    p4.text("outlook.office.com", 407, y - 27, font="F1", size=7.5, fill_rgb=SLATE)
    p4.paragraph(
        "1. Entra a outlook.office.com\n"
        "2. Clic en engranaje Configuración.\n"
        "3. Correo > Redactar y responder.\n"
        "4. Clic en 'Nueva firma'.\n"
        "5. Pega con Ctrl+V / Cmd+V.\n"
        "6. Marca auto-inclusión y Guarda.",
        407, y - 42, font="F1", size=8, line_height=11.5, fill_rgb=TEXT_LIGHT, max_chars=25
    )

    y -= (col_h + 16)
    p4.callout(
        45, y - 45, 522, 45,
        "CONSEJO DE COMPATIBILIDAD AL PEGAR",
        "Al presionar Pegar en Outlook, si aparece un pequeño icono flotante de opciones de pegado, selecciona siempre "
        "'Mantener formato de origen' (Keep Source Formatting) para asegurar que el fondo azul oscuro y los íconos permanezcan intactos.",
        border_color=CYAN, bg_color=NAVY_CARD
    )


    # =========================================================================
    # PÁGINA 5: BUENAS PRÁCTICAS, MOTOR WORD Y PREGUNTAS FRECUENTES (FAQ)
    # =========================================================================
    p5 = pdf.create_page()
    p5.draw_header(5, 5, "BUENAS PRÁCTICAS Y PREGUNTAS FRECUENTES")

    y = 715
    p5.text("Particularidades Técnicas del Motor de Outlook", 45, y, font="F2", size=14, fill_rgb=WHITE)
    y -= 15
    y = p5.paragraph(
        "Outlook para Windows utiliza el motor de Microsoft Word para renderizar correos. Por esta razón, "
        "el código sigue especificaciones precisas para mantener fidelidad absoluta:",
        45, y, font="F1", size=9.2, line_height=13, fill_rgb=TEXT_MUTED, max_chars=82
    )

    y -= 14
    facts = [
        ("Uso de Tablas Anidadas Estructuradas:", "No se debe usar CSS Flexbox ni CSS Grid. La estructura se basa en <table> con cellpadding='0' cellspacing='0'."),
        ("Estilos 100% Inline y Atributo bgcolor:", "Usamos bgcolor='#08172E' junto con background-color: #08172E inline para consistencia total en todos los buzones."),
        ("Logotipo Blanco Puro Embebido:", "El logotipo está procesado en blanco puro (#FFFFFF) con punto cian (#01BBDC) y embebido para asegurar contraste y legibilidad."),
        ("Fondo Animado GIF y Respaldo VML:", "El correo bloquea JavaScript (Lottie). Por ello, el movimiento se basa en particle-wave-bg.gif (en https://i2services.co) y código VML para Outlook de Windows."),
        ("Íconos Gráficos Optimizados:", "Se utilizan micro-íconos PNG nativos de 14x14px para cada canal de contacto (móvil, teléfono, email, web y ubicación).")
    ]

    for title, desc in facts:
        p5.rect(45, y - 2, 12, 12, fill_rgb=CYAN)
        p5.text("•", 48, y + 2, font="F2", size=12, fill_rgb=NAVY)
        p5.text(title, 65, y + 2, font="F2", size=9, fill_rgb=WHITE)
        y = p5.paragraph(desc, 65, y - 9, font="F1", size=8, line_height=11, fill_rgb=TEXT_LIGHT, max_chars=81)
        y -= 4

    y -= 10
    p5.text("Preguntas Frecuentes (FAQ)", 45, y, font="F2", size=13, fill_rgb=WHITE)
    y -= 13

    faqs = [
        ("¿Por qué no funciona Lottie dentro de Outlook?",
         "Lottie es JSON ejecutado por JavaScript sobre <canvas>. Todos los clientes de correo del mundo bloquean scripts "
         "por protocolos internacionales de ciberseguridad. La alternativa universal para animación es el GIF."),
        ("¿Dónde debe alojarse el GIF de partículas?",
         "En el servidor web HTTPS de la compañía: https://i2services.co/email-signatures/particle-wave-bg.gif. "
         "Al subir la web, queda disponible de forma automática sin inflar el peso de tus correos."),
        ("¿Cómo evitar firmas duplicadas en cadenas largas de correos?",
         "En la Regla de Transporte de Exchange, se añade la excepción: 'Si el cuerpo del correo ya contiene AVISO DE CONFIDENCIALIDAD'. "
         "De este modo, Exchange solo anexa la firma una vez al inicio del hilo.")
    ]

    for q, a in faqs:
        p5.text("P: " + q, 45, y, font="F2", size=8.5, fill_rgb=CYAN)
        y -= 10
        y = p5.paragraph("R: " + a, 45, y, font="F1", size=8, line_height=11, fill_rgb=TEXT_LIGHT, max_chars=83)
        y -= 5

    y -= 8
    p5.rect(45, y - 55, 522, 55, fill_rgb=NAVY_CARD, stroke_rgb=CARD_BORDER, line_width=1.0)
    p5.text("i2 Services S.A.S. - Soporte y Asistencia Técnica", 60, y - 18, font="F2", size=10.5, fill_rgb=WHITE)
    p5.text("Para asistencia en la configuración de la regla en Exchange o personalización de plantillas:", 60, y - 31, font="F1", size=8.5, fill_rgb=SLATE)
    p5.text("Sitio Web: i2services.co   |   Sede: Cra. 43A #1 Sur 188, Of. 610, Torre Davivienda, Medellín", 60, y - 44, font="F2", size=8.5, fill_rgb=CYAN)

    pdf.save()
    return pdf_path

if __name__ == "__main__":
    build_tutorial_pdf()
