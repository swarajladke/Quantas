import React, { useState } from 'react';
import { FiGrid, FiList, FiFilter, FiChevronLeft, FiChevronRight, FiTrendingUp, FiX } from 'react-icons/fi';
import FilterSidebar from '../components/products/FilterSidebar';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/mockData';

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

  return (
    <div className="min-h-screen bg-surface py-10">
      <div className="container mx-auto flex flex-col gap-8 px-4 lg:flex-row">
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
          <section className="overflow-hidden rounded-[28px] border border-silver-dark/20 bg-liquid-chrome px-6 py-8 shadow-sm sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">
                  Discover the catalog
                </p>
                <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-dark sm:text-5xl">
                  Curated digital assets with sharper filtering and faster decision making.
                </h1>
                <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
                  Browse premium storefront kits, launch-ready templates, and productized design systems with a cleaner, more editorial shopping flow.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  { label: 'Available now', value: `${products.length}+` },
                  { label: 'Top rating', value: '4.9/5' },
                  { label: 'Fresh updates', value: 'Weekly' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/60 bg-white/80 p-4 backdrop-blur">
                    <div className="text-xs font-bold uppercase tracking-[0.24em] text-muted">{item.label}</div>
                    <div className="mt-2 font-heading text-2xl font-bold text-dark">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="mt-6 rounded-card border border-border bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-4">
                <button
                  className="flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-2 font-medium text-dark transition-colors hover:text-primary lg:hidden"
                  onClick={() => setMobileFilterOpen(true)}
                >
                  <FiFilter /> Filters
                </button>
                <div>
                  <div className="flex items-center gap-2 text-dark">
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
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-2 text-sm font-medium text-dark focus:border-primary focus:outline-none sm:w-auto"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="hidden items-center rounded-2xl border border-border bg-surface p-1 sm:flex">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`rounded-xl p-2 transition-colors ${viewMode === 'grid' ? 'bg-white text-primary shadow-sm' : 'text-muted hover:text-dark'}`}
                    title="Grid view"
                  >
                    <FiGrid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`rounded-xl p-2 transition-colors ${viewMode === 'list' ? 'bg-white text-primary shadow-sm' : 'text-muted hover:text-dark'}`}
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
                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-dark transition-colors hover:border-primary/40"
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

          <div className="mt-6 rounded-card border border-border bg-white px-4 py-3 shadow-sm">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="font-bold uppercase tracking-[0.22em] text-dark">Popular cues</span>
              {['React-ready', 'Polished checkout', 'Editorial landing pages', 'Admin dashboards'].map((cue) => (
                <span key={cue} className="rounded-full bg-surface px-3 py-1.5">
                  {cue}
                </span>
              ))}
            </div>
          </div>

          <div className={`mt-6 grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
            {sortedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} viewMode={viewMode} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="mt-6 rounded-[28px] border border-dashed border-border bg-white px-8 py-14 text-center">
              <h2 className="font-heading text-2xl font-bold text-dark">No products match this filter mix.</h2>
              <p className="mt-3 text-muted">
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
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white text-muted transition-colors hover:border-primary hover:text-primary" disabled>
              <FiChevronLeft size={20} />
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary font-bold text-white shadow-sm">
              1
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white font-medium text-dark transition-colors hover:border-primary hover:text-primary">
              2
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white font-medium text-dark transition-colors hover:border-primary hover:text-primary">
              3
            </button>
            <span className="mx-1 text-muted">...</span>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white font-medium text-dark transition-colors hover:border-primary hover:text-primary">
              6
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white text-dark transition-colors hover:border-primary hover:text-primary">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
