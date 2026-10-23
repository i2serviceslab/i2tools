# Firmas Corporativas de Correo - i2 Services S.A.S.

Paquete oficial de firmas de correo corporativo para **i2 Services S.A.S.**, diseñado en estricta coherencia con las tarjetas y la identidad visual del sitio web oficial:
- **Logotipo oficial en blanco puro** (`#FFFFFF`) con el punto en cian (`#01BBDC`) y el eslogan oficial: *YOUR GROUND, OUR EXPERIENCE*.
- **Sin líneas duras:** Bordes sutiles y elegantes (`rgba(113, 140, 193, 0.2)`).
- **Íconos gráficos reales:** Micro-íconos dedicados para Móvil, PBX, Correo, Web y Sede.
- **Sin elementos invasivos:** Eliminados badges innecesarios y botones de agendar.
- **Diseño limpio y minimalista:** Sin barras accesorias, centrado en la información de contacto esencial.

---

## 📁 Archivos Disponibles en este Paquete

| Archivo | Tipo | Descripción |
| :--- | :--- | :--- |
| **`tutorial-firmas-outlook-i2services.pdf`** | **Manual PDF (5 págs.)** | Guía técnica oficial descargable con arquitectura de Microsoft 365, tabla de variables, compatibilidad con motor Word y logotipo blanco. |
| **`generador-firmas.html`** | **Herramienta Web Interactiva** | Aplicación web para abrir en cualquier navegador. Permite ingresar datos, elegir fondo (GIF animado o sólido) y copiarla con 1 clic para Outlook. |
| **`particle-wave-bg.gif`** | **Fondo Animado GIF (580x180)** | Fondo de partículas cyan en bucle continuo para clientes compatibles con fondos HTML. |
| **`particle-wave-banner.gif`** | **Banner Animado GIF (580x36)** | Franja animada de partículas en etiqueta `<img>`, 100% visible en Gmail Web, Outlook y dispositivos móviles. |
| **`firma-m365-dinamica.html`** | **Código Centralizado M365** | Código HTML con variables Exchange (`%%DisplayName%%`, etc.) y respaldo VML para Outlook de escritorio. |
| **`firma-ejemplo-estatica.html`** | **Plantilla Estática** | Ejemplo listo con datos genéricos (John Doe - Director de Operaciones) y fondo animado. |

---

## 🌊 Opciones de Fondo: GIF Animado vs. Sólido Corporativo

En los clientes de correo electrónico (Outlook, Gmail, Apple Mail), **las animaciones Lottie (JavaScript/<canvas>) son bloqueadas 100% por seguridad**. Por ello, el estándar universal para movimiento en email es el **GIF animado**:

1. **Olas Animadas GIF (`particle-wave-bg.gif`):**
   - **En Outlook Web, Outlook para Mac, iPhone (Apple Mail) y Gmail:** Se reproduce la ola de partículas suaves en bucle continuo.
   - **En Outlook clásico de Windows (motor Microsoft Word):** Gracias al bloque condicional `<!--[if gte mso 9]> <v:rect> ... <![endif]-->`, se muestra la tarjeta con el primer fotograma o degradado limpio sin deformarse.
   - **Alojamiento:** El archivo debe estar accesible en `https://i2services.co/email-signatures/particle-wave-bg.gif`. Al publicar el sitio web de i2 Services, queda en línea automáticamente.

2. **Azul Marino Sólido (`#08172E`):**
   - Tarjeta elegante sin imágenes de fondo externas, ultra ligera (< 10 KB) y con 0% riesgo de ser clasificada en spam en filtros corporativos estrictos.

---

## 🚀 Método 1 (Recomendado): Autorrelleno Centralizado en Microsoft 365

En Microsoft 365, el administrador de TI crea **una única regla** en el servidor de correo. Cada vez que cualquier colaborador envía un mensaje desde Outlook (Windows, Mac, iPhone, Android o Web), Microsoft 365 inserta automáticamente la firma con los datos exactos del remitente tomados de Azure Active Directory.

### Pasos Rápidos en Exchange Admin Center:
1. Ingresa a **[admin.exchange.microsoft.com](https://admin.exchange.microsoft.com/)** con cuenta de Administrador.
2. En el menú lateral ve a **Flujo de correo (Mail flow)** > **Reglas (Rules)**.
3. Haz clic en **+ (Agregar una regla)** > **Aplicar renuncias de responsabilidades (Apply disclaimers)**.
4. Nombre de la regla: `Firma Corporativa i2 Services (Refined Card)`.
5. **Aplicar esta regla si...**: Remitente > está ubicado en > `Dentro de la organización` (o dominio `@i2services.co`).
6. **Hacer lo siguiente...**: `Anexar una renuncia` > Pegar el código de `firma-m365-dinamica.html`.
7. **Acción de reserva (Fallback)**: Seleccionar `Encapsular` (Wrap) o `Ignorar`.
8. **Excepción (para evitar firmas repetidas en respuestas)**: Agregar excepción > El asunto o cuerpo incluye las palabras `AVISO DE CONFIDENCIALIDAD`.
9. Guardar y activar la regla.

---

## 💻 Método 2: Configuración Local en Clientes Outlook

Si un colaborador desea ver su firma en pantalla mientras redacta el correo antes de enviarlo:
1. Abre **`generador-firmas.html`** en cualquier navegador web (Chrome, Edge o Safari).
2. Diligencia los campos con los datos personales corporativos.
3. Haz clic en **"Copiar Firma para Outlook"**.
4. Abre Outlook:
   - **En Windows:** Archivo > Opciones > Correo > Firmas > Nueva > Pegar (`Ctrl + V`).
   - **En Mac:** Outlook > Configuración > Firmas > Nueva (`+`) > Pegar (`Cmd + V`).
   - **En Web (OWA):** Configuración (engranaje) > Correo > Redactar y responder > Nueva firma > Pegar (`Ctrl + V`).
5. Asigna la nueva firma como predeterminada para **Mensajes nuevos** y **Respuestas**.
