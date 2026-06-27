# Nuxt Starter

Production-ready template for building modern fullstack web applications with Nuxt 3, Vue 3, TypeScript, Prisma ORM, and MySQL.

## 🎯 Overview

**Nuxt Starter** is a comprehensive web application template that combines frontend modern features with backend capabilities:
- **Frontend**: Nuxt 3 + Vue 3 + TypeScript with ready-to-use UI components (Nuxt UI)
- **Backend**: Server-side rendering and built-in API routes for backend logic
- **Database**: Prisma ORM + MySQL for robust data management
- **State Management**: VueUse composables for reactive state
- **Security**: JWT authentication with bcryptjs encryption
- **Validation**: Zod schema validation and form handling

Use this starter for:
- Fullstack web applications with SSR capabilities
- Rapid prototyping and MVP development
- Teams wanting Vue.js ecosystem best practices built-in

---

## 📚 Tech Stack

| Concern | Package |
|---------|---------|
| Framework | Nuxt 3 + Vue 3 + TypeScript |
| UI Components | Nuxt UI |
| State Management | VueUse Composables |
| Build Tool | Vite (via Nuxt) |
| Router | Vue Router |
| ORM | Prisma |
| Database Driver | MySQL2 |
| Validation | Zod |
| Authentication | bcryptjs + JWT |
| Date/Time | dayjs |
| Icons | Nuxt Icon |
| Node Version | v20.19+ |

---

## 📋 Prerequisites

- **Node.js**: v20.19 or higher
- **npm**: v10+ or yarn/pnpm
- **Git**: for version control

---

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone <repository-url>
cd nuxt-starter
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

Copy environment example file and adjust for your local configuration:

```bash
cp .env.example .env
```

Edit `.env` with your values:
```env
# Database
DATABASE_URL="mysql://user:password@localhost:3306/nuxt_starter"

# Authentication
JWT_SECRET="your-secret-key-change-in-production"

# Application
API_BASE_URL="http://localhost:3000"
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📁 Project Structure

```
src/
├── assets/                   # Static assets (images, fonts, icons)
├── features/
│   └── {featureName}/
│       ├── types/            # TypeScript interfaces & types
│       ├── states/           # Composable state management
│       ├── services/         # API calls & business logic
│       ├── controllers/      # Async handlers & logic
│       └── components/       # Vue components
├── shared/
│   ├── components/
│   │   ├── base/            # Base UI components
│   │   ├── features/        # Feature-specific components
│   │   └── reusable/        # Reusable components
│   ├── hooks/               # Custom Vue composables
│   ├── stores/              # Global Pinia stores
│   ├── types/               # Shared TypeScript types
│   └── utils/               # Helper functions
├── styles/                  # Global SCSS styles
└── middleware/              # Nuxt middleware
```

---

## 💻 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot-reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |
| `npm run db:push` | Push Prisma schema to database |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:studio` | Open Prisma Studio (database GUI) |

---

## 🏗️ Architecture Guide

Complete documentation for architecture, naming conventions, and best practices is available in [CODE.md](./CODE.md).

**Key Topics:**
- Naming conventions (functions, files, folders)
- Layer structure (Types, States, Services, Controllers, Components)
- Vue component best practices
- API integration patterns
- State management with VueUse
- Prisma ORM usage

---

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.

---

Developed by Dzikri Alan's Team
