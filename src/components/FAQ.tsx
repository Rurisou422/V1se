import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  toggleOpen: (index: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index, isOpen, toggleOpen }) => {
  return (
    <motion.div 
      className="mb-4 relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Decorative line */}
      <div className="absolute -left-4 h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 pointer-events-none"></div>
      
      {/* Decorative accent */}
      <div className="absolute -left-6 top-5 w-3 h-3 pointer-events-none">
        <div className="w-full h-full rounded-full bg-black border border-blue-400 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>
      </div>
      
      <div className={`border rounded-lg overflow-hidden relative z-20 ${isOpen ? 'border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.2)]' : 'border-gray-800/50'} transition-all duration-300`}>
        <button
          onClick={() => toggleOpen(index)}
          className="w-full p-5 text-left flex justify-between items-start bg-gradient-to-r from-gray-900/70 to-black/50 hover:from-gray-800/70 hover:to-black/60 transition-colors cursor-pointer z-30"
        >
          <div className="flex items-start">
            <span className="text-blue-400 font-mono mr-3 opacity-60 pt-1 select-none">[{(index + 1).toString().padStart(2, '0')}]</span>
            <span className="text-lg font-medium text-white">{question}</span>
          </div>
          <div className={`ml-3 flex-shrink-0 w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
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
              <div className="p-5 bg-gradient-to-r from-gray-900/40 to-black/40 text-gray-300 border-t border-gray-800/30 relative">
                <div className="ml-8 relative z-10">{answer}</div>
                
                {/* Decorative grid lines */}
                <div className="absolute inset-0 grid grid-cols-6 h-full w-full pointer-events-none opacity-5">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="border-r border-blue-400/30 h-full"></div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if it's already open
    } else {
      setOpenIndex(index); // Open this item and close others
    }
  };

  const faqItems = [
    {
      question: "Want to get a DMA but not quiet sure where to start?",
      answer: "Our DMA solutions are designed to be user-friendly and accessible. Start by checking out our available products and choose the one that best fits your needs. We provide detailed documentation and support to help you get started."
    },
    {
      question: "What is Firmware for DMA?",
      answer: "Firmware is the software programmed into the DMA device that controls its operation. It's essential for proper functionality and performance. We regularly update our firmware to ensure optimal performance and compatibility."
    },
    {
      question: "What is the Difference in Private and Shared firmware?",
      answer: "Private firmware is exclusive to individual users, offering unique features and enhanced security. Shared firmware is used by multiple users and typically offers standard features. Private firmware often provides better protection against detection and more customization options."
    },
    {
      question: "Does your DMA board work with all game solutions?",
      answer: "Our DMA boards are designed to be compatible with a wide range of game solutions. However, specific compatibility depends on the game and its anti-cheat systems. Check our product descriptions for detailed compatibility information."
    },
    {
      question: "What is the read/write speed on your DMA card?",
      answer: "Our DMA cards offer high-speed read/write capabilities, optimized for gaming applications. The exact speeds vary by model and implementation, but all our products are designed to provide minimal latency and optimal performance."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-grow py-20 px-8 relative">
        {/* Background grid decoration */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-5 z-0">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-blue-400/50 h-full"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 pointer-events-none opacity-5 z-0">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-b border-blue-400/50 w-full"></div>
          ))}
        </div>
        
        {/* Glow effect */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none z-0"></div>
        
        <div className="max-w-4xl mx-auto pt-32 relative z-10">
          <div className="absolute -left-3 top-32 bottom-20 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 pointer-events-none"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Find answers to common questions about our direct memory access solutions and services.
            </p>
            
            {/* Decorative header underline */}
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-500/0 mt-4"></div>
            
            {/* Decorative corner accent */}
            <div className="absolute -top-3 -left-6 w-12 h-12 pointer-events-none opacity-70">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500/50"></div>
              <div className="absolute top-0 left-0 h-full w-0.5 bg-blue-500/50"></div>
            </div>
          </motion.div>
          
          <div className="space-y-0 max-w-3xl mx-auto pl-8 relative z-20">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                index={index}
                isOpen={openIndex === index}
                toggleOpen={toggleOpen}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 