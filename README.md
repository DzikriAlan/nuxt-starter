# Nuxt Starter

## 🚀 Teknologi yang Digunakan

Proyek ini menggunakan teknologi-teknologi berikut:

- **Framework**: Nuxt 3 + Vue 3 + TypeScript - Kerangka kerja utama untuk pengembangan aplikasi
- **UI Framework**: Nuxt UI - Komponen UI dan sistem desain
- **State Management**: VueUse - Pengelolaan state dan composables
- **Build Tool**: Vite (via Nuxt) - Alat pengembangan dan pembangunan aplikasi
- **Router**: Vue Router - Pengelolaan navigasi aplikasi
- **ORM**: Prisma - Pengelolaan database
- **Database**: MySQL2 - Driver database
- **Validasi**: Zod - Validasi skema data
- **Auth**: bcryptjs + jsonwebtoken - Autentikasi dan keamanan
- **Utilities**: dayjs - Pengelolaan tanggal dan waktu
- **Icons**: Nuxt Icon - Sistem pengelolaan ikon
- **Node Version**: v20.19^

## 📁 Struktur Proyek

```
src/
├── assets/              # Aset statis (gambar, font, ikon)
|__ features/{folderName}/
|   ├── types/{filename}Types.ts
|   ├── states/{filename}States.ts
|   ├── services/{filename}Services.ts
|   ├── controllers/{filename}Controllers.ts
|   └── components/{filename}{action}.vue
├── shared/
│   ├── components/
│   │   ├── base/       # Komponen dasar
│   │   ├── features/   # Komponen khusus fitur
│   │   └── reusable/   # Komponen yang dapat digunakan ulang
│   ├── hooks/          # Hooks yang dapat digunakan ulang
│   ├── stores/         # Penyimpanan state global
│   ├── types/          # Tipe-tipe TypeScript
│   └── utils/          # Fungsi-fungsi pembantu
└── styles/             # Gaya global SCSS
```

## 🛠️ Instalasi & Pengembangan

```bash
# Pasang dependensi
npm install

# Konfigurasi Environment
cp .env.example .env

# Inisiasi Driver Database
npx prisma generate

# Jalankan development server
npm run dev
```

## 🏗️ Panduan Teknis Lanjutan

Untuk dokumentasi detail mengenai cara pembuatan dan aturan penulisan kode, silakan merujuk pada dokumen berikut:

- [📖 Panduan Pengelolaan Modul Domain (src/domain)](src/domain/README.md)
- [🎨 Panduan Pengelolaan Komponen (src/shared/components)](src/shared/components/README.md)

## Panduan Arsitektur

Lihat [CODE.md](./CODE.md) untuk aturan lengkap mengenai:
- Konvensi penamaan fungsi, file, dan folder
- Struktur per file (Types, States, Services, Controllers, Components)
- Aturan penulisan komponen Vue

## 🤝 Kontribusi

1. Fork repositori ini.
2. Buat cabang fitur baru (`git checkout -b feature/fitur`).
3. Commit perubahan Anda.
4. Push ke cabang asal.
5. Buat Pull Request.

## 📄 Lisensi

MIT License - lihat berkas [LICENSE](LICENSE) untuk informasi lebih lanjut.

---

Dikembangkan oleh tim Dzikri Alan.