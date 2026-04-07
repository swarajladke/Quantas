import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiX, FiChevronDown, FiShoppingCart } from 'react-icons/fi';
import { categories } from '../../data/mockData';
import { useCart } from '../../context/CartContext';
import iconMap from '../../utils/iconMap';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const { toggleCart, cartItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center border-b border-primary/10 bg-[linear-gradient(135deg,rgba(255,95,218,0.04),rgba(7,6,10,0.97)_18%,rgba(0,0,0,0.995)_60%,rgba(255,43,214,0.02)_100%)] shadow-neon backdrop-blur-xl">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-xl font-bold text-white shadow-neon transition-transform duration-500 ease-out hover:scale-105">
            M
          </div>
          <span className="font-heading text-2xl font-bold tracking-tight text-white">Marketly</span>
        </Link>

        <div className="relative mx-8 hidden max-w-xl flex-1 md:flex">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
          <input
            type="text"
            placeholder="Search themes, plugins..."
            className="w-full rounded-full border border-primary/15 bg-[linear-gradient(135deg,rgba(16,9,18,0.96),rgba(34,10,30,0.94)_40%,rgba(18,8,10,0.94)_100%)] py-2.5 pl-12 pr-4 text-white placeholder:text-white/34 focus:border-primary focus:outline-none transition-all duration-500 ease-out"
          />
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <div
            className="relative flex h-16 items-center"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button className="flex items-center gap-1 font-medium text-white/78 transition-all duration-300 ease-out hover:text-primary">
              Categories <FiChevronDown />
            </button>

            {megaMenuOpen && (
              <div className="absolute right-0 top-16 grid w-[600px] origin-top grid-cols-3 gap-6 rounded-b-[20px] border border-primary/15 bg-[linear-gradient(135deg,rgba(255,95,218,0.18),rgba(18,8,16,0.96)_34%,rgba(8,8,10,0.98)_58%,rgba(255,43,214,0.08)_100%)] p-6 shadow-neon backdrop-blur-xl">
                {categories.map((cat) => (
                  <Link key={cat.id} to={`/browse?category=${cat.name}`} className="group flex items-start gap-3">
                    <div className="rounded-lg bg-white/8 p-2 text-primary transition-all duration-300 ease-out group-hover:bg-brand-gradient group-hover:text-white">
                      {iconMap[cat.icon]}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white transition-colors group-hover:text-primary">{cat.name}</h4>
                      <span className="text-sm text-white/48">{cat.productCount.toLocaleString()} products</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleCart} className="relative p-2 text-white/78 transition-all duration-300 ease-out hover:text-primary hover:scale-105">
              <FiShoppingCart size={22} />
              {cartItems.length > 0 && (
                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-brand-gradient text-[10px] font-bold text-white shadow-neon">
                  {cartItems.length}
                </span>
              )}
            </button>
            <div className="mx-1 h-6 w-px bg-white/10"></div>
            <Link to="/login" className="font-medium text-white/78 transition-colors hover:text-primary">Login</Link>
            <Link to="/register" className="font-medium text-white/78 transition-colors hover:text-primary">Register</Link>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={toggleCart} className="relative text-white/78">
            <FiShoppingCart size={22} />
            {cartItems.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-gradient text-[10px] font-bold text-white shadow-neon">
                {cartItems.length}
              </span>
            )}
          </button>
          <button className="text-white/78" onClick={() => setMobileMenuOpen(true)}>
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      <div className={`fixed right-0 top-0 z-50 flex h-full w-80 transform flex-col bg-[linear-gradient(180deg,rgba(255,95,218,0.18),rgba(20,8,18,0.98)_18%,rgba(4,4,6,0.98)_58%,rgba(255,43,214,0.08)_100%)] shadow-neon transition-transform duration-500 ease-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <span className="font-heading text-xl font-bold text-white">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)} className="text-white/78">
            <FiX size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="relative mb-6">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full border border-primary/15 bg-[linear-gradient(135deg,rgba(14,8,16,0.96),rgba(28,10,24,0.94)_54%,rgba(18,8,10,0.94)_100%)] py-2 pl-10 pr-4 text-white placeholder:text-white/34 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="border-b border-white/10 pb-2 font-bold text-white">Categories</div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              {categories.map((cat) => (
                <Link key={cat.id} to={`/browse?category=${cat.name}`} onClick={() => setMobileMenuOpen(false)} className="group flex items-center gap-2">
                  <div className="text-primary">{iconMap[cat.icon]}</div>
                  <span className="font-medium text-white/82">{cat.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-2 border-b border-white/10 pb-2 font-bold text-white">Account</div>
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="mb-1 font-medium text-white/78">Login</Link>
            <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="font-medium text-white/78">Register</Link>
          </div>
        </div>
        <div className="border-t border-white/10 p-4">
          <div className="text-center text-xs text-white/42">
            &copy; {new Date().getFullYear()} Marketly Store
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
