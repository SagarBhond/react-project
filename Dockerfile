# Multi-stage Dockerfile: build frontend then build backend image that serves both API and static files
# Stage 1: build frontend
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json* ./ 
# install react-scripts build dependencies
RUN apk add --no-cache python3 make g++ || true
RUN npm install
COPY frontend/ .
RUN npm run build

# Stage 2: final image with node runtime for backend + static files from frontend
FROM node:18-alpine
WORKDIR /app

# copy backend
COPY backend/package.json backend/package-lock.json* ./backend/
WORKDIR /app/backend
RUN npm install --production

# copy backend source
COPY backend/ ./backend/

# copy frontend build into backend/public
COPY --from=frontend-build /app/frontend/build ./backend/public

WORKDIR /app/backend
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server.js"]
