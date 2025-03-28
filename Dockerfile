# Use the official Nginx image as the base image
FROM nginx:latest

# Copy the content of the src directory to the Nginx HTML directory
COPY src /usr/share/nginx/html

# Expose port 80 to serve the content
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]