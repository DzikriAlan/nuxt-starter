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

