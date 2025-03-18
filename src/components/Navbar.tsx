import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`text-gray-100 hover:text-white transition-all duration-300 relative group font-medium text-[15px] tracking-wide hover:text-shadow-blue hover:scale-110 ${isActive ? 'text-white text-shadow-blue' : ''}`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${isActive ? 'w-full shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]'}`}></span>
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-extrabold text-white relative group tracking-wider transition-all duration-300 hover:text-shadow-blue hover:scale-110">
              DIVINER.GG
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
            </Link>
          </div>
          
          <div className="flex-1 flex justify-center items-center max-w-4xl mx-auto">
            <div className="flex items-center gap-10">
              <NavLink to="/">
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                    <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Store
                </span>
              </NavLink>
              <NavLink to="/faq">FAQ</NavLink>
              <NavLink to="/firmware">Firmware</NavLink>
              <NavLink to="/hardware">Hardware Bundles</NavLink>
              <NavLink to="/software">Software</NavLink>
            </div>
          </div>
          
          <div className="flex-shrink-0 w-[120px]"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 