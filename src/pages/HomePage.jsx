import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FiSearch, FiChevronDown, FiLayout, FiCode, FiLayers, FiSmartphone, FiType, FiImage, FiPenTool, FiMonitor, FiCheckCircle, FiShoppingCart, FiDownload } from 'react-icons/fi';
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

const FloatingAssets = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -250]);
  const y3 = useTransform(scrollY, [0, 500], [0, -100]);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
      <motion.div style={{ y: y1 }} className="absolute top-20 left-[10%] w-32 h-32 bg-primary/20 rounded-2xl rotate-12 blur-sm" />
      <motion.div style={{ y: y2 }} className="absolute top-40 right-[15%] w-48 h-48 bg-blue-500/10 rounded-full -rotate-12 blur-md" />
      <motion.div style={{ y: y3 }} className="absolute bottom-20 left-[20%] w-40 h-40 bg-purple-500/10 rounded-3xl rotate-45 blur-lg" />
      <motion.div style={{ y: y2 }} className="absolute top-80 left-[40%] w-24 h-24 bg-yellow-500/10 rounded-full blur-sm" />
    </div>
  );
};

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const trendingProducts = products.slice(0, 5); // 5 for Bento Box logic
  const newArrivals = products.slice(8, 16);
  const stripCategories = [{ id: 'all', name: 'All', icon: null }, ...categories];

  return (
    <div className="w-full bg-surface overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-white py-28 lg:py-40 border-b border-border overflow-hidden">
        <FloatingAssets />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-dark leading-[1.1] mb-8 max-w-5xl mx-auto tracking-tight">
              Future-Proof Assets.<br/>
              <span className="text-primary italic font-medium">Built for the Elite.</span>
            </h1>
            <p className="font-body text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover a hand-curated archive of digital architecture, designed by the world's most aggressive creators.
            </p>
          </motion.div>
          
          {/* Main Search Bar with Magnetic Feel */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="max-w-3xl mx-auto bg-white rounded-2xl p-2 flex items-center shadow-2xl border border-border/50 mb-16 transition-all"
          >
            <div className="hidden md:flex items-center gap-2 pl-6 pr-4 border-r border-border text-dark text-sm font-bold uppercase tracking-widest cursor-pointer hover:text-primary transition-colors">
              <span>Collection</span>
              <FiChevronDown />
            </div>
            <div className="flex-1 flex items-center px-6">
              <FiSearch className="text-primary mr-4" size={20} />
              <input 
                type="text" 
                placeholder="Find your next edge..." 
                className="w-full bg-transparent focus:outline-none text-dark font-medium placeholder:text-muted/60"
              />
            </div>
            <button className="bg-dark hover:bg-black transition-all text-white px-10 py-4 rounded-xl text-sm font-bold uppercase tracking-widest shadow-lg active:scale-95">
              Explore
            </button>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-dark pt-4 opacity-60">
            {['50k Assets', '200k Users', '$10M Payouts'].map((stat, i) => (
              <span key={i} className="text-xs font-bold uppercase tracking-widest">{stat}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Category Strip */}
      <section className="bg-white/80 backdrop-blur-md sticky top-0 z-40 lg:top-16 shadow-sm border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto py-4 px-4 scrollbar-hide">
            {stripCategories.map(cat => (
              <button
                key={cat.id || cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex-shrink-0 flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat.name 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-surface text-dark hover:bg-border'
                }`}
              >
                {cat.icon && <span>{iconMap[cat.icon]}</span>}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Box Trending Products */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading font-black text-4xl text-dark uppercase tracking-tighter italic">Just Landed</h2>
              <p className="text-sm text-muted mt-2 tracking-widest uppercase font-medium">Curated editorial picks.</p>
            </div>
            <Link to="/browse" className="text-dark font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors border-b-2 border-dark pb-1">
              Browse Everything
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 min-h-[700px]">
             {/* Main Featured Item */}
             <div className="md:col-span-2 md:row-span-2">
                <ProductCard product={trendingProducts[0]} />
             </div>
             {/* Secondary Items */}
             <div className="md:col-span-1 md:row-span-1">
                <ProductCard product={trendingProducts[1]} />
             </div>
             <div className="md:col-span-1 md:row-span-1">
                <ProductCard product={trendingProducts[2]} />
             </div>
             <div className="md:col-span-2 md:row-span-1">
                <ProductCard product={trendingProducts[3]} />
             </div>
          </div>
        </div>
      </section>

      {/* Cinematic Dark Mode Inversion Section */}
      <section className="py-32 bg-[#09090b] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="font-heading font-black text-5xl uppercase tracking-tighter leading-none mb-4">Elite Creators</h2>
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">The Top 1% of the Marketplace</p>
            </div>
            <div className="flex gap-4">
               <div className="p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <span className="block text-2xl font-bold">120+</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/50">Verified Authors</span>
               </div>
               <div className="p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm text-primary">
                  <span className="block text-2xl font-bold">99%</span>
                  <span className="text-[10px] uppercase tracking-widest text-primary/50">Satisfaction</span>
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sellers.slice(0, 4).map(seller => (
              <SellerCard key={seller.id} seller={seller} dark={true} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-heading font-bold text-3xl text-dark italic">Fresh Additions</h2>
            <Link to="/browse" className="text-primary text-sm font-bold uppercase tracking-widest">Newest First</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Pre-Footer CTA */}
      <section className="py-28 bg-primary text-white text-center">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="container mx-auto px-4 max-w-3xl"
        >
          <h2 className="font-heading font-black text-4xl mb-6 uppercase tracking-tight italic">Monetize Your Craft</h2>
          <p className="text-white/80 text-xl font-body mb-10">We offer the industry's most aggressive royalties. Join the elite.</p>
          <Link to="/register" className="inline-block bg-white text-primary font-black px-12 py-4 rounded-2xl transition-all shadow-2xl hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm">
            Setup Shop
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
