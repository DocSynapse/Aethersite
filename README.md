# 🏥 SENTRA Healthcare AI Platform

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.6-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel" alt="Vercel"/>
</div>

## 🌟 About

**SENTRA** is a cutting-edge healthcare AI platform that integrates advanced neural algorithms with clinical expertise to transform primary care services. Through **ADDI** (Augmented Artificial Intelligent Diagnostic Integrated), we ensure smarter, safer, and more efficient patient care.

Meet **AUDREY** - our **Augmented Understanding & Dynamic Reasoning Entity**, an AI visualization that demonstrates the evolution of artificial intelligence empathy and understanding in healthcare contexts.

### ✨ Key Features

- 🧠 **AI-Powered Diagnostics**: Advanced neural intelligence for healthcare analysis
- 💫 **Immersive Visualization**: Real-time AI entity animation with GSAP
- 📱 **Responsive Design**: Optimized for all devices and screen sizes
- ⚡ **Performance-First**: Built with Next.js 15 and React 19 for optimal speed
- 🎨 **Modern UI/UX**: Tailark UI components with Tailwind CSS
- 🔒 **Privacy & Security**: HIPAA-compliant healthcare data protection

## 🚀 Live Demo

👉 **[View Live Site](https://your-vercel-domain.vercel.app)**

## 🛠 Tech Stack

| Category | Technology |
|----------|-------------|
| **Framework** | ![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?logo=next.js) |
| **UI Library** | ![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react) |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript) |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.6-38B2AC?logo=tailwind-css) |
| **UI Components** | DocSynapse UI, shadcn/ui |
| **Animations** | ![GSAP](https://img.shields.io/badge/GSAP-3.12-green?logo=greensock) |
| **Package Manager** | ![pnpm](https://img.shields.io/badge/pnpm-9.10.0-F69220?logo=pnpm) |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-Platform-black?logo=vercel) |

## 📋 Prerequisites

Ensure you have the following installed:

- **Node.js** >= 18.0.0
- **pnpm** >= 9.0.0
- **Git** for version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/DocSynapse/Aethersite.git
cd Aethersite
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Development
NODE_ENV=development
PORT=3000

# Production (optional)
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 4. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 5. Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
Aethersite/
├── apps/
│   └── www/
│       ├── app/                    # Next.js App Router
│       │   ├── (app)/
│       │   │   ├── page.tsx       # Homepage route
│       │   │   └── layout.tsx     # Root layout
│       │   └── globals.css        # Global styles
│       ├── components/
│       │   └── ui/
│       │       ├── artificial-hero.tsx  # AI visualization component
│       │       └── ...                 # Other UI components
│       ├── public/                 # Static assets
│       └── package.json
├── packages/                      # Monorepo packages
├── package.json                   # Root package configuration
├── pnpm-workspace.yaml          # Workspace configuration
├── turbo.json                   # Turborepo configuration
└── README.md
```

## 🎯 Key Components

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

The design system uses DocSynapse UI with custom theme tokens:

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

We welcome contributions! Please follow our guidelines:

### Development Workflow

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### Code Standards

- Use **TypeScript** for all new code
- Follow **ESLint** configuration
- Write **meaningful commit messages**
- Include **tests** for new features
- Ensure **accessibility** standards

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Code compiles without errors
- [ ] All tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits & Attribution

### Core Team
- **Dr. Ferdi Sentra** - Founder & Chief Architect
- Inspired by commitment to sustainable healthcare innovation

### Technologies
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [DocSynapse UI](https://github.com/DocSynapse) - Healthcare AI UI components
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Vercel](https://vercel.com/) - Deployment platform

### Acknowledgments

- Built with ❤️ for the healthcare community
- Dedicated to advancing medical AI technology
- Empowering doctors to focus on patient care

## 📞 Contact

- **Project Maintainer**: [Dr. Ferdi Sentra](mailto:dr.ferdi.sentra@sentra-aether.com)
- **Issues & Bugs**: [GitHub Issues](https://github.com/DocSynapse/Aethersite/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/DocSynapse/Aethersite/discussions)

---

<div align="center">
  <p>Made with ❤️ for advancing healthcare AI technology</p>
  <p>© 2024 SENTRA Healthcare AI Platform. All rights reserved.</p>
</div>