<!-- → Architecture & Build by DocSynapse -->
<!-- Intelligent by Design. Crafted for Humanity. -->

# Setup Guide

## Prerequisites

- Node.js 20+ ([Download](https://nodejs.org/))
- pnpm 9.10+ (`npm install -g pnpm@9.10.0`)
- Docker and Docker Compose ([Download](https://www.docker.com/))
- PostgreSQL 16+ (or use Docker)
- Git

## Quick Start

### 1. Clone Repository

```bash
git clone <repository-url>
cd aether
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

#### Backend
```bash
cd backend
cp .env.example .env
# Edit .env with your configuration
```

Required variables:
- `DB_HOST` - Database host (default: localhost)
- `DB_PORT` - Database port (default: 5432)
- `DB_NAME` - Database name (default: aether_db)
- `DB_USER` - Database user (default: postgres)
- `DB_PASSWORD` - Database password (default: postgres)
- `JWT_SECRET` - Secret key for JWT tokens (change in production!)
- `FRONTEND_URL` - Frontend URL for CORS (default: http://localhost:3000)

#### Frontend
```bash
cd apps/www
# Create .env.local if needed
```

Example `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 4. Start Database

Using Docker Compose:
```bash
docker-compose up -d postgres
```

Or manually:
```bash
# Create database
createdb aether_db

# Run migrations
psql -U postgres -d aether_db -f backend/migrations/001_create_tables.sql
```

### 5. Start Backend

```bash
cd backend
pnpm dev
```

Backend will run on `http://localhost:3001`
API docs available at `http://localhost:3001/api-docs`

### 6. Start Frontend

```bash
cd apps/www
pnpm dev
```

Frontend will run on `http://localhost:3000`

## Development Workflow

### Running Tests

#### Backend Tests
```bash
cd backend
pnpm test              # Run all tests
pnpm test:coverage     # Run with coverage
pnpm test:integration  # Run integration tests
```

#### Frontend Tests
```bash
cd apps/www
pnpm test              # Run tests (if configured)
```

### Linting

```bash
# Backend
cd backend
pnpm lint

# Frontend
cd apps/www
pnpm lint
```

### Building

```bash
# Backend
cd backend
pnpm build
pnpm start

# Frontend
cd apps/www
pnpm build
pnpm start
```

## Docker Setup

### Run Everything with Docker Compose

```bash
# Build and start all services
docker-compose up --build

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Individual Services

```bash
# Start only database
docker-compose up -d postgres

# Build backend image
docker build -t aether-backend ./backend

# Run backend container
docker run -p 3001:3001 --env-file backend/.env aether-backend
```

## Database Migrations

Migrations are located in `backend/migrations/`.

To run migrations manually:
```bash
psql -U postgres -d aether_db -f backend/migrations/001_create_tables.sql
```

Or use a migration tool (recommended for production):
- [node-pg-migrate](https://github.com/thlorenz/node-pg-migrate)
- [db-migrate](https://db-migrate.readthedocs.io/)

## Troubleshooting

### Port Already in Use

```bash
# Find process using port
lsof -i :3001  # macOS/Linux
netstat -ano | findstr :3001  # Windows

# Kill process or change PORT in .env
```

### Database Connection Error

1. Check PostgreSQL is running:
```bash
docker-compose ps
# or
pg_isready
```

2. Verify connection string in `.env`
3. Check database exists:
```bash
psql -U postgres -l
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
pnpm install
```

### TypeScript Errors

```bash
# Check TypeScript version
pnpm list typescript

# Rebuild
pnpm build
```

## Production Deployment

### Backend

1. Set production environment variables
2. Build Docker image:
```bash
docker build -t aether-backend ./backend
```

3. Deploy to your hosting platform (AWS, DigitalOcean, etc.)

### Frontend

1. Set production environment variables
2. Build:
```bash
cd apps/www
pnpm build
```

3. Deploy to Vercel:
```bash
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Next Steps

- [ ] Set up CI/CD pipeline
- [ ] Configure production database
- [ ] Set up monitoring and logging
- [ ] Configure SSL/TLS certificates
- [ ] Set up backup strategy
