export default function Hero() {
  return (
    <section className="py-20 px-4 text-center">
      
      
      <div className="max-w-3xl mx-auto">
        
        
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          
          Satu Kode, <span className="text-blue-600">Dua Tampilan.</span>
        
        </h2>
        
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10">
          Ini adalah contoh Hero section yang sangat sederhana. Perhatikan bagaimana warna teks 
          berubah secara otomatis saat Anda menekan tombol di pojok kanan atas.
        </p>


        <div className="flex justify-center gap-4">
          
          
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
            Mulai Sekarang
          </button>

          <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Pelajari Lebih Lanjut
          </button>

        </div>
      
      
      
      </div>
    </section>
  );
}
