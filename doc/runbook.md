<!-- → Architecture & Build by DocSynapse -->
<!-- Intelligent by Design. Crafted for Humanity. -->

# Runbook

Operations guide for the Aether project.

## Monitoring

### Health Checks

#### Backend Health
```bash
curl http://localhost:3001/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

#### Database Health
```bash
docker-compose exec postgres pg_isready -U postgres
```

### Logs

#### Backend Logs
```bash
# Development
cd backend && pnpm dev

# Docker
docker-compose logs -f backend

# Production (if using PM2)
pm2 logs aether-backend
```

#### Database Logs
```bash
docker-compose logs -f postgres
```

## Common Operations

### Restart Services

```bash
# Restart backend
docker-compose restart backend

# Restart database
docker-compose restart postgres

# Restart all
docker-compose restart
```

### Database Operations

#### Backup Database
```bash
docker-compose exec postgres pg_dump -U postgres aether_db > backup_$(date +%Y%m%d).sql
```

#### Restore Database
```bash
docker-compose exec -T postgres psql -U postgres aether_db < backup_20250101.sql
```

#### Access Database Console
```bash
docker-compose exec postgres psql -U postgres -d aether_db
```

#### Run SQL Query
```bash
docker-compose exec postgres psql -U postgres -d aether_db -c "SELECT COUNT(*) FROM users;"
```

### Clear Data

#### Reset Database (⚠️ Destructive)
```bash
docker-compose down -v
docker-compose up -d postgres
# Then run migrations again
```

## Troubleshooting

### Backend Won't Start

1. Check logs:
```bash
docker-compose logs backend
```

2. Verify environment variables:
```bash
docker-compose exec backend env | grep DB_
```

3. Check database connection:
```bash
docker-compose exec backend ping postgres
```

### Database Connection Issues

1. Verify PostgreSQL is running:
```bash
docker-compose ps postgres
```

2. Check connection string:
```bash
# In backend container
docker-compose exec backend env | grep DB_
```

3. Test connection manually:
```bash
docker-compose exec backend node -e "
const { Pool } = require('pg');
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});
pool.query('SELECT NOW()', (err, res) => {
  console.log(err || res.rows[0]);
  process.exit(0);
});
"
```

### High Memory Usage

1. Check container stats:
```bash
docker stats
```

2. Restart containers:
```bash
docker-compose restart
```

3. Check for memory leaks in application logs

### Slow API Responses

1. Check database query performance:
```bash
docker-compose exec postgres psql -U postgres -d aether_db -c "
SELECT pid, now() - pg_stat_activity.query_start AS duration, query
FROM pg_stat_activity
WHERE state = 'active' AND query NOT LIKE '%pg_stat_activity%';
"
```

2. Check connection pool usage
3. Review slow query logs

## Deployment Checklist

### Pre-Deployment

- [ ] Run all tests: `pnpm test`
- [ ] Check linting: `pnpm lint`
- [ ] Review environment variables
- [ ] Backup database
- [ ] Check dependencies for security updates

### Deployment

1. Build production images:
```bash
docker-compose build
```

2. Run migrations:
```bash
# Ensure migrations are up to date
```

3. Start services:
```bash
docker-compose up -d
```

4. Verify health:
```bash
curl http://localhost:3001/health
```

### Post-Deployment

- [ ] Verify API endpoints
- [ ] Check error logs
- [ ] Monitor performance metrics
- [ ] Test authentication flow
- [ ] Verify database connections

## Security

### Update Secrets

1. Update `.env` file
2. Restart services:
```bash
docker-compose restart backend
```

### Rotate JWT Secret

⚠️ **Warning**: This will invalidate all existing tokens!

1. Update `JWT_SECRET` in `.env`
2. Restart backend
3. Notify users to re-authenticate

### Database Security

1. Change default PostgreSQL password
2. Restrict database access to backend only
3. Enable SSL connections in production
4. Regular security updates

## Performance Tuning

### Database

1. Add indexes for frequently queried columns
2. Analyze query performance:
```sql
EXPLAIN ANALYZE SELECT * FROM items WHERE user_id = '...';
```

3. Vacuum database regularly:
```sql
VACUUM ANALYZE;
```

### Backend

1. Enable connection pooling (already configured)
2. Add caching layer (Redis) - TODO
3. Implement rate limiting - TODO
4. Monitor response times

## Emergency Procedures

### Service Down

1. Check status:
```bash
docker-compose ps
```

2. View logs:
```bash
docker-compose logs --tail=100
```

3. Restart service:
```bash
docker-compose restart <service-name>
```

### Data Loss

1. Stop services immediately
2. Restore from latest backup
3. Investigate root cause
4. Document incident

### Security Breach

1. Rotate all secrets immediately
2. Review access logs
3. Check for unauthorized access
4. Notify security team
5. Document incident

## Maintenance Windows

Schedule regular maintenance:
- Database backups: Daily
- Security updates: Weekly
- Dependency updates: Monthly
- Performance review: Quarterly

## Support Contacts

- **Development Team**: dev@sentra-aether.com
- **Infrastructure**: infra@sentra-aether.com
- **Security**: security@sentra-aether.com
