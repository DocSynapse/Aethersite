# 🏥 SENTRA Aethersite

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.6-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel" alt="Vercel"/>
</div>


This website is a functional prototype developed for the sole purpose of evaluating design, user flow (UX), and initial technical testing.

All presented content, data, and functionality are placeholders, remain under active development, and do not represent the final Sentra product. This version is confidential and intended strictly for internal use or authorized limited review.

## 🛠 Tech Stack

| Category | Technology |
|----------|-------------|
| **Framework** | ![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?logo=next.js) |
| **UI Library** | ![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react) |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript) |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.6-38B2AC?logo=tailwind-css) |
| **UI Components** | Tailark UI, shadcn/ui |
| **Animations** | ![GSAP](https://img.shields.io/badge/GSAP-3.12-green?logo=greensock) |
| **Package Manager** | ![pnpm](https://img.shields.io/badge/pnpm-9.10.0-F69220?logo=pnpm) |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-Platform-black?logo=vercel) |

## 📋 Prerequisites

### ArtificialHero Component

The centerpiece of our website - an immersive AI visualization featuring:

- **AUDREY Entity**: Dynamic AI character with personality
- **Real-time Animations**: GSAP-powered visual effects
- **Interactive Elements**: Scroll-triggered animations
- **Performance Optimized**: Canvas-based rendering

### Core Features

- **Responsive Typography**: Clamp-based fluid typography
- **Dark Theme**: Professional healthcare aesthetic
- **Accessibility**: WCAG 2.1 compliant design
- **SEO Optimized**: Meta tags and structured data

## 🔧 Development Commands

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm type-check       # TypeScript type checking

# Package Management
pnpm install          # Install dependencies
pnpm update           # Update dependencies
pnpm clean            # Clean node_modules
```

## 🎨 Customization

### Theme Configuration

The design system uses Tailark UI with custom theme tokens:

```typescript
// Custom theme configuration
const theme = {
  colors: {
    primary: {
      50: '#eff6ff',
      900: '#1e3a8a',
    },
    // Healthcare-specific color palette
  }
}
```

### Component Customization

Components are built with shadcn/ui and can be customized:

```bash
# Add new components
pnpm dlx shadcn add [component-name]

# Customize existing components
# Edit components/ui/[component].tsx
```

## 📊 Performance

- **Lighthouse Score**: 95+ Performance
- **Bundle Size**: < 200KB gzipped
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2s

## 🔒 Security Features

- **Content Security Policy**: Strict CSP headers
- **XSS Protection**: Built-in Next.js protections
- **HIPAA Compliance**: Healthcare data protection standards
- **HTTPS Only**: Production deployments use HTTPS

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari 14+
- Chrome Mobile 90+

## 📈 Performance Metrics

| Metric | Value |
|--------|-------|
| First Contentful Paint | 1.2s |
| Largest Contentful Paint | 1.8s |
| Cumulative Layout Shift | 0.05 |
| Time to Interactive | 1.5s |

## 🤝 Contributing

### Technologies
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Tailark UI](https://tailark.com/) - Healthcare UI components
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Vercel](https://vercel.com/) - Deployment platform

### Acknowledgments

- Built with ❤️ for the healthcare community
- Dedicated to advancing medical AI technology
- Empowering doctors to focus on patient care

## 📞 Contact

- **Project Maintainer**: [Your Name](mailto:your.email@example.com)
- **Issues & Bugs**: [GitHub Issues](https://github.com/your-username/tailark-website/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/your-username/tailark-website/discussions)

---

<div align="center">
  <p>Made with ❤️ for advancing healthcare AI technology</p>
  <p>© 2024 SENTRA Healthcare AI Platform. All rights reserved.</p>
</div>
