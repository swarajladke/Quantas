import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { FiSearch, FiChevronDown, FiLayout, FiCode, FiLayers, FiSmartphone, FiType, FiImage, FiPenTool, FiMonitor, FiShoppingCart, FiDownload } from 'react-icons/fi';
import { categories, products } from '../data/mockData';
import ProductCard from '../components/products/ProductCard';

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
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((product) => product.category === activeCategory);
  const trendingProducts = filteredProducts.slice(0, 8);
  const newArrivals = filteredProducts.slice(8, 16).length > 0
    ? filteredProducts.slice(8, 16)
    : filteredProducts.slice(0, 8);
  const stripCategories = [{ id: 'all', name: 'All', icon: null }, ...categories];

  return (
    <div className="w-full bg-silver-light">
      <section className="relative overflow-hidden border-b border-silver-dark/30 bg-liquid-chrome py-32">
        <div className="absolute inset-0 bg-mesh-pattern opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(130,181,64,0.05),transparent_70%)]"></div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-6 max-w-4xl font-heading font-bold leading-tight tracking-tight text-dark"
            style={{ fontSize: '56px' }}
          >
            Digital Craftsmanship,
            <br />
            Delivered Weekly
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-12 max-w-2xl text-lg text-muted"
          >
            Buy premium themes, plugins, and templates built by one passionate creator. High quality, well-documented assets for your next project.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mb-12 flex max-w-2xl items-center rounded-btn border border-border bg-white p-1.5 shadow-md"
          >
            <div className="hidden cursor-pointer items-center gap-2 rounded-l py-2 pl-4 pr-3 text-sm font-medium whitespace-nowrap text-dark transition-colors hover:bg-surface md:flex border-r border-border">
              <span>All Categories</span>
              <FiChevronDown />
            </div>
            <div className="flex flex-1 items-center px-4">
              <FiSearch className="mr-3 text-muted" size={20} />
              <input
                type="text"
                placeholder="Search for templates, fonts, and more..."
                className="w-full bg-transparent font-medium text-dark focus:outline-none"
              />
            </div>
            <button className="rounded bg-primary px-10 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-primary-dark">
              Search
            </button>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-4 flex flex-wrap justify-center gap-12 border-t border-border/50 pt-12 text-dark md:gap-20"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">50,000+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted">Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">10,000+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted">Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">500+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted">Products</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">4.9/5</span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted">Avg Rating</span>
            </div>
          </Motion.div>
        </div>
      </section>

      <section className="sticky top-0 z-40 border-b border-silver-dark/20 bg-white/80 shadow-sm backdrop-blur-xl lg:top-16">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto px-4 py-4 scrollbar-hide">
            {stripCategories.map((category) => (
              <button
                key={category.id || category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex-shrink-0 flex items-center gap-2 rounded-full border px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === category.name
                    ? 'border-primary bg-primary text-white shadow-md'
                    : 'border-border bg-white text-dark hover:bg-surface'
                }`}
              >
                {category.icon && (
                  <span className={activeCategory === category.name ? 'text-white' : 'text-muted'}>
                    {iconMap[category.icon]}
                  </span>
                )}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex items-end justify-between border-b border-silver-dark/20 pb-4"
          >
            <div>
              <h2 className="font-heading text-3xl font-bold text-dark">Recently Handcrafted</h2>
            </div>
            <Link to="/browse" className="mb-1 text-sm font-bold text-primary hover:underline">
              Explore all
            </Link>
          </Motion.div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {trendingProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-silver-dark/10 bg-silver-medium/30 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              { id: 1, icon: <FiSearch size={28} />, title: 'Browse', desc: 'Discover thousands of high-quality products reviewed by our experts.' },
              { id: 2, icon: <FiShoppingCart size={28} />, title: 'Buy', desc: 'Secure checkout process in seconds with instant global access.' },
              { id: 3, icon: <FiDownload size={28} />, title: 'Download', desc: 'Instant access to your files right after purchase with lifetime updates.' }
            ].map((step, index) => (
              <Motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-white text-primary shadow-sm">
                  <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {step.id}
                  </div>
                  {step.icon}
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-dark">{step.title}</h3>
                <p className="leading-relaxed text-muted">{step.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex items-end justify-between border-b border-silver-dark/20 pb-4"
          >
            <h2 className="font-heading text-3xl font-bold text-dark">Just Landed</h2>
            <Link to="/browse?sort=newest" className="mb-1 text-sm font-bold text-primary hover:underline">
              Explore all
            </Link>
          </Motion.div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
