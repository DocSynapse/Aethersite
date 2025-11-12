<div align="center">

# 🌌 AETHERSITE

### Rumah Digital dari **Sentra Entity**

<p align="center">
  <strong>PROTOTYPE - DALAM PENGEMBANGAN</strong><br/>
  Platform AI Healthcare Assistant Generasi Berikutnya
</p>

<img src="https://drive.google.com/uc?export=view&id=1olm1Dlk7wDYIYXRqU8GlhtuPGVYYPoLe" alt="Sentra Architecture" width="800"/>

</div>

---

## ⚠️ STATUS PENGEMBANGAN

> **PENTING:** Ini adalah **PROTOTYPE AETHERSITE** - bukan produk final. Semua fitur, data, dan fungsionalitas yang ditampilkan adalah placeholder yang sedang dalam pengembangan aktif dan tidak merepresentasikan produk Sentra yang final.

**Versi:** 0.1.0 (Prototype Phase)
**Status:** Development/Testing
**Terakhir Diperbarui:** November 2025
**Dikembangkan oleh:** Sentra Development Team (DocSynapse)

---

## 📖 Tentang Aethersite

**Aethersite** adalah platform web prototype yang menjadi rumah digital dari **Sentra Entity** - sebuah AI healthcare assistant yang dirancang untuk membantu tenaga medis dalam memberikan pelayanan kesehatan yang lebih baik.

### Apa itu Sentra Entity?

Sentra Entity adalah AI assistant berbasis karakter yang bernama **AUDREY** (Advanced Unified Digital Resource Entity for You), yang hadir sebagai companion digital untuk dokter dan tenaga kesehatan. Melalui Aethersite, Sentra Entity menampilkan:

- 🤖 **AI Personality Engine** - Karakter AI yang responsif dan interaktif
- 💬 **Natural Conversation** - Interaksi yang natural dan human-like
- 🏥 **Healthcare-Focused** - Dirancang khusus untuk konteks medis
- 🎨 **Visual Character** - Representasi visual AI melalui komponen ArtificialHero

### Tujuan Prototype

Platform ini dikembangkan untuk:
1. ✅ Validasi konsep desain dan arsitektur
2. ✅ Testing user experience flows
3. ✅ Evaluasi performa teknis
4. ✅ Gathering feedback untuk pengembangan selanjutnya

**Catatan Kerahasiaan:** Dokumen dan platform ini bersifat konfidensial, ditujukan eksklusif untuk keperluan internal atau review terbatas yang telah diotorisasi.

---

## 🚨 MASALAH YANG TERIDENTIFIKASI

Berikut adalah daftar komprehensif masalah yang ditemukan dalam codebase saat ini:

### 🔴 CRITICAL ISSUES

#### 1. **Inkonsistensi Naming: "Tailark" vs "Aethersite"**

**MASALAH UTAMA:** Seluruh codebase masih menggunakan nama "Tailark" dari template original, belum diubah menjadi "Aethersite/Sentra".

**Lokasi yang perlu diupdate:**

**Package Names (6 files):**
- `/package.json` → name: "tailark"
- `/apps/www/package.json` → name: "@tailark/www"
- `/packages/core/package.json` → name: "@tailark/core"
- `/packages/dusk-kit/package.json` → name: "@tailark/dusk"
- `/packages/mist-kit/package.json` → name: "@tailark/mist"
- `/packages/ts-config/package.json` → name: "@tailark/ts-config"

**TypeScript Configurations (5+ files):**
- Semua path aliases menggunakan "@tailark/*"
- Perlu update ke "@aethersite/*" atau "@sentra/*"

**Domain References:**
- `apps/www/next.config.ts:17` → "pro.tailark.com"
- `apps/www/app/sitemap.ts:5` → "https://tailark.com"
- `apps/www/app/robots.ts:10` → "https://tailark.com/sitemap.xml"
- `apps/www/app/layout.tsx:19,21` → Metadata mentions "Tailark"

**Asset Files:**
- `/apps/www/public/mist/tailark.png`
- `/apps/www/public/mist/tailark-2.png`
- `/apps/www/public/mist/tailark-3.png`

**Total Impact:** 147+ files dengan referensi "tailark"

#### 2. **Legacy Code: "cnblocks" References**

