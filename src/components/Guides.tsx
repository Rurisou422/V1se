import React from 'react';
import { motion } from 'framer-motion';

const Guides: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold mb-4">Troubleshooting Guides</h1>
          <p className="text-lg text-gray-300">
            Common issues and solutions for DIVINER products
          </p>
        </motion.div>

        <div className="grid gap-12">
          {/* PC Boot Issue Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0a1523]/80 rounded-xl overflow-hidden border border-cyan-900/30"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">PC stuck on boot with VGK error</h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-yellow-400 font-medium mb-4">
                  Firmware driver most likely interrupted with real WiFi card or loaded wrong drivers
                </p>
                
                <div className="space-y-4">
                  <div className="bg-[#061626]/80 rounded-lg p-4 border-l-4 border-cyan-600">
                    <ol className="list-decimal list-inside space-y-2 text-gray-200">
                      <li>Unplug DMA device, boot Windows</li>
                      <li>Disable real WiFi from device manager</li>
                      <li>Show hidden devices</li>
                      <li>Delete hidden network devices with drivers</li>
                      <li>If you don't have WiFi in main PC still follow from "remove hidden devices" step</li>
                      <li>Turn off PC</li>
                      <li>Plug in DMA</li>
                      <li>Boot PC (90% of freeze issues are fixed this way)</li>
                    </ol>
                    <p className="mt-4 text-red-400 font-medium">For remaining freeze issues, ask DIVINER to rebuild firmware 😈</p>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <img 
                      src="/images/PCStuck.png" 
                      alt="PC Stuck Error" 
                      className="rounded-lg border border-gray-700 shadow-lg max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Speed Test Issue Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0a1523]/80 rounded-xl overflow-hidden border border-cyan-900/30"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Speed test not working</h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-yellow-400 font-medium mb-4">
                  Most likely driver not loaded (yellow error in Device Manager)
                </p>
                
                <div className="bg-[#061626]/80 rounded-lg p-4 border-l-4 border-cyan-600">
                  <ol className="list-decimal list-inside space-y-2 text-gray-200">
                    <li>Hold power button until PC turns off</li>
                    <li>Turn on PC after 10 seconds wait</li>
                    <li>If not working, reflash the firmware</li>
                    <li>If still not working, follow the "remove hidden devices" steps from the guide above</li>
                  </ol>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Additional Guide Cards Can Be Added Here */}
          
          {/* Support CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-cyan-900/30 to-indigo-900/30 rounded-xl overflow-hidden border border-cyan-800/30 p-6 text-center"
          >
            <h2 className="text-2xl font-bold mb-3">Need more help?</h2>
            <p className="text-gray-300 mb-4">
              Our support team is available to assist with any complex issues not covered in these guides.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-cyan-700 hover:bg-cyan-600 rounded-lg font-medium transition-colors shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
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