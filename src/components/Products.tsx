import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define product categories
type ProductCategory = 'all' | 'game' | 'firmware' | 'hardware';

// Define product type
type Product = {
  id: number;
  title: string;
  image: string;
  category: ProductCategory | ProductCategory[];
  tags: string;
  features: string[];
  premium: boolean;
  price: number;
  description?: string;
};

// Icons for different categories
const CategoryIcon = ({ category }: { category: ProductCategory }) => {
  switch(category) {
    case 'game':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      );
    case 'firmware':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"/>
        </svg>
      );
    case 'hardware':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zm0 4h4v6h-4zm-6-3h5v3H6z"/>
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      );
  }
};

// Product Detail Modal
const ProductDetailModal = ({ 
  product, 
  onClose 
}: { 
  product: Product; 
  onClose: () => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<'standard' | 'premium' | 'ultimate'>('standard');
  const [quantity, setQuantity] = useState(1);
  
  // Calculate price based on selected option
  const getPriceForOption = () => {
    switch(selectedOption) {
      case 'standard': return product.price * 0.6;
      case 'premium': return product.price * 0.8;
      case 'ultimate': return product.price;
      default: return product.price;
    }
  };
  
  const formattedPrice = getPriceForOption().toFixed(2);
  const totalPrice = (getPriceForOption() * quantity).toFixed(2);
  
  return (
    <motion.div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Cyberpunk grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <motion.div 
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-[#111827]/95 rounded-lg overflow-hidden border border-gray-800 shadow-[0_0_25px_rgba(30,64,175,0.15)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Glowing top edge accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        
        {/* Left side - Product Image */}
        <div className="p-6 flex items-center justify-center bg-gradient-to-b from-[#0F1521] to-[#0A0F18]">
          <div className="relative aspect-square w-full max-w-md flex items-center justify-center overflow-hidden group">
            {/* Image backdrop glow */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Product image with hover effect */}
            <motion.div 
              className="relative z-10 w-4/5 h-4/5"
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/placeholder.png";
                }}
              />
            </motion.div>
            
            {/* Corner accents for cyberpunk look */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/30"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/30"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/30"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/30"></div>
          </div>
        </div>
        
        {/* Right side - Product Details */}
        <div className="p-6 bg-gradient-to-b from-[#0D1219] to-[#090E15] relative">
          {/* Tech lines accent */}
          <div className="absolute right-6 top-20 w-20 h-[1px] bg-blue-500/20"></div>
          <div className="absolute right-6 top-20 w-[1px] h-20 bg-blue-500/20"></div>
          
          {/* Back button */}
          <div className="flex items-center justify-between mb-4">
            <motion.button 
              onClick={onClose}
              className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm group"
              whileHover={{ x: -2, transition: { duration: 0.1 } }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="relative">
                Back to Products
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </motion.button>
            <span className="text-lg font-bold text-white tracking-wider">DIVINER</span>
          </div>
          
          {/* Tag & Title with text glow */}
          <div className="mb-3">
            <p className="text-red-500 text-sm">{product.tags}</p>
            <h1 className="text-2xl font-bold text-white text-shadow-sm">{product.title}</h1>
            <p className="text-red-500 text-2xl font-bold filter drop-shadow-[0_0_2px_rgba(239,68,68,0.3)]">${formattedPrice}</p>
          </div>
          
          {/* Description */}
          <div className="mb-3">
            <p className="text-gray-400 text-sm">
              {product.description || 
                "This is a placeholder product description. Here you would typically find detailed information about the product, its features, specifications, and benefits."}
            </p>
          </div>
          
          {/* Features with glowing bullets */}
          <div className="mb-4">
            <ul className="space-y-1">
              {product.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 text-sm drop-shadow-[0_0_2px_rgba(239,68,68,0.4)]">•</span>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Option Selection with enhanced highlight effects */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-medium text-white">Select Option</h3>
              <div className="h-[1px] flex-grow ml-4 bg-gradient-to-r from-blue-500/40 to-transparent"></div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <motion.button 
                className={`p-2 rounded text-center transition-all ${
                  selectedOption === 'standard' 
                    ? 'bg-[#0C141F] border border-blue-500 ring-1 ring-blue-500/30 shadow-[0_0_8px_rgba(59,130,246,0.3)]' 
                    : 'bg-[#0C141F] border border-gray-800 hover:border-blue-500/50'
                }`}
                onClick={() => setSelectedOption('standard')}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.1, ease: "easeOut" }
                }}
              >
                <div className="text-white text-sm font-medium">Standard</div>
                <div className="text-gray-400 text-xs">${(product.price * 0.6).toFixed(2)}</div>
              </motion.button>
              
              <motion.button 
                className={`p-2 rounded text-center transition-all ${
                  selectedOption === 'premium' 
                    ? 'bg-[#0C141F] border border-blue-500 ring-1 ring-blue-500/30 shadow-[0_0_8px_rgba(59,130,246,0.3)]' 
                    : 'bg-[#0C141F] border border-gray-800 hover:border-blue-500/50'
                }`}
                onClick={() => setSelectedOption('premium')}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.1, ease: "easeOut" }
                }}
              >
                <div className="text-white text-sm font-medium">Premium</div>
                <div className="text-gray-400 text-xs">${(product.price * 0.8).toFixed(2)}</div>
              </motion.button>
              
              <motion.button 
                className={`p-2 rounded text-center transition-all ${
                  selectedOption === 'ultimate' 
                    ? 'bg-[#0C141F] border border-red-500 ring-1 ring-red-500/30 shadow-[0_0_8px_rgba(239,68,68,0.3)]' 
                    : 'bg-[#0C141F] border border-gray-800 hover:border-red-500/50'
                }`}
                onClick={() => setSelectedOption('ultimate')}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.1, ease: "easeOut" }
                }}
              >
                <div className="text-white text-sm font-medium">Ultimate</div>
                <div className="text-gray-400 text-xs">${product.price.toFixed(2)}</div>
              </motion.button>
            </div>
          </div>
          
          {/* Quantity selector with glowing effects */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-medium text-white">Quantity</h3>
              <div className="h-[1px] flex-grow ml-4 bg-gradient-to-r from-blue-500/40 to-transparent"></div>
            </div>
            <div className="flex items-center">
              <motion.button 
                className="w-10 h-10 flex items-center justify-center bg-[#0C141F] text-white border border-gray-800 rounded-l hover:border-blue-500/50 hover:text-blue-400"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                -
              </motion.button>
              <div className="w-14 h-10 flex items-center justify-center bg-[#0C141F] text-white border-t border-b border-gray-800">
                {quantity}
              </div>
              <motion.button 
                className="w-10 h-10 flex items-center justify-center bg-[#0C141F] text-white border border-gray-800 rounded-r hover:border-blue-500/50 hover:text-blue-400"
                onClick={() => setQuantity(quantity + 1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                +
              </motion.button>
            </div>
          </div>
          
          {/* Add to Cart Button with pulsing effect */}
          <motion.button 
            className="w-full py-3 mt-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded text-white font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.3)] relative overflow-hidden group"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.1, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated glowing edge */}
            <span className="absolute inset-0 w-full h-full">
              <span className="absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity duration-500">
                <span className="absolute top-0 left-[calc(50%-5px)] w-[10px] h-[1px] bg-white"></span>
                <span className="absolute bottom-0 left-[calc(50%-5px)] w-[10px] h-[1px] bg-white"></span>
                <span className="absolute top-[calc(50%-5px)] left-0 h-[10px] w-[1px] bg-white"></span>
                <span className="absolute top-[calc(50%-5px)] right-0 h-[10px] w-[1px] bg-white"></span>
              </span>
            </span>
            
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
            </svg>
            <span className="z-10">Add to Cart - ${totalPrice}</span>
          </motion.button>
          
          {/* Service Info with hover effects */}
          <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
            <motion.div 
              className="flex items-center gap-1 group"
              whileHover={{ y: -2, color: "#9CA3AF" }}
              transition={{ duration: 0.1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:text-blue-400 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Secure Payment
            </motion.div>
            <motion.div 
              className="flex items-center gap-1 group"
              whileHover={{ y: -2, color: "#9CA3AF" }}
              transition={{ duration: 0.1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:text-blue-400 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              24/7 Support
            </motion.div>
            <motion.div 
              className="flex items-center gap-1 group"
              whileHover={{ y: -2, color: "#9CA3AF" }}
              transition={{ duration: 0.1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:text-blue-400 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h7a1 1 0 001-1v-8a1 1 0 00-1-1H3zm11 3a1 1 0 00-1 1v1H9V8a1 1 0 00-2 0v1H4V5h10v2z" />
              </svg>
              Fast Delivery
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProductCard = ({ 
  title, 
  image,
  premium,
  tags,
  features,
  category,
  product,
  onOpenDetail
}: { 
  title: string;
  image: string;
  premium: boolean;
  tags: string;
  features: string[];
  category: ProductCategory | ProductCategory[];
  product: Product;
  onOpenDetail: (product: Product) => void;
}) => {
  // Use first category if array
  const primaryCategory = Array.isArray(category) ? category[0] : category;
  
  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
      className="bg-[#141A27]/70 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800/50 transform scale-95"
    >
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          {/* Icon based on category */}
          <div className={`w-5 h-5 ${premium ? 'text-blue-500' : 'text-gray-400'}`}>
            <CategoryIcon category={primaryCategory} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className={`text-xs ${premium ? 'text-blue-400' : 'text-gray-400'}`}>{tags}</p>
          </div>
        </div>
        <div className={`px-2 py-0.5 rounded text-xs font-medium ${premium ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-300'}`}>
          {premium ? 'PREMIUM' : 'STANDARD'}
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <ul className="space-y-1.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-1.5 text-gray-300 text-sm">
              <span className="text-gray-400 mt-1 text-xs">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex justify-center pt-3">
          <motion.button 
            whileHover={{ 
              scale: 1.03,
              boxShadow: premium ? "0 0 20px rgba(59, 130, 246, 0.6)" : "0 0 15px rgba(107, 114, 128, 0.5)" 
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0 }}
            className={`w-full py-2.5 text-sm font-medium rounded-md text-white relative overflow-hidden ${
              premium 
                ? 'bg-blue-600 hover:bg-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.3)]' 
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => onOpenDetail(product)}
          >
            <span className="relative z-10">Learn More</span>
            {premium && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-400/10 to-blue-600/0 animate-glow-pulse"></div>
            )}
          </motion.button>
      </div>
    </div>
  </motion.div>
);
};

// Sample product data
const productData: Product[] = [
  {
    id: 1,
    title: 'Placeholder',
    image: '/images/pictest.png',
    category: 'game',
    tags: '#placeholder-1',
    features: ['Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature'],
    premium: true,
    price: 499.99
  },
  {
    id: 2,
    title: 'Placeholder',
    image: '/images/pictest.png',
    category: 'game',
    tags: '#placeholder-2',
    features: ['Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature'],
    premium: false,
    price: 299.99
  },
  {
    id: 3,
    title: 'Placeholder',
    image: '/images/pictest.png',
    category: 'game',
    tags: '#placeholder-3',
    features: ['Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature'],
    premium: true,
    price: 399.99
  },
  {
    id: 4,
    title: 'Placeholder',
    image: '/images/pictest.png',
    category: 'firmware',
    tags: '#placeholder-4',
    features: ['Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature'],
    premium: false,
    price: 299.99
  },
  {
    id: 5,
    title: 'Placeholder',
    image: '/images/pictest.png',
    category: 'hardware',
    tags: '#divine-dma',
    features: ['Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature'],
    premium: true,
    price: 499.99
  },
  {
    id: 6,
    title: 'Placeholder',
    image: '/images/pictest.png',
    category: 'hardware',
    tags: '#divine-fuser',
    features: ['Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature'],
    premium: true,
    price: 499.99
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on active category
  const filteredProducts = productData.filter(product => {
    if (activeCategory === 'all') return true;
    
    if (Array.isArray(product.category)) {
      return product.category.includes(activeCategory);
    } else {
      return product.category === activeCategory;
    }
  });

  const handleOpenProductDetail = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-8">Our Products</h2>
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              onClick={() => setActiveCategory('all')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)"
              }}
              transition={{ duration: 0 }}
              className={`px-8 py-3 rounded-lg font-medium shadow-lg relative overflow-hidden ${
                activeCategory === 'all' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white ring-1 ring-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                : 'bg-gray-900/80 text-gray-300 border border-gray-800 hover:border-blue-500/50'
              }`}
            >
              <span className="relative z-10">All Products</span>
              {activeCategory === 'all' && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-blue-400/60 opacity-0"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                />
              )}
            </motion.button>
            
            <motion.button 
              onClick={() => setActiveCategory('game')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)"
              }}
              transition={{ duration: 0 }}
              className={`px-8 py-3 rounded-lg font-medium shadow-lg relative overflow-hidden flex items-center gap-2 ${
                activeCategory === 'game' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white ring-1 ring-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                : 'bg-gray-900/80 text-gray-300 border border-gray-800 hover:border-blue-500/50'
              }`}
            >
              <span className="relative z-10">Game Software</span>
              {activeCategory === 'game' && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-blue-400/60 opacity-0"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                />
              )}
            </motion.button>
            
            <motion.button 
              onClick={() => setActiveCategory('firmware')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)"
              }}
              transition={{ duration: 0 }}
              className={`px-8 py-3 rounded-lg font-medium shadow-lg relative overflow-hidden flex items-center gap-2 ${
                activeCategory === 'firmware' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white ring-1 ring-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                : 'bg-gray-900/80 text-gray-300 border border-gray-800 hover:border-blue-500/50'
              }`}
            >
              <span className="relative z-10">Firmware</span>
              {activeCategory === 'firmware' && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-blue-400/60 opacity-0"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                />
              )}
            </motion.button>
            
            <motion.button 
              onClick={() => setActiveCategory('hardware')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)"
              }}
              transition={{ duration: 0 }}
              className={`px-8 py-3 rounded-lg font-medium shadow-lg relative overflow-hidden flex items-center gap-2 ${
                activeCategory === 'hardware' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white ring-1 ring-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                : 'bg-gray-900/80 text-gray-300 border border-gray-800 hover:border-blue-500/50'
              }`}
            >
              <span className="relative z-10">Hardware</span>
              {activeCategory === 'hardware' && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-blue-400/60 opacity-0"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                />
              )}
            </motion.button>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="contents"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
            >
              {filteredProducts.map(product => (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                  }}
                >
          <ProductCard
                    title={product.title}
                    image={product.image}
                    premium={product.premium}
                    tags={product.tags}
                    features={product.features}
                    category={product.category}
                    product={product}
                    onOpenDetail={handleOpenProductDetail}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal 
            product={selectedProduct}
            onClose={handleCloseProductDetail}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products; 