<!-- → Architecture & Build by DocSynapse -->
<!-- Intelligent by Design. Crafted for Humanity. -->

# API Documentation

## Base URL

- Development: `http://localhost:3001`
- Production: `https://api.example.com` <!-- TODO: Update with production URL -->

## Authentication

Most endpoints require authentication via JWT token. Include the token in the Authorization header:

```
Authorization: Bearer <your-token>
```

## Endpoints

### Health Check

#### GET /health
Check API health status.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

---

### Authentication

#### POST /api/auth/signup
Register a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "user@example.com"
  }
}
```

**Errors:**
- `400` - User already exists or validation error
- `400` - Invalid email format or password too short

---

#### POST /api/auth/login
Login with email and password.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "user@example.com"
  }
}
```

**Errors:**
- `401` - Invalid credentials

---

#### GET /api/auth/me
Get current authenticated user information.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com"
  }
}
```

**Errors:**
- `401` - Unauthorized (missing or invalid token)
- `404` - User not found

---

### Items

All item endpoints require authentication.

#### GET /api/items
Get all items for the authenticated user.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "items": [
    {
      "id": "uuid",
      "user_id": "uuid",
      "title": "Item Title",
      "description": "Item description",
      "created_at": "2025-01-01T00:00:00.000Z",
      "updated_at": "2025-01-01T00:00:00.000Z"
    }
  ]
}
```

---

#### GET /api/items/:id
Get a specific item by ID.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "item": {
    "id": "uuid",
    "user_id": "uuid",
    "title": "Item Title",
    "description": "Item description",
    "created_at": "2025-01-01T00:00:00.000Z",
    "updated_at": "2025-01-01T00:00:00.000Z"
  }
}
```

**Errors:**
- `404` - Item not found

---

#### POST /api/items
Create a new item.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "title": "Item Title",
  "description": "Optional description"
}
```

**Response (201):**
```json
{
  "item": {
    "id": "uuid",
    "user_id": "uuid",
    "title": "Item Title",
    "description": "Optional description",
    "created_at": "2025-01-01T00:00:00.000Z",
    "updated_at": "2025-01-01T00:00:00.000Z"
  }
}
```

**Errors:**
- `400` - Validation error (title required, max length 255)

---

#### PUT /api/items/:id
Update an existing item.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "title": "Updated Title",
  "description": "Updated description"
}
```

**Response (200):**
```json
{
  "item": {
    "id": "uuid",
    "user_id": "uuid",
    "title": "Updated Title",
    "description": "Updated description",
    "created_at": "2025-01-01T00:00:00.000Z",
    "updated_at": "2025-01-01T00:00:00.000Z"
  }
}
```

**Errors:**
- `404` - Item not found
- `400` - Validation error

---

#### DELETE /api/items/:id
Delete an item.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "message": "Item deleted successfully"
}
```

**Errors:**
- `404` - Item not found

---

## Error Responses

All errors follow this format:

```json
{
  "error": {
    "message": "Error message description"
  }
}
```

Common HTTP Status Codes:
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (authentication required)
- `403` - Forbidden (invalid token)
- `404` - Not Found
- `500` - Internal Server Error

## Rate Limiting

Currently not implemented. TODO: Add rate limiting middleware.

## API Versioning

Currently using unversioned API. Future versions will use `/api/v1/` prefix.

## Interactive Documentation

Swagger UI is available at `/api-docs` when the server is running.
