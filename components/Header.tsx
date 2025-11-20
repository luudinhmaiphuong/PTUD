import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingCart, User, Heart, Search, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'TRANG CHỦ', path: '/' },
    { name: 'VỀ CHÚNG TÔI', path: '/about' },
    { name: 'CỬA HÀNG', path: '/shop' },
    { name: 'ĐIỀU NHỎ XINH', path: '/blog' },
    { name: 'HỖ TRỢ', path: '/support' },
  ];

  const isActive = (path: string) => {
    if (path === '/shop' && location.pathname === '/') return false; 
    return location.pathname === path;
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-textMain">
            <Menu size={24} />
          </button>
        </div>

        {/* Social Icons (Left on Desktop) */}
        <div className="hidden lg:flex gap-4 text-pink-400">
           <span className="cursor-pointer hover:text-pink-600"><Menu size={20} className="rotate-90" /></span> {/* Fake social/menu icon */}
           <span className="font-bold cursor-pointer">f</span>
           <span className="font-bold cursor-pointer">📸</span>
        </div>

        {/* Logo - Centered */}
        <div className="flex-1 flex justify-center">
          <Link to="/" className="text-3xl font-bold text-textMain flex items-center gap-2">
            <span className="text-blue-400 text-4xl">🐱</span>
            <div className="flex flex-col items-center">
              <span className="font-bold text-pink-400 tracking-widest text-2xl" style={{ fontFamily: 'cursive' }}>Catput</span>
              <span className="text-xs text-gray-400 tracking-[0.3em] -mt-1">store</span>
            </div>
            <span className="text-pink-300 text-4xl">✨</span>
          </Link>
        </div>

        {/* User Actions (Right) */}
        <div className="flex items-center gap-4 text-pink-400">
          <Link to="/login" className="hover:text-pink-600 transition-colors">
            <User size={24} />
          </Link>
          <Link to="/cart" className="hover:text-pink-600 transition-colors relative">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </Link>
          <Link to="/wishlist" className="hidden md:block hover:text-pink-600 transition-colors cursor-pointer">
            <Heart size={24} />
          </Link>
        </div>
      </div>

      {/* Main Navigation (Desktop) */}
      <nav className="hidden lg:block border-t border-gray-100">
        <div className="container mx-auto flex justify-center gap-8 py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-bold tracking-wide hover:text-pink-500 transition-colors ${
                isActive(item.path) ? 'text-pink-500 border-b-2 border-pink-500 pb-1' : 'text-gray-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-white w-3/4 h-full shadow-lg p-6 transform transition-transform duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-xl text-pink-500">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-lg font-medium text-gray-700 hover:text-pink-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;