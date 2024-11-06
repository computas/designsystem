# Step 1: Build phase
FROM oven/bun:latest AS build

# Set working directory, copy package.json and Bun lock file to the working directory
WORKDIR /app
COPY package.json bun.lockb /app/
COPY . .

# Install dependencies and copy the remaining project files to our image
RUN bun install

# Build app, which is placed in the /dist folder by default
RUN bun run build-docs

# Step 2: Setup server
FROM nginx:alpine

# Copy app from the /dist folder to Nginx
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/storybook-static /usr/share/nginx/html

# Copy Nginx configuration which ensures SPA behavior
COPY nginx/default.conf /etc/nginx/conf.d/

# Expose port 8080 to serve the app
EXPOSE 8080

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
