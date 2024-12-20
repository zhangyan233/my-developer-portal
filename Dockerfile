# Step 1: Use Node.js as the base image to build the React app
FROM node:16-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all application files
COPY . .

# Build the React app
RUN npm run build

# Step 2: Use Nginx as the base image to serve the built app
FROM nginx:stable-alpine

# Copy the built app from the build step to the Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
