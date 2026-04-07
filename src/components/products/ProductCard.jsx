import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { FiStar, FiShoppingCart, FiArrowRight, FiClock } from 'react-icons/fi';
import Badge from '../common/Badge';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, index = 0, viewMode = 'grid' }) => {
  const { addToCart } = useCart();
  const isListView = viewMode === 'list';

  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={isListView ? { y: -3 } : { y: -8, scale: 1.015 }}
      className={`gallery-panel group rounded-[30px] text-white transition-all duration-500 ease-out hover:border-primary/30 hover:shadow-neon ${
        isListView ? 'flex flex-col md:flex-row' : 'flex h-full flex-col'
      }`}
    >
      <Link
        to={`/product/${product.id}`}
        className={`gallery-frame relative m-3 block rounded-[24px] ${isListView ? 'md:w-[40%]' : 'aspect-[16/10]'}`}
      >
        <img
          src={product.previewImage}
          alt={product.title}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105 ${
            isListView ? 'min-h-[240px]' : ''
          }`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,95,218,0.05),rgba(255,43,214,0.05)_24%,rgba(0,0,0,0.72))] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

        {product.badge && (
          <div className="absolute left-4 top-4 z-10">
            <Badge variant={product.badge.toLowerCase()} className="shadow-lg shadow-primary/25">
              {product.badge}
            </Badge>
          </div>
        )}

        <div className="gallery-chip absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-white backdrop-blur">
          {product.compatibility[0]}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center p-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
          <Motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gallery-chip flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-white shadow-2xl backdrop-blur-md transition-transform duration-300 ease-out"
          >
            Explore details
            <FiArrowRight className="text-primary transition-transform group-hover:translate-x-1" />
          </Motion.div>
        </div>
      </Link>

      <div className="relative z-[1] flex flex-1 flex-col px-6 pb-6 pt-3">
        <div className="mb-4 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-primary">
              {product.category}
            </span>
            <span className="gallery-chip rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/58">
              {product.license === 'extended' ? 'Extended license' : 'Regular license'}
            </span>
          </div>

          <div className="flex items-start justify-between gap-3">
            <Link to={`/product/${product.id}`} className="transition-colors duration-300 hover:text-primary">
              <h3 className={`font-heading font-bold leading-tight text-white ${isListView ? 'line-clamp-2 text-2xl' : 'line-clamp-2 text-[1.55rem]'}`}>
                {product.title}
              </h3>
            </Link>
            <span className="whitespace-nowrap rounded-full border border-primary/15 bg-brand-gradient px-3 py-1.5 text-base font-bold text-white shadow-neon">
              ${product.price}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-white/56">
            <div className="flex items-center gap-1 font-bold text-white">
              <FiStar className="fill-current text-yellow-400" />
              {product.rating}
            </div>
            <span>{product.reviewCount} reviews</span>
            <span className="h-1 w-1 rounded-full bg-white/18" />
            <span>{product.sales} sales</span>
          </div>
        </div>

        <p className={`mb-6 flex-1 text-sm leading-relaxed text-white/66 ${isListView ? 'line-clamp-3 max-w-2xl' : 'line-clamp-3'}`}>
          {product.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {product.tags.slice(0, isListView ? 4 : 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/12 bg-[linear-gradient(135deg,rgba(255,95,218,0.08),rgba(255,43,214,0.06)_100%)] px-3 py-1 text-[11px] font-medium text-white/62 transition-colors group-hover:border-primary/30 group-hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={`gallery-chip mt-auto rounded-[24px] px-4 py-4 ${isListView ? 'flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between' : 'flex items-center justify-between gap-3'}`}>
          <div className={`flex ${isListView ? 'flex-wrap gap-x-5 gap-y-2' : 'flex-col gap-2'} text-xs text-white/52`}>
            <span className="font-bold uppercase tracking-[0.18em] text-white/78">
              {product.createdBy}
            </span>
            <div className={`flex ${isListView ? 'flex-wrap gap-x-5 gap-y-2' : 'flex-wrap gap-2'}`}>
              <span className="flex items-center gap-1">
                <FiClock className="text-primary" />
                Updated {new Date(product.lastUpdated).toLocaleDateString()}
              </span>
              <span>{product.fileSize}</span>
              {isListView && <span>{product.compatibility.join(' / ')}</span>}
            </div>
          </div>

          <Motion.button
            whileHover={{ scale: 1.1, rotate: 4 }}
            whileTap={{ scale: 0.95 }}
            onClick={(event) => {
              event.preventDefault();
              addToCart(product);
            }}
            className={`flex items-center justify-center gap-2 rounded-2xl border border-primary/20 bg-primary/12 text-primary transition-all duration-500 ease-out hover:bg-brand-gradient hover:text-white hover:shadow-neon ${
              isListView ? 'self-start px-4 py-3 text-sm font-bold' : 'h-10 w-10'
            }`}
          >
            <FiShoppingCart size={18} />
            {isListView && <span>Add to cart</span>}
          </Motion.button>
        </div>
      </div>
    </Motion.div>
  );
};

export default ProductCard;
