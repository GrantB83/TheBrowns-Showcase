# Browns Dullstroom (Public Showcase)

This repository is a curated, sanitized history for code review and demonstration purposes.

## Live Site
ðŸŒ **Live site**: [https://thebrowns.co.za](https://thebrowns.co.za)

## About This Repository
- **Purpose**: Code review and technical demonstration
- **History**: Curated commit history showing development approach
- **Sanitization**: Sensitive IDs, API keys, and personal data redacted
- **Exclusions**: Build outputs, large media assets, deployment-specific configs

## Technical Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **State**: React Query for server state
- **SEO**: Custom structured data, sitemap generation
- **Performance**: Image optimization, lazy loading, code splitting
- **Analytics**: Google Analytics 4 integration (redacted in this repo)

## Key Features Demonstrated
- ðŸ¨ **Accommodation booking flow** with multi-step form
- ðŸ“± **Mobile-first responsive design** with gesture navigation
- ðŸ” **Advanced SEO** with JSON-LD structured data
- ðŸ“Š **Performance optimization** with image compression and lazy loading
- â™¿ **Accessibility features** with ARIA compliance
- ðŸŽ¨ **Modern UI/UX** with animations and micro-interactions

## Run Locally (Optional)
```bash
npm install
npm run dev
```

## Code Highlights for Review

### Components & UI (`src/components/ui/`)
- **Unified booking flow**: Multi-step booking with validation
- **Suite comparison**: Interactive accommodation comparison
- **SEO components**: Structured data and meta tag management
- **Performance monitors**: Image optimization and loading states

### Custom Hooks (`src/hooks/`)
- **Mobile optimization**: Touch gestures and responsive behavior
- **Analytics tracking**: Event tracking and conversion monitoring
- **Performance monitoring**: Core Web Vitals and loading metrics
- **Accessibility**: Screen reader and keyboard navigation support

### Utilities & Services (`src/lib/`)
- **SEO utilities**: Sitemap generation and structured data
- **Analytics service**: Event tracking abstraction
- **Performance monitoring**: Core Web Vitals tracking
- **Type-safe configurations**: Environment and feature flags

### Scripts (`scripts/`)
- **Image optimization**: Automated compression and format conversion
- **Sitemap generation**: Dynamic XML sitemap creation
- **SEO validation**: Structured data verification

## Architecture Decisions

### Performance First
- Image optimization with WebP/AVIF formats
- Code splitting with Vite
- Lazy loading for non-critical components
- Service worker for caching (production)

### SEO & Accessibility
- Comprehensive structured data implementation
- Semantic HTML with proper ARIA labels
- Core Web Vitals optimization
- Mobile-first responsive design

### Developer Experience
- TypeScript for type safety
- ESLint + Prettier for code quality
- Component composition patterns
- Custom hooks for reusable logic

## Contact
This is a showcase repository. For business inquiries, visit the live site.

---
*Note: This repository contains redacted/placeholder values for sensitive data like API keys, phone numbers, and booking system IDs.*
