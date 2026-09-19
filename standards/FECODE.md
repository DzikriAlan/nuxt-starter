# Development Standards

## Function Naming Rules

| Prefix   | Service | Controller | onMessage | emit | UI vue | Utilisasi (inner function) |
| -------- | :-----: | :--------: | :-------: | :--: | :----: | :------------------------: |
| `get`    |   ✅    |     ❌     |    ❌     |  ❌  |   ❌   |             ✅             |
| `post`   |   ✅    |     ❌     |    ❌     |  ❌  |   ❌   |             ✅             |
| `update` |   ✅    |     ❌     |    ❌     |  ❌  |   ❌   |             ✅             |
| `patch`  |   ✅    |     ❌     |    ❌     |  ❌  |   ❌   |             ✅             |
| `delete` |   ✅    |     ❌     |    ❌     |  ❌  |   ❌   |             ✅             |
| `fetch`  |   ❌    |     ✅     |    ❌     |  ❌  |   ❌   |             ❌             |
| `store`  |   ❌    |     ✅     |    ❌     |  ❌  |   ❌   |             ❌             |
| `modify` |   ❌    |     ✅     |    ❌     |  ❌  |   ❌   |             ❌             |
| `remove` |   ❌    |     ✅     |    ❌     |  ❌  |   ❌   |             ❌             |
| `load`   |   ❌    |     ❌     |    ✅     |  ✅  |   ✅   |             ❌             |
| `submit` |   ❌    |     ❌     |    ✅     |  ✅  |   ✅   |             ❌             |
| `edit`   |   ❌    |     ❌     |    ✅     |  ✅  |   ✅   |             ❌             |
| `clear`  |   ❌    |     ❌     |    ✅     |  ✅  |   ✅   |             ❌             |

## Struktur Output

```
src/features/{folderName}/
├── types/{filename}Types.ts
├── states/{filename}States.ts
├── services/{filename}Services.ts
├── controllers/{filename}Controllers.ts
└── components/{filename}{action}.vue
```

---

## Penamaan Folder & File

Dari URL endpoint, buang segmen berikut:
- Base URL / domain
- Prefix `api`
- Versioning: segmen yang cocok pola `v{angka}` (contoh: `v1`, `v2`)

Sisa path yang bermakna dibagi menjadi tiga konsep:

| Konsep           | Aturan                                       | Digunakan untuk                                                 |
| ---------------- | -------------------------------------------- | --------------------------------------------------------------- |
| **folderName**   | Segmen **pertama** sisa path, `kebab-case`   | Nama folder domain                                              |
| **fileName**     | `folderName` dikonversi ke `camelCase`       | Prefix nama file `.ts`                                          |
| **resourceName** | gabungan semua segmen, digabung `PascalCase` | Nama TypeScript: types, controllers, handlers, services, states |

**Contoh:**

| URL                                           | folderName  | fileName   | filename               |
| --------------------------------------------- | ----------- | ---------- | ---------------------- |
| `/api/v1/users/profile`                       | `users`     | `users`    | `UsersProfile`         |
| `/api/v1/ai-search/register/file/{type}/{id}` | `ai-search` | `aiSearch` | `aiSearchRegisterFile` |

> Segmen dinamis (`{param}`) selalu diabaikan.

---

## Aturan Per File

### Types (`{filename}Types.ts`)

```typescript
// Payload: hanya untuk GET & POST
export interface Payload{Method}{resourceName} {
  field: type
}

// ⚠️ Hanya buat jika response API mengembalikan data (bukan void/empty)
export interface Data{resourceName} {
  id: string
  // ... fields
}

// Reactive state shape
export interface {resourceName} {
  status: string // loading | error | empty. selalu ada, tidak terkecuali
  statusTitle: string // selalu ada, tidak terkecuali
  statusSubtitle: string // selalu ada, tidak terkecuali
  data: Data{resourceName} | null  // hanya jika response tidak kosong/void
}
```

**Kapan `Data{resourceName}` & field `data` dibuat:**

