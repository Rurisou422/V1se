import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ 
  title, 
  image
}: { 
  title: string;
  image: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800/50"
  >
    <img src={image} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-400 text-base">PRICETAG</p>
      </div>
      <div className="flex justify-center">
        <button className="px-8 py-2.5 bg-black/60 hover:bg-black/80 rounded-md text-white transition-colors animate-button-glow-blue backdrop-blur-sm border border-gray-800/50">
          Purchase
        </button>
      </div>
    </div>
  </motion.div>
);

const Products = () => {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold"
          >
            Available Products
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="Call of Duty DMA"
            image="/images/pictest.png"
          />
          <ProductCard
            title="GTA & FiveM DMA"
            image="/images/pictest.png"
          />
          <ProductCard
            title="Fortnite DMA"
            image="/images/pictest.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Products; 