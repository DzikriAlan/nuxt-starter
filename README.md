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
│   └── {folderName}/         # kebab-case, derived from endpoint (see standards/FECODE.md)
│       ├── types/            # {fileName}Types.ts — TypeScript interfaces & types
│       ├── states/           # {fileName}States.ts — Pinia state (reactive)
│       ├── services/         # {fileName}Services.ts — pure API calls
│       ├── controllers/      # {fileName}Controllers.ts — Pinia store calling services
│       └── components/       # {fileName}{Action}.vue — Vue components
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

server/
├── api/
│   ├── features/{folder-name}/  # dto, entities, repositories, services, controllers, module.ts
│   └── v1/{folder-name}/       # Thin route files → controller (see standards/BECODE.md)
├── middleware/              # Server middleware (JWT auth)
└── utils/                   # Prisma singleton, response helpers, error mapping
```

---

## 💻 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot-reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run db:push` | Push Prisma schema to database |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:studio` | Open Prisma Studio (database GUI) |

---

## 🧭 Next Steps: Building on This Starter

After the Quick Start, every new feature must follow the documents in the [standards/](./standards) folder. Read them before writing code.

| Step | What to do | Standard |
|------|-----------|----------|
| 1 | Define the endpoint and derive names from the URL (drop base URL, `api`, `v{n}`, and dynamic segments) → `folderName`, `fileName`, `resourceName` | [FECODE.md](./standards/FECODE.md#penamaan-folder--file) |
| 2 | Design the API response contract (`success`, `data`, `error`, `pagination`, `message`) and HTTP status codes | [RESPONSE.md](./standards/RESPONSE.md) |
| 3 | Build the backend feature in `server/api/features/{folder-name}/`: DTO → Entity → Repository → Service → Controller → `module.ts`, then add thin route files in `server/api/v1/{folder-name}/` | [BECODE.md](./standards/BECODE.md) |
| 4 | Build the frontend feature in `src/features/{folderName}/`: Types → States → Services → Controllers → Components | [FECODE.md](./standards/FECODE.md) |
| 5 | Verify: `npx vue-tsc --noEmit` passes and no function name uses a prefix outside the convention | [FECODE.md](./standards/FECODE.md#final-rules), [BECODE.md](./standards/BECODE.md#final-rules) |

### Frontend flow (FECODE)

```txt
src/features/{folderName}/
├── types/{fileName}Types.ts
├── states/{fileName}States.ts
├── services/{fileName}Services.ts
├── controllers/{fileName}Controllers.ts
└── components/{fileName}{Action}.vue
```

### Backend flow (BECODE)

```txt
server/api/features/{folder-name}/
├── dto/{fileName}.dto.ts
├── entities/{fileName}.entity.ts
├── repositories/{fileName}.repository.ts
├── services/{fileName}.service.ts
├── controllers/{fileName}.controller.ts
└── module.ts
```

### Function prefixes per layer

| Layer | Prefixes |
|-------|----------|
| FE Service | `get` `post` `update` `patch` `delete` |
| FE Controller | `fetch` `store` `modify` `remove` |
| FE Component / emit / onMessage | `load` `submit` `edit` `clear` |
| BE Repository | `get` `post` `update` `patch` `delete` |
| BE Service | `fetch` `store` `change` `remove` |
| BE Controller | `load` `save` `modify` `destroy` |

> Do not introduce prefixes outside these lists (e.g. `create`, `find`, `handle`, `process`).

---

## 🏗️ Architecture Guide

Complete documentation for architecture, naming conventions, and best practices lives in the [standards/](./standards) folder:

| Document | Scope |
|----------|-------|
| [FECODE.md](./standards/FECODE.md) | Frontend architecture, naming, Types/States/Services/Controllers/Components rules |
| [BECODE.md](./standards/BECODE.md) | Backend (Nitro) architecture, layer boundaries, naming, error handling |
| [RESPONSE.md](./standards/RESPONSE.md) | Standard API response and HTTP status codes |

**Key Topics:**
- Naming conventions (functions, files, folders)
- Layer structure (FE: Types, States, Services, Controllers, Components; BE: DTO, Entity, Repository, Service, Controller, Module)
- Vue component best practices
- API integration patterns
- State management with Pinia
- Prisma ORM usage
- Standard API response format

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