| Kondisi response            | Buat `Data{resourceName}`? | Tambah field `data`? |
| --------------------------- | -------------------------- | -------------------- |
| Mengembalikan objek/array   | ✅ Ya                      | ✅ Ya                |
| Void / empty (misal DELETE) | ❌ Tidak                   | ❌ Tidak             |

Default values: `string → ""`, `number → 0`, `boolean → false`, `Array → []`, `Object → {}`

---

### States (`{filename}States.ts`)

```typescript
import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Payload{Method}{resourceName}, {resourceName} } from '../types/{filename}Types'

export const use{filename}States = defineStore('use{filename}States', () => {
  const payload{Method}{resourceName} = reactive<Payload{Method}{ResourceName}>({ /* empty defaults */ })

  const {camelResourceName} = reactive<{ResourceName}>({
    status: false,
    statusTitle: 'Something went wrong',               // tetap, tidak perlu disesuaikan
    statusSubtitle: 'Please try again later.',         // tetap, tidak perlu disesuaikan
    data: null                                        // hapus jika response void
  })

  return { payload{Method}{filename}, {camelResourceName} }
})
```

**Aturan**: Hanya `reactive` state, tidak ada fungsi. Payload hanya untuk GET & POST, tidak untuk PATCH/PUT/DELETE.

---

### Services (`{filename}Services.ts`)

```typescript
import { useApi } from '@/shared/hooks/useApi'
import { formattingQueryString } from '@/shared/utils/formData'
import type { Payload{Method}{resourceName} } from '../types/{filename}Types'

const api = useApi()
const baseUrl = import.meta.env.VITE_API_BASE_URL

// ✅ BENAR
export const {get|post|update|patch|delete}{resourceName} = async (payload) => {
  try {
    const { data } = await api.{method}(
      `${baseUrl}/path/to/endpoint${formattingQueryString(payload)}`, // formattingQueryString hanya untuk GET
    )
    return data
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') return null
    throw error
  }
}

// ❌ DILARANG — jangan tulis return type
export const {get|post|update|patch|delete}{resourceName} = async (payload): Promise<Data{resourceName} | null> => { ... }
```

**Prefix method service:**

| HTTP   | Prefix   | Contoh                 |
| ------ | -------- | ---------------------- |
| GET    | `get`    | `getUsersProfile()`    |
| POST   | `post`   | `postRegisterFile()`   |
| PUT    | `update` | `updateUsersProfile()` |
| PATCH  | `patch`  | `patchUsersProfile()`  |
| DELETE | `delete` | `deleteUsersProfile()` |

**Aturan**: Tidak ada state logic. Hanya pure API call. **Dilarang menulis return type annotation** — tidak boleh ada `: Promise<...>` pada fungsi service.

---

### Store (`{filename}Controllers.ts`)

```typescript
import { defineStore } from 'pinia'
import { use{filename}Types } from '../states/{filename}Types'
import { use{filename}States } from '../states/{filename}States'
import { {method}{resourceName} } from '../service/{filename}Services'

export const use{filename}Controllers = defineStore('use{filename}Controllers, () => {
  const { {camelResourceName} } = use{filename}States()
  const { Payload{resourceName} } = use{filename}Types()

  const {fetch|store|modify|remove}{resourceName} = async (payload: Payload{resourceName}, isStore = true) => {
    if (isStore) {camelResourceName}.status = 'loading'

    try {
      const result = await {method}{resourceName}(payload)

      {camelResourceName}.data = result ?? null // hapus jika response void
      {camelResourceName}.status = !!{camelResourceName}.data ? 'success' : 'empty' // hapus jika response void

      return result
    } catch (error) {
      {camelResourceName}.status = 'error'
      throw error
    }
  }

  return { {fetch|store|modify|remove}{resourceName} }
})
```
**Aturan**: Hanya function yang memanggil function dari services, yang tidak memanggil function services, dipanggilnya pada component terkait secara langsung saja
**Prefix method store:**

| HTTP      | Prefix   | Contoh                 |
| --------- | -------- | ---------------------- |
| GET       | `fetch`  | `fetchUsersProfile()`  |
| POST      | `store`  | `storeRegisterFile()`  |
| PUT/PATCH | `modify` | `modifyUsersProfile()` |
| DELETE    | `remove` | `removeUsersProfile()` |

