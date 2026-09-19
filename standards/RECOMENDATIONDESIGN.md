# Design Recommendations (666 Listing)

Ini adalah pasangan dari `design.md`. Jika `design.md` berisi *checklist judgement* (pertanyaan untuk menilai), file ini berisi *keputusan/rekomendasi konkret* yang sudah "dicentang" — pilihan desain aktif yang direkomendasikan untuk menghindari hasil generik/AI slop. Gunakan sebagai daftar pilihan default saat membuat keputusan desain.

## 1. Prinsip Umum & Filosofi Desain
- [x] Tentukan satu ide/konsep inti sebelum membuka software desain
- [x] Tulis 1 kalimat "big idea" dan tempel di sisi kanvas selama proses desain
- [x] Ambil satu sudut pandang berani, bukan rata-rata dari 10 referensi
- [x] Jadikan batasan proyek (waktu, budget, teknis) sebagai bahan ide, bukan alasan menyerah
- [x] Riset audiens dan kompetitor dulu sebelum sketsa pertama
- [x] Buat moodboard yang menolak referensi paling umum di industri tersebut
- [x] Tentukan 3 kata sifat yang harus terasa dari desain ini
- [x] Uji tiap elemen dengan "apa yang hilang kalau ini dibuang"
- [x] Buat versi minimal dulu, baru tambahkan lapisan detail bertahap
- [x] Simpan alasan tiap keputusan besar dalam catatan desain
- [x] Pilih 1-2 tren yang benar-benar relevan, tolak sisanya
- [x] Selaraskan kepribadian visual dengan nilai brand secara eksplisit
- [x] Prioritaskan fungsi lebih dulu, lalu perkaya bentuknya
- [x] Modifikasi referensi minimal 30% agar tidak terasa jiplakan
- [x] Jadwalkan review ulang desain setelah jeda 1-2 hari
- [x] Berani menghapus elemen favorit jika tidak mendukung tujuan
- [x] Pertahankan satu benang merah visual di semua turunan aset
- [x] Uji ulang keputusan desain dengan pertanyaan "kenapa" tiga kali berturut

## 2. Tipografi
- [x] Pilih 2 font: satu display berkarakter, satu teks yang sangat mudah dibaca
- [x] Tetapkan skala tipografi modular (misal rasio 1.25 atau 1.333)
- [x] Set line-height 1.5 untuk body text sebagai default
- [x] Batasi lebar kolom teks ke 60-75 karakter per baris
- [x] Gunakan ukuran dasar 16px untuk body text di web
- [x] Pilih font dengan karakter kuat (bukan Arial/Times polos) untuk identitas
- [x] Gunakan letter-spacing negatif tipis pada heading besar agar rapat elegan
- [x] Terapkan font-weight 600-700 khusus untuk elemen penekanan
- [x] Buat lompatan ukuran signifikan antar level heading (misal 2x lipat ke H1)
- [x] Batasi teks kapital penuh hanya untuk label pendek (button, tag)
- [x] Pasangkan serif ekspresif dengan sans-serif netral untuk kontras
- [x] Biarkan teks bernapas — jangan pernah memaksa "justify" tanpa hyphenation
- [x] Rata kiri sebagai default alignment body text
- [x] Cek manual widow/orphan sebelum final dan sisipkan non-breaking space
- [x] Skalakan ukuran font dengan clamp()/rem agar adaptif di semua layar
- [x] Investasikan satu font custom/lisensi untuk elemen kunci brand
- [x] Batasi pemakaian italic hanya untuk penekanan kutipan/istilah asing
- [x] Standarkan margin-bottom paragraf lewat token, bukan enter manual

