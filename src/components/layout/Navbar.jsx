import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiMenu, FiX, FiChevronDown, FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import { categories } from '../../data/mockData';
import { useCart } from '../../context/CartContext';
import iconMap from '../../utils/iconMap';

const categoryStyles = {
  Themes: {
    hoverBackground: 'linear-gradient(135deg, rgba(124,58,237,0.15), transparent)',
    hoverBorder: 'rgba(124,58,237,0.25)',
    accent: '#7C3AED',
    desc: 'Full site templates',
  },
  Plugins: {
    hoverBackground: 'linear-gradient(135deg, rgba(37,99,235,0.15), transparent)',
    hoverBorder: 'rgba(37,99,235,0.25)',
    accent: '#2563EB',
    desc: 'Extend your stack',
  },
  Templates: {
    hoverBackground: 'linear-gradient(135deg, rgba(217,119,6,0.15), transparent)',
    hoverBorder: 'rgba(217,119,6,0.25)',
    accent: '#D97706',
    desc: 'Launch-ready pages',
  },
  'UI Kits': {
    hoverBackground: 'linear-gradient(135deg, rgba(5,150,105,0.15), transparent)',
    hoverBorder: 'rgba(5,150,105,0.25)',
    accent: '#059669',
    desc: 'Component libraries',
  },
  Fonts: {
    hoverBackground: 'linear-gradient(135deg, rgba(219,39,119,0.15), transparent)',
    hoverBorder: 'rgba(219,39,119,0.25)',
    accent: '#DB2777',
    desc: 'Premium typefaces',
  },
  Graphics: {
    hoverBackground: 'linear-gradient(135deg, rgba(220,38,38,0.15), transparent)',
    hoverBorder: 'rgba(220,38,38,0.25)',
    accent: '#DC2626',
    desc: 'Visuals & illustrations',
  },
  Illustrations: {
    hoverBackground: 'linear-gradient(135deg, rgba(79,70,229,0.15), transparent)',
    hoverBorder: 'rgba(79,70,229,0.25)',
    accent: '#4F46E5',
    desc: 'Hand-crafted artwork',
  },
  Dashboard: {
    hoverBackground: 'linear-gradient(135deg, rgba(13,148,136,0.15), transparent)',
    hoverBorder: 'rgba(13,148,136,0.25)',
    accent: '#0D9488',
    desc: 'Admin & analytics UI',
  },
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const { toggleCart, cartItems } = useCart();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const totalAssets = categories.reduce((sum, category) => sum + category.productCount, 0);

  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCategoriesOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    setCategoriesOpen(false);
  }, [location]);

  useEffect(() => {
    if (!categoriesOpen) {
      setHoveredCategory(null);
    }
  }, [categoriesOpen]);

  return (
    <nav
      className="sticky top-0 z-[100] flex h-20 items-center px-4 lg:px-6 bg-[#0a0a0a]/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)] border-b border-white/5"
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2">
            Q

            Quantas

        </Link>

        {/* Search Bar - Center Pill */}
        <div className="relative hidden max-w-2xl flex-1 lg:flex">
          <div className="group flex w-full items-center rounded-full border p-1 transition-all border-white/10 bg-white/5 focus-within:bg-white/10">
            <div className="flex items-center gap-1.5 border-r px-4 py-1.5 text-sm font-bold cursor-pointer border-white/10 text-white/60 hover:text-white">
              All items <FiChevronDown />
            </div>
            <input
              type="text"
              placeholder="Search themes, plugins..."
              className="flex-1 bg-transparent px-4 py-1 text-sm focus:outline-none text-white placeholder:text-white/30"
            />
            <button className="flex h-9 w-9 items-center justify-center rounded-full transition-colors bg-white/5 text-white/60 hover:bg-white/10">
              <FiSearch size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <div
              className="relative"
              ref={dropdownRef}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={categoriesOpen}
                onClick={() => setCategoriesOpen((open) => !open)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  categoriesOpen
                    ? 'border-white/20 bg-white/10 text-white shadow-[0_18px_45px_-24px_rgba(255,95,218,0.6)]'
                    : 'border-transparent text-white/60 hover:border-white/10 hover:bg-white/5 hover:text-white'
                }`}
              >
                Categories
                <FiChevronDown className={`text-white/40 transition-transform duration-300 ${categoriesOpen ? 'rotate-180 text-white/70' : ''}`} />
              </button>

              <AnimatePresence>
                {categoriesOpen && (
                  <Motion.div
                    role="menu"
                    tabIndex={-1}
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute right-0 top-[calc(100%+10px)] z-[999] w-[420px]"
                  >
                    <div className="relative overflow-hidden rounded-[20px] border border-white/[0.06] bg-[linear-gradient(160deg,rgba(124,58,237,0.05)_0%,rgba(10,8,15,0.97)_40%,rgba(236,72,153,0.03)_100%)] shadow-[0_32px_80px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.03),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-[40px]">
                      <Motion.div
                        aria-hidden="true"
                        className="absolute left-0 right-0 top-0 h-[2px] bg-[linear-gradient(to_right,#7C3AED,#EC4899,#F59E0B,#10B981)]"
                        animate={{ x: ['-3%', '3%', '-3%'] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      />

                      <div className="flex items-center justify-between border-b border-white/[0.04] px-4 pb-2.5 pt-3.5">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7] animate-pulse"></span>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#A855F7]/70">
                            Explore Categories
                          </p>
                        </div>
                        <span className="rounded-full border border-[#A855F7]/40 bg-[linear-gradient(135deg,rgba(168,85,247,0.2),rgba(236,72,153,0.2))] px-2.5 py-[3px] text-[11px] text-[#C084FC]">
                          {totalAssets.toLocaleString()} assets
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 p-2.5">
                        {categories.map((cat) => {
                          const categoryStyle = categoryStyles[cat.name] || {
                            hoverBackground: 'linear-gradient(135deg, rgba(124,58,237,0.15), transparent)',
                            hoverBorder: 'rgba(124,58,237,0.25)',
                            accent: '#7C3AED',
                            desc: 'Curated marketplace assets',
                          };
                          const isHovered = hoveredCategory === cat.name;

                          return (
                            <Link
                              key={cat.id}
                              to={`/browse?category=${encodeURIComponent(cat.name)}`}
                              onClick={() => setCategoriesOpen(false)}
                              onMouseEnter={() => setHoveredCategory(cat.name)}
                              onMouseLeave={() => setHoveredCategory(null)}
                              onFocus={() => setHoveredCategory(cat.name)}
                              onBlur={() => setHoveredCategory(null)}
                              className="group relative flex items-start overflow-hidden rounded-xl border px-3 py-2 transition-all duration-200 ease-out hover:-translate-y-px"
                              style={{
                                background: isHovered ? categoryStyle.hoverBackground : 'transparent',
                                borderColor: isHovered ? categoryStyle.hoverBorder : 'transparent',
                              }}
                            >
                              <span
                                className="absolute bottom-2 left-0 top-2 w-[3px] rounded-r-[12px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                                style={{
                                  background: categoryStyle.accent,
                                  opacity: isHovered ? 1 : 0,
                                }}
                              ></span>

                              <div className="relative flex-1">
                                <div className="flex items-center gap-2">
                                  <p className="text-[14px] font-semibold text-white">
                                    {cat.name}
                                  </p>
                                </div>
                                <p className="mt-0.5 text-[11px] text-white/25">
                                  {cat.productCount.toLocaleString()} items
                                </p>

                                <span
                                  className={`mt-1 block overflow-hidden text-[11px] text-white/25 transition-all duration-150 ease-out ${
                                    isHovered ? 'max-h-8 opacity-100' : 'max-h-0 opacity-0'
                                  }`}
                                >
                                  {categoryStyle.desc}
                                </span>
                              </div>

                              <span className={`relative pt-1 text-[12px] text-white/30 transition-all duration-200 ease-out ${
                                isHovered ? 'translate-x-0 opacity-100' : '-translate-x-1 opacity-0'
                              }`}>
                                <FiArrowRight size={12} />
                              </span>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="flex items-center justify-between border-t border-white/[0.04] px-4 py-2.5">
                        <Link
                          to="/browse"
                          onClick={() => setCategoriesOpen(false)}
                          className="group inline-flex items-center gap-2 bg-[linear-gradient(to_right,#A855F7,#EC4899)] bg-clip-text text-sm font-medium text-transparent transition-opacity hover:opacity-90"
                        >
                          <span>Browse all {totalAssets.toLocaleString()} assets</span>
                          <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                            <FiArrowRight size={13} />
                          </span>
                        </Link>

                        <span className="rounded-full bg-[linear-gradient(135deg,#7C3AED,#EC4899)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
                          12 New This Week
                        </span>
                      </div>
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={toggleCart}
            className="relative rounded-full p-2 transition-colors text-white/80 hover:bg-white/5"
          >
            <FiShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-black text-white bg-primary">
                {cartItems.length}
              </span>
            )}
          </button>
          
          <div className="hidden items-center lg:flex">
            <div className="mx-2 h-6 w-px bg-white/10" />
            <Link
              to="/login"
              className="px-3 py-2 text-sm font-bold transition-colors text-white/60 hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="ml-1 rounded-lg px-4 py-2 text-sm font-bold transition-colors bg-white/10 text-white hover:bg-white/20"
            >
              Register
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="ml-2 lg:hidden text-white/80"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      <div className={`fixed right-0 top-0 z-50 flex h-full w-80 transform flex-col bg-[#0f1115] shadow-2xl transition-transform duration-500 ease-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
              className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none"
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
            &copy; {new Date().getFullYear()} Quantas Store

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
