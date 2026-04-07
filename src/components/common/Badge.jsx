import React from 'react';

const Badge = ({ variant, children, className = '' }) => {
  const getStyles = () => {
    switch (variant) {
      case 'primary':
      case 'bestseller':
        return 'bg-brand-gradient text-white border-transparent shadow-neon';
      case 'new':
        return 'bg-brand-gradient text-white border-transparent shadow-neon';
      case 'sale':
        return 'bg-rose-500 text-white border-rose-500';
      case 'featured':
        return 'gallery-chip text-white border-white/10';
      case 'pending':
        return 'bg-yellow-500 text-white border-yellow-500';
      default:
        return 'gallery-chip text-white border-white/10';
    }
  };

  return (
    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getStyles()} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
