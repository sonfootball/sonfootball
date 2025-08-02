# SonFootball E-commerce Platform

A self-hosted, brand-first e-commerce platform for authentic football boots, built with Next.js, Supabase, and AI-powered features.

## 🏗️ Project Structure

This is a [Turborepo](https://turborepo.com/) monorepo containing the following packages/apps:

### Apps

- `web`: Customer-facing storefront ([Next.js](https://nextjs.org/) app on port 3000)
- `admin`: Internal admin panel ([Next.js](https://nextjs.org/) app on port 3001)

### Packages

- `@sonfootball/ui`: Shared UI components library
- `@sonfootball/eslint-config`: ESLint configurations
- `@sonfootball/typescript-config`: TypeScript configurations

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 9.0.0

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd sonfootball

# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

### Development

```bash
# Start all apps in development mode
pnpm dev

# Start specific app
pnpm dev --filter=web
pnpm dev --filter=admin

# Build all apps and packages
pnpm build

# Lint all packages
pnpm lint

# Type checking
pnpm check-types
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **AI**: OpenAI GPT-4o, LangChain.js, pgvector
- **Package Manager**: pnpm
- **Build Tool**: Turborepo
- **Deployment**: Vercel

## 📦 Package Management

This monorepo uses pnpm workspaces with the following structure:

```
sonfootball/
├── apps/
│   ├── web/          # Customer storefront
│   └── admin/        # Admin panel
├── packages/
│   ├── ui/           # Shared UI components
│   ├── eslint-config/ # Shared ESLint config
│   └── typescript-config/ # Shared TS config
└── package.json      # Root workspace config
```

## 🔧 Development Commands

```bash
# Install dependencies
pnpm install

# Development
pnpm dev              # Start all apps
pnpm dev --filter=web # Start only web app
pnpm dev --filter=admin # Start only admin app

# Building
pnpm build            # Build all apps
pnpm build --filter=web # Build only web app

# Linting & Type Checking
pnpm lint             # Lint all packages
pnpm check-types      # Type check all packages

# Formatting
pnpm format           # Format code with Prettier
```

## 🎯 Project Goals

- **Self-hosted**: 100% ownership and control
- **Brand-first**: Superior user experience over SaaS limitations
- **AI-powered**: Intelligent product recommendations via chatbot
- **Vietnamese market focus**: Localized payment methods and UX
- **High performance**: Optimized for speed and scalability

## 📋 Roadmap

### Phase 1: Foundation ✅
- [x] Monorepo setup with Turborepo
- [x] Next.js apps (web + admin)
- [x] Shared packages structure
- [x] TypeScript and ESLint configuration

### Phase 2: Core Development (Q4 2025)
- [ ] Add missing packages (`db-client`, `types`, `config`)
- [ ] Supabase integration
- [ ] Authentication system
- [ ] AI chatbot RAG pipeline

### Phase 3: E-commerce Features (Q1 2026)
- [ ] Product management
- [ ] Shopping cart
- [ ] Payment integration (MoMo, VNPay, Stripe)
- [ ] Order management

### Phase 4: Launch (Feb 2026)
- [ ] Production deployment
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Marketing preparation

## 🔗 Useful Links

- [Turborepo Documentation](https://turborepo.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

## 📄 License

This project is proprietary and confidential.
