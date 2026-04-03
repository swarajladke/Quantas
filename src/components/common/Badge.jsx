import React from 'react';

const Badge = ({ variant, children, className = '' }) => {
  const getStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-white border-primary';
      case 'bestseller':
        return 'bg-primary text-white border-primary';
      case 'new':
        return 'bg-sky-500 text-white border-sky-500';
      case 'sale':
        return 'bg-rose-500 text-white border-rose-500';
      case 'featured':
        return 'bg-dark text-white border-dark';
      case 'pending':
        return 'bg-yellow-500 text-white border-yellow-500';
      default:
        return 'bg-surface text-dark border-border';
    }
  };

  return (
    <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border ${getStyles()} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
