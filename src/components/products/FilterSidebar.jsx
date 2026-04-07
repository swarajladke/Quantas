import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiStar, FiSliders, FiX } from 'react-icons/fi';
import { categories } from '../../data/mockData';

const priceRanges = [
  { value: 'all', label: 'Any price' },
  { value: 'under-25', label: 'Under $25' },
  { value: '25-50', label: '$25 - $50' },
  { value: '50-75', label: '$50 - $75' },
  { value: '75+', label: '$75+' },
];

const compatibilityOptions = ['WordPress', 'Figma', 'Sketch', 'React', 'HTML5'];

const FilterSection = ({ title, defaultOpen = true, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border/70 py-4 last:border-b-0">
      <button
        className="flex w-full items-center justify-between font-medium text-dark transition-colors hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm uppercase tracking-[0.2em]">{title}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
};

const FilterSidebar = ({
  isMobileOpen,
  setMobileOpen,
  filters,
  toggleCategory,
  setPriceRange,
  setRating,
  setLicense,
  toggleCompatibility,
  clearFilters,
  resultCount,
}) => {
  const selectedPrice = priceRanges.find((range) => range.value === filters.priceRange)?.label || 'Any price';

  const sidebarContent = (
    <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-primary/15 bg-[linear-gradient(180deg,rgba(255,95,218,0.1),rgba(4,4,5,0.98)_24%,rgba(0,0,0,0.99))] shadow-neon">
      <div className="relative overflow-hidden border-b border-white/10 px-5 py-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,79,216,0.24),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(255,43,214,0.14),_transparent_28%)]" />
        <div className="relative flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-white">
              <FiSliders className="text-primary" />
              <h2 className="font-heading text-xl font-bold">Curate results</h2>
            </div>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/50">
              {resultCount} products matching
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={clearFilters} className="text-sm font-medium text-primary hover:underline">
              Reset
            </button>
            <button className="p-1 text-white lg:hidden" onClick={() => setMobileOpen(false)}>
              <FiX size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col overflow-y-auto p-5 scrollbar-hide">
        <div className="overflow-hidden rounded-[24px] border border-primary/20 bg-[linear-gradient(135deg,rgba(255,95,218,0.2),rgba(48,12,38,0.94)_34%,rgba(18,8,16,0.96)_72%,rgba(255,43,214,0.1)_100%)] p-5 text-white shadow-neon">
          <div className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-primary">
            Filter mood
          </div>
          <p className="mt-4 font-heading text-[28px] font-bold leading-tight">
            {filters.category === 'All' ? 'All curated assets' : filters.category}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/68">
            Refine by compatibility, budget, and license to narrow the catalog quickly.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/12 bg-white/10 p-3">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/55">Budget lane</p>
              <p className="mt-2 text-sm font-semibold text-white">{selectedPrice}</p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/10 p-3">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/55">License</p>
              <p className="mt-2 text-sm font-semibold capitalize text-white">
                {filters.license === 'all' ? 'Any license' : filters.license}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[24px] border border-primary/12 bg-[linear-gradient(180deg,rgba(10,8,12,0.98),rgba(8,8,10,0.98))] px-4 py-2 backdrop-blur">
          <FilterSection title="Category" defaultOpen={true}>
            <div className="flex max-h-60 flex-col gap-3 overflow-y-auto pr-1 scrollbar-hide">
              <button
                onClick={() => toggleCategory('All')}
                className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all ${
                  filters.category === 'All'
                    ? 'border-primary/40 bg-[linear-gradient(135deg,rgba(255,95,218,0.18),rgba(255,43,214,0.1)_100%)] text-white shadow-sm'
                    : 'border-white/10 text-white/60 hover:border-primary/40 hover:text-white'
                }`}
              >
                <span className="font-medium">All categories</span>
                <span className="text-xs uppercase tracking-[0.24em]">Open</span>
              </button>

              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.name)}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all ${
                    filters.category === category.name
                      ? 'border-primary/40 bg-[linear-gradient(135deg,rgba(255,95,218,0.18),rgba(255,43,214,0.1)_100%)] text-white shadow-sm'
                      : 'border-white/10 text-white/60 hover:border-primary/40 hover:text-white'
                  }`}
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="rounded-full bg-white/8 px-2 py-0.5 text-xs text-white/55">
                    {category.productCount.toLocaleString()}
                  </span>
                </button>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Price range">
            <div className="grid gap-3">
              {priceRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setPriceRange(range.value)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                    filters.priceRange === range.value
                      ? 'border-primary/40 bg-[linear-gradient(135deg,rgba(255,95,218,0.18),rgba(255,43,214,0.1)_100%)] text-white shadow-sm'
                      : 'border-white/10 text-white/60 hover:border-primary/40 hover:text-white'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Rating">
            <div className="flex flex-col gap-2">
              {[5, 4, 3].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setRating(filters.rating === rating ? null : rating)}
                  className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition-all ${
                    filters.rating === rating
                      ? 'border-primary/40 bg-[linear-gradient(135deg,rgba(255,95,218,0.18),rgba(255,43,214,0.1)_100%)] shadow-sm'
                      : 'border-white/10 hover:border-primary/40 hover:bg-white/6'
                  }`}
                >
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <FiStar key={index} className={index < rating ? 'fill-current' : 'text-white/15'} size={16} />
                    ))}
                  </div>
                  <span className="font-medium text-white">{rating === 5 ? '5.0 only' : `${rating}.0 and up`}</span>
                </button>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="License type">
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'all', label: 'Any' },
                { value: 'regular', label: 'Regular' },
                { value: 'extended', label: 'Extended' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setLicense(option.value)}
                  className={`rounded-2xl border px-4 py-3 text-sm font-medium transition-all ${
                    filters.license === option.value
                      ? 'border-primary/40 bg-[linear-gradient(135deg,rgba(255,95,218,0.18),rgba(255,43,214,0.1)_100%)] text-white shadow-sm'
                      : 'border-white/10 text-white/60 hover:border-primary/40 hover:text-white'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Compatible with" defaultOpen={false}>
            <div className="flex flex-wrap gap-2">
              {compatibilityOptions.map((software) => {
                const isActive = filters.compatibility.includes(software);

                return (
                  <button
                    key={software}
                    onClick={() => toggleCompatibility(software)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                      isActive
                        ? 'border-primary/30 bg-primary text-white shadow-lg shadow-primary/20'
                        : 'border-white/10 bg-white/5 text-white/60 hover:border-primary/40 hover:text-white'
                    }`}
                  >
                    {software}
                  </button>
                );
              })}
            </div>
          </FilterSection>
        </div>

        <div className="mt-5 rounded-[24px] border border-secondary/15 bg-[linear-gradient(135deg,rgba(168,85,247,0.16),rgba(14,11,24,0.96)_60%,rgba(255,43,214,0.08)_100%)] p-5 shadow-neon">
          <p className="text-[11px] font-black uppercase tracking-[0.26em] text-primary">
            Studio note
          </p>
          <h3 className="mt-3 font-heading text-2xl font-bold leading-tight text-white">
            One creator. Cleaner picks.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/66">
            This catalog is curated like a private design library, so the left rail should feel more like guidance than empty chrome.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/12 bg-white/8 p-3">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/52">Focus</p>
              <p className="mt-2 text-sm font-semibold text-white">Fewer, stronger assets</p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/8 p-3">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/52">Tone</p>
              <p className="mt-2 text-sm font-semibold text-white">Curated, not crowded</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 p-4 lg:hidden">
        <button
          onClick={() => setMobileOpen(false)}
          className="w-full rounded-2xl bg-brand-gradient px-4 py-3 text-sm font-bold uppercase tracking-[0.22em] text-white shadow-neon"
        >
          Apply filters
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="sticky top-24 hidden h-[calc(100vh-120px)] w-[300px] flex-shrink-0 self-start lg:block">
        {sidebarContent}
      </div>

      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/55 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <div className={`fixed left-0 top-0 z-50 h-full w-80 transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {sidebarContent}
      </div>
    </>
  );
};

export default FilterSidebar;
