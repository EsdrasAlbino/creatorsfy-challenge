FROM node:20-alpine

# Install dependencies for node-gyp
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build application
RUN yarn build

# Expose port
EXPOSE 3000

# Start application
CMD ["yarn", "start:prod"]
