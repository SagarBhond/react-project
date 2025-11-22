# ---------- FRONTEND BUILD STAGE ----------
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ .
RUN npm run build


# ---------- BACKEND STAGE ----------
FROM node:18-alpine
WORKDIR /app

COPY backend/package*.json ./
RUN npm install

# Copy backend code
COPY backend/ .

# Copy frontend build output to backend public folder
COPY --from=frontend-build /app/frontend/build ./public

EXPOSE 3001

CMD ["node", "server.js"]

