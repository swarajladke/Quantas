import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiChevronDown, FiLayout, FiCode, FiLayers, FiSmartphone, FiType, FiImage, FiPenTool, FiMonitor, FiShoppingCart, FiDownload } from 'react-icons/fi';
import { categories, products, sellers } from '../data/mockData';
import ProductCard from '../components/products/ProductCard';
import SellerCard from '../components/products/SellerCard';

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

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const trendingProducts = products.slice(0, 8);
  const newArrivals = products.slice(8, 16);
  const stripCategories = [{ id: 'all', name: 'All', icon: null }, ...categories];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#F7F7F9] py-24 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-50"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-heading font-bold text-dark mb-6 max-w-4xl mx-auto tracking-tight leading-tight" style={{ fontSize: '56px' }}>
            Millions of Creative Assets,<br/>One Marketplace
          </h1>
          <p className="font-body text-lg text-muted mb-12 max-w-2xl mx-auto">
            Buy and sell themes, plugins, templates, and more.
          </p>
          
          {/* Large Search Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-btn p-1.5 flex items-center shadow-md border border-border mb-12">
            <div className="hidden md:flex items-center gap-2 pl-4 pr-3 border-r border-border text-dark text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-surface transition-colors py-2 rounded-l">
              <span>All Categories</span>
              <FiChevronDown />
            </div>
            <div className="flex-1 flex items-center px-4">
              <FiSearch className="text-muted mr-3" size={20} />
              <input 
                type="text" 
                placeholder="Search for templates, fonts, and more..." 
                className="w-full bg-transparent focus:outline-none text-dark font-medium"
              />
            </div>
            <button className="bg-primary hover:bg-primary-dark transition-colors text-white px-10 py-3 rounded text-sm font-bold uppercase tracking-widest">
              Search
            </button>
          </div>

          {/* Trust Row */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 text-dark border-t border-border/50 pt-12 mt-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">50,000+</span>
              <span className="text-muted text-xs font-bold uppercase tracking-widest">Products</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">200,000+</span>
              <span className="text-muted text-xs font-bold uppercase tracking-widest">Buyers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">$10M+</span>
              <span className="text-muted text-xs font-bold uppercase tracking-widest">Paid Out</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Strip */}
      <section className="bg-white sticky top-0 lg:top-16 z-40 border-b border-border shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto py-4 px-4 scrollbar-hide">
            {stripCategories.map(cat => (
              <button
                key={cat.id || cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex-shrink-0 flex items-center gap-2 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                  activeCategory === cat.name 
                  ? 'bg-primary text-white border-primary shadow-md' 
                  : 'bg-white text-dark border-border hover:bg-surface'
                }`}
              >
                {cat.icon && <span className={activeCategory === cat.name ? "text-white" : "text-muted"}>{iconMap[cat.icon]}</span>}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10 pb-4 border-b border-border">
            <div>
              <h2 className="font-heading font-bold text-3xl text-dark">Trending Right Now</h2>
            </div>
            <Link to="/browse" className="text-primary text-sm font-bold hover:underline mb-1">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sellers */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-heading font-bold text-3xl text-dark">Top Sellers This Month</h2>
          </div>
          
          <div className="flex items-center gap-6 overflow-x-auto py-4 scrollbar-hide">
            {sellers.slice(0, 8).map(seller => (
              <div key={seller.id} className="flex-shrink-0 w-64">
                <SellerCard seller={seller} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm border border-border relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                <FiSearch size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-dark">Browse</h3>
              <p className="text-muted leading-relaxed">Discover thousands of high-quality products reviewed by our experts.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm border border-border relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                <FiShoppingCart size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-dark">Buy</h3>
              <p className="text-muted leading-relaxed">Secure checkout process in seconds with instant global access.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm border border-border relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                <FiDownload size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-dark">Download</h3>
              <p className="text-muted leading-relaxed">Instant access to your files right after purchase with lifetime updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10 pb-4 border-b border-border">
            <h2 className="font-heading font-bold text-3xl text-dark">Just Landed</h2>
            <Link to="/browse?sort=newest" className="text-primary text-sm font-bold hover:underline mb-1">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
