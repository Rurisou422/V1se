import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-gradient-to-r from-gray-900/50 to-black/50 hover:from-gray-800/50 hover:to-black/50 transition-colors"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-gray-900/30 text-gray-300">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-grow py-20 px-4">
        <div className="max-w-4xl mx-auto pt-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-20"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <FAQItem
              question="Want to get a DMA but not quiet sure where to start?"
              answer="Our DMA solutions are designed to be user-friendly and accessible. Start by checking out our available products and choose the one that best fits your needs. We provide detailed documentation and support to help you get started."
            />
            <FAQItem
              question="What is Firmware for DMA?"
              answer="Firmware is the software programmed into the DMA device that controls its operation. It's essential for proper functionality and performance. We regularly update our firmware to ensure optimal performance and compatibility."
            />
            <FAQItem
              question="What is the Difference in Private and Shared firmware?"
              answer="Private firmware is exclusive to individual users, offering unique features and enhanced security. Shared firmware is used by multiple users and typically offers standard features. Private firmware often provides better protection against detection and more customization options."
            />
            <FAQItem
              question="Does your DMA board work with all game solutions?"
              answer="Our DMA boards are designed to be compatible with a wide range of game solutions. However, specific compatibility depends on the game and its anti-cheat systems. Check our product descriptions for detailed compatibility information."
            />
            <FAQItem
              question="What is the read/write speed on your DMA card?"
              answer="Our DMA cards offer high-speed read/write capabilities, optimized for gaming applications. The exact speeds vary by model and implementation, but all our products are designed to provide minimal latency and optimal performance."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 