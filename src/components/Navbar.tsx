import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  // 1. Inisialisasi state isDarkMode.
  // Kita cek localStorage untuk melihat apakah user sudah punya pilihan tema sebelumnya.
  // Jika tidak ada (null), kita default ke 'dark' sesuai keinginan di project asli.

  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || savedTheme === null;
  });

  // 2. useEffect untuk memantau perubahan isDarkMode.
  // Setiap kali isDarkMode berubah, kita update class di tag <html> dan simpan ke localStorage.
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Fungsi untuk mengganti tema
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">

        <h1 className="text-xl font-bold tracking-tight">DemoTema</h1>
        
        {/* Tombol Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600 transition-all"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-blue-600" />
          )}


        </button>
      </div>
    </nav>
  );
}
