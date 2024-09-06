# Use Node.js base image with TypeScript support
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install TypeScript globally
RUN npm install -g typescript

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
COPY tsconfig.json .

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Compile TypeScript to JavaScript
RUN tsc

# Expose the port your app runs on
EXPOSE 8001

# Command to run your app
CMD ["node", "dist/server.js"]
