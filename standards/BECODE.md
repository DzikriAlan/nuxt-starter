# Nuxt (Nitro) Backend Architecture

## Architecture Overview

Backend berjalan di atas Nitro (server engine Nuxt, berbasis h3) dengan Prisma sebagai ORM. Separation of concerns dipertahankan: setiap layer punya tanggung jawab dan prefix sendiri.

```txt
server/api/features/{folder-name}/
├── dto/{fileName}.dto.ts
├── entities/{fileName}.entity.ts
├── repositories/{fileName}.repository.ts
├── services/{fileName}.service.ts
├── controllers/{fileName}.controller.ts
└── module.ts
```

> Repository, service, controller, dan DTO hanya boleh berhubungan dengan domain resource masing-masing. Jangan mendefinisikan concern domain lain di luar batas tersebut.

### Layer Responsibility

```txt
HTTP Request
    │
    ▼
server/api/**  (route file tipis)
    │
    ▼
Controller
    │
    ▼
Service
    │
    ▼
Repository
    │
    ▼
Prisma
```

- **Route file (`server/api/**`)**: hanya memetakan URL + HTTP method ke method controller. Tidak ada logic.
- **Controller**: HTTP layer. Membaca `event` (body, query, params), validasi input dengan Zod, mendelegasikan ke service, mengembalikan response.
- **Service**: business logic dan orchestration.
- **Repository**: datasource access. Semua query Prisma berada di sini.
- **DTO**: input/output contract dan schema validasi (Zod).
- **Entity**: data shape/domain representation tanpa business logic.
- **Module**: composition root feature untuk membuat repository → service → controller.

---

## Tech Stack

| Concern | Package |
|---|---|
| **Framework** | Nuxt 3 (Nitro / h3) |
| **Language** | TypeScript |
| **ORM** | Prisma (MySQL) |
| **Validation** | `zod` |
| **Auth** | `jsonwebtoken` + `bcryptjs` |
| **Config** | Nuxt `runtimeConfig` (private keys) |
| **HTTP** | h3 `H3Event` / `defineEventHandler` / `createError` |

---

## Server Directory

```txt
server/
├── api/
│   ├── features/                    # lihat Architecture Overview
│   └── v1/
│       └── {folder-name}/
│           ├── index.get.ts         # GET    /api/v1/{folder-name}
│           ├── index.post.ts        # POST   /api/v1/{folder-name}
│           ├── [id].get.ts          # GET    /api/v1/{folder-name}/:id
│           ├── [id].patch.ts        # PATCH  /api/v1/{folder-name}/:id
│           └── [id].delete.ts       # DELETE /api/v1/{folder-name}/:id
├── middleware/
│   └── auth.ts                      # JWT auth (jwtSecret dari runtimeConfig)
├── utils/
│   ├── prisma.ts                    # PrismaClient singleton
│   ├── api.ts                       # helper response standar
│   └── prisma-error.handler.ts      # Prisma error → HTTP error mapping
└── tsconfig.json
```

> Route file dan controller tidak boleh menyimpan business logic. Nitro meng-auto-import `server/utils`, sehingga helper di sana dapat dipakai tanpa import manual.

---

# Function Naming Rules

Penamaan function menggunakan format:

```text
{prefix}{ResourceName}
```

`ResourceName` menggunakan `PascalCase` dan mengikuti resource endpoint setelah mengabaikan base URL, prefix `api`, versioning (`v1`, `v2`, dst.), dan parameter dinamis (`{id}`, `{type}`, dst.).

| Endpoint | ResourceName | Function |
|---|---|---|
| `/api/v1/users/profile` | `UsersProfile` | `fetchUsersProfile()` |
| `/api/v1/users/profile` | `UsersProfile` | `storeUsersProfile()` |
| `/api/v1/ai-search/register/file/{type}/{id}` | `AiSearchRegisterFile` | `fetchAiSearchRegisterFile()` |

## Prefix Rules

> Setiap layer memiliki kumpulan prefix sendiri dan tidak boleh saling digunakan.

| Prefix | Repository | Service | Controller |
|---|:---:|:---:|:---:|
| `get` | ✅ | ❌ | ❌ |
| `post` | ✅ | ❌ | ❌ |
| `update` | ✅ | ❌ | ❌ |
| `patch` | ✅ | ❌ | ❌ |
| `delete` | ✅ | ❌ | ❌ |
| `fetch` | ❌ | ✅ | ❌ |
| `store` | ❌ | ✅ | ❌ |
| `change` | ❌ | ✅ | ❌ |
| `remove` | ❌ | ✅ | ❌ |
| `load` | ❌ | ❌ | ✅ |
| `save` | ❌ | ❌ | ✅ |
| `modify` | ❌ | ❌ | ✅ |
| `destroy` | ❌ | ❌ | ✅ |

