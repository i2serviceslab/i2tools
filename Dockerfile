# ==============================================================
# i2 Services S.A.S. - Production High-Performance Dockerfile
# Optimized for ultra-fast, timeout-free builds on EasyPanel
# ==============================================================

FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=80

# Install ONLY the 3 lightweight runtime packages (takes < 3 seconds, avoids npm timeouts)
RUN npm install --no-audit --no-fund express compression resend

# Copy pre-compiled production distribution assets & server
COPY dist ./dist
COPY server.js ./
COPY package.json ./

# Support both port 80 and 3000
EXPOSE 80 3000

CMD ["node", "server.js"]
