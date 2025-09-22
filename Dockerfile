FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install only production deps (fast, small image)
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy app source
COPY . .

EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
