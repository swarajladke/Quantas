import React, { useState } from 'react';
import {
  FiGrid,
  FiList,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
  FiTrendingUp,
  FiX,
  FiArrowUpRight,
  FiCompass,
  FiLayers,
} from 'react-icons/fi';
import FilterSidebar from '../components/products/FilterSidebar';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/mockData';
import useDocumentTitle from '../hooks/useDocumentTitle';

const sortOptions = [
  { value: 'featured', label: 'Featured first' },
  { value: 'newest', label: 'Newest updates' },
  { value: 'rating', label: 'Highest rated' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

const priceRangeLabels = {
  'under-25': 'Under $25',
  '25-50': '$25 - $50',
  '50-75': '$50 - $75',
  '75+': '$75+',
};

const featuredCollections = [
  {
    title: 'Launch Week',
    caption: 'High-converting landing kits with bold editorial pacing.',
    accent: 'from-[#ff9cf0] via-[#ff2bd6] to-[#8b5cf6]',
  },
  {
    title: 'Studio Systems',
    caption: 'Sharper UI kits and admin flows for product teams.',
    accent: 'from-[#ff63dc] via-[#ff2bd6] to-[#a855f7]',
  },
  {
    title: 'Brand Atmosphere',
    caption: 'Fonts, graphics, and storefront assets with stronger presence.',
    accent: 'from-[#ffb0f2] via-[#ff2bd6] to-[#c026d3]',
  },
];

const getPriceRangeMatch = (price, priceRange) => {
  switch (priceRange) {
    case 'under-25':
      return price < 25;
    case '25-50':
      return price >= 25 && price <= 50;
    case '50-75':
      return price > 50 && price <= 75;
    case '75+':
      return price > 75;
    default:
      return true;
  }
};

const BrowsePage = () => {
  useDocumentTitle('Browse Catalog');
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: 'all',
    rating: null,
    license: 'all',
    compatibility: [],
  });

  const toggleCategory = (category) => {
    setFilters((current) => ({
      ...current,
      category: category === current.category ? 'All' : category,
    }));
  };

  const setPriceRange = (priceRange) => {
    setFilters((current) => ({ ...current, priceRange }));
  };

  const setRating = (rating) => {
    setFilters((current) => ({ ...current, rating }));
  };

  const setLicense = (license) => {
    setFilters((current) => ({ ...current, license }));
  };

  const toggleCompatibility = (compatibility) => {
    setFilters((current) => ({
      ...current,
      compatibility: current.compatibility.includes(compatibility)
        ? current.compatibility.filter((item) => item !== compatibility)
        : [...current.compatibility, compatibility],
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'All',
      priceRange: 'all',
      rating: null,
      license: 'all',
      compatibility: [],
    });
  };

  const filteredProducts = products
    .filter((product) => filters.category === 'All' || product.category === filters.category)
    .filter((product) => getPriceRangeMatch(product.price, filters.priceRange))
    .filter((product) => !filters.rating || Number(product.rating) >= filters.rating)
    .filter((product) => filters.license === 'all' || product.license === filters.license)
    .filter(
      (product) =>
        filters.compatibility.length === 0 ||
        filters.compatibility.some((item) => product.compatibility.includes(item)),
    );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      case 'rating':
        return Number(b.rating) - Number(a.rating);
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      default:
        return (b.badge === 'Bestseller') - (a.badge === 'Bestseller') || b.sales - a.sales;
    }
  });

  const activeFilters = [
    filters.category !== 'All'
      ? { key: 'category', label: filters.category, clear: () => toggleCategory(filters.category) }
      : null,
    filters.priceRange !== 'all'
      ? { key: 'price', label: priceRangeLabels[filters.priceRange], clear: () => setPriceRange('all') }
      : null,
    filters.rating
      ? { key: 'rating', label: `${filters.rating}.0 and up`, clear: () => setRating(null) }
      : null,
    filters.license !== 'all'
      ? {
          key: 'license',
          label: `${filters.license === 'extended' ? 'Extended' : 'Regular'} license`,
          clear: () => setLicense('all'),
        }
      : null,
    ...filters.compatibility.map((item) => ({
      key: `compatibility-${item}`,
      label: item,
      clear: () => toggleCompatibility(item),
    })),
  ].filter(Boolean);

  const curatedDrops = sortedProducts.slice(0, 3);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#000000] py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] overflow-hidden">
        <div className="absolute left-[-8%] top-[-16%] h-72 w-72 rounded-full bg-primary/14 blur-3xl" />
        <div className="absolute right-[-8%] top-24 h-80 w-80 rounded-full bg-accent/12 blur-3xl" />
        <div className="absolute left-1/3 top-40 h-64 w-64 rounded-full bg-secondary/12 blur-3xl" />
      </div>

      <div className="container relative mx-auto flex flex-col gap-8 px-4 lg:flex-row">
        <FilterSidebar
          isMobileOpen={isMobileFilterOpen}
          setMobileOpen={setMobileFilterOpen}
          filters={filters}
          toggleCategory={toggleCategory}
          setPriceRange={setPriceRange}
          setRating={setRating}
          setLicense={setLicense}
          toggleCompatibility={toggleCompatibility}
          clearFilters={clearFilters}
          resultCount={sortedProducts.length}
        />

        <div className="flex-1">
          <section className="gallery-panel rounded-[32px] px-6 py-8 text-white sm:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,95,218,0.22),_transparent_32%),radial-gradient(circle_at_60%_12%,_rgba(217,70,239,0.16),_transparent_22%),radial-gradient(circle_at_85%_18%,_rgba(255,43,214,0.14),_transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
            <div className="absolute inset-y-0 right-0 w-[42%] bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.08),transparent)]" />

            <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">
                  Discover the catalog
                </p>
                <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
                  Browse with more color, stronger curation, and a livelier sense of discovery.
                </h1>
                <p className="mt-4 max-w-2xl text-base text-white/68 sm:text-lg">
                  Jump between premium storefront kits, launch-ready templates, and productized systems in a layout that feels more like a magazine spread than a plain catalog.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    { icon: <FiCompass />, label: 'Discovery-led browsing' },
                    { icon: <FiLayers />, label: 'Editorial collections' },
                    { icon: <FiTrendingUp />, label: 'Top-performing assets' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/12 bg-[linear-gradient(135deg,rgba(14,9,16,0.94),rgba(30,10,26,0.92)_56%,rgba(18,8,10,0.92)_100%)] px-4 py-2 text-sm text-white shadow-sm backdrop-blur"
                    >
                      <span className="text-primary">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 xl:grid-cols-[0.72fr_1fr]">
                <div className="gallery-panel rounded-[28px] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.26em] text-white/52">Catalog pulse</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                    {[
                      { label: 'Available now', value: `${products.length}+` },
                      { label: 'Top rating', value: '4.9/5' },
                      { label: 'Fresh updates', value: 'Weekly' },
                    ].map((item) => (
                      <div key={item.label} className="gallery-chip rounded-2xl p-4">
                        <div className="text-xs font-bold uppercase tracking-[0.24em] text-white/52">{item.label}</div>
                        <div className="mt-2 font-heading text-2xl font-bold text-white">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  {featuredCollections.map((collection, index) => (
                    <div
                      key={collection.title}
                      className={`gallery-frame group relative rounded-[26px] bg-gradient-to-br ${collection.accent} p-5 shadow-[0_24px_50px_-32px_rgba(255,79,216,0.32)]`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.22),_transparent_32%)]" />
                      <div className="relative flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-white/70">
                            {index === 0 ? 'Featured drop' : index === 1 ? 'Staff cue' : 'Fresh energy'}
                          </p>
                          <h2 className="mt-2 font-heading text-2xl font-bold text-white">
                            {collection.title}
                          </h2>
                          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/82">
                            {collection.caption}
                          </p>
                        </div>
                        <div className="rounded-full border border-primary/18 bg-[linear-gradient(135deg,rgba(16,9,18,0.94),rgba(34,10,30,0.92)_56%,rgba(18,8,10,0.92)_100%)] p-3 text-white backdrop-blur">
                          <FiArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {curatedDrops.length > 0 && (
            <section className="mt-6 grid gap-4 xl:grid-cols-[0.95fr_2.05fr]">
              <div className="gallery-panel rounded-[28px] p-6">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Curated drops</p>
                <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-white">
                  A brighter lane between trending products and everyday browsing.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/68">
                  Use this strip to spotlight one or two moods before the main grid starts. It helps the page feel designed, not endlessly repeated.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {curatedDrops.map((product, index) => (
                  <div
                    key={product.id}
                    className={`gallery-frame group relative rounded-[28px] p-5 shadow-sm ${
                      index === 0
                        ? 'bg-[linear-gradient(145deg,#ff6dde,#7c1f73_22%,#150c1c_64%,#ff2bd6)] text-white'
                        : index === 1
                          ? 'bg-[linear-gradient(145deg,#ff7ee1,#52184d_24%,#120b18_70%,#ff4be3)] text-white'
                          : 'bg-[linear-gradient(145deg,#ff9ae9,#681a59_24%,#130b18_70%,#ff73ea)] text-white'
                    }`}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_35%)]" />
                    </div>
                    <div className="relative">
                      <div className="overflow-hidden rounded-[22px]">
                        <img
                          src={product.previewImage}
                          alt={product.title}
                          className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] ${
                          index === 0 ? 'bg-white/12 text-white' : 'bg-primary/10 text-primary'
                        }`}>
                          {product.category}
                        </span>
                        <span className={`text-sm font-bold ${index === 0 ? 'text-white/80' : 'text-white/72'}`}>
                          ${product.price}
                        </span>
                      </div>
                      <h3 className="mt-3 font-heading text-2xl font-bold leading-tight text-white">
                        {product.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/76">
                        {product.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="gallery-panel mt-6 rounded-[28px] p-4">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-4">
                <button
                  className="flex items-center gap-2 rounded-2xl border border-primary/12 bg-[linear-gradient(135deg,rgba(12,9,14,0.94),rgba(24,10,21,0.92)_100%)] px-4 py-2 font-medium text-white transition-colors hover:text-primary lg:hidden"
                  onClick={() => setMobileFilterOpen(true)}
                >
                  <FiFilter /> Filters
                </button>
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <FiTrendingUp className="text-primary" />
                    <span className="text-sm font-bold uppercase tracking-[0.22em]">Merchandise view</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    Showing {sortedProducts.length} curated results
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between xl:justify-end">
                <div className="flex items-center gap-2">
                  <span className="hidden text-sm text-muted sm:block">Sort by</span>
                  <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    className="w-full rounded-2xl border border-primary/12 bg-[linear-gradient(135deg,rgba(12,9,14,0.94),rgba(24,10,21,0.92)_100%)] px-4 py-2 text-sm font-medium text-white focus:border-primary focus:outline-none sm:w-auto"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="hidden items-center rounded-2xl border border-primary/12 bg-[linear-gradient(135deg,rgba(12,9,14,0.94),rgba(24,10,21,0.92)_100%)] p-1 sm:flex">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`rounded-xl p-2 transition-colors ${viewMode === 'grid' ? 'bg-brand-gradient text-white shadow-neon' : 'text-white/52 hover:text-white'}`}
                    title="Grid view"
                  >
                    <FiGrid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`rounded-xl p-2 transition-colors ${viewMode === 'list' ? 'bg-brand-gradient text-white shadow-neon' : 'text-white/52 hover:text-white'}`}
                    title="List view"
                  >
                    <FiList size={18} />
                  </button>
                </div>
              </div>
            </div>

            {activeFilters.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                {activeFilters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={filter.clear}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/12 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-primary/40"
                  >
                    {filter.label}
                    <FiX className="text-primary" />
                  </button>
                ))}
                <button onClick={clearFilters} className="text-sm font-medium text-primary hover:underline">
                  Clear all
                </button>
              </div>
            )}
          </div>

          <div className="gallery-panel mt-6 rounded-[28px]">
            <div className="grid gap-4 px-4 py-5 md:grid-cols-[1.1fr_0.9fr] md:px-6">
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/62">
                <span className="font-bold uppercase tracking-[0.22em] text-white">Popular cues</span>
                {['React-ready', 'Polished checkout', 'Editorial landing pages', 'Admin dashboards'].map((cue) => (
                  <span key={cue} className="rounded-full bg-[linear-gradient(135deg,rgba(12,9,14,0.94),rgba(24,10,21,0.92)_100%)] px-3 py-1.5">
                    {cue}
                  </span>
                ))}
              </div>

              <div className="gallery-frame rounded-[22px] bg-[linear-gradient(145deg,#ff68dc,#74206d_24%,#140b19_66%,#ff2bd6_100%)] px-5 py-4 text-white">
                <p className="text-[11px] font-black uppercase tracking-[0.26em] text-white/60">Visual momentum</p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Alternate soft white product surfaces with one darker promotional block to keep the results area feeling vibrant and paced.
                </p>
              </div>
            </div>
          </div>

          <div className={`mt-6 grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
            {sortedProducts.map((product, index) => (
              <div
                key={product.id}
                className={viewMode === 'grid' && (index === 0 || (index === 5 && sortedProducts.length > 5)) ? 'xl:col-span-2' : ''}
              >
                <ProductCard product={product} index={index} viewMode={viewMode} />
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="gallery-panel mt-6 rounded-[28px] border-dashed px-8 py-14 text-center">
              <h2 className="font-heading text-2xl font-bold text-white">No products match this filter mix.</h2>
              <p className="mt-3 text-white/62">
                Try clearing one or two filters to widen the catalog again.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 rounded-2xl bg-primary px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] text-white"
              >
                Reset filters
              </button>
            </div>
          )}

          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/12 bg-[linear-gradient(135deg,rgba(12,9,14,0.94),rgba(24,10,21,0.92)_100%)] text-white/45 transition-colors hover:border-primary hover:text-primary" disabled>
              <FiChevronLeft size={20} />
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient font-bold text-white shadow-neon">
              1
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/12 bg-[linear-gradient(135deg,rgba(12,9,14,0.94),rgba(24,10,21,0.92)_100%)] font-medium text-white transition-colors hover:border-primary hover:text-primary">
              2
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/12 bg-[linear-gradient(135deg,rgba(12,9,14,0.94),rgba(24,10,21,0.92)_100%)] font-medium text-white transition-colors hover:border-primary hover:text-primary">
              3
            </button>
            <span className="mx-1 text-white/45">...</span>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/12 bg-[linear-gradient(135deg,rgba(12,9,14,0.94),rgba(24,10,21,0.92)_100%)] font-medium text-white transition-colors hover:border-primary hover:text-primary">
              6
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/12 bg-[linear-gradient(135deg,rgba(12,9,14,0.94),rgba(24,10,21,0.92)_100%)] text-white transition-colors hover:border-primary hover:text-primary">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
