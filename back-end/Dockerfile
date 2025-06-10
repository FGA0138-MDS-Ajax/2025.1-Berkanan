# Use the official Bun image
FROM oven/bun:1.0-alpine AS builder

# Set working directory
WORKDIR /app

# Install system dependencies (if needed)
RUN apk add --no-cache curl

# Copy only package files first for better caching
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the application (if you have a build step)
RUN bun run build

# Production stage
FROM oven/bun:1.0-alpine

WORKDIR /app

# Copy package files
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lockb* ./

# Copy built artifacts and node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules

# Copy the rest of the application
COPY . .

# Set environment to production
ENV NODE_ENV=production

# Expose the port
EXPOSE 3003

# Health check (optional but recommended)
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s \
  CMD curl -f http://localhost:3003/health || exit 1

# Run the application
CMD ["bun", "dev"]
