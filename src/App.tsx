import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Products from './components/Products';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to get random position within safe area (avoiding edges)
  const getRandomPosition = () => {
    // Keep stars 15% away from edges
    const min = 15;
    const max = 85;
    return min + (Math.random() * (max - min));
  };

  // Function to get initial random vertical position including above and below viewport
  const getInitialVerticalPosition = () => {
    // Generate positions from -100% to 200% to ensure continuous flow
    return Math.random() * 300 - 100;
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Border lines */}
      <div className="fixed left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent" />
      <div className="fixed right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent" />
      
      {/* Stars background */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Generate 50 individual stars with random positions, avoiding edges */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-star"
            style={{
              left: `${getRandomPosition()}%`,
              top: `${Math.random() * 200}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 10 + 25}s`
            }}
          />
        ))}
      </div>
      
      {/* Radial gradient overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-red-900/20 via-transparent to-transparent opacity-70 pointer-events-none" />
      
      <Navbar />
      
      <main className="relative">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-500 text-sm font-medium border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                ONE STEP AHEAD
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold animate-glow tracking-tight">
                DIVINER.GG
              </h1>
              
              <div className="space-y-2">
                <p className="text-xl sm:text-2xl text-gray-300">
                  Top-Tier DMA Cheats and Software
                </p>
                <p className="text-gray-500">
                  Aimbot, ESP, Wallhacks, and More
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={scrollToProducts}
                className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-colors animate-button-glow cursor-pointer"
              >
                Get Started
              </motion.button>
              
              <div className="relative group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-transparent hover:bg-gray-800/20 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors border border-gray-700 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  Discord
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                  </svg>
                </motion.button>
                {/* Character peek-out element */}
                <div
                  className="absolute -right-6 bottom-0 w-12 h-16 pointer-events-none transition-all duration-300 transform opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 overflow-hidden"
                >
                  <img
                    src="/images/simson.png"
                    alt="Peeking Character"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/menu_image.png" 
              alt="Dashboard Preview" 
              className="rounded-xl shadow-2xl border border-gray-800/50 w-full shadow-[0_0_50px_rgba(220,38,38,0.1)]" 
            />
          </motion.div>

          <Stats />
        </div>

        {/* Products Section */}
        <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
          <Products />
        </div>

        {/* Call to Action Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CallToAction />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App; 