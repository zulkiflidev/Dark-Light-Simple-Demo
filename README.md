# Dark Mode Starter Template (Demo)

Template sederhana ini dibuat khusus untuk mendemonstrasikan cara implementasi fitur **Dark Mode** menggunakan React, Tailwind CSS v4, dan Local Storage.

## Fitur Utama
1.  **Toggle Sederhana**: Menggunakan state React untuk beralih antara tema terang dan gelap.
2.  **Persistensi**: Pilihan tema disimpan di `localStorage`, sehingga saat halaman di-refresh, tema tidak kembali ke awal.
3.  **Tailwind v4**: Memanfaatkan `@tailwindcss/vite` untuk integrasi yang sangat cepat.
4.  **Kode Bersih**: Struktur komponen yang minimalis dan penuh komentar untuk memudahkan pembelajaran.

## Cara Menjalankan
1. Masuk ke folder demo:
   ```bash
   cd demo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan server development:
   ```bash
   npm run dev
   ```

## Lokasi Kode Penting
- `src/App.tsx`: Tempat logika utama Dark Mode berada (State & useEffect).
- `src/components/Navbar.tsx`: Tombol toggle yang memicu perubahan tema.
- `src/index.css`: Konfigurasi dasar Tailwind v4.
