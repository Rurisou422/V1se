import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ 
  title, 
  image, 
  price, 
  features = ['🎮', '💻', '⚡'] 
}: { 
  title: string;
  image: string;
  price: number;
  features?: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800/50"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-400">Starting at ${price} with {features.join(' ')}</p>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 px-4 py-2 text-gray-300 hover:text-white transition-colors">
          Learn more
        </button>
        <button className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white transition-colors animate-button-glow">
          Purchase
        </button>
      </div>
    </div>
  </motion.div>
);

const Products = () => {
  return (
    <section className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Available Products
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductCard
          title="Call of Duty DMA"
          image="/cod-banner.jpg"
          price={39}
        />
        <ProductCard
          title="GTA & FiveM DMA"
          image="/gta-banner.jpg"
          price={25}
        />
        <ProductCard
          title="Teensy Firmware"
          image="/teensy-banner.jpg"
          price={50}
          features={['💻', '⚡', '🔧']}
        />
        <ProductCard
          title="Fortnite DMA"
          image="/fortnite-banner.jpg"
          price={29}
          features={['🎮', '💻']}
        />
      </div>
    </section>
  );
};

export default Products; 