## 3. Warna
- [x] Tentukan 1 warna primary, 1 secondary, 3-5 netral, 1-2 aksen
- [x] Uji kontras teks-background dengan target rasio 4.5:1 ke atas
- [x] Petakan makna tiap warna (sukses, error, warning, info) secara eksplisit
- [x] Batasi gradient hanya untuk 1-2 elemen hero, bukan seluruh halaman
- [x] Racik warna netral sendiri (sedikit tint warna brand) alih-alih abu-abu default
- [x] Simulasikan palet di color-blind simulator sebelum finalisasi
- [x] Kunci hex/token warna brand di satu sumber (design tokens)
- [x] Gunakan aksen warna hanya pada 1 elemen fokus per layar
- [x] Bangun palet dark mode terpisah dari nol, bukan hasil invert
- [x] Riset psikologi warna sesuai budaya target pasar utama
- [x] Pilih warna khas yang jarang dipakai kompetitor langsung sebagai identitas
- [x] Turunkan opacity/tint warna disabled state secara konsisten (misal 40%)
- [x] Jaga saturasi warna besar di bawah 80% untuk kenyamanan mata
- [x] Kalibrasi warna di monitor berbeda sebelum kirim ke produksi
- [x] Beri nama semantik token warna (color-primary, color-danger, dst)
- [x] Definisikan warna hover sedikit lebih gelap/terang (±10%) dari base
- [x] Pilih skema warna kategorikal yang mudah dibedakan untuk chart
- [x] Sertakan ikon/pola selain warna untuk menandai status penting

## 4. Layout & Struktur
- [x] Rancang alur baca eksplisit berdasarkan pola F/Z sesuai konten
- [x] Tetapkan satu focal point besar per section
- [x] Variasikan lebar/posisi blok antar section untuk ritme visual
- [x] Beri tiap section identitas kecil (warna aksen/ikon berbeda) dalam satu sistem
- [x] Naikkan konten paling penting ke atas viewport pertama
- [x] Bangun di atas grid 12 kolom sebagai kerangka dasar
- [x] Isi layout dengan draft konten asli sejak tahap wireframe
- [x] Batasi elemen dekoratif agar tidak menutupi/menabrak konten
- [x] Variasikan ukuran blok sesuai bobot informasinya (bukan grid seragam)
- [x] Stress-test layout dengan teks terpanjang dan terpendek yang realistis
- [x] Gunakan whitespace besar secara sengaja di sekitar elemen kunci
- [x] Urutkan section berdasarkan prioritas kebutuhan pengguna, bukan struktur internal
- [x] Modifikasi pola "hero-fitur-testimoni-footer" dengan elemen unik brand
- [x] Beri ruang aman (offset) untuk elemen sticky agar tidak menutup konten
- [x] Terapkan pola struktur yang sama untuk halaman-halaman sejenis
- [x] Tentukan breakpoint dari kebutuhan konten nyata, bukan angka standar semata
- [x] Batasi nesting wrapper maksimal 3-4 level dalam satu komponen
- [x] Cocokkan struktur visual dengan struktur data/informasi aslinya

## 5. Grid & Alignment
- [x] Aktifkan grid overlay di software desain sepanjang proses kerja
- [x] Tetapkan margin halaman konsisten (misal 24px mobile, 80px desktop)
- [x] Gunakan gutter grid proporsional (misal 16-24px)
- [x] Cek alignment dengan smart guide, bukan estimasi mata
- [x] Sesuaikan alignment optis manual untuk bentuk bulat/segitiga
- [x] Bangun skala ukuran dari grid 8pt (8, 16, 24, 32, 40...)
- [x] Tetapkan baseline grid untuk blok teks panjang
- [x] Sejajarkan ikon dan teks dengan optical centering, bukan math centering
- [x] Definisikan jumlah kolom per breakpoint (4/8/12)
- [x] Beri alasan eksplisit untuk tiap elemen yang keluar grid
- [x] Rata-kanankan angka dalam tabel/kolom finansial
- [x] Samakan gutter kolom di seluruh halaman lewat token spacing
- [x] Tetapkan container max-width (misal 1200-1440px) untuk layar besar
- [x] Gunakan full-bleed hanya untuk elemen visual yang disengaja
- [x] Perlakukan grid sebagai kerangka fleksibel, bukan aturan mutlak
- [x] Selaraskan ikon dalam tombol dengan optical alignment
- [x] Tambahkan breakpoint khusus untuk konten unik (tabel lebar, dsb)
- [x] Validasi grid dengan overlay sebelum handoff ke developer

