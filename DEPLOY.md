# Guía de Despliegue en EasyPanel (GitHub + Docker)
## i2 Services S.A.S.

Esta solución unificada contiene las **3 herramientas corporativas** en un solo contenedor Docker de alto rendimiento servido por **Nginx**:

1. **Sitio Web Principal (i2 Services):** Aplicación React 19 + TypeScript + Tailwind CSS v4 + Hero con partículas de video.
2. **Generador de Firmas Corporativas:** Generador interactivo de firmas para Outlook / Microsoft 365 con logo animado/GIF, tutorial descargable en PDF y copia directa en HTML.
3. **Generador de Vacantes:** Plataforma para diseñar y exportar afiches de ofertas de empleo con fotos limpias comerciales, presets interactivos y descarga en JPEG 2x y PDF.

---

## 🌐 URLs y Rutas del Servidor

Una vez desplegado en tu dominio (ej. `https://i2services.co`):

| Aplicación | URL Principal | Rutas Alternativas |
| :--- | :--- | :--- |
| **Sitio Web Corporativo** | `https://tudominio.com/` | `https://tudominio.com/index.html` |
| **Generador de Firmas** | `https://tudominio.com/firmas` | `https://tudominio.com/generador-firmas` <br> `https://tudominio.com/email-signatures/generador-firmas.html` |
| **Generador de Vacantes** | `https://tudominio.com/vacantes` | `https://tudominio.com/generador-vacantes` <br> `https://tudominio.com/generador-vacantes.html` |

---

## 🚀 Paso 1: Subir el proyecto a GitHub

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
# 1. Agregar todos los archivos preparados
git add .

# 2. Crear el primer commit
git commit -m "feat: setup i2 services web, generador de firmas y generador de vacantes con docker para easypanel"

# 3. Vincular con tu repositorio remoto de GitHub (reemplaza con tu URL)
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# 4. Subir la rama principal
git push -u origin main
```

*(Nota: `.gitignore` ya está configurado para omitir `node_modules`, `dist` y temporales).*

---

## 🐳 Paso 2: Crear la Aplicación en EasyPanel

1. Inicia sesión en tu panel de **EasyPanel**.
2. Ve a tu proyecto y haz clic en **"+ New Service"** y selecciona **"App"**.
3. asígnale un nombre (por ejemplo: `i2-services`).

### Configuración del Servicio (Source):
- **Source Type:** Selecciona **GitHub**.
- **Repository:** Selecciona tu repositorio (ej. `usuario/i2-services`).
- **Branch:** `main`.
- **Build Type:** Selecciona **Dockerfile** (el Dockerfile ya está listo en la raíz).

### Puertos y Dominios (Domains):
- **Port:** Escribe `80` (Nginx escucha internamente en el puerto 80).
- **Domain:** Ingresa tu dominio (ej. `i2services.co` o tu subdominio).
- Marca la opción de **HTTPS / SSL** (EasyPanel emitirá automáticamente el certificado Let's Encrypt).

### Despliegue:
- Haz clic en el botón verde **"Deploy"**.
- EasyPanel se encargará de:
  1. Instalar dependencias con `npm ci`.
  2. Compilar el sitio con `npm run build`.
  3. Empaquetar todo en una imagen ligera de Nginx (`nginx:alpine`).
  4. Aplicar compresión Gzip y headers de seguridad automáticos.
  5. Activar el contenedor con reinicio automático.

---

## 🛠️ Estructura Docker Creada

- **`Dockerfile`**: Compilación multi-stage (Node 20 Alpine -> Nginx 1.27 Alpine).
- **`nginx.conf`**: Configuración optimizada con soporte SPA, compresión Gzip, caché de 30 días para assets/videos y redirecciones limpias para `/firmas` y `/vacantes`.
- **`.dockerignore`**: Excluye carpetas innecesarias para mantener builds ultra rápidos.
- **`docker-compose.yml`**: Plantilla de orquestación compatible para despliegue directo.
