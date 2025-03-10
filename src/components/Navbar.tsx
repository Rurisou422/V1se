import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-white hover:text-red-500 transition-colors">
              DIVINER
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Products</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Guides</a>
            <motion.a
              href="#"
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Dashboard
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 