## 6. Spacing & White Space
- [x] Bangun skala spacing token (4, 8, 12, 16, 24, 32, 48, 64)
- [x] Buat jarak lebih rapat untuk elemen berkaitan, lebih renggang untuk tidak berkaitan
- [x] Standarkan padding internal per jenis komponen
- [x] Beri whitespace generous di sekitar CTA utama
- [x] Longgarkan spacing elemen yang terasa padat saat review
- [x] Buat skala jarak vertikal antar section (misal 64/96/128px)
- [x] Pisahkan token margin dan padding dengan aturan pemakaian jelas
- [x] Perbesar spacing di desktop, perketat proporsional di mobile
- [x] Kelompokkan elemen terkait lewat jarak yang lebih dekat (proximity)
- [x] Dokumentasikan sistem spacing agar tidak ada nilai acak baru
- [x] Bedakan margin antar baris dan antar paragraf secara eksplisit
- [x] Samakan spacing antar item list/menu lewat token
- [x] Tetapkan target sentuh minimal 44x44px di semua tombol mobile
- [x] Beri konteks visual (garis/background) untuk elemen yang butuh berdiri sendiri
- [x] Skala-kan padding container mengikuti breakpoint layar
- [x] Simpan token spacing di satu file agar dipakai ulang tim
- [x] Beri jarak aman antar CTA berdekatan (misal minimal 8-16px)
- [x] Isi ruang kosong dengan konten atau biarkan sengaja sebagai jeda visual

## 7. Hierarki Visual
- [x] Petakan urutan baca dari paling penting ke kurang penting sebelum desain detail
- [x] Kombinasikan ukuran + warna + posisi untuk membangun satu hierarki jelas
- [x] Beri hanya 1-2 elemen bobot visual "paling berat" per layar
- [x] Buat CTA utama minimal 20-30% lebih menonjol dari CTA sekunder
- [x] Naikkan kontras/ukuran informasi kritikal di atas elemen dekoratif
- [x] Uji hierarki tetap konsisten saat resize ke mobile
- [x] Buat lompatan ukuran font signifikan antar level heading
- [x] Selaraskan hierarki visual dengan prioritas bisnis yang disepakati
- [x] Turunkan bobot visual elemen sekunder agar tidak bersaing dengan primer
- [x] Pakai warna aksen hanya untuk elemen yang ingin ditonjolkan
- [x] Jalankan "5 second test" untuk validasi elemen paling menonjol
- [x] Tegaskan satu elemen fokus utama per section, sisanya pendukung
- [x] Sesuaikan hierarki berbeda untuk halaman konversi vs halaman informasi
- [x] Beri bobot visual berbeda antara ikon utama dan ikon pendukung
- [x] Pertahankan hierarki sama saat konten berubah dinamis (CMS, dsb)
- [x] Beri visual weight rendah namun tetap terbaca untuk info sekunder
- [x] Kelompokkan elemen berdasarkan hubungan logis lewat kedekatan/warna
- [x] Jalankan blur-test pada mockup untuk validasi elemen dominan

## 8. Kontras & Keterbacaan
- [x] Jadikan rasio kontras AA (4.5:1) sebagai syarat minimum rilis
- [x] Tambahkan overlay gradasi gelap di bawah teks pada foto
- [x] Sesuaikan ukuran teks dengan jarak baca konteks pemakaian
- [x] Gunakan abu-abu gelap (bukan hitam murni) untuk body text panjang
- [x] Beri warna dan underline berbeda untuk link dari teks biasa
- [x] Naikkan opacity placeholder ke level yang tetap terbaca (~60%)
- [x] Pastikan disabled state tetap punya kontras terbaca (bukan hilang total)
- [x] Uji kontras langsung di layar HP di bawah sinar matahari
- [x] Siapkan warna teks fallback aman untuk background gambar dinamis
- [x] Besarkan ukuran ikon fungsional minimal 16-24px
- [x] Beri border/divider kontras cukup tanpa mendominasi
- [x] Tempatkan info penting hanya di area kontras tinggi
- [x] Jalankan contrast checker otomatis di tiap kombinasi warna baru
- [x] Perbesar ukuran caption/label minimal 12-13px
- [x] Bedakan link dari teks lewat warna + underline, bukan warna saja
- [x] Uji ulang kontras spesifik untuk dark mode, jangan warisi dari light mode
- [x] Hindari kontras rendah pada elemen bermakna penting demi estetika
- [x] Perkuat kontras tombol teks terhadap warna latar tombol

