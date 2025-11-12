<!-- → Architecture & Build by DocSynapse -->
<!-- Intelligent by Design. Crafted for Humanity. -->

# Backend API

Express.js backend API for Aether project.

## Features

- RESTful API with Express.js
- PostgreSQL database
- JWT authentication
- OpenAPI/Swagger documentation
- TypeScript
- Unit and integration tests

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# TODO: Edit .env with your configuration
```

3. Start PostgreSQL (using Docker Compose):
```bash
docker-compose up -d postgres
```

4. Run migrations:
```bash
# TODO: Connect to PostgreSQL and run migrations/001_create_tables.sql
psql -U postgres -d aether_db -f migrations/001_create_tables.sql
```

5. Start development server:
```bash
pnpm dev
```

## API Documentation

Once the server is running, visit:
- Swagger UI: http://localhost:3001/api-docs

## Testing

```bash
# Run all tests
pnpm test

# Run with coverage
pnpm test:coverage

# Run integration tests
pnpm test:integration
```

## Build

```bash
pnpm build
pnpm start
```

## Docker

```bash
# Build image
docker build -t aether-backend ./backend

# Run with docker-compose
docker-compose up
```

## Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── middleware/      # Express middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── tests/           # Test files
│   └── server.ts        # Entry point
├── migrations/          # Database migrations
├── Dockerfile           # Container configuration
└── package.json         # Dependencies
```

## Environment Variables

See `.env.example` for required environment variables.

## API Endpoints

- `GET /health` - Health check
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `GET /api/items` - List items (protected)
- `POST /api/items` - Create item (protected)
- `GET /api/items/:id` - Get item (protected)
- `PUT /api/items/:id` - Update item (protected)
- `DELETE /api/items/:id` - Delete item (protected)

See [API Documentation](../doc/api.md) for detailed API reference.
