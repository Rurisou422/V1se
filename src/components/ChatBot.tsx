import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Games options
const GAME_OPTIONS = [
  { id: 'fortnite', name: 'Fortnite', icon: <img src="/images/Fortnite_Icon.png" alt="Fortnite" className="w-5 h-5 object-contain" /> },
  { id: 'valorant', name: 'Valorant', icon: '🎯' },
  { id: 'both', name: 'Both', icon: '🔥' }
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState('');
  const typingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSelectedGame(null);
      setMessage('');
      simulateTyping("Which game would you like to play today?");
    }
  };
  
  const simulateTyping = (text: string, callback?: () => void) => {
    setIsTyping(true);
    setMessage('');
    
    let i = 0;
    // Clear any existing interval
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
    }
    
    typingTimerRef.current = setInterval(() => {
      setMessage((prev) => prev + text.charAt(i));
      i++;
      if (i === text.length) {
        if (typingTimerRef.current) {
          clearInterval(typingTimerRef.current);
          typingTimerRef.current = null;
        }
        setIsTyping(false);
        if (callback) {
          setTimeout(callback, 500); // Small delay before executing callback
        }
      }
    }, 40);
  };
  
  const scrollToFirmware = () => {
    // Find the firmware section by id or class
    const firmwareSection = document.getElementById('products');
    if (firmwareSection) {
      // Set the activeCategory to 'firmware' if possible
      const firmwareCategoryButton = document.querySelector('[data-category="Firmware"]');
      if (firmwareCategoryButton) {
        (firmwareCategoryButton as HTMLElement).click();
      }
      
      firmwareSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        // Close the chat after navigation
        setIsOpen(false);
      }, 1500);
    }
  };
  
  const handleGameSelect = (game: string) => {
    setSelectedGame(game);
    
    // Different responses based on selection
    if (game === 'fortnite') {
      simulateTyping("Great! Let's have a look at our firmware working great for Fortnite...", scrollToFirmware);
    } else if (game === 'valorant') {
      simulateTyping("Excellent! Preparing Valorant lobby...");
    } else {
      simulateTyping("Awesome! Setting up both games for you...");
    }
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Robot Chat Icon */}
      <motion.button
        onClick={toggleChat}
        className="bg-gradient-to-r from-cyan-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(8,145,178,0.5)] border border-cyan-400/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-8 h-8 text-white"
        >
          <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m5 4v1a5 5 0 0 1-5 5a5 5 0 0 1-5-5V6a1 1 0 0 0-1 1v4c0 2.92 2.56 5.33 5.69 5.84c.61.36 1.29.56 2 .56c.71 0 1.39-.2 2-.56c3.13-.51 5.69-2.92 5.69-5.84V7a1 1 0 0 0-1-1M8 18.83V20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1.17c-.64.23-1.31.36-2 .36s-1.36-.13-2-.36M6 8a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m13 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1Z" />
        </svg>
      </motion.button>
      
      {/* Chat Terminal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute bottom-20 right-0 w-80 bg-black/90 border border-cyan-500/30 rounded-lg shadow-[0_0_25px_rgba(8,145,178,0.3)] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-900/60 to-cyan-800/40 p-3 border-b border-cyan-500/20 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse"></div>
                <h3 className="text-cyan-200 font-mono text-sm">DIVINER ASSISTANT</h3>
              </div>
              <button onClick={toggleChat} className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm text-green-400 bg-[url('/grid-pattern.svg')] bg-center min-h-[200px]">
              <div className="mb-4">
                <span className="text-gray-500">~/DIVINER$</span> <span className="typing-cursor">{message}</span>
                {isTyping && <span className="animate-pulse">_</span>}
              </div>
              
              {!isTyping && !selectedGame && (
                <div className="grid grid-cols-1 gap-2 mt-4">
                  {GAME_OPTIONS.map((game) => (
                    <motion.button
                      key={game.id}
                      onClick={() => handleGameSelect(game.id)}
                      className="bg-cyan-900/30 border border-cyan-500/30 rounded px-4 py-2 text-left hover:bg-cyan-800/40 transition-colors flex items-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-2 text-lg flex items-center justify-center">{game.icon}</span>
                      <span>{game.name}</span>
                    </motion.button>
                  ))}
                </div>
              )}
              
              {!isTyping && selectedGame && (
                <div className="mt-4">
                  <motion.button
                    onClick={() => {
                      setSelectedGame(null);
                      simulateTyping("Which game would you like to play today?");
                    }}
                    className="bg-cyan-900/30 border border-cyan-500/30 rounded px-4 py-2 text-left hover:bg-cyan-800/40 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    ← Back to options
                  </motion.button>
                </div>
              )}
            </div>
            
            {/* Terminal Footer */}
            <div className="bg-black p-2 border-t border-cyan-800/30 flex justify-center">
              <div className="text-xs text-gray-500 font-mono">DIVINER GAMING NETWORK v1.0.3</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot; 