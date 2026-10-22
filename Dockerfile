# ==============================================================
# i2 Services S.A.S. - Production Multi-Stage Dockerfile
# Optimized for EasyPanel, GitHub CI/CD, and Docker Compose
# ==============================================================

# Stage 1: Build the Vite + React web application
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies (utilizing layer caching)
COPY package*.json ./
RUN npm ci

# Copy the entire project
COPY . .

# Build production assets (Vite React App + public static generators)
RUN npm run build

# Stage 2: Serve with lightweight, high-performance Nginx
FROM nginx:1.27-alpine AS runner

# Remove default nginx static html files
RUN rm -rf /usr/share/nginx/html/*

# Copy built distribution from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration with friendly routes & gzip
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port for EasyPanel
EXPOSE 80

# Healthcheck for container orchestrators (EasyPanel / Swarm / Docker)
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
