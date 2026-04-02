import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiCheckCircle } from 'react-icons/fi';

const SellerCard = ({ seller, dark = false }) => {
  return (
    <div className={`${dark ? 'bg-white/5 border border-white/10 text-white backdrop-blur-md' : 'bg-white border border-border text-dark shadow-card'} rounded-card hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center h-full group`}>
      {/* Avatar Container */}
      <div className="relative mb-6">
        <div className="relative">
          <img 
            src={seller.avatar} 
            alt={seller.name} 
            className={`w-20 h-20 rounded-full object-cover ring-4 ${dark ? 'ring-primary/20' : 'ring-surface'} border border-border group-hover:scale-105 transition-transform duration-500`}
          />
          {seller.verified && (
            <div className={`absolute bottom-0 right-0 ${dark ? 'bg-[#09090b]' : 'bg-white'} rounded-full p-1 shadow-lg`}>
              <FiCheckCircle className="text-primary fill-current" size={18} />
            </div>
          )}
        </div>
      </div>
      
      {/* Name and Badge */}
      <h3 className={`font-heading font-bold ${dark ? 'text-white' : 'text-dark'} text-xl mb-2 line-clamp-1`}>{seller.name}</h3>
      <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${dark ? 'text-primary bg-primary/10' : 'text-primary bg-primary-light'} px-4 py-1 rounded-full mb-6`}>
        Elite Creator
      </span>
      
      {/* Stats */}
      <div className={`flex items-center justify-center gap-6 text-sm mb-8 w-full border-y ${dark ? 'border-white/5 py-4' : 'border-border py-4'}`}>
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-1.5">
            <FiStar className="text-yellow-400 fill-yellow-400" size={14} />
            <span className="font-bold">{seller.rating}</span>
          </div>
          <span className={`text-[10px] uppercase tracking-widest ${dark ? 'text-white/40' : 'text-muted'} font-bold mt-1`}>Rating</span>
        </div>
        <div className={`h-8 w-px ${dark ? 'bg-white/10' : 'bg-border'}`}></div>
        <div className="flex flex-col">
          <span className="font-bold">{seller.totalSales.toLocaleString()}</span>
          <span className={`text-[10px] uppercase tracking-widest ${dark ? 'text-white/40' : 'text-muted'} font-bold mt-1`}>Sales</span>
        </div>
      </div>
      
      {/* Action Button */}
      <Link 
        to={`/seller/${seller.id}`} 
        className={`mt-auto w-full py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
          dark 
          ? 'bg-white text-dark hover:bg-primary hover:text-white' 
          : 'bg-surface text-dark hover:bg-primary hover:text-white border border-border hover:border-primary'
        }`}
      >
        View Archive
      </Link>
    </div>
  );
};

export default SellerCard;