File-file berikut masih mengandung referensi ke "cnblocks" (dari project template):
- `apps/www/public/sw.js:1` → CACHE_NAME = 'cnblocks-iframe-cache-v2'
- `apps/www/lib/serviceWorker.ts:57` → 'cnblocks-iframe-cache-v1'

**⚠️ Cache version mismatch:** sw.js uses v2, serviceWorker.ts uses v1

### 🟡 CONFIGURATION ISSUES

#### 3. **Duplicate ESLint Configuration**
- `apps/www/` memiliki `.eslintrc.json` DAN `eslint.config.mjs`
- Berpotensi konflik, sebaiknya gunakan salah satu

#### 4. **Workspace Configuration Duplication**
- `apps/www/package.json` memiliki workspaces config (seharusnya hanya di root)
- Scripts diduplikasi dari root package.json

#### 5. **Dependency Version Inconsistencies**
- **Next.js:** dusk-kit (15.3.2) vs mist-kit (15.3.1)
- **React:** www (^19.1.0) vs dusk/mist-kit (^19.0.0)
- **Tailwind PostCSS:** Berbeda-beda di setiap package

#### 6. **Suspicious Dependencies**
```json
"fs": "0.0.1-security",  // Security placeholder, shouldn't be needed
"google": "link:@next/third-parties/google",  // Invalid link syntax
"third-parties": "link:@next/third-parties"  // Invalid link syntax
```
Lokasi: `apps/www/package.json:39,40,58`

#### 7. **Missing/Invalid Config Files**
- `apps/www/components.json:7` → References "tailwind.config.ts" yang tidak exist
- (Tailwind v4 menggunakan metode konfigurasi berbeda)

### 🟠 DOCUMENTATION ISSUES

#### 8. **Version Mismatches dalam Dokumentasi**
- README claims "Next.js 14+" tapi actual version: "15.3.2"
- README claims "Tailwind CSS 3+" tapi actual version: "4.1.6"

#### 9. **Missing Commands**
README mendokumentasikan commands yang tidak exist:
```bash
pnpm type-check  # Script tidak ada di package.json
pnpm clean       # Script tidak ada di package.json
```

#### 10. **Performance Claims Without Evidence**
- README claims "85%+ code coverage"
- **FAKTA:** Tidak ada test files di seluruh codebase
- Tidak ada `.test.*` atau `.spec.*` files

#### 11. **Empty Documentation**
- `apps/www/README.md` → Completely empty (1 byte)

### 🟢 MINOR ISSUES

#### 12. **Incomplete Package Metadata**
- `packages/ts-config/package.json` → Missing author info
- References `index.js` yang tidak exist

#### 13. **TypeScript Config Inconsistencies**
- Core package uses project references
- Other packages don't follow this pattern
- Inconsistent targets (ES2020 vs others)

### ⚪ MISSING INFRASTRUCTURE

#### 14. **No Testing Infrastructure**
- ❌ No test files
- ❌ No Jest/Vitest config
- ❌ No CI/CD pipeline (.github/workflows)
- ❌ No Docker/deployment configs
- ❌ No contributing guidelines
- ❌ No issue/PR templates

#### 15. **Security Considerations**
- Google Analytics ID hardcoded: "G-6KY6TLKXKY"
- Service worker caching may cache sensitive data
- No visible CSP headers
- No CORS configuration

#### 16. **Code Quality Tools**
- No standardized Prettier config
- No Husky/Git hooks
- No lint-staged configuration
- Minimal Turbo.json configuration

---

## 🏗️ ARSITEKTUR TEKNOLOGI

### Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.6-38B2AC?style=for-the-badge&logo=tailwind-css)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)

</div>

### Framework Foundation

**Primary Framework:** Next.js 15+ dengan App Router
- React Server Components untuk optimasi rendering
- Streaming dan Suspense boundaries
- Automatic code splitting

**Programming Language:** TypeScript 5+
- Type-safe development
- Static analysis untuk error prevention
- Enhanced IDE support

**Styling Engine:** Tailwind CSS 4+
- Utility-first CSS framework
- Konsistensi desain dengan customizable configuration
- JIT (Just-in-Time) compilation

### Components & Animation

**UI Component Libraries:**
- **Tailark UI** (to be renamed): Healthcare-specific design system
- **shadcn/ui**: Customizable headless components
- **Radix UI**: Accessible component primitives

