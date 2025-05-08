FROM node:20-slim as frontend-builder

WORKDIR /app/frontend

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ ./

RUN npm run build


FROM node:20-slim as backend-builder

WORKDIR /app/backend

COPY backend/package*.json ./

RUN npm install

COPY backend/ ./

FROM node:20-slim

WORKDIR /app

COPY --from=backend-builder /app/backend /app/backend

COPY --from=frontend-builder /app/frontend/build /app/backend/public

EXPOSE 5000

CMD ["node", "backend/server.js"]
