# Step 1: Build the React app
FROM node:20 as builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Step 2: Serve the built app with nginx
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