## Mapping

| HTTP Method | Repository | Service | Controller |
|---|---|---|---|
| GET | `getUsersProfile()` | `fetchUsersProfile()` | `loadUsersProfile()` |
| POST | `postUsersProfile()` | `storeUsersProfile()` | `saveUsersProfile()` |
| PUT | `updateUsersProfile()` | `changeUsersProfile()` | `modifyUsersProfile()` |
| PATCH | `patchUsersProfile()` | `changeUsersProfile()` | `modifyUsersProfile()` |
| DELETE | `deleteUsersProfile()` | `removeUsersProfile()` | `destroyUsersProfile()` |

## Larangan

Hindari prefix lain agar vocabulary project tetap terbatas dan konsisten:

```ts
createUsersProfile()
findUsersProfile()
existsUsersProfile()
validateUsersProfile()
transformUsersProfile()
mapUsersProfile()
buildUsersProfile()
parseUsersProfile()
generateUsersProfile()
calculateUsersProfile()
processUsersProfile()
executeUsersProfile()
runUsersProfile()
handleUsersProfile()
```

> Utilitas internal yang benar-benar dibutuhkan tetap boleh dibuat sebagai `private` method di dalam class yang sama. Larangan di atas berlaku untuk public method antar-layer.

---

# Penamaan Folder & File

Dari URL endpoint, buang segmen berikut:

- Base URL / domain
- Prefix `api`
- Versioning: segmen yang cocok pola `v{angka}`

| Konsep | Aturan | Digunakan untuk |
|---|---|---|
| **folder-name** | Segmen pertama sisa path, `kebab-case` | Nama folder domain (`server/api/features/{folder-name}`, `server/api/v1/{folder-name}`) |
| **fileName** | `folder-name` dikonversi ke `camelCase` | Prefix nama file `.ts` |

| URL | folder-name | fileName |
|---|---|---|
| `/api/v1/users/profile` | `users` | `users` |
| `/api/v1/ai-search/register/file/{type}/{id}` | `ai-search` | `aiSearch` |

> Segmen dinamis (`{param}`) selalu diabaikan.

---

# Aturan Per File

## DTO (`{fileName}.dto.ts`)

```typescript
import { z } from 'zod'

export const createUsersProfileSchema = z.object({
  field: z.string().min(1),
})

export const updateUsersProfileSchema = createUsersProfileSchema.partial()

export const queryUsersProfileSchema = z.object({
  field: z.string().optional(),
})

export type CreateUsersProfileDto = z.infer<typeof createUsersProfileSchema>
export type UpdateUsersProfileDto = z.infer<typeof updateUsersProfileSchema>
export type QueryUsersProfileDto = z.infer<typeof queryUsersProfileSchema>

export interface UsersProfileResponseDto {
  id: string
  field: string
  createdAt: Date
}
```

| Kondisi | Buat DTO? |
|---|---|
| POST body | ✅ `Create{ResourceName}Dto` |
| PUT/PATCH body | ✅ `Update{ResourceName}Dto` |
| GET query params | ✅ `Query{ResourceName}Dto` |
| Response shape | ✅ `{ResourceName}ResponseDto` |
| DELETE tanpa body | ❌ Tidak perlu DTO |

## Entity (`{fileName}.entity.ts`)

Hanya shape data domain / Prisma model. Tidak boleh mengandung method atau business logic.

```typescript
export interface UsersProfileEntity {
  id: string
  field: string
  createdAt: Date
  updatedAt: Date
}
```

## Repository (`{fileName}.repository.ts`)

Semua query Prisma harus berada di repository. Error Prisma diterjemahkan melalui `handlePrismaError()`.

```typescript
export class UsersRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async getUsersProfileById(id: string) {
    try {
      return await this.prisma.userProfile.findUnique({ where: { id } })
    } catch (error) {
      throw handlePrismaError(error, 'users')
    }
  }

  async postUsersProfile(dto: CreateUsersProfileDto) {
    try {
      return await this.prisma.userProfile.create({ data: dto })
    } catch (error) {
      throw handlePrismaError(error, 'users')
    }
  }
}
```

| Prisma Code | HTTP Error | Kondisi |
|---|---|---|
| `P2025` | 404 Not Found | Record tidak ditemukan |
| `P2002` | 409 Conflict | Unique constraint violation |
| Others | 500 Internal Server Error | Error database lainnya |

