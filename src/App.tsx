import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    // 'min-h-screen' memastikan background menutupi seluruh layar
    // 'bg-white' untuk mode terang, 'dark:bg-gray-900' untuk mode gelap
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
      </main>

      <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500">
        Starter Template - 
      </footer>
    </div>
  );
}

export default App;
