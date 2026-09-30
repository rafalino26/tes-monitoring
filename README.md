# SEAMOLEC — Monitoring FYDP

Prototipe interaktif berbasis HTML, CSS, dan JavaScript untuk GitHub Pages. Mempertahankan visual **Ruang lapang**: krem, plum, rust, sage, Lora, Source Sans 3, kartu sederhana, dan ruang baca yang lega. Tidak memerlukan build atau dependensi frontend.

## Mulai

Buka `index.html`, atau jalankan server lokal:

```sh
python -m http.server 8765
```

Buka `http://localhost:8765`. Gunakan HTTP lokal agar penyimpanan browser konsisten. GitHub Pages menggunakan HTTPS.

## Data dan struktur

Sumber adalah `Final_SEAMOLEC FYDP.pdf` dan workbook `Tabel_Kerja_SEAMOLEC_FYDP_2025-2029 (2).xlsx` yang diberikan pemilik proyek. **Berkas sumber asli tidak disalin ke repository.** `data.js` berisi data rencana terstruktur yang diperlukan aplikasi.

- FYDP 2025–2029 → **9 flagship → 42 komponen → 88 aktivitas**.
- **12 KPI tahunan**, **5 milestone tahunan**, **25 rencana divisi**.
- Referensi pendanaan, SDM/kapabilitas, dan kerangka M&E tersedia melalui halaman Rencana divisi.
- Rencana divisi tidak dijumlahkan dengan aktivitas flagship.
- Tidak ada realisasi KPI pada sumber. Kosong ditampilkan sebagai `—`, bukan `0%`.
- Sebagian target tahunan adalah interpolasi/pentahapan workbook. Dasar angka asli dapat dibuka pada setiap KPI.
- Persentase sumber adalah desimal: `0.2` → `20%`. Form menerima angka persen: ketik `20` untuk `20%`.
- Capaian KPI = realisasi / target. Target nol atau realisasi kosong tidak dihitung.
- Capaian aktivitas = aktivitas selesai / semua aktivitas pada filter aktif, hanya jika semua status telah diketahui. Tidak merata-ratakan KPI yang berbeda satuan.
- Lead division bersifat indikatif; PIC dan 80 status aktivitas belum diisi. Delapan aktivitas tambahan mengikuti workbook dan tidak dianggap otomatis disahkan dalam PDF.
- Workbook juga merujuk One Page Seamolec FYDP.docx, yang tidak disertakan pengguna. Catatan provenance tersebut tetap dipertahankan.

Lihat `sources.html` dan [ANALISIS-DATA.md](ANALISIS-DATA.md).

## Halaman dan fitur

- `index.html`: 3 kartu per halaman, ringkasan data, milestone, pintasan pustaka.
- `programs.html`: pencarian flagship/komponen/aktivitas, periode, tahun, divisi, status.
- `program.html?id=AILOS`: hierarki komponen/aktivitas, KPI terkait, dokumen, dan rencana pendanaan.
- `kpi.html`: target/realisasi/capaian, rincian tahunan dan sumber interpolasi.
- `milestones.html`: milestone tahunan tanpa menganggap rencana sudah terlaksana.
- `divisions.html`: rencana divisi, M&E, SDM, pendanaan. Tahun tidak menyaring referensi yang tidak mempunyai tahun mulai.
- `knowledge.html`: cari judul/nama berkas/tag; filter lingkup, komponen, tahun, jenis; urut unggahan terbaru/terlama, tanggal dokumen terbaru/terlama, judul A–Z/Z–A.
- `upload.html`: unggah berkas contoh PDF, DOCX, XLSX, PNG, JPG, TXT (maks. 10 MB), ke pustaka umum/flagship/komponen.
- `login.html`: satu desain login, tanpa register, dengan pemilihan akun demo yang jelas terpisah.
- `admin.html`: tambah/edit/hapus data inti, tambah periode kosong, tambah/edit/nonaktifkan akun demo dan penugasan staf; ekspor metadata JSON.
- URL lama dialihkan ke halaman yang sesuai; konten fiktif sebelumnya tidak lagi digunakan.

## Peran demo

| Peran | Simulasi akses |
| --- | --- |
| Admin | Seluruh struktur, target/realisasi, akun/penugasan, periode, unggah/hapus dokumen |
| Direktur | Membaca dan menelusuri seluruh data |
| Staf | Membaca data; memperbarui PIC/status/catatan aktivitas dan realisasi KPI pada flagship yang ditugaskan; unggah dokumen umum/penugasan; hapus unggahan sendiri |

Akun awal: **Admin Demo**, **Direktur Demo**, **Staf Demo** (AILOS). Masuk melalui tombol **Buka mode demo**, tanpa password. Admin dapat membuat metadata akun demo baru yang tampil di pilihan akun. Username duplikat ditolak, dan admin aktif tidak dapat menonaktifkan/menurunkan perannya sendiri. Penghapusan flagship/komponen dengan data turunan diblokir.

**Ini bukan autentikasi atau otorisasi sungguhan.** Form username/password sengaja tidak aktif. Tidak ada password, token, atau kredensial dalam repository/browser storage. Semua orang dapat memilih peran demo atau membaca kode dan data frontend. Jangan gunakan untuk data rahasia.

## Penyimpanan prototipe

- Rencana dan perubahan demo: `localStorage`, key `seamolec-fydp-demo-v1`.
- Peran demo aktif: `sessionStorage`, key `seamolec-actor`.
- Isi berkas: IndexedDB `seamolec-demo-files`, object store `files`.
- Perubahan tidak dikirim ke GitHub/server dan tidak dibagikan antarperangkat.
- Ekspor JSON tidak mencakup isi berkas unggahan. Tidak ada sinkronisasi, backup server, atau impor JSON.
- Menghapus data situs di pengaturan browser mengembalikan data awal dan menghapus berkas demo. Ekspor dahulu jika diperlukan.

## Menuju produksi

Pertahankan satu halaman login. Backend menentukan peran dari sesi yang tervalidasi; jangan percaya role dari browser. Perlukan database untuk periode/flagship/komponen/aktivitas/KPI/realisasi/akun/penugasan/dokumen, penyimpanan berkas privat, password ter-hash, sesi aman, pemeriksaan izin setiap request, audit perubahan, serta validasi unggahan. Direktur tidak otomatis menjadi pengelola akun; admin menjadi peran terpisah. Alur persetujuan realisasi dan penetapan resmi lead/PIC perlu disepakati sebelum produksi.

## Verifikasi

```sh
node --check app.js
node --test tests/app.test.cjs
```

10 pengujian mencakup konsistensi sumber, relasi data, pencarian lintas hierarki dan tahun, null/nol/persen, enam sort dokumen, simulasi peran, validasi akun dan dependensi, periode, escaping, serta render halaman. Uji browser mencakup pencarian/filter, login admin, pembuatan akun dan persistensi, input realisasi persen, upload lokal dan filter dokumen, serta lebar ponsel 390 px.

`styles.css` mempertahankan style lama, `app.css` menambah layout baru, `app.js` berisi interaksi, `data.js` berisi seed. Google Fonts memerlukan internet; fallback Georgia/Arial tersedia.
