import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
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

  // Fungsi untuk mengganti tema yang akan dikirim ke Navbar
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    // 'min-h-screen' memastikan background menutupi seluruh layar
    // 'bg-white' untuk mode terang, 'dark:bg-gray-900' untuk mode gelap
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <Features />
      </main>

      <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500">
        © 2024 Dark Mode Starter Template - Sederhana & Mudah Dipahami
      </footer>
    </div>
  );
}

export default App;
