import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiBox, FiUploadCloud, FiDollarSign, FiSettings, FiBell, FiMenu, FiX, FiSearch, FiTrendingUp, FiStar, FiMessageSquare, FiPercent, FiLogOut, FiHelpCircle } from 'react-icons/fi';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const menuSections = [
    {
      title: 'Main Menu',
      links: [
        { name: 'Overview', path: '/admin', icon: <FiHome /> },
        { name: 'Analytics', path: '/admin/analytics', icon: <FiTrendingUp /> },
        { name: 'Earnings', path: '/admin/earnings', icon: <FiDollarSign /> },
      ]
    },
    {
      title: 'Inventory',
      links: [
        { name: 'Manage Products', path: '/admin/products', icon: <FiBox /> },
        { name: 'Upload asset', path: '/admin/upload', icon: <FiUploadCloud /> },
      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'Reviews', path: '/admin/reviews', icon: <FiStar />, badge: 4 },
        { name: 'Messages', path: '/admin/messages', icon: <FiMessageSquare />, badge: 2 },
        { name: 'Promotions', path: '/admin/promotions', icon: <FiPercent /> },
      ]
    },
    {
      title: 'System',
      links: [
        { name: 'Store Settings', path: '/admin/settings', icon: <FiSettings /> },
      ]
    }
  ];

  return (
    <div className="theme-neon flex min-h-screen bg-[#000000] font-body text-dark">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`gallery-panel fixed left-0 top-0 z-50 flex h-screen w-64 transform flex-col border-r border-primary/10 transition-transform duration-300 ease-in-out lg:sticky ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <Link to="/" className="font-heading font-bold text-2xl text-primary">Marketly.</Link>
          <button className="text-muted hover:text-white lg:hidden" onClick={() => setSidebarOpen(false)}>
            <FiX size={24} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide">
          <nav className="flex flex-col gap-8">
            {menuSections.map((section) => (
              <div key={section.title}>
                <p className="mb-4 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">{section.title}</p>
                <div className="flex flex-col gap-1.5">
                  {section.links.map((link) => (
                    <Link 
                      key={link.name} 
                      to={link.path}
                      className={`group flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                        location.pathname === link.path 
                          ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                          : 'text-white/58 hover:bg-white/5 hover:text-primary'
                      }`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-xl ${location.pathname === link.path ? 'text-white' : 'text-white/45 group-hover:text-primary'}`}>
                          {link.icon}
                        </span>
                        <span className="text-sm">{link.name}</span>
                      </div>
                      {link.badge && (
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                          location.pathname === link.path ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                        }`}>
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Help Center Card */}
          <div className="mt-10 mb-6 px-2">
            <div className="gallery-chip group relative overflow-hidden rounded-2xl border border-white/10 p-5 transition-colors hover:border-primary/20">
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/10 blur-2xl transition-colors group-hover:bg-primary/20" />
              <div className="relative z-10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-sm">
                  <FiHelpCircle size={20} />
                </div>
                <h4 className="mb-1 text-sm font-bold text-white">Help Center</h4>
                <p className="mb-4 text-xs leading-relaxed text-white/55">Need help with your store settings? Our support is 24/7.</p>
                <button className="gallery-chip w-full rounded-lg border border-white/10 py-2 text-xs font-bold text-white transition-all hover:border-primary hover:text-primary">
                  Get Support
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto border-t border-white/10 p-4">
          <div className="flex cursor-pointer items-center justify-between gap-3 rounded-xl p-2 transition-colors hover:bg-white/5 group">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-primary flex-shrink-0 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                M
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-white">Marketly Admin</p>
                <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Store Owner</p>
              </div>
            </div>
            <button className="p-2 text-white/45 transition-colors hover:text-red-400" title="Logout">
              <FiLogOut size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/10 bg-[linear-gradient(135deg,rgba(12,9,14,0.96),rgba(20,10,19,0.96)_52%,rgba(10,8,12,0.98)_100%)] px-4 sm:px-8">
          <div className="flex items-center gap-4">
            <button className="p-1 text-white lg:hidden" onClick={() => setSidebarOpen(true)}>
              <FiMenu size={24} />
            </button>
            <div className="gallery-chip hidden w-64 items-center rounded-btn border border-white/10 px-3 py-2 transition-colors focus-within:border-primary sm:flex">
              <FiSearch className="mr-2 text-white/45" />
              <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none text-sm w-full" />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-white/55 transition-colors hover:text-white">
              <FiBell size={20} />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full border-2 border-black bg-red-500"></span>
            </button>
            <Link to="/" className="hidden sm:block text-sm font-medium text-primary hover:underline">Back to Marketplace</Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[linear-gradient(180deg,#000000,#020203)] p-4 sm:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