**Animation Engine:** GSAP 3.13+
- Precision animation control
- Timeline orchestration
- ScrollTrigger untuk scroll-based animations
- Optimal rendering performance

### Infrastructure

**Package Manager:** pnpm 9.10.0
- Efficient dependency management
- Symbolic linking untuk optimasi disk space
- Monorepo support via workspaces

**Deployment:** Vercel
- Edge network deployment
- Automatic scaling
- Zero-config CI/CD

---

## ⭐ KOMPONEN KUNCI: ArtificialHero

### Technical Overview

**ArtificialHero** adalah komponen sentral yang merepresentasikan visual dan interaktif dari Sentra's AI Entity (AUDREY).

**Fitur Utama:**
- 🎭 **AUDREY Entity Implementation** - AI character dengan personality engine
- 🎨 **Canvas-based Rendering** - Optimal performance
- ✨ **GSAP Animation** - Smooth timeline orchestration
- 📜 **Scroll-triggered Effects** - Interactive user experience
- 🚀 **Performance Optimized** - Adaptive frame rate

**Performance Strategy:**
- Lazy loading untuk heavy assets
- Progressive enhancement
- WebGL fallback untuk legacy devices

<div align="center">
  <img src="https://drive.google.com/uc?export=view&id=1i6LQ_9UvWFRnJcCx0DfWEVM0mkIy5VMl" alt="Sentra Architecture" width="800"/>
</div>

---

## 🚀 DEVELOPMENT GUIDE

### Prerequisites

```bash
# Node.js 20+ required
node --version

# pnpm required
npm install -g pnpm@9.10.0
```

### Installation

```bash
# Clone repository
git clone <repository-url>
cd Aethersite

# Install dependencies
pnpm install
```

### Development Commands

```bash
# Start development server (localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Build registry components
pnpm registry:build
```

**Note:** Commands `pnpm type-check` dan `pnpm clean` yang disebutkan di dokumentasi sebelumnya **belum diimplementasikan**.

### Project Structure

```
Aethersite/
├── apps/
│   └── www/                 # Main web application
│       ├── app/            # Next.js app directory
│       ├── components/     # React components
│       ├── lib/           # Utility functions
│       └── public/        # Static assets
├── packages/
│   ├── core/              # Core components
│   ├── dusk-kit/          # Dark theme kit
│   ├── mist-kit/          # Light theme kit
│   └── ts-config/         # Shared TS config
└── package.json           # Root package config
```

---

## 🎨 DESIGN SYSTEM

### Typography

Fluid typography menggunakan CSS clamp() untuk responsiveness:
- **Font Family:** Inter (sans-serif), JetBrains Mono (monospace)
- **Scaling:** Responsive dari mobile hingga desktop

### Color Palette

Dark theme dengan healthcare-specific color psychology:

```typescript
colors: {
  healthcare: {
    trust: '#0ea5e9',      // Sky blue - kepercayaan
    vitality: '#10b981',   // Green - vitalitas
    precision: '#8b5cf6',  // Purple - presisi
    warmth: '#f59e0b'      // Orange - kehangatan
  }
}
```

### Accessibility

Target compliance: **WCAG 2.1 Level AA**
- ✅ Keyboard navigation
- ✅ Screen reader compatibility
- ✅ Color contrast ratios
- ✅ Focus indicators

---

## 📊 PERFORMANCE TARGETS

| Metric | Target | Status |
|--------|--------|--------|
| First Contentful Paint | < 1.5s | ⚠️ To be measured |
| Largest Contentful Paint | < 2.5s | ⚠️ To be measured |
| Time to Interactive | < 2.0s | ⚠️ To be measured |
| Cumulative Layout Shift | < 0.1 | ⚠️ To be measured |
| Total Blocking Time | < 200ms | ⚠️ To be measured |

**Note:** Performance metrics masih perlu diukur dan divalidasi pada prototype saat ini.

---

## 🔒 SECURITY & COMPLIANCE

### Security Implementation

**Content Security Policy (CSP)**
Strict headers untuk mencegah XSS attacks (perlu diimplementasikan)

**HIPAA Compliance Framework** (Planned)
- Data encryption at rest dan in transit
- Audit logging untuk data access
- Role-based access control (RBAC)
- Secure session management

**Transport Security**
HTTPS mandatory dengan TLS 1.3 di production

