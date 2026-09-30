# SEAMOLEC — Ruang Lapang

Buka `index.html` di browser. Tidak perlu instalasi atau build.

Implementasi statis HTML + CSS dari konsep Ruang Lapang. Semua data adalah contoh.

## Halaman
- Beranda dua halaman, daftar program dengan halaman filter status.
- Detail program, subprogram bertingkat, milestone, aktivitas.
- Pustaka umum dan program, pratinjau dokumen, formulir unggah.

## Yang bisa dipakai
Navigasi halaman, pagination, filter status lewat tautan halaman di Semua Program, buka/tutup subprogram melalui elemen HTML details, dan pemilihan berkas lokal.

## Batasan
Tidak ada JavaScript, backend, login, penyimpanan, pencarian dinamis, atau transfer berkas. Tombol simpan unggahan sengaja nonaktif. Pratinjau dokumen adalah contoh HTML, bukan dokumen asli. Halaman ini tidak mengirimkan data pengguna.

## Mengubah tampilan
Edit styles.css. Warna utama tersedia di :root. Font Lora dan Source Sans 3 dimuat dari Google Fonts saat internet tersedia; Georgia dan Arial menjadi fallback offline. Seluruh navigasi memakai path relatif sehingga folder boleh dipindah.

## Responsif
Layout desktop, tablet, dan ponsel. Kartu menjadi satu kolom di layar kecil; tabel lebar bisa digulir horizontal. Fokus keyboard dan label form disediakan.
