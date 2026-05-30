export default function Features() {
  const cards = [
    { title: "Warna Dinamis", desc: "Menggunakan utility class 'dark:' dari Tailwind CSS." },
    { title: "Simpan Pilihan", desc: "Pilihan tema Anda disimpan aman di Local Storage." },
    { title: "Transisi Halus", desc: "Efek animasi perpindahan warna yang memanjakan mata." }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
