<!-- → Architecture & Build by DocSynapse -->
<!-- Intelligent by Design. Crafted for Humanity. -->

<div align="center">

# 🌌 AETHERSITE  
### The Digital Home of **Sentra Entity**

<p align="center">
  <strong>PROTOTYPE – UNDER DEVELOPMENT</strong><br/>
  Next-Generation AI Healthcare Assistant Platform
</p>

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1olm1Dlk7wDYIYXRqU8GlhtuPGVYYPoLe" width="240" alt="Sentra Logo">
</p>

</div>  <!-- 🔹 Tutup di sini agar bagian bawah kembali rata kiri -->

---

## ⚙️ DEVELOPMENT STATUS

> **Note:** This is the **AETHERSITE PROTOTYPE** — an active development version of Sentra Entity’s digital home, serving as a research and design foundation for the final release.

**Version:** 0.1.0 (Prototype Phase)  
**Status:** Development / Testing  
**Last Updated:** November 2025  
**Developed by:** Sentra Development Team (DocSynapse)

---

## 📖 About Aethersite

**Aethersite** serves as the digital ecosystem for **Sentra Entity** — an AI healthcare assistant designed to enhance both the *efficiency* and *empathy* of medical professionals.

### What is Sentra Entity?

Sentra Entity is embodied in an AI-driven character named **AUDREY** (*Advanced Unified Digital Resource Entity for You*).  
Through Aethersite, **AUDREY** becomes a responsive and adaptive companion for healthcare teams, capable of delivering:

- 🤖 **AI Personality Engine** — Emotionally aware and context-sensitive responses  
- 💬 **Natural Interaction** — Conversational intelligence and empathy  
- 🏥 **Healthcare Focus** — Designed for clinical environments and medical data flows  
- 🎨 **Visual Identity** — Manifested through the *ArtificialHero* core component  

### Prototype Objectives

- Validate architecture and design principles  
- Refine user experience and data flow  
- Test technical scalability and performance  
- Establish the foundation for Sentra Entity’s full deployment  

---

## 🏗️ TECHNOLOGY ARCHITECTURE

### Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.6-38B2AC?style=for-the-badge&logo=tailwind-css)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)

</div>

**Frontend:**
- **Framework:** Next.js 15+ (App Router, RSC, Suspense, Streaming)  
- **Language:** TypeScript 5+  
- **Styling:** Tailwind CSS 4 (JIT, scalable theme system)  
- **Animation:** GSAP 3.13+ (scroll-based timelines, GPU optimized)  

**Backend:**
- **Framework:** Express.js 4+
- **Language:** TypeScript 5+
- **Database:** PostgreSQL 16
- **Authentication:** JWT (jsonwebtoken)
- **API Documentation:** Swagger/OpenAPI

**Infrastructure:**
- **Package Manager:** pnpm 9.10 (monorepo support, workspace linking)  
- **Deployment:** Vercel (frontend) + Docker Compose (backend)
- **CI/CD:** GitHub Actions

---

## ⭐ CORE COMPONENT: ArtificialHero

**ArtificialHero** represents the visual and interactive layer of **AUDREY**, the Sentra AI Entity.

**Core Features**
- 🎭 Adaptive personality-driven interaction  
- 🎨 Canvas-based rendering and animation  
- ✨ GSAP timeline orchestration  
- 📜 Scroll-triggered transitions  
- 🚀 Optimized for performance and smooth experience  

<div align="center">
  <img src="https://drive.google.com/uc?export=view&id=1i6LQ_9UvWFRnJcCx0DfWEVM0mkIy5VMl" alt="ArtificialHero Architecture" width="800"/>
</div>

---

## 🚀 DEVELOPMENT GUIDE

### Prerequisites
```bash
node --version     # Node.js 20+
npm install -g pnpm@9.10.0
```

### Installation
```bash
git clone <repository-url>
cd Aethersite
pnpm install
```

### Commands
```bash
pnpm dev              # Start frontend dev server (localhost:3000)
pnpm dev:backend      # Start backend API server (localhost:3001)
pnpm build            # Build frontend production bundle
pnpm build:backend    # Build backend production bundle
pnpm start            # Run frontend production server
pnpm start:backend    # Run backend production server
pnpm lint             # Run ESLint checks (frontend + backend)
pnpm test             # Run backend tests
pnpm test:coverage     # Run backend tests with coverage
pnpm docker:up        # Start Docker services (database + backend)
pnpm docker:down      # Stop Docker services
pnpm registry:build   # Build component registry
```

### Project Structure
```
aether/
├── apps/
│   └── www/                    # Frontend (Next.js)
│       ├── app/                # Next.js App Router pages
│       ├── components/         # React components
│       ├── lib/                # Utility functions
│       └── public/             # Static assets
├── backend/                    # Backend API (Express.js)
│   ├── src/
│   │   ├── config/            # Database & Swagger config
│   │   ├── middleware/        # Auth, error handling
│   │   ├── models/            # Database models (User, Item)
│   │   ├── routes/            # API routes (auth, items)
│   │   ├── tests/             # Unit & integration tests
│   │   └── server.ts          # Express server entry point
│   ├── migrations/            # Database migrations (SQL)
│   ├── Dockerfile             # Container configuration
│   └── package.json           # Backend dependencies
├── packages/                   # Shared packages
│   ├── core/                  # Core logic
│   ├── dusk/                  # Dark theme kit
│   ├── mist/                  # Light theme kit
│   └── ts-config/             # Shared TypeScript config
├── doc/                        # Documentation
│   ├── architecture.md        # System architecture
│   ├── api.md                 # API documentation
│   ├── setup.md               # Setup guide
│   └── runbook.md             # Operations guide
├── .github/workflows/         # CI/CD
│   └── ci.yml                 # GitHub Actions workflow
├── docker-compose.yml         # Docker orchestration
└── package.json               # Root package.json
```

