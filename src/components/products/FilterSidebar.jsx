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
    <div className="border-b border-border py-4 last:border-b-0">
      <button
        className="flex w-full items-center justify-between font-medium text-dark transition-colors hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
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
  const sidebarContent = (
    <div className="flex h-full flex-col rounded-card border border-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <div className="flex items-center gap-2 text-dark">
            <FiSliders className="text-primary" />
            <h2 className="font-heading text-xl font-bold">Curate results</h2>
          </div>
          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-muted">
            {resultCount} products matching
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={clearFilters} className="text-sm font-medium text-primary hover:underline">
            Reset
          </button>
          <button className="p-1 text-dark lg:hidden" onClick={() => setMobileOpen(false)}>
            <FiX size={24} />
          </button>
        </div>
      </div>

      <div className="h-full overflow-y-auto p-5 scrollbar-hide">
        <div className="mb-5 rounded-2xl bg-liquid-chrome p-4">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted">Selected tone</p>
          <p className="mt-2 font-heading text-xl font-bold text-dark">
            {filters.category === 'All' ? 'All curated assets' : filters.category}
          </p>
          <p className="mt-2 text-sm text-muted">
            Refine by compatibility, budget, and license to narrow the catalog quickly.
          </p>
        </div>

        <FilterSection title="Category" defaultOpen={true}>
          <div className="flex max-h-60 flex-col gap-3 overflow-y-auto pr-1 scrollbar-hide">
            <button
              onClick={() => toggleCategory('All')}
              className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition-colors ${
                filters.category === 'All'
                  ? 'border-primary bg-primary/5 text-dark'
                  : 'border-border text-muted hover:border-primary/40 hover:text-dark'
              }`}
            >
              <span className="font-medium">All categories</span>
              <span className="text-xs uppercase tracking-[0.24em]">Open</span>
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.name)}
                className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition-colors ${
                  filters.category === category.name
                    ? 'border-primary bg-primary/5 text-dark'
                    : 'border-border text-muted hover:border-primary/40 hover:text-dark'
                }`}
              >
                <span className="font-medium">{category.name}</span>
                <span className="rounded-full bg-surface px-2 py-0.5 text-xs text-muted">
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
                className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                  filters.priceRange === range.value
                    ? 'border-primary bg-primary/5 text-dark'
                    : 'border-border text-muted hover:border-primary/40 hover:text-dark'
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
                className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition-colors ${
                  filters.rating === rating
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/40 hover:bg-surface'
                }`}
              >
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <FiStar key={index} className={index < rating ? 'fill-current' : 'text-border'} size={16} />
                  ))}
                </div>
                <span className="font-medium text-dark">{rating === 5 ? '5.0 only' : `${rating}.0 and up`}</span>
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
                className={`rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${
                  filters.license === option.value
                    ? 'border-primary bg-primary/5 text-dark'
                    : 'border-border text-muted hover:border-primary/40 hover:text-dark'
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
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-primary bg-primary text-white'
                      : 'border-border bg-white text-muted hover:border-primary/40 hover:text-dark'
                  }`}
                >
                  {software}
                </button>
              );
            })}
          </div>
        </FilterSection>
      </div>

      <div className="border-t border-border p-4 lg:hidden">
        <button
          onClick={() => setMobileOpen(false)}
          className="w-full rounded-2xl bg-primary px-4 py-3 text-sm font-bold uppercase tracking-[0.22em] text-white"
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
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <div className={`fixed left-0 top-0 z-50 h-full w-80 transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {sidebarContent}
      </div>
    </>
  );
};

export default FilterSidebar;
