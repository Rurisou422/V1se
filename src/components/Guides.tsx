import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the guide data structure
type Guide = {
  id: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  image?: string;
};

// Guide Item Component
const GuideItem: React.FC<{ guide: Guide }> = ({ guide }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800/40 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={`px-5 py-4 cursor-pointer ${isExpanded ? 'border-b border-gray-800/30' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-medium mb-0.5 text-white">{guide.title}</h2>
            <p className="text-gray-400 text-sm font-medium">{guide.subtitle}</p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <motion.div 
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black/70 rounded-full p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 py-4">
              <div className="prose prose-invert prose-sm max-w-none">
                {guide.content}
                
                {guide.image && (
                  <div className="mt-4 flex justify-center">
                    <img 
                      src={guide.image} 
                      alt={guide.title} 
                      className="rounded-md border border-gray-800/50 shadow-md max-w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Guides: React.FC = () => {
  // Guide data
  const guides: Guide[] = [
    {
      id: 'vgk-error',
      title: 'PC stuck on boot with VGK error',
      subtitle: 'Firmware driver most likely interrupted with real WiFi card or loaded wrong drivers',
      content: (
        <div className="space-y-3">
          <div className="bg-black/90 backdrop-blur-sm rounded-md p-3 border-l-2 border-gray-700/60">
            <ol className="list-decimal list-inside space-y-1.5 text-gray-300 text-sm">
              <li>Unplug DMA device, boot Windows</li>
              <li>Disable real WiFi from device manager</li>
              <li>Show hidden devices</li>
              <li>Delete hidden network devices with drivers</li>
              <li>If you don't have WiFi in main PC still follow from "remove hidden devices" step</li>
              <li>Turn off PC</li>
              <li>Plug in DMA</li>
              <li>Boot PC (90% of freeze issues are fixed this way)</li>
            </ol>
            <p className="mt-3 text-gray-400 text-sm font-medium">For remaining freeze issues, ask DIVINER to rebuild firmware 😈</p>
          </div>
        </div>
      ),
      image: '/images/PCStuck.png'
    },
    {
      id: 'speed-test',
      title: 'Speed test not working',
      subtitle: 'Most likely driver not loaded (yellow error in Device Manager)',
      content: (
        <div className="bg-black/90 backdrop-blur-sm rounded-md p-3 border-l-2 border-gray-700/60">
          <ol className="list-decimal list-inside space-y-1.5 text-gray-300 text-sm">
            <li>Hold power button until PC turns off</li>
            <li>Turn on PC after 10 seconds wait</li>
            <li>If not working, reflash the firmware</li>
            <li>If still not working, follow the "remove hidden devices" steps from the guide above</li>
          </ol>
        </div>
      )
    },
    {
      id: 'driver-installation',
      title: 'Driver installation failing',
      subtitle: 'Common driver installation issues and solutions',
      content: (
        <div className="bg-black/90 backdrop-blur-sm rounded-md p-3 border-l-2 border-gray-700/60">
          <ol className="list-decimal list-inside space-y-1.5 text-gray-300 text-sm">
            <li>Make sure all antivirus software is disabled temporarily</li>
            <li>Run the installer as Administrator</li>
            <li>Disconnect from the internet during installation</li>
            <li>If Windows Security blocks installation, choose "More info" and "Run anyway"</li>
            <li>For persistent issues, contact support for a custom driver package</li>
          </ol>
        </div>
      )
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-black/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-3 text-white">Troubleshooting Guides</h1>
          <p className="text-lg text-gray-400">
            Common issues and solutions for DIVINER products
          </p>
        </motion.div>

        <div className="grid gap-4">
          {guides.map(guide => (
            <GuideItem key={guide.id} guide={guide} />
          ))}

          {/* Support CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800/40 p-5 text-center mt-4"
          >
            <h2 className="text-xl font-semibold mb-2 text-white">Need more help?</h2>
            <p className="text-gray-400 text-sm mb-3">
              Our support team is available to assist with any complex issues not covered in these guides.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center px-4 py-2 bg-gray-800/80 hover:bg-gray-700/90 rounded-md text-sm font-medium transition-colors shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Contact Support
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Guides; 