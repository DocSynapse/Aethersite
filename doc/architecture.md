<!-- → Architecture & Build by DocSynapse -->
<!-- Intelligent by Design. Crafted for Humanity. -->

# Architecture Documentation

## Overview

Aether is a full-stack application built with Next.js (frontend) and Express.js (backend), using PostgreSQL as the database.

## System Architecture

```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│   Frontend  │ ──────> │   Backend   │ ──────> │  PostgreSQL │
│  (Next.js)  │         │  (Express)  │         │   Database  │
└─────────────┘         └─────────────┘         └─────────────┘
     │                         │
     │                         │
     └─────────────────────────┘
          JWT Authentication
```

## Frontend Architecture

### Technology Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 4
- **State Management**: React Hooks + Context API
- **Package Manager**: pnpm 9.10

### Structure
```
apps/www/
├── app/              # Next.js App Router pages
├── components/       # React components
├── lib/              # Utility functions
└── public/           # Static assets
```

## Backend Architecture

### Technology Stack
- **Framework**: Express.js
- **Language**: TypeScript 5+
- **Database**: PostgreSQL 16
- **Authentication**: JWT (jsonwebtoken)
- **Validation**: Zod
- **API Documentation**: Swagger/OpenAPI

### Structure
```
backend/
├── src/
│   ├── config/       # Configuration (database, swagger)
│   ├── middleware/   # Express middleware
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   ├── tests/        # Test files
│   └── server.ts     # Entry point
├── migrations/       # Database migrations
└── Dockerfile        # Container configuration
```

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### Items Table
```sql
CREATE TABLE items (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

## Authentication Flow

1. User signs up/logs in
2. Backend validates credentials
3. JWT token generated and returned
4. Frontend stores token (localStorage/sessionStorage)
5. Token included in Authorization header for protected routes
6. Backend validates token on each request

## API Design

### RESTful Conventions
- `GET /api/items` - List all items
- `GET /api/items/:id` - Get item by ID
- `POST /api/items` - Create new item
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item

### Response Format
```json
{
  "data": {},
  "error": {}
}
```

## Security

- Helmet.js for security headers
- CORS configuration
- Password hashing with bcrypt
- JWT token expiration
- Input validation with Zod
- SQL injection prevention (parameterized queries)

## Deployment

### Frontend
- **Platform**: Vercel
- **Build**: `pnpm build`
- **Start**: `pnpm start`

### Backend
- **Platform**: Docker Container
- **Database**: PostgreSQL (Docker Compose)
- **Orchestration**: docker-compose.yml

## Development Workflow

1. Frontend and backend run independently
2. Frontend connects to backend API
3. Database runs in Docker container
4. Hot reload enabled for development
5. Tests run before deployment

## Future Considerations

- [ ] Add Redis for caching
- [ ] Implement rate limiting
- [ ] Add WebSocket support for real-time features
- [ ] Set up monitoring and logging (e.g., Sentry)
- [ ] Implement database connection pooling optimization
- [ ] Add API versioning
