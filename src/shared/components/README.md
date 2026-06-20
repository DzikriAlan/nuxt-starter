# Panduan Pengelolaan Komponen

Dokumen ini berisi teknis pengelolaan komponen di dalam direktori `src/shared/components/`.

## 📁 Struktur Komponen

```
src/shared/components/
├── base/       # Komponen UI dasar (button, input, dll)
├── features/   # Komponen khusus fitur (GeneratorSidebar, dll)
└── reusable/   # Komponen yang dapat digunakan di banyak halaman
```

## 🛠️ Aturan Pengembangan

### Struktur Kode Vue
Setiap komponen mengikuti pola standar:

```vue
<script setup lang="ts">
// 1. Impor modul
import { ref, computed } from 'vue'

// 2. Definisi Props dan Emits
const props = defineProps<{...}>()
const emit = defineEmits<{...}>()

// 3. State dan Logika
const data = ref([])

// 4. Metode/Functions
const handleAction = () => {
  // Implementasi
}

// 5. watch
watch(() => data.value, () => {})

// 6. Lifecycle Hooks
onMounted(() => {})
onUnmounted(() => {})
</script>
```

### Aturan Kode Penting
1. **Pemisahan State & Store:** Tidak boleh me-return/export state (misal `users`, `payloadUsers`) yang sudah ada di file `/states`. Komponen harus mengimpor state langsung dari file `/states`.
2. **Formatting Return:** Setiap kembalian object pada composables dan hooks wajib dibatasi maksimal **3 kolom (item)** per baris.
3. **Component Sectioning:** Setiap bagian (section) yang digunakan untuk menampilkan data atau melakukan aksi wajib dibuat menjadi komponen terpisah. Komponen utama (parent) bertugas mengelola koordinasi menggunakan props dan emits.
4. **Attribute Formatting:** Setiap tag HTML/Vue yang memiliki attribute lebih dari sekadar `class` wajib ditulis **baris per baris** (satu attribute per baris). Khusus untuk tag `<svg>`, attribute diperbolehkan tetap dalam satu baris untuk menjaga kebersihan kode. **Urutan penulisan attribute:** Attribute statis/binding (v-model, :prop) -> style/class -> event listener (@click, dsb) wajib berada di baris paling bawah.

```typescript
return { 
  item1, item2, item3,
  item4, item5
}
```

### Pengelolaan SCSS
Untuk menjaga kebersihan komponen Vue, dilarang menulis kode SCSS langsung di blok `<style>`.

**Aturan Penulisan SCSS:**
1. **Lokasi File:** `src/assets/scss/custom/features/{nama_fitur}/_{nama_komponen}.scss`
2. **Import Komponen:** Di dalam file Vue, cukup lakukan import pada blok style.

```vue
<style lang="scss">
@import "@/src/assets/scss/custom/features/generator/_GeneratorSidebar.scss";
</style>
```

3. **Penamaan:** Gunakan prefix `_` (underscore) pada nama file SCSS sebagai tanda partial file.
   
## 🧊 Pengelolaan Data Statis
Pisahkan data statis (non-reactive) ke dalam folder `static` di setiap fitur:
- **Lokasi:** `src/shared/components/features/{nama_fitur}/static/{NamaComponent}.ts`
- **Tujuan:** Memisahkan definisi data (seperti style CodeMirror, data tabel statis, atau placeholder) dari logika komponen Vue.
- **Kriteria:** Hanya berisi `export const`, dilarang menggunakan `ref`, `computed`, atau `reactive`.

```typescript
// Contoh di src/shared/components/features/generator/static/GeneratorSidebar.ts
import { HighlightStyle } from '@codemirror/language'
import { tags as t } from '@lezer/highlight'

export const jsonStyle = HighlightStyle.define([...])
export const placeholderJson = '{ ... }'
```