> `update` dan `patch` di layer service keduanya dibungkus oleh `modify` di layer controller.

---

### Components (`{filename}{action}`)
```typescript
```

**Aturan**:

#### 1. Struktur Penulisan Kode Vue
Urutan penulisan wajib mengikuti struktur berikut:

```vue
<script setup lang="ts">
import { computed, reactive } from 'vue'

import type { DataUsersProfile } from '../types/usersTypes'
import { useUsersStates } from '../states/usersStates'
import { useUsersControllers } from '../controllers/usersControllers'

const props = defineProps()

const emit = defineEmits()

const { usersProfile, usersCategories, assets } = useUsersStates()
const { fetchUsersProfile, removeUsersProfile } = useUsersControllers()

const filters = reactive({
  filter: {
    categoryId: '',
    year: '',
  },
  pagination: {
    currentPage: 1,
    perPage: 10,
    totalItem: 0,
    totalPage: 0,
  },
  search: '',
  // bisa ada field lain jika dibutuhkan
})

const data = computed(() => {
  // utilisasi wajib ditulis di dalam parent function
  const getMappedItem = (item: DataUsersProfile, categoryName: string) => ({
    id: item.id,
    title: item.title,
    category: categoryName,
  })

  const activeCategory = usersCategories.data.find((category) => category.isActive)
  const categories = activeCategory?.categories ?? []
  const tabs = ['Semua', ...categories.map((category) => category.name)]
  const isCategoryTabActive = !!activeCategory && filters.activeSubCategory === activeCategory.name
  const filteredList = isCategoryTabActive
    ? usersProfile.data.filter((raw) => !raw.sub_category_name)
    : usersProfile.data
  const mappedList = filteredList.map((raw) => getMappedItem(raw, raw.category_name))

  return {
    data: mappedList,
    isLoading: usersProfile.status === 'loading',
    isError: usersProfile.status === 'error',
    isEmpty: usersProfile.status === 'success' && !mappedList.length,
    emptyTitle: 'Data Tidak Ditemukan',
    emptySubtitle: 'Belum ada data yang dapat ditampilkan untuk kategori ini. Cek kategori lain atau kembali lagi nanti.',
    emptyImage: assets?.noData3Svg,
    pagination: filters.pagination,
    // bisa ada field lain jika dibutuhkan
  }
})

const loadUsersProfile = (page: number) => {
  filters.pagination.currentPage = page
  fetchUsersProfile(filters.filter)
}
const submitUsersProfile = () => {}
const editUsersProfile = () => {}
const clearUsersProfile = () => {
  // utilisasi wajib ditulis di dalam parent function
  const getSelectedIds = () => data.value.data.map((item) => item.id)

  removeUsersProfile({ ids: getSelectedIds() })
}

watch(() => {}, () => {})

onMounted(() => {})
onUnmounted(() => {})
</script>

<template>
</template>

<style lang="scss">
@import "...";
</style>
```

**Aturan `filters` & `data`:**

- Semua kondisi tampilan (filter, pagination, search, tab aktif, toggle UI) digabung ke dalam **satu** state bernama `filters`.
- Semua derived value dihitung di dalam **satu** computed bernama `data`, tidak tersebar di luar.
- Function utilisasi (`get*`) ditulis di dalam `data`, bukan di scope module.

**Field wajib pada return `data`:**

| Field           | Tipe      | Keterangan                                      |
| --------------- | --------- | ----------------------------------------------- |
| `data`          | `Array`   | Hasil mapping list yang siap dirender           |
| `isLoading`     | `boolean` | Status loading dari controller                  |
| `isError`       | `boolean` | Status error dari controller                    |
| `isEmpty`       | `boolean` | `true` jika sudah selesai load tapi data kosong |
| `emptyTitle`    | `string`  | Judul saat state kosong                         |
| `emptySubtitle` | `string`  | Deskripsi saat state kosong                     |
| `emptyImage`    | `string`  | Ilustrasi saat state kosong                     |
| `pagination`    | `Object`  | Pagination aktif dari `filters`                 |
/** bisa ada field lain jika dibutuhkan */

