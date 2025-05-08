# Step 1: Build React app from the correct subdirectory
FROM node:20 as builder

WORKDIR /app

# Copy just the frontend/notes-app folder
COPY frontend/notes-app/ .

RUN npm install
RUN npm run build

# Step 2: Serve the built app using nginx
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
