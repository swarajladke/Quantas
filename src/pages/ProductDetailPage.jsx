import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronRight, FiCheckCircle, FiStar, FiShoppingCart, FiEye, FiExternalLink } from 'react-icons/fi';
import { products, reviews } from '../data/mockData';
import Tabs from '../components/common/Tabs';
import ReviewCard from '../components/products/ReviewCard';
import Badge from '../components/common/Badge';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart, setIsCartOpen } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [license, setLicense] = useState('regular');
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Safely get a product or fallback to the first one
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  
  const images = [
    product.previewImage,
    `https://picsum.photos/seed/prod${product.id}a/600/400`,
    `https://picsum.photos/seed/prod${product.id}b/600/400`,
    `https://picsum.photos/seed/prod${product.id}c/600/400`
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past 600px
      setShowStickyBar(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabData = [
    {
      label: 'Overview',
      content: (
        <div className="prose prose-sm md:prose-base max-w-none text-dark">
          <h3 className="font-heading font-bold text-xl mb-4">Premium Features Included</h3>
          <p className="mb-4 text-muted leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <ul className="list-disc pl-5 mb-6 text-muted space-y-2">
            <li>Fully responsive design for all devices</li>
            <li>Customizable Tailwind CSS components</li>
            <li>Light and dark mode support</li>
            <li>Detailed documentation and easy setup</li>
            <li>Free lifetime updates</li>
          </ul>
          <img src={images[1]} alt="Preview" className="w-full rounded-card mb-6" />
          <h3 className="font-heading font-bold text-xl mb-4">Why choose this product?</h3>
          <p className="text-muted leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      )
    },
    {
      label: 'Reviews',
      content: (
        <div>
          {/* Star Breakdown */}
          <div className="flex flex-col md:flex-row gap-8 mb-8 p-6 bg-surface rounded-card border border-border">
            <div className="flex flex-col items-center justify-center text-center pb-6 md:pb-0 md:pr-8 md:border-r border-border">
              <span className="font-heading font-bold text-5xl text-dark mb-2">{product.rating}</span>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-current" size={18} />
                ))}
              </div>
              <span className="text-sm text-muted font-medium">Based on {product.reviewCount} reviews</span>
            </div>
            
            <div className="flex-1 flex flex-col gap-2 justify-center">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-3">
                  <span className="text-sm font-bold w-4">{star}</span>
                  <FiStar className="text-muted" size={12} />
                  <div className="flex-1 h-2.5 bg-border rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-400 rounded-full" 
                      style={{ width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : 2}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-muted w-8 text-right font-medium">
                    {star === 5 ? Math.floor(product.reviewCount * 0.7) : 
                     star === 4 ? Math.floor(product.reviewCount * 0.2) : 
                     star === 3 ? Math.floor(product.reviewCount * 0.05) : 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col border border-border rounded-card overflow-hidden">
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      )
    },
    {
      label: 'Changelog',
      content: (
        <div className="flex flex-col gap-8 pb-4 pl-2">
          <div className="border-l-2 border-primary pl-6 relative">
            <div className="absolute w-3.5 h-3.5 bg-primary rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
            <h4 className="font-bold text-dark mb-1">Version 2.1.0</h4>
            <span className="text-xs text-primary bg-primary-light px-2 py-0.5 rounded-full font-bold mb-4 inline-block">Latest Update</span>
            <span className="text-xs text-muted font-mono mb-3 block">March 28, 2026</span>
            <ul className="list-disc pl-5 text-sm text-muted space-y-2">
              <li>Added new dashboard layouts</li>
              <li>Fixed responsive issues on mobile Safari</li>
              <li>Updated dependency packages</li>
            </ul>
          </div>
          <div className="border-l-2 border-border pl-6 relative">
            <div className="absolute w-3.5 h-3.5 bg-border rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
            <h4 className="font-bold text-dark mb-1">Version 2.0.0</h4>
            <span className="text-xs text-muted font-mono mb-3 block">February 12, 2026</span>
            <ul className="list-disc pl-5 text-sm text-muted space-y-2">
              <li>Complete UI overhaul with Tailwind CSS</li>
              <li>Added dark mode support</li>
              <li>Performance improvements</li>
            </ul>
          </div>
          <div className="border-l-2 border-border pl-6 relative">
            <div className="absolute w-3.5 h-3.5 bg-border rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
            <h4 className="font-bold text-dark mb-1">Version 1.0.0</h4>
            <span className="text-xs text-muted font-mono mb-3 block">January 05, 2026</span>
            <ul className="list-disc pl-5 text-sm text-muted space-y-2">
              <li>Initial Release</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      label: 'Support',
      content: (
        <div className="space-y-4">
          <div className="border border-border rounded-card p-5 bg-surface/30">
            <h4 className="font-bold text-dark mb-2 text-lg">How do I install the template?</h4>
            <p className="text-sm text-muted leading-relaxed">You can install it by running npm install after extracting the zip file. Detailed instructions are available in the documentation folder provided upon download.</p>
          </div>
          <div className="border border-border rounded-card p-5 bg-surface/30">
            <h4 className="font-bold text-dark mb-2 text-lg">Can I use this for multiple projects?</h4>
            <p className="text-sm text-muted leading-relaxed">With the Regular License, you can use it for one project. For multiple projects or SaaS applications where users are charged, please purchase the Extended License.</p>
          </div>
          <div className="border border-border rounded-card p-5 bg-surface/30">
            <h4 className="font-bold text-dark mb-2 text-lg">Do you offer refunds?</h4>
            <p className="text-sm text-muted leading-relaxed">Yes, we offer a 14-day money-back guarantee if the product doesn't work as described and our support team cannot fix the issue within 48 hours.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20 relative">
      <div className="container mx-auto px-4 py-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-muted mb-6 flex-wrap gap-y-2">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <FiChevronRight className="mx-2 flex-shrink-0" size={14} />
          <Link to="/browse?category=Templates" className="hover:text-primary transition-colors">Templates</Link>
          <FiChevronRight className="mx-2 flex-shrink-0" size={14} />
          <span className="text-dark font-medium truncate">{product.title}</span>
        </div>

        {/* Product Title (Mobile only) */}
        <div className="lg:hidden mb-6">
          <h1 className="font-heading font-bold text-2xl text-dark mb-3">{product.title}</h1>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <FiStar className="text-yellow-400 fill-yellow-400" size={14} />
              <span className="font-bold text-dark">{product.rating}</span>
            </div>
            <div className="text-muted">{product.sales.toLocaleString()} Sales</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column (65%) */}
          <div className="lg:w-[65%]">
            
            {/* Title (Desktop) */}
            <div className="hidden lg:block mb-6">
              <h1 className="font-heading font-bold text-3xl xl:text-4xl text-dark mb-4 leading-tight">{product.title}</h1>
              <div className="flex items-center gap-6 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-[10px]">M</div>
                  Handcrafted by <span className="text-dark font-bold hover:text-primary transition-colors">Marketly</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiStar className="text-yellow-400 fill-yellow-400" size={14} />
                  <span className="font-bold text-dark">{product.rating}</span>
                  <span>({product.reviewCount} Reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiShoppingCart size={14} />
                  <span>{product.sales.toLocaleString()} Sales</span>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-10">
              <div className="relative aspect-video rounded-card overflow-hidden bg-surface mb-4 border border-border group">
                <img 
                  src={images[activeImage]} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-primary hover:text-white text-dark font-medium px-4 py-2 rounded-btn shadow-card flex items-center gap-2 transition-all transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <FiEye /> Live Preview
                </button>
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <Badge variant={product.badge.toLowerCase()}>{product.badge}</Badge>
                  </div>
                )}
              </div>
              
              {/* Thumbnail Strip */}
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`aspect-video rounded-btn overflow-hidden border-2 transition-all ${activeImage === index ? 'border-primary shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs Component */}
            <Tabs tabs={tabData} />

          </div>

          {/* Right Column (35%) */}
          <div className="lg:w-[35%]">
            <div className="sticky top-24">
              
              {/* Purchase Card */}
              <div className="bg-white rounded-card shadow-card border border-border p-6 mb-6">
                
                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-heading font-bold text-4xl text-primary">${product.price}</span>
                  <span className="text-muted text-sm line-through">${Math.floor(product.price * 1.5)}</span>
                </div>

                {/* License Selector */}
                <div className="flex bg-surface rounded-btn p-1 mb-6 border border-border">
                  <button 
                    onClick={() => setLicense('regular')}
                    className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${license === 'regular' ? 'bg-white shadow-sm text-dark border-border border' : 'text-muted border border-transparent hover:text-dark'}`}
                  >
                    Regular <span className="block text-xs font-normal opacity-70">Single Use</span>
                  </button>
                  <button 
                    onClick={() => setLicense('extended')}
                    className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${license === 'extended' ? 'bg-white shadow-sm text-dark border-border border' : 'text-muted border border-transparent hover:text-dark'}`}
                  >
                    Extended <span className="block text-xs font-normal opacity-70">Multi Use</span>
                  </button>
                </div>

                <div className="flex items-start gap-2 mb-6">
                  <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <p className="text-xs text-muted leading-relaxed">
                    {license === 'regular' 
                      ? 'Use, by you or one client, in a single end product which end users are not charged for.' 
                      : 'Use, by you or one client, in a single end product which end users can be charged for.'}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => { addToCart(product); setIsCartOpen(true); }}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3.5 rounded-btn flex items-center justify-center gap-2 transition-colors shadow-sm text-lg"
                  >
                    <FiShoppingCart /> Buy Now
                  </button>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-white border border-border hover:border-primary hover:text-primary text-dark font-medium py-3.5 rounded-btn flex items-center justify-center gap-2 transition-colors text-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* About the Creator Card */}
              <div className="bg-white rounded-card shadow-sm border border-border p-8 mb-6 text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-white font-bold text-4xl shadow-lg group-hover:rotate-6 transition-transform">
                    M
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[2px]">
                    <FiCheckCircle className="text-primary fill-white" size={24} />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-dark text-2xl mb-4 tracking-tight">Marketly Brand</h3>
                <p className="text-muted text-sm leading-relaxed mb-6 italic">
                  Pixel-perfect, high-performance web assets handcrafted with care by a dedicated full-stack developer and designer. 100% original work.
                </p>
                <div className="pt-6 border-t border-border flex items-center justify-center gap-6">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-dark text-lg">10k+</span>
                    <span className="text-[10px] text-muted font-bold uppercase tracking-widest">Customers</span>
                  </div>
                  <div className="w-[1px] h-8 bg-border"></div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-dark text-lg">4.9★</span>
                    <span className="text-[10px] text-muted font-bold uppercase tracking-widest">Avg Rating</span>
                  </div>
                </div>
              </div>

              {/* Product Meta Table */}
              <div className="bg-white rounded-card shadow-sm border border-border p-6 mb-6">
                <h4 className="font-bold text-dark mb-4 text-lg">Product Details</h4>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted">Last Updated</span>
                    <span className="text-dark font-bold">Mar 28, 2026</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted">Version</span>
                    <span className="text-dark font-bold">2.1.0</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted">File Size</span>
                    <span className="text-dark font-bold">14.5 MB</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted">Category</span>
                    <Link to={`/browse?category=${product.category}`} className="text-primary hover:underline font-bold">{product.category}</Link>
                  </div>
                  <div className="pt-2">
                    <span className="text-muted block mb-3">Tags</span>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag, i) => (
                        <Link key={i} to={`/browse?tag=${tag}`} className="bg-surface border border-border text-dark text-xs px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors font-medium">
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Preview Button */}
              <button className="w-full bg-white border border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 rounded-btn flex items-center justify-center gap-2 transition-colors">
                <FiExternalLink /> Live Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className={`fixed bottom-0 left-0 w-full bg-white border-t border-border shadow-[0_-4px_10px_rgba(0,0,0,0.05)] p-4 z-40 transform transition-transform duration-300 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center h-full">
          <div className="flex items-center gap-4">
            <img src={images[0]} alt="thumbnail" className="w-12 h-12 rounded object-cover hidden sm:block shadow-sm" />
            <div>
              <h4 className="font-bold text-dark text-sm sm:text-base line-clamp-1">{product.title}</h4>
              <div className="flex items-center gap-2 text-xs sm:text-sm mt-0.5">
                <span className="font-bold text-primary">${license === 'regular' ? product.price : product.price * 5}</span>
                <span className="text-muted hidden sm:inline">• {license === 'regular' ? 'Regular' : 'Extended'} License</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => { addToCart(product); setIsCartOpen(true); }}
            className="bg-primary hover:bg-primary-dark text-white font-medium px-6 sm:px-8 py-2.5 rounded-btn flex items-center justify-center gap-2 transition-colors shadow-sm flex-shrink-0"
          >
            <FiShoppingCart /> <span className="hidden sm:inline">Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