## 9. Komponen UI (Umum)
- [x] Bangun komponen di design system sebelum dipakai berulang di halaman
- [x] Definisikan state lengkap tiap komponen: default/hover/active/disabled/focus
- [x] Ikuti pola interaksi platform yang sudah familiar pengguna
- [x] Skalakan ukuran komponen dari sistem token yang sama
- [x] Batasi varian komponen hanya untuk kebutuhan fungsional nyata
- [x] Tulis dokumentasi singkat pemakaian tiap komponen
- [x] Uji komponen dengan konten ekstrem (teks panjang, kosong, error)
- [x] Standarkan radius komponen dari token global
- [x] Standarkan level shadow/elevasi komponen dari token global
- [x] Bangun komponen modular yang menerima props/variasi konten
- [x] Buat komponen responsif otomatis terhadap lebar container
- [x] Uji kombinasi komponen bertumpuk (dropdown dalam modal, dst)
- [x] Tetapkan batas ukuran maksimum/minimum wajar per komponen
- [x] Buat komponen custom hanya setelah komponen standar terbukti tidak cukup
- [x] Uji tiap komponen dengan keyboard dan screen reader
- [x] Beri transisi halus antar state komponen (150-250ms)
- [x] Sesuaikan komponen dari UI kit populer dengan detail unik brand
- [x] Dokumentasikan dependency antar komponen untuk maintenance

## 10. Tombol & CTA
- [x] Tetapkan satu CTA primer paling menonjol per layar
- [x] Tulis label tombol yang actionable dan spesifik ("Mulai Uji Coba", bukan "Klik")
- [x] Set ukuran tombol minimal tinggi 44px untuk kenyamanan sentuh
- [x] Bedakan gaya visual tombol primer vs sekunder vs tersier
- [x] Sertakan penjelasan singkat kenapa tombol disabled (tooltip/helper text)
- [x] Batasi jumlah tombol per area agar tidak membingungkan
- [x] Kunci warna CTA dari token warna brand
- [x] Tampilkan spinner/loading state saat tombol memproses aksi
- [x] Beri warna berbeda (merah/oranye) untuk tombol aksi destruktif
- [x] Ikuti konvensi platform untuk urutan tombol (Cancel-Confirm)
- [x] Sederhanakan gaya tombol, hindari shadow/gradient berlebihan
- [x] Skalakan ukuran tombol sesuai tingkat kepentingan aksi
- [x] Tambahkan aria-label untuk tombol icon-only
- [x] Rancang hover/active state yang terasa responsif dan halus
- [x] Kunci ukuran tombol agar tidak bergeser antar state
- [x] Tulis CTA yang menyebut hasil konkret, bukan kata generik
- [x] Beri jarak minimal 8-16px antar tombol berdekatan
- [x] Tempatkan CTA penting tetap terlihat tanpa scroll berlebihan

## 11. Form & Input
- [x] Tampilkan label permanen di atas/samping field, bukan hanya placeholder
- [x] Tandai field wajib dengan simbol/warna yang jelas dan konsisten
- [x] Tulis pesan error yang spesifik dan actionable
- [x] Validasi input secara real-time saat pengguna mengetik/keluar field
- [x] Urutkan field mengikuti alur mental pengguna (nama-kontak-alamat, dst)
- [x] Set tinggi input minimal 44px agar mudah disentuh
- [x] Aktifkan autocomplete/autofill untuk field standar (nama, email, dst)
- [x] Pecah form panjang jadi beberapa step dengan progress jelas
- [x] Sertakan label eksplisit meski placeholder juga ada
- [x] Set attribute keyboard type sesuai konten (numeric, email, dst)
- [x] Beri gaya visual jelas beda antara field disabled dan aktif
- [x] Letakkan pesan sukses/error tepat di dekat field terkait
- [x] Pangkas field yang tidak esensial dari form
- [x] Nonaktifkan tombol submit dengan indikasi jelas syarat yang belum terpenuhi
- [x] Gunakan dropdown hanya saat opsi lebih dari ~5 pilihan
- [x] Susun tab order form mengikuti urutan visual logis
- [x] Tampilkan progress bar/step indicator untuk form multi-step
- [x] Pertahankan data terisi saat terjadi error validasi

