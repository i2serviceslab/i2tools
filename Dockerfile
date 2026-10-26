# ==============================================================
# i2 Services S.A.S. - Production Multi-Stage Dockerfile
# Optimized for EasyPanel, GitHub CI/CD, and Docker Compose
# Includes Node.js API backend (Resend integration) & Static Assets
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

# Stage 2: Production Server (Node 20 Alpine)
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=80

# Install production dependencies only
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built distribution from builder
COPY --from=builder /app/dist ./dist

# Copy server script
COPY server.js ./

# Expose HTTP port for EasyPanel
EXPOSE 80

# Healthcheck for container orchestrators (EasyPanel / Swarm / Docker)
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1/api/health').then(r=>r.ok?process.exit(0):process.exit(1)).catch(()=>process.exit(1))"

# Start Node production server
CMD ["node", "server.js"]
