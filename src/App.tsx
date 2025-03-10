import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

const HomePage = () => {
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

  return (
    <>
      <main className="relative">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hero Content */}
            <div className="text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-block px-6 py-2 rounded-full bg-blue-500/10 text-blue-400 text-base font-medium border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  ONE STEP AHEAD
                </div>
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-[.05em] bg-gradient-to-tl from-blue-400 via-blue-100 to-white text-transparent bg-clip-text animate-title-shake">
                  DIVINER.GG
                </h1>
                
                <div className="space-y-2">
                  <p className="text-xl sm:text-2xl text-white">
                    Top-Tier DMA Cheese and Software
                  </p>
                  <p className="text-lg text-white">
                    Aimtraining, ESP32, Walls, and More
                  </p>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={scrollToProducts}
                  className="px-12 py-4 text-lg bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors animate-button-glow-blue cursor-pointer"
                >
                  Get Started
                </motion.button>
                
                <div className="relative group">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-12 py-4 text-lg bg-transparent hover:bg-gray-800/20 rounded-full font-medium flex items-center justify-center gap-3 transition-colors border border-gray-700 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
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

            {/* Hero Image Space */}
            <div className="hidden lg:block">
              {/* Hero image will go here */}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
          <Products />
        </div>

        {/* Call to Action Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CallToAction />
        </div>
      </main>
    </>
  );
};

function App() {
  // Function to get random position within safe area (avoiding edges)
  const getRandomPosition = () => {
    // Keep stars 15% away from edges
    const min = 15;
    const max = 85;
    return min + (Math.random() * (max - min));
  };

  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
        {/* Border lines */}
        <div className="fixed left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        <div className="fixed right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        
        {/* Stars background */}
        <div className="fixed inset-0 overflow-hidden">
          {/* Generate 75 individual stars with random positions, avoiding edges */}
          {[...Array(75)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full animate-star"
              style={{
                left: `${getRandomPosition()}%`,
                top: `${Math.random() * 250}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 15 + 20}s`
              }}
            />
          ))}
        </div>
        
        {/* Subtle radial gradient overlay */}
        <div className="fixed inset-0 bg-gradient-radial from-blue-600/10 via-blue-900/5 to-transparent opacity-40 pointer-events-none" />
        
        {/* Additional soft glow effect */}
        <div className="fixed inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-30 pointer-events-none blur-xl" 
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 25%, transparent 100%)',
          }}
        />
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App; 