## 12. Navigasi
- [x] Susun arsitektur informasi dari riset/card sorting, bukan asumsi
- [x] Batasi menu utama ke 5-7 item paling penting
- [x] Tandai halaman aktif dengan visual state yang jelas
- [x] Kunci posisi navigasi konsisten di semua halaman
- [x] Sertakan breadcrumb untuk struktur konten berlapis
- [x] Tulis label navigasi dengan kata yang familiar bagi pengguna
- [x] Desain hamburger menu dengan ikon dan label yang jelas
- [x] Sediakan fitur search jika koleksi konten/produk besar
- [x] Naikkan fitur penting ke level navigasi utama, bukan tersembunyi
- [x] Sederhanakan mega menu agar tidak overload informasi
- [x] Jadikan logo selalu linkable ke halaman utama
- [x] Beri feedback visual jelas saat hover/klik item navigasi
- [x] Urutkan menu berdasarkan riset kebutuhan pengguna
- [x] Bedakan gaya visual navigasi primer dan sekunder
- [x] Batasi tinggi sticky navigation agar tidak memakan ruang berlebih
- [x] Sediakan keyboard shortcut untuk aksi yang sering dipakai power user
- [x] Kurasi link footer agar tetap relevan dan berguna
- [x] Uji navigasi dengan pengguna yang belum pernah pakai produk

## 13. Kartu (Cards) & Blok Konten
- [x] Kunci ukuran card seragam dalam satu grid
- [x] Susun urutan info dalam card: visual-judul-deskripsi-aksi
- [x] Batasi jumlah info per card agar mudah dipindai
- [x] Perjelas seluruh area klik card lewat hover state
- [x] Tambahkan efek hover halus yang menandakan card bisa diklik
- [x] Kunci rasio gambar card (misal 4:3 atau 16:9) di seluruh grid
- [x] Siapkan fallback visual bermerek untuk card tanpa gambar
- [x] Standarkan shadow/border card dari token desain
- [x] Terapkan text-truncate + ellipsis untuk judul/deskripsi panjang
- [x] Kunci satu gaya card konsisten per grid/list
- [x] Uji card dengan panjang teks nyata dari data produksi
- [x] Kurangi jumlah kolom card secara responsif di layar kecil
- [x] Batasi ikon aksi dalam card maksimal 2-3 agar tidak ramai
- [x] Kunci gutter grid card dari token spacing
- [x] Beri indikator visual jelas (kursor, hover) untuk card interaktif
- [x] Urutkan card dengan logika jelas (terbaru/populer/relevan)
- [x] Tampilkan skeleton card saat data sedang dimuat
- [x] Bedakan card unggulan secara visual namun tetap proporsional

## 14. Ikon
- [x] Kunci satu gaya ikon (outline atau filled) di seluruh produk
- [x] Standarkan ukuran ikon dari grid ikon (misal 16/20/24px)
- [x] Sertakan label teks untuk ikon dengan makna ambigu
- [x] Buat ikon custom dengan stroke width konsisten
- [x] Gunakan ikon hanya saat mendukung fungsi/makna, bukan hiasan
- [x] Besarkan area klik ikon interaktif minimal 32-44px
- [x] Tambahkan tooltip/aria-label pada ikon fungsional
- [x] Ambil seluruh set ikon dari satu library/sistem yang sama
- [x] Kunci warna ikon dari token warna sistem
- [x] Sederhanakan detail ikon agar tetap jelas di ukuran kecil
- [x] Bedakan bentuk ikon status (bukan hanya warna) untuk aksesibilitas
- [x] Sejajarkan ikon dengan teks lewat optical alignment
- [x] Pilih ikon berdasarkan relevansi makna, bukan sekadar tampilan menarik
- [x] Konsistenkan sudut membulat/tajam di seluruh set ikon
- [x] Kurasi/kustomisasi ikon brand agar unik, bukan hasil generate mentah
- [x] Uji kontras ikon tetap jelas di dark mode
- [x] Buat animasi ikon halus dan tidak mengalihkan fokus berlebihan
- [x] Uji keterbacaan ikon di ukuran terkecil sebelum dipakai

