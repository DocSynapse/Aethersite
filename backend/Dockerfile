# → Architecture & Build by DocSynapse
# Intelligent by Design. Crafted for Humanity.

FROM node:20-alpine AS base

# Install pnpm
RUN npm install -g pnpm@9.10.0

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build stage
FROM base AS build
COPY . .
RUN pnpm build

# Production stage
FROM base AS production

# Copy built files
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Expose port
EXPOSE 3001

# Start server
CMD ["pnpm", "start"]

