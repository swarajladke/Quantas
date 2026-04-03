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
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={isListView ? { y: -4 } : { y: -12, scale: 1.02 }}
      className={`group overflow-hidden rounded-card border border-silver-dark/30 bg-white transition-all duration-300 hover:border-primary/40 hover:shadow-card-hover ${
        isListView ? 'flex flex-col md:flex-row' : 'flex h-full flex-col'
      }`}
    >
      <Link
        to={`/product/${product.id}`}
        className={`relative block overflow-hidden bg-surface ${isListView ? 'md:w-[40%]' : 'aspect-video'}`}
      >
        <img
          src={product.previewImage}
          alt={product.title}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 ${
            isListView ? 'min-h-[240px]' : ''
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {product.badge && (
          <div className="absolute left-4 top-4 z-10">
            <Badge variant={product.badge.toLowerCase()} className="shadow-lg shadow-primary/20">
              {product.badge}
            </Badge>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center p-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
          <Motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/90 px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-dark shadow-2xl backdrop-blur-md"
          >
            Explore details
            <FiArrowRight className="text-primary transition-transform group-hover:translate-x-1" />
          </Motion.div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-primary">
              {product.category}
            </span>
            <span className="rounded-full bg-dark/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
              {product.license === 'extended' ? 'Extended license' : 'Regular license'}
            </span>
          </div>

          <div className="flex items-start justify-between gap-3">
            <Link to={`/product/${product.id}`} className="transition-colors duration-300 hover:text-primary">
              <h3 className={`font-heading font-bold leading-tight text-dark ${isListView ? 'line-clamp-2 text-2xl' : 'line-clamp-2'}`}>
                {product.title}
              </h3>
            </Link>
            <span className="whitespace-nowrap text-lg font-bold text-dark">${product.price}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
            <div className="flex items-center gap-1 font-bold text-dark">
              <FiStar className="fill-current text-yellow-400" />
              {product.rating}
            </div>
            <span>{product.reviewCount} reviews</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>{product.sales} sales</span>
          </div>
        </div>

        <p className={`mb-6 flex-1 text-sm leading-relaxed text-muted ${isListView ? 'line-clamp-3 max-w-2xl' : 'line-clamp-3'}`}>
          {product.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {product.tags.slice(0, isListView ? 4 : 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-white px-3 py-1 text-[11px] font-medium text-muted transition-colors group-hover:border-primary/30 group-hover:text-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={`mt-auto border-t border-border/50 pt-5 ${isListView ? 'flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between' : 'flex items-center justify-between'}`}>
          <div className={`flex ${isListView ? 'flex-wrap gap-x-5 gap-y-2' : 'items-center gap-3'} text-xs text-muted`}>
            <span className="font-bold uppercase tracking-[0.18em] text-dark/80">
              {product.createdBy}
            </span>
            <span className="flex items-center gap-1">
              <FiClock className="text-primary" />
              Updated {new Date(product.lastUpdated).toLocaleDateString()}
            </span>
            <span>{product.fileSize}</span>
            {isListView && <span>{product.compatibility.join(' / ')}</span>}
          </div>

          <Motion.button
            whileHover={{ scale: 1.1, rotate: 4 }}
            whileTap={{ scale: 0.95 }}
            onClick={(event) => {
              event.preventDefault();
              addToCart(product);
            }}
            className={`flex items-center justify-center gap-2 rounded-2xl border border-primary/10 bg-primary/5 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 ${
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