**Prefix method component, emit & onMessage:**

| Aksi              | Prefix   | Contoh handler         | Contoh emit                    |
| ----------------- | -------- | ---------------------- | ------------------------------ |
| Baca / muat data  | `load`   | `loadUsersProfile()`   | `emit('load-users-profile')`   |
| Kirim / buat data | `submit` | `submitUsersProfile()` | `emit('submit-users-profile')` |
| Ubah data         | `edit`   | `editUsersProfile()`   | `emit('edit-users-profile')`   |
| Hapus data        | `clear`  | `clearUsersProfile()`  | `emit('clear-users-profile')`  |

> Prefix service (`get`, `post`, `update`, `patch`, `delete`) di dalam component **hanya** boleh dipakai untuk function utilisasi di dalam parent function, bukan untuk handler, emit, maupun onMessage.

---

#### 2. Penggunaan Template
- Template hanya bertanggung jawab untuk rendering UI.
- Dilarang menulis business logic kompleks langsung di template.
- Dilarang menggunakan expression yang panjang atau nested condition yang sulit dibaca.
- Logic perhitungan harus dipindahkan ke `computed`, `handler`, atau `composable`.
- Setiap section besar wajib dipisahkan menjadi komponen tersendiri.
- Gunakan komponen Vuero terlebih dahulu sebelum membuat elemen custom.
- Gunakan `v-if`, `v-for`, dan `v-slot` secara eksplisit dan mudah dibaca.
- Hindari nested template yang terlalu dalam (> 3 level).
- Setiap komponen child harus menerima data melalui props dan mengirim aksi melalui emits.
- Dilarang mengakses state milik komponen lain secara langsung dari template.

Contoh:

```vue
<!-- Salah -->
<div>
  {{ users.filter(user => user.active).length }}
</div>

<!-- Benar -->
<div>
  {{ activeUsersCount }}
</div>
```

---

#### 3. Penggunaan Existing Component
Urutan pencarian komponen wajib:

```text
1. Vuero Component
2. Existing Component Project
3. Reusable Component
4. Buat Component Baru
```

Sebelum membuat komponen baru wajib memeriksa:

```text
src/components/base
src/components/reusable
src/features/{nama_features}/components
```

Ketentuan:
- Dilarang membuat komponen yang memiliki fungsi sama dengan komponen existing.
- Dilarang melakukan duplikasi wrapper component tanpa alasan yang jelas.
- Jika hanya berbeda sedikit behavior atau tampilan, lakukan extend terhadap komponen existing.
- Props dan emits harus mengikuti pola komponen yang sudah ada.
- Nama komponen harus konsisten dengan domain fitur.
- Komponen parent bertanggung jawab terhadap koordinasi data.
- Komponen child bertanggung jawab terhadap rendering dan aksi spesifik.
- Reusable component tidak boleh mengandung business logic fitur tertentu.
- Feature component tidak boleh digunakan sebagai pengganti reusable component jika kebutuhan bersifat umum.
```
---

# Final Rules

- Tidak boleh merubah kode, UI/UX, dan logika lain yang sudah ada.
- Tidak boleh ada penambahan atau perbaikan diluar kebutuhan task.
- Tidak boleh menggunakan penamaan function diluar dari convention yang sudah ditentukan
- Harus melakukan utilisasi dengan membuat function baru di dalam parent function.
- Function utilitas tidak boleh berada di luar parent function.
- Function utilitas (inner function) hanya boleh memakai prefix `get`, `post`, `update`, `patch`, `delete`.
- Harus melakukan penamaan emit ataupun onMessage dengan rumus `(emit prefix + subject)` dalam `kebab-case`:
    emit('load-user')
    emit('submit-user')
    emit('edit-user')
    emit('clear-user')

    emit('load-modal')
    emit('clear-modal')

    onMessage('load-user')
    onMessage('submit-user')
    onMessage('edit-user')
    onMessage('clear-user')

    onMessage('load-modal')
    onMessage('clear-modal')
---