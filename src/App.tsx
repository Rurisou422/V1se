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
      <main className="relative z-30">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hero Content */}
            <div className="text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-3"
              >
                {/* Logo with provider text positioned closer to heading */}
                <div className="mb-14">
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-black/40 rounded-full border border-gray-800/60 backdrop-blur-sm w-fit absolute -mt-10">
                    <img src="/images/logo.png" alt="Diviner Logo" className="w-6 h-6" />
                    <div className="font-semibold text-xs tracking-wide text-white">
                      DIVINER DMA - #1 PROVIDER
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[.05em] bg-gradient-to-tl from-blue-400 via-blue-100 to-white text-transparent bg-clip-text animate-title-shake mb-0 mt-14">
                  DIVINER.GG
                </h1>
                <div className="-mt-4 mb-8">
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
                  className="px-12 py-4 text-lg bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors animate-button-glow-blue cursor-pointer flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                    <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Shop Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
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

        {/* Why Choose Us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've got you covered with unbeatable firmware, effortless hardware delivery, and a 
              community that trusts us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Undetected Firmware */}
            <motion.div 
              whileHover={{ 
                y: -8,
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.15)",
                borderColor: "rgba(255, 215, 0, 0.5)"
              }}
              transition={{ duration: 0 }}
              className="bg-[#0C0F17] border border-gray-800 rounded-xl p-6 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0 }}
                  className="bg-yellow-500/10 p-2 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM20.25 5.507v11.561L5.853 2.671c.15-.043.306-.075.467-.094a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93zM3.75 21V9.412l9.963 9.963c-.150.043-.306.075-.467.094a49.255 49.255 0 01-11.36 0C.383 19.163 0 18.383 0 17.502V5.507c0-1.47 1.073-2.756 2.57-2.93a49.246 49.246 0 016.5-.572V3.5c0 1.469 1.073 2.756 2.57 2.93a49.279 49.279 0 014.86.525V7.5a3 3 0 00-3-3h-3a.75.75 0 00-.75.75v3a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-3a.75.75 0 00-.75-.75h-3a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V15a.75.75 0 00-1.5 0v5.25a.75.75 0 01-.75.75h-10.5a.75.75 0 01-.75-.75v-10.5a.75.75 0 01.75-.75h1.5v1.5a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25v-1.5h1.5a.75.75 0 01.75.75v3a.75.75 0 001.5 0V9z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-white">Undetected Firmware</h3>
              </div>
              <p className="text-gray-300">
                Proven record with top-tier firmware that stays off the radar. Get a free replacement 
                if you face a ban in the first 2 months. Quality you can trust, security you deserve.
              </p>
            </motion.div>
            
            {/* Card 2 - Free Shipping */}
            <motion.div 
              whileHover={{ 
                y: -8, 
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.15)",
                borderColor: "rgba(59, 130, 246, 0.5)"
              }}
              transition={{ duration: 0 }}
              className="bg-[#0C0F17] border border-gray-800 rounded-xl p-6 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0 }}
                  className="bg-blue-500/10 p-2 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500">
                    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h8.25c1.035 0 1.875-.84 1.875-1.875V15z" />
                    <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                    <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-white">Free Shipping on Hardware</h3>
              </div>
              <p className="text-gray-300">
                Upgrade your setup worry-free. Every hardware purchase comes with free worldwide 
                shipping. Fast, secure, and at no extra cost.
              </p>
            </motion.div>
            
            {/* Card 3 - Customer Satisfaction */}
            <motion.div 
              whileHover={{ 
                y: -8, 
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.15)",
                borderColor: "rgba(34, 197, 94, 0.5)"
              }}
              transition={{ duration: 0 }}
              className="bg-[#0C0F17] border border-gray-800 rounded-xl p-6 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0 }}
                  className="bg-green-500/10 p-2 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-white">99% Customer Satisfaction</h3>
              </div>
              <p className="text-gray-300">
                Our community speaks volumes. With a 99% satisfaction rate, you can count on 
                top-notch support, unbeatable quality, and a smooth experience.
              </p>
            </motion.div>
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
        {/* Header background image */}
        <div 
          className="fixed top-0 left-0 right-0 w-full h-[480px] bg-cover bg-center z-0 after:content-[''] after:absolute after:inset-0 after:bg-black/60" 
          style={{ 
            backgroundImage: 'url("/images/header.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        >
          {/* Gradient fade at bottom of header image */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        {/* Border lines */}
        <div className="fixed left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent z-10" />
        <div className="fixed right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent z-10" />
        
        {/* Stars background */}
        <div className="fixed inset-0 overflow-hidden z-10">
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
        <div className="fixed inset-0 bg-gradient-radial from-blue-600/10 via-blue-900/5 to-transparent opacity-40 pointer-events-none z-20" />
        
        {/* Additional soft glow effect */}
        <div className="fixed inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-30 pointer-events-none blur-xl z-20" 
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