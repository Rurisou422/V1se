import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-32 text-center relative overflow-visible">
      {/* Red glow background */}
      <div className="absolute -inset-32" 
           style={{ 
             background: 'radial-gradient(circle at center, rgba(220,38,38,0.3) 0%, rgba(220,38,38,0.05) 40%, transparent 70%)',
             filter: 'blur(60px)',
             pointerEvents: 'none'
           }} 
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 relative"
      >
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white"
            style={{ textShadow: '0 0 20px rgba(220,38,38,0.5)' }}>
          Why wait?
        </h2>
        <p className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
           style={{ textShadow: '0 0 20px rgba(220,38,38,0.5)' }}>
          Unlock your subscription today!
        </p>
        <div className="mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-red-600/20 hover:bg-red-600/30 rounded-full font-medium transition-colors border border-red-500/20 text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.2)]"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction; 