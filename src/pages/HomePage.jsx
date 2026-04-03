import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import {
  FiArrowRight,
  FiChevronDown,
  FiCode,
  FiDownload,
  FiImage,
  FiLayout,
  FiLayers,
  FiMonitor,
  FiPenTool,
  FiSearch,
  FiShoppingCart,
  FiSmartphone,
  FiStar,
  FiTrendingUp,
  FiType,
} from 'react-icons/fi';
import { categories, products } from '../data/mockData';
import ProductCard from '../components/products/ProductCard';

const leftPanelImage =
  'https://images.pexels.com/photos/7145090/pexels-photo-7145090.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600&dpr=2';

const iconMap = {
  FiLayout: <FiLayout />,
  FiCode: <FiCode />,
  FiLayers: <FiLayers />,
  FiSmartphone: <FiSmartphone />,
  FiType: <FiType />,
  FiImage: <FiImage />,
  FiPenTool: <FiPenTool />,
  FiMonitor: <FiMonitor />,
};

const stepCards = [
  {
    id: 1,
    icon: <FiSearch size={28} />,
    title: 'Scout',
    desc: 'Browse bold productized assets built to ship quickly without losing polish.',
  },
  {
    id: 2,
    icon: <FiShoppingCart size={28} />,
    title: 'Collect',
    desc: 'Pick up launch-ready files with clear licenses and instant access.',
  },
  {
    id: 3,
    icon: <FiDownload size={28} />,
    title: 'Deploy',
    desc: 'Drop the files into your workflow and get moving the same day.',
  },
];

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory);

  const heroProduct = filteredProducts[0] || products[0];
  const featureProducts =
    filteredProducts.length > 3 ? filteredProducts.slice(1, 4) : products.slice(1, 4);
  const trendingProducts = filteredProducts.slice(0, 6);
  const newArrivals =
    filteredProducts.slice(6, 10).length > 0
      ? filteredProducts.slice(6, 10)
      : filteredProducts.slice(0, 4);
  const stripCategories = [{ id: 'all', name: 'All', icon: null }, ...categories];

  return (
    <div className="w-full bg-silver-light">
      <section className="relative overflow-hidden border-b border-silver-dark/30 bg-[#f7fafc]">
        <div className="absolute inset-0 bg-mesh-pattern opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-sky-200/30 blur-3xl"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-silver-light to-transparent"></div>

        <div className="container relative mx-auto px-4 pb-16 pt-16 lg:pb-24 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-dark shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Fresh drop every week
              </Motion.div>

              <Motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="max-w-3xl font-heading text-5xl font-bold leading-[0.95] tracking-tight text-dark sm:text-6xl xl:text-7xl"
              >
                Build with assets that
                <span className="block text-primary">look like taste.</span>
              </Motion.h1>

              <Motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
              >
                A marketplace for premium templates, kits, plugins, and launch-ready visuals with a more editorial point of view. Less noise, more standout work.
              </Motion.p>

              <Motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="mt-8 rounded-[26px] border border-white/70 bg-white/85 p-3 shadow-[0_28px_80px_-34px_rgba(15,23,42,0.28)] backdrop-blur"
              >
                <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
                  <div className="flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium text-dark xl:min-w-[190px]">
                    <span>All categories</span>
                    <FiChevronDown className="ml-auto text-muted" />
                  </div>
                  <div className="flex flex-1 items-center rounded-2xl border border-border bg-white px-4 py-3">
                    <FiSearch className="mr-3 text-muted" size={18} />
                    <input
                      type="text"
                      placeholder="Search for bold landing pages, UI kits, and launch assets..."
                      className="w-full bg-transparent text-sm font-medium text-dark focus:outline-none"
                    />
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-dark px-6 py-3 text-sm font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-primary">
                    Discover
                    <FiArrowRight />
                  </button>
                </div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/browse"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition-transform hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  Browse catalog
                  <FiArrowRight />
                </Link>
                <Link
                  to={`/product/${heroProduct.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-dark transition-colors hover:border-primary hover:text-primary"
                >
                  See featured drop
                </Link>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="mt-10 grid gap-4 sm:grid-cols-3"
              >
                {[
                  { label: 'Curated products', value: '500+' },
                  { label: 'Average rating', value: '4.9/5' },
                  { label: 'Downloads shipped', value: '50k+' },
                ].map((item) => (
                  <div key={item.label} className="rounded-[22px] border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur">
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-muted">{item.label}</p>
                    <p className="mt-2 font-heading text-3xl font-bold text-dark">{item.value}</p>
                  </div>
                ))}
              </Motion.div>
            </div>

            <Motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative"
            >
              <div className="relative rounded-[34px] border border-white/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-4 shadow-[0_44px_120px_-40px_rgba(15,23,42,0.65)]">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10">
                  <img
                    src={heroProduct.previewImage}
                    alt={heroProduct.title}
                    className="h-[500px] w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04),rgba(15,23,42,0.72))]"></div>

                  <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.26em] text-white backdrop-blur">
                    Featured collection
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="max-w-lg rounded-[26px] border border-white/15 bg-white/10 p-5 text-white backdrop-blur-md">
                      <p className="text-[11px] font-black uppercase tracking-[0.26em] text-white/65">
                        {heroProduct.category}
                      </p>
                      <h2 className="mt-3 font-heading text-3xl font-bold leading-tight">
                        {heroProduct.title}
                      </h2>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/72">
                        {heroProduct.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {heroProduct.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/78"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.4 }}
                className="absolute -left-3 top-12 rounded-[24px] border border-white/70 bg-white/88 p-4 shadow-xl backdrop-blur sm:-left-10"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-muted">This week</p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <FiTrendingUp size={22} />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-dark">+38%</p>
                    <p className="text-sm text-muted">More saves than last drop</p>
                  </div>
                </div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.5 }}
                className="absolute -bottom-4 right-0 max-w-[240px] rounded-[24px] border border-dark/10 bg-white p-4 shadow-xl sm:-right-6"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-muted">Ready for</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {heroProduct.compatibility.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-dark"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted">
                  <FiStar className="fill-current text-yellow-400" />
                  {heroProduct.rating} average across {heroProduct.reviewCount} reviews
                </div>
              </Motion.div>
            </Motion.div>
          </div>
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
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-primary">Editorial pick</p>
              <h2 className="mt-3 font-heading text-4xl font-bold text-dark">A homepage with more drama starts here.</h2>
            </div>
            <Link to="/browse" className="text-sm font-bold uppercase tracking-[0.2em] text-dark hover:text-primary">
              View the full drop
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <Motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[34px] border border-silver-dark/20 bg-white shadow-[0_26px_90px_-48px_rgba(15,23,42,0.38)]"
            >
              <Link to={`/product/${heroProduct.id}`} className="grid h-full gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[340px] overflow-hidden bg-slate-950">
                  <img
                    src={heroProduct.previewImage}
                    alt={heroProduct.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.06),rgba(15,23,42,0.72))]"></div>
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-dark">
                    Staff pick
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7 sm:p-9">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.26em] text-muted">
                      {heroProduct.createdBy}
                    </p>
                    <h3 className="mt-4 font-heading text-4xl font-bold leading-tight text-dark">
                      {heroProduct.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                      {heroProduct.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {heroProduct.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                      <span className="font-heading text-3xl font-bold text-dark">${heroProduct.price}</span>
                      <span className="inline-flex items-center gap-1">
                        <FiStar className="fill-current text-yellow-400" />
                        {heroProduct.rating}
                      </span>
                      <span>{heroProduct.sales} sales</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-primary">
                      Open featured asset
                      <FiArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            </Motion.article>

            <div className="grid gap-6">
              {featureProducts.map((product, index) => (
                <Motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group overflow-hidden rounded-[28px] border border-silver-dark/20 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link to={`/product/${product.id}`} className="grid h-full grid-cols-[124px_1fr]">
                    <div className="relative overflow-hidden bg-surface">
                      <img
                        src={product.previewImage}
                        alt={product.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-[11px] font-black uppercase tracking-[0.22em] text-muted">
                        {product.category}
                      </p>
                      <h3 className="mt-2 font-heading text-2xl font-bold leading-tight text-dark">
                        {product.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                        {product.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-sm">
                        <span className="font-bold text-dark">${product.price}</span>
                        <span className="font-medium text-primary">{product.rating} rated</span>
                      </div>
                    </div>
                  </Link>
                </Motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-silver-dark/10 bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-primary">Trending now</p>
              <h2 className="mt-3 font-heading text-4xl font-bold text-dark">Best-looking assets on the floor right now.</h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted">
              Stronger product previews, higher visual contrast, and a more collectible feeling catalog.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
            {trendingProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-silver-dark/10 bg-silver-medium/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-2xl">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-primary">How it feels</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-dark">Less scrolling through noise. More instant conviction.</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {stepCards.map((step, index) => (
              <Motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="rounded-[30px] border border-white/60 bg-white/80 p-8 shadow-sm backdrop-blur"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {step.icon}
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <span className="font-heading text-4xl font-bold text-dark/15">0{step.id}</span>
                  <h3 className="font-heading text-2xl font-bold text-dark">{step.title}</h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted">{step.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-primary">Fresh arrivals</p>
              <h2 className="mt-3 font-heading text-4xl font-bold text-dark">New pieces for the next launch sprint.</h2>
            </div>
            <Link to="/browse?sort=newest" className="text-sm font-bold uppercase tracking-[0.2em] text-dark hover:text-primary">
              Browse new work
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative min-h-[760px] overflow-hidden rounded-[30px] border border-dark/10 bg-slate-950 shadow-[0_34px_120px_-56px_rgba(15,23,42,0.9)]"
            >
              <img
                src={leftPanelImage}
                alt="Modern skyscrapers in urban city downtown at twilight"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04),rgba(15,23,42,0.35)_42%,rgba(15,23,42,0.88))]"></div>
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent"></div>

              <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-white/12 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-white backdrop-blur">
                Visual anchor
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="max-w-sm text-white">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-white/60">Art direction</p>
                  <h3 className="mt-3 font-heading text-4xl font-bold leading-tight">
                    Lead with a portrait. Let the products orbit it.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/76">
                    A single striking image gives the section a center of gravity and makes the surrounding cards feel curated instead of evenly weighted.
                  </p>
                </div>
              </div>
            </Motion.article>

            <div className="grid gap-6 sm:grid-cols-2">
              {newArrivals.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
