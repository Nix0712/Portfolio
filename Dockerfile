# Build stage: use Node and Yarn (via Corepack) to install dependencies and build the app
FROM node:alpine AS builder

WORKDIR /app

# Enable Corepack and activate Yarn 4.9.2
RUN corepack enable && corepack prepare yarn@4.9.2 --activate

# Copy dependency manifests first for better caching
COPY package.json yarn.lock ./

# Install dependencies (ensure your yarn.lock is up-to-date before building!)
RUN yarn install --immutable

# Copy all source code and config files
COPY . .

# Build your app (replace 'prod-folio' with your actual build script if different)
RUN yarn run prod-folio

# Production stage: use a minimal Node.js image with http-server to serve static files
FROM node:alpine AS production

WORKDIR /app

# Install http-server globally using npm (Yarn 4+ no longer supports 'yarn global add')
RUN npm install -g http-server

# Copy built static files from builder stage
COPY --from=builder /app/dist ./dist

EXPOSE 8080

# Serve the static site from the dist directory
CMD ["http-server", "dist", "-p", "8080"]