### ⚠️ Security Concerns (Current)
- Google Analytics ID hardcoded di `layout.tsx`
- Service worker caching strategy perlu review
- CSP headers belum terlihat
- CORS configuration belum ada

---

## 🗺️ ROADMAP

### Phase 1: Foundation (CURRENT - Q4 2025)
- [x] Prototype development
- [x] Core functionality implementation
- [x] Basic design system
- [ ] Naming migration (Tailark → Aethersite)
- [ ] Fix critical issues
- [ ] Testing infrastructure

### Phase 2: Enhancement (Q1 2026)
- [ ] Feature expansion
- [ ] Performance optimization
- [ ] User feedback integration
- [ ] Security hardening
- [ ] Documentation completion

### Phase 3: Production Readiness (Q2 2026)
- [ ] Security audit
- [ ] Load testing
- [ ] HIPAA compliance certification
- [ ] Accessibility audit
- [ ] Code coverage >85%

### Phase 4: Deployment (Q3 2026)
- [ ] Beta testing
- [ ] Staged rollout
- [ ] Monitoring setup
- [ ] Continuous improvement

---

## 📝 TODO: CRITICAL FIXES NEEDED

### High Priority
- [ ] **Complete naming migration** dari "Tailark" ke "Aethersite/Sentra"
  - Update all package.json names
  - Update all TypeScript path aliases
  - Update domain references
  - Rename asset files
- [ ] **Remove "cnblocks" legacy code**
  - Update service worker cache names
  - Ensure cache version consistency
- [ ] **Fix dependency issues**
  - Remove suspicious `fs` package
  - Fix Google/third-parties link syntax
  - Standardize Next.js versions
  - Align React versions

### Medium Priority
- [ ] Resolve duplicate ESLint configs
- [ ] Fix workspace configuration duplication
- [ ] Update README version mismatches
- [ ] Add missing scripts or remove from docs
- [ ] Create proper www/README.md

### Low Priority
- [ ] Add testing infrastructure
- [ ] Setup CI/CD pipeline
- [ ] Add Prettier config
- [ ] Setup Git hooks
- [ ] Create contributing guidelines

---

## 🤝 CONTRIBUTING

**Status:** Contributing guidelines sedang dikembangkan.

Untuk saat ini, kontribusi terbatas pada authorized team members.

Planned requirements:
- Conventional Commits specification
- TypeScript strict mode compliance
- Minimum 80% test coverage
- Documentation untuk semua public APIs
- Code review oleh minimal 2 maintainers

---

## 👥 TEAM

**Maintained By:** Sentra Development Team
**Original Template By:** Méschac Irung (Tailark UI)

**Dengan ❤️ dari:**
- Del
- Aldebaran
- Aimee
- Audrey (AI Entity)

---

## 📞 CONTACT

**Technical Issues:** [To be configured]
**Security Reports:** security@sentra.health *(placeholder)*
**General Inquiries:** info@sentra.health *(placeholder)*

---

## 📄 LICENSE

Lihat file [LICENSE.md](./LICENCE.md) untuk informasi lisensi.

---

## 🎯 CLOSING NOTE

> **Aethersite** adalah lebih dari sekadar website - ini adalah rumah digital dari **Sentra Entity**, sebuah visi untuk masa depan healthcare AI yang lebih human-centric.

Platform ini dikembangkan dengan kesadaran penuh bahwa teknologi adalah alat, bukan tujuan akhir. Setiap keputusan arsitektur dibuat dengan mempertimbangkan dampak jangka panjang terhadap pengalaman pengguna dan sustainability sistem.

**Reminder untuk Developers:**

Dokumentasi yang baik bukan hanya tentang "apa" yang dibangun, tapi "mengapa" keputusan tertentu diambil dan "bagaimana" konsekuensinya akan bermain seiring waktu. README ini bukan sekadar referensi teknis - ini adalah peta navigasi untuk siapapun yang akan maintain dan evolve sistem ini di masa depan.

Setiap keputusan teknologi yang dibuat hari ini adalah warisan untuk developers esok hari.

**Choose with wisdom, not hype.**

---

<div align="center">

**🌌 AETHERSITE - Home of Sentra Entity 🌌**

*Building the future of healthcare AI, one line of code at a time.*

**STATUS: PROTOTYPE**

</div>
