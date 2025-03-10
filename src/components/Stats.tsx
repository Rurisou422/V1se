import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center p-6 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 shadow-[0_0_30px_rgba(220,38,38,0.1)]"
      >
        <div className="text-5xl font-bold text-red-600 mb-2" style={{ textShadow: '0 0 20px rgba(220,38,38,0.5)' }}>
          <CountUp
            start={0}
            end={4.32}
            duration={2.5}
            decimals={2}
            decimal="."
          />
        </div>
        <div className="text-gray-400">865 Verified Reviews</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center p-6 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 shadow-[0_0_30px_rgba(220,38,38,0.1)]"
      >
        <div className="text-5xl font-bold text-red-600 mb-2" style={{ textShadow: '0 0 20px rgba(220,38,38,0.5)' }}>
          <CountUp
            start={0}
            end={213}
            duration={2}
          />
        </div>
        <div className="text-gray-400">Players Online Now</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center p-6 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 shadow-[0_0_30px_rgba(220,38,38,0.1)]"
      >
        <div className="text-5xl font-bold text-red-600 mb-2" style={{ textShadow: '0 0 20px rgba(220,38,38,0.5)' }}>
          <CountUp
            start={0}
            end={1939}
            duration={2.5}
            suffix="+"
          />
        </div>
        <div className="text-gray-400">Active Users</div>
      </motion.div>
    </div>
  );
};

export default Stats; 