### File Descriptions

#### Backend Files
- `backend/src/server.ts` - Express server entry point, routes setup
- `backend/src/config/database.ts` - PostgreSQL connection pool configuration
- `backend/src/config/swagger.ts` - OpenAPI/Swagger documentation setup
- `backend/src/middleware/auth.middleware.ts` - JWT authentication middleware
- `backend/src/middleware/errorHandler.ts` - Global error handling middleware
- `backend/src/models/user.model.ts` - User database model and queries
- `backend/src/models/item.model.ts` - Item database model and CRUD operations
- `backend/src/routes/auth.routes.ts` - Authentication routes (signup, login, me)
- `backend/src/routes/items.routes.ts` - Items CRUD routes (protected)
- `backend/migrations/001_create_tables.sql` - Database schema migration
- `backend/src/tests/*.test.ts` - Unit tests for modules
- `backend/src/tests/integration/*.test.ts` - Integration tests for API endpoints
- `backend/Dockerfile` - Multi-stage Docker build configuration
- `backend/.env.example` - Environment variables template (TODO: copy to .env)

#### Frontend Files
- `apps/www/app/` - Next.js App Router pages and layouts
- `apps/www/components/` - React components including ArtificialHero
- `apps/www/lib/` - Utility functions and helpers
- `apps/www/vercel.json` - Vercel deployment configuration

#### Documentation Files
- `doc/architecture.md` - System architecture, tech stack, database schema
- `doc/api.md` - Complete API reference with endpoints and examples
- `doc/setup.md` - Setup instructions, troubleshooting, deployment guide
- `doc/runbook.md` - Operations guide, monitoring, troubleshooting procedures

#### Configuration Files
- `package.json` - Root package.json with workspace scripts
- `docker-compose.yml` - Docker Compose configuration for PostgreSQL + Backend
- `.github/workflows/ci.yml` - GitHub Actions CI/CD pipeline
- `.gitignore` - Git ignore patterns for dependencies, build outputs, env files

---

## 🎨 DESIGN SYSTEM

**Typography:** Inter + JetBrains Mono  
**Color Palette:**  
- Trust → `#0ea5e9`  
- Vitality → `#10b981`  
- Precision → `#8b5cf6`  
- Warmth → `#f59e0b`

**Accessibility Standard:** WCAG 2.1 AA  
✅ Keyboard navigation  
✅ Screen reader compatibility  
✅ Color contrast compliance  

---

## 📊 PERFORMANCE TARGETS

| Metric | Target |
|--------|--------|
| FCP | < 1.5s |
| LCP | < 2.5s |
| TTI | < 2.0s |
| CLS | < 0.1 |
| TBT | < 200ms |

---

## 🔒 SECURITY & COMPLIANCE

**Planned Implementations:**
- Content Security Policy (CSP)  
- HIPAA-aligned data protection  
- End-to-end encryption  
- Secure role-based access control  
- TLS 1.3 enforcement  

---

## 🗺️ ROADMAP

### Phase 1 – Foundation (Q4 2025)
- [x] Prototype build  
- [x] Core functionality  
- [ ] UX refinement  
- [ ] Integration tests  

### Phase 2 – Enhancement (Q1 2026)
- [ ] Advanced UI interaction  
- [ ] Accessibility upgrade  
- [ ] Performance optimization  

### Phase 3 – Production (Q2–Q3 2026)
- [ ] CI/CD pipeline  
- [ ] Security audit  
- [ ] Beta release  

---

## 🤝 CONTRIBUTION

This prototype is currently **closed-source** for internal development.  
Future contribution guidelines will include:
- Conventional Commits  
- TypeScript strict mode  
- 80%+ test coverage  
- Dual maintainer review  

---

## 👥 TEAM

**Maintained by:** Sentra Development Team  
**Framework Concept:** DocSynapse

**With ❤️ to Del, Aldebaran, Aimee, Audrey

---

## 📞 CONTACT

**Security:** security@sentra.health *(placeholder)*  
**General:** info@sentra.health *(placeholder)*  

---

## 📄 LICENSE

See [LICENSE.md](./LICENSE.md) for details.

---

## 🎯 CLOSING NOTE

> **Aethersite** is more than a prototype — it’s the digital foundation for **Sentra Entity**, a vision where technology amplifies human care.

Each architectural decision within this system represents a pursuit of precision, empathy, and durability.
We believe great technology is not just engineered — it's *crafted with purpose*.

---

<div align="center">

**🌌 AETHERSITE — Home of Sentra Entity 🌌**  
*Building the future of healthcare AI, one line of code at a time.*

**STATUS: PROTOTYPE**

</div>
