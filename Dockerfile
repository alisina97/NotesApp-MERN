FROM node:20-slim

# Create app directory
WORKDIR /app

# Copy backend package files
COPY backend/package*.json ./backend/

# Install backend dependencies
RUN cd backend && npm install

# Copy backend source code
COPY backend ./backend

# Expose port (change if your backend uses a different port)
EXPOSE 5000

# Start the backend
CMD ["node", "backend/server.js"]
