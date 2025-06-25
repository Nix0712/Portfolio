# Build stage: use Node and Yarn (via Corepack) to install dependencies and build the app
FROM node:24-alpine AS builder

WORKDIR /app
# Enable Corepack and activate Yarn 4.9.2
# Copy dependency manifests first for better caching
COPY . .
RUN corepack enable 
# Install dependencies (ensure your yarn.lock is up-to-date before building!)
RUN yarn install 
RUN yarn run prod-folio:build


# Production stage: use a minimal Node.js image with http-server to serve static files
FROM nginx:alpine AS production

WORKDIR /usr/share/nginx/html

# Install http-server globally using npm (Yarn 4+ no longer supports 'yarn global add')

# Copy built static files from builder stage
COPY --from=builder /app/apps/prod-folio/dist/ /usr/share/nginx/html/
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