## 15. Fotografi & Ilustrasi
- [x] Kurasi gambar yang relevan dengan konteks nyata produk/brand
- [x] Kunci gaya ilustrasi (warna, bentuk, proporsi) dalam satu panduan
- [x] Sediakan aset gambar resolusi tinggi (2x/3x) untuk layar retina
- [x] Kunci rasio aspek gambar seragam dalam satu grid
- [x] Kompres dan optimasi ukuran file gambar sebelum dipakai
- [x] Pilih foto yang terasa autentik, hindari pose stok klise berlebihan
- [x] Investasikan ilustrasi custom untuk memperkuat identitas brand
- [x] Tulis alt text deskriptif untuk semua gambar bermakna
- [x] Crop gambar dengan menjaga subjek utama tetap utuh
- [x] Hindari menaruh teks penting di dalam file gambar
- [x] Kurasi ilustrasi agar proporsional dan konsisten gayanya (hindari kesan acak/AI-generated)
- [x] Selaraskan gaya visual foto/ilustrasi dengan tone brand
- [x] Ganti semua placeholder dengan gambar asli sebelum rilis
- [x] Beri overlay/gradasi agar teks di atas gambar tetap terbaca
- [x] Hindari watermark stok foto pada aset final
- [x] Kurasi representasi visual yang mencerminkan keberagaman audiens
- [x] Konversi gambar ke format modern (WebP/AVIF) untuk efisiensi
- [x] Terapkan lazy loading untuk gambar di luar viewport awal

## 16. Animasi & Motion
- [x] Gunakan animasi hanya untuk feedback atau transisi konteks yang jelas
- [x] Kunci durasi animasi UI dasar di rentang 150-400ms
- [x] Pilih easing curve natural (ease-out/ease-in-out), hindari linear
- [x] Percepat/pangkas animasi yang menghambat penyelesaian tugas
- [x] Sediakan pengaturan "reduce motion" untuk aksesibilitas
- [x] Bedakan gaya animasi loading dari animasi transisi navigasi
- [x] Standarkan gaya dan timing animasi lewat token motion
- [x] Gunakan transisi fade/slide halus untuk elemen muncul-hilang
- [x] Batasi efek parallax agar tidak mengganggu keterbacaan
- [x] Kurangi intensitas animasi hover agar tetap halus, tidak berlebihan
- [x] Percepat page transition agar tidak menghambat perceived speed
- [x] Pertimbangkan motion sebagai fungsi, bukan sekadar gimmick "canggih"
- [x] Sesuaikan kecepatan loop animasi loading agar nyaman dilihat
- [x] Rancang micro-animasi yang memberi feedback jelas atas aksi
- [x] Sesuaikan gaya animasi dengan konvensi native platform (iOS/Android)
- [x] Uji timing animasi langsung di perangkat nyata
- [x] Optimasi file animasi kompleks (Lottie) agar ringan
- [x] Gunakan staggered animation secukupnya untuk memandu perhatian

## 17. Micro-interaction
- [x] Beri feedback visual instan untuk setiap aksi pengguna
- [x] Rancang transisi jelas untuk toggle/switch antar state
- [x] Tambahkan indikator visual jelas untuk drag & drop
- [x] Rancang hover state yang menandakan elemen bisa diklik
- [x] Beri micro-feedback ringkas namun memuaskan untuk aksi like/save
- [x] Sederhanakan interaksi agar aksi umum cukup 1-2 klik
- [x] Rancang gesture mobile (swipe, pull-to-refresh) yang responsif
- [x] Jaga micro-interaction tetap ringkas, tidak mengalihkan fokus tugas utama
- [x] Beri feedback instan untuk aksi copy-to-clipboard/quick action
- [x] Tampilkan validasi kecil langsung saat input salah format
- [x] Ubah cursor sesuai konteks interaksi di desktop
- [x] Jaga sound/haptic feedback tetap proporsional dan bisa dimatikan
- [x] Sediakan opsi undo untuk aksi yang rawan salah
- [x] Gunakan skeleton/shimmer saat memuat data, bukan spinner terus-menerus
- [x] Rancang interaksi non-hover yang setara untuk perangkat sentuh
- [x] Bedakan feedback sukses dan error secara visual dan verbal
- [x] Buat transisi antar state micro-interaction mulus, tidak patah
- [x] Uji detail micro-interaction langsung dengan pengguna nyata