> Repository tidak boleh mengandung business logic dan tidak boleh menerima `H3Event`.

## Service (`{fileName}.service.ts`)

Business logic murni. Memanggil repository, bukan Prisma langsung.

```typescript
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async fetchUsersProfile(id: string) {
    const data = await this.usersRepository.getUsersProfileById(id)
    if (!data) throw createError({ statusCode: 404, statusMessage: 'UsersProfile not found' })
    return data
  }

  async storeUsersProfile(dto: CreateUsersProfileDto) {
    return this.usersRepository.postUsersProfile(dto)
  }
}
```

> Service tidak boleh mengakses Prisma langsung dan tidak boleh menerima `H3Event`. Error HTTP dari repository diteruskan apa adanya.

## Controller (`{fileName}.controller.ts`)

HTTP layer murni. Satu-satunya feature layer yang boleh menerima `H3Event`.

```typescript
import type { H3Event } from 'h3'

export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  async loadUsersProfile(event: H3Event) {
    const id = getRouterParam(event, 'id') as string
    const data = await this.usersService.fetchUsersProfile(id)
    return createResponse(true, 'UsersProfile retrieved successfully', data)
  }

  async saveUsersProfile(event: H3Event) {
    const dto = createUsersProfileSchema.parse(await readBody(event))
    const data = await this.usersService.storeUsersProfile(dto)
    setResponseStatus(event, 201)
    return createResponse(true, 'UsersProfile created successfully', data)
  }
}
```

| HTTP | Prefix | Contoh |
|---|---|---|
| GET | `load` | `loadUsersProfile()` |
| POST | `save` | `saveRegisterFile()` |
| PUT/PATCH | `modify` | `modifyUsersProfile()` |
| DELETE | `destroy` | `destroyUsersProfile()` |

## Module (`module.ts`)

Composition root feature. Hanya membuat repository → service → controller. Tidak ada business logic.

```typescript
export const createUsersModule = () => {
  const repository = new UsersRepository(prisma)
  const service = new UsersService(repository)
  const controller = new UsersController(service)

  return { controller }
}
```

## Route File (`server/api/v1/{folder-name}/*.ts`)

```typescript
// server/api/v1/users/[id].get.ts
import { createUsersModule } from '~/server/api/features/users/module'

const { controller } = createUsersModule()

export default defineEventHandler((event) => controller.loadUsersProfile(event))
```

> Route file tidak boleh memanggil service, repository, atau Prisma secara langsung.

---

# Response & Error

Format response mengikuti [RESPONSE.md](./RESPONSE.md): `success`, `data`, `message`, `pagination` untuk sukses, dan `error { code, message, details }` untuk gagal, dengan HTTP status code sesuai tabel di sana.

- Response sukses dibuat di controller melalui helper di `server/utils/api.ts`.
- Error dilempar dengan `createError` dan dinormalisasi di satu tempat (Nitro `errorHandler`) menjadi format error standar. Raw Prisma error tidak boleh bocor ke client.
- Error validasi Zod dipetakan ke `VALIDATION_ERROR` dengan `details` per field.

---

# Authentication

JWT diverifikasi di `server/middleware/auth.ts` menggunakan `jsonwebtoken`, dengan secret dari `useRuntimeConfig().jwtSecret`. Password di-hash dengan `bcryptjs`. Middleware hanya memverifikasi token dan mengisi `event.context.user`; tidak ada business logic lain di dalamnya.

---

# Prisma Client — Singleton Wajib

PrismaClient hanya dibuat satu kali di `server/utils/prisma.ts`. Jangan membuat `new PrismaClient()` di setiap request atau repository.

---

# Final Rules

- Tidak boleh merubah kode dan logika lain yang sudah ada.
- Tidak boleh ada penambahan atau perbaikan di luar kebutuhan task.
- Tidak boleh menggunakan penamaan function di luar convention yang sudah ditentukan.
- Utilitas internal wajib dibuat sebagai `private` method di dalam class-nya.
- Route file hanya memetakan URL ke method controller.
- Controller tidak boleh memanggil repository secara langsung.
- Service tidak boleh memanggil Prisma secara langsung.
- Repository tidak boleh mengandung business logic.
- Repository dan Service tidak boleh menerima `H3Event`.
- Controller adalah satu-satunya feature layer yang berhubungan langsung dengan HTTP.
- `module.ts` hanya melakukan dependency wiring.
- Semua Prisma query wajib berada di Repository.
- Semua error response wajib melalui error handler terpusat.
- Semua response mengikuti [RESPONSE.md](./RESPONSE.md).
