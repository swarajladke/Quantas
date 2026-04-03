import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiX, FiChevronDown, FiLayout, FiCode, FiLayers, FiSmartphone, FiType, FiImage, FiPenTool, FiMonitor, FiShoppingCart } from 'react-icons/fi';
import { categories } from '../../data/mockData';
import { useCart } from '../../context/CartContext';

const iconMap = {
  FiLayout: <FiLayout />,
  FiCode: <FiCode />,
  FiLayers: <FiLayers />,
  FiSmartphone: <FiSmartphone />,
  FiType: <FiType />,
  FiImage: <FiImage />,
  FiPenTool: <FiPenTool />,
  FiMonitor: <FiMonitor />
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const { toggleCart, cartItems } = useCart();

  return (
    <nav className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 h-16 border-b border-silver-dark/20 flex items-center shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <span className="font-heading font-bold text-2xl text-dark tracking-tight">Marketly</span>
        </Link>

        {/* Center: Search bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
          <input 
            type="text" 
            placeholder="Search themes, plugins..." 
            className="w-full bg-surface py-2.5 pl-12 pr-4 rounded-full border border-transparent focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div 
            className="relative h-16 flex items-center"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button className="flex items-center gap-1 font-medium text-dark hover:text-primary transition-colors">
              Categories <FiChevronDown />
            </button>
            
            {/* Mega Dropdown */}
            {megaMenuOpen && (
              <div className="absolute top-16 right-0 w-[600px] bg-white border border-border rounded-b-card shadow-card-hover p-6 grid grid-cols-3 gap-6 origin-top">
                {categories.map(cat => (
                  <Link key={cat.id} to={`/browse?category=${cat.name}`} className="flex items-start gap-3 group">
                    <div className="p-2 rounded-lg bg-surface text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {iconMap[cat.icon]}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark group-hover:text-primary transition-colors">{cat.name}</h4>
                      <span className="text-sm text-muted">{cat.productCount.toLocaleString()} products</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <button onClick={toggleCart} className="relative text-dark hover:text-primary transition-colors p-2">
              <FiShoppingCart size={22} />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            <div className="w-[1px] h-6 bg-border mx-1"></div>
            <Link to="/login" className="font-medium text-dark hover:text-primary transition-colors">Login</Link>
            <Link to="/register" className="font-medium text-dark hover:text-primary transition-colors">Register</Link>
          </div>
        </div>

        {/* Mobile menu and cart button */}
        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={toggleCart} className="relative text-dark">
            <FiShoppingCart size={22} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
          <button className="text-dark" onClick={() => setMobileMenuOpen(true)}>
            <FiMenu size={24} />
          </button>
        </div>

      </div>

      {/* Mobile drawer backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile drawer */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-card transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center border-b border-border">
          <span className="font-heading font-bold text-xl">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)} className="text-dark"><FiX size={24} /></button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="relative mb-6">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={20} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-surface py-2 pl-10 pr-4 rounded-full border border-border focus:border-primary focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold text-dark border-b border-border pb-2">Categories</div>
            <div className="grid grid-cols-2 gap-4 mb-4">
               {categories.map(cat => (
                  <Link key={cat.id} to={`/browse?category=${cat.name}`} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 group">
                    <div className="text-primary">{iconMap[cat.icon]}</div>
                    <span className="font-medium text-dark">{cat.name}</span>
                  </Link>
                ))}
            </div>
            <div className="font-bold text-dark border-b border-border pb-2 mt-2">Account</div>
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="font-medium mb-1">Login</Link>
            <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="font-medium">Register</Link>
          </div>
        </div>
        <div className="p-4 border-t border-border">
          <div className="text-center text-xs text-muted">
            © {new Date().getFullYear()} Marketly Store
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
