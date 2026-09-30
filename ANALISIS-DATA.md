# Analisis sumber FYDP

Analisis 30 September 2026. Sumber dibaca tanpa dimodifikasi. Ini catatan implementasi, bukan pengesahan target baru.

## Pemetaan workbook ke aplikasi

| Sheet | Isi | Penyajian |
| --- | --- | --- |
| Ringkasan 9 Flagship | 9 flagship, strategi, lead, tim, halaman PDF | Beranda, daftar/detail flagship |
| KPI & Target 2029 | 10 indikator akhir periode | Rujukan silang; target akhir ditampilkan dari seri tahunan agar tidak menggandakan KPI |
| KPI per Tahun 2025-2029 | 12 seri target/realisasi, sumber dan interpolasi | KPI global dan KPI terkait flagship |
| Milestone 2025-2029 | 5 tonggak tahunan | Halaman milestone, ringkasan beranda |
| Aktivitas per Flagship | 88 aktivitas, 42 kombinasi flagship-komponen | Komponen terbuka/tutup, detail aktivitas |
| Aktivitas per Divisi | 25 rencana divisi dengan durasi dan output | Tampilan divisi terpisah |
| Pendanaan | 9 program dan 4 aset infrastruktur | Detail flagship dan referensi pendanaan |
| SDM & Kapabilitas | 5 kelompok strategi/tim | Referensi SDM |
| Kerangka M&E | 5 komponen, metode, penanggung jawab, frekuensi | Referensi M&E |
| Panduan | Penamaan, asumsi lead, petunjuk status, sumber | Catatan sumber dan aturan interpretasi |

## Pemeriksaan PDF

PDF 68 halaman. Halaman 37 diperiksa melalui ekstraksi teks dan rendering tabel:

- ST1: 3 negara pilot 2027, 5 negara 2029.
- WT3: kenaikan skor kepercayaan employer 20% pada 2029.
- WT2: minimum 40% dana terdiversifikasi berfokus kesetaraan pada 2028.
- ST3: pengurangan konsumsi/biaya data 30% pada pilot 2027.
- WO2: integrasi pengukuran perubahan kapasitas 100% pada 2028.

Nilai target yang dipertahankan sampai 2029 mengikuti workbook; tidak mengubah tenggat milestone aslinya. PDF halaman 38 memuat kerangka M&E; halaman 39–44 menjelaskan flagship. Nama terbaru dari sheet Panduan dipakai ketika berbeda dengan nama generik PDF.

## Batas interpretasi

1. Tidak ada realisasi KPI. Tidak membuat grafik/progres fiktif.
2. Angka tahunan selain anchor eksplisit bukan otomatis target resmi; catatan workbook tetap terlihat.
3. Lead division indikatif, PIC belum ditetapkan. Tidak membuat nama staf sungguhan.
4. Rencana divisi berisi durasi, bukan tanggal mulai/selesai. Tidak mengarang tenggat kalender.
5. 80 aktivitas tidak mempunyai status; 8 baris terakhir memiliki status Belum mulai. Ini bukan 80 aktivitas selesai atau terlambat.
6. Referensi One Page Seamolec FYDP.docx disebut workbook tetapi tidak dilampirkan. Tidak mengklaim telah memeriksa dokumen itu.
7. Target tahunan diperlakukan sesuai catatan sumber, beberapa bersifat kumulatif. Nilai tidak dijumlahkan lintas tahun.
8. KPI bersama disimpan satu kali dan ditautkan ke beberapa flagship.
9. Penambahan periode baru tidak menyalin target/aktivitas periode sebelumnya secara otomatis.
10. Data source asli tidak menjadi berkas unduhan publik. Pustaka dimulai kosong untuk unggahan contoh lokal.
