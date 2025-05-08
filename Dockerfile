# Stage 1: Build React frontend
FROM node:20-slim as frontend-builder

WORKDIR /app/frontend

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ ./

RUN npm run build


# Stage 2: Build Node.js backend
FROM node:20-slim as backend-builder

WORKDIR /app/backend

COPY backend/package*.json ./

RUN npm install

COPY backend/ ./

# Stage 3: Production image
FROM node:20-slim

WORKDIR /app

# Copy backend from builder
COPY --from=backend-builder /app/backend /app/backend

# Copy frontend build into backend's public directory (adjust if your backend serves static files differently)
COPY --from=frontend-builder /app/frontend/build /app/backend/public

# Install production dependencies only (if needed, otherwise skip this step)
# RUN cd backend && npm install --omit=dev

# Expose the port your backend listens on
EXPOSE 5000

# Start the backend server
CMD ["node", "backend/server.js"]
