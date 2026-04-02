import { Link } from 'react-router-dom';
import { FiStar, FiShoppingCart } from 'react-icons/fi';
import Badge from '../common/Badge';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group h-full flex flex-col bg-white rounded-card border border-border overflow-hidden hover:shadow-card hover:-translate-y-1 transition-all duration-300">
      
      {/* Thumbnail */}
      <Link to={`/product/${product.id}`} className="block relative pt-[75%] overflow-hidden bg-surface">
        <img 
          src={product.previewImage} 
          alt={product.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.isNew && (
          <div className="absolute top-3 right-3 z-10">
            <Badge variant="primary" size="sm">New</Badge>
          </div>
        )}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-2">
          <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
            <h3 className="font-heading font-medium text-dark line-clamp-1">{product.title}</h3>
          </Link>
          <span className="font-medium text-dark whitespace-nowrap">${product.price}</span>
        </div>
        
        <p className="text-muted text-sm line-clamp-2 mb-4 flex-1">{product.description || "Premium template with high-quality components and clean code structure."}</p>
        
        <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="flex items-center gap-1 text-dark font-medium">
              <FiStar className="text-yellow-400 fill-current" />
              {product.rating}
            </span>
            <span>({product.reviewCount})</span>
            <span className="w-1 h-1 rounded-full bg-border mx-1"></span>
            <span>{product.sales} sales</span>
          </div>
          
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-9 h-9 flex items-center justify-center rounded-btn bg-surface text-dark hover:bg-primary hover:text-white transition-colors border border-border hover:border-primary border-b-2 hover:translate-y-[1px] hover:border-b active:border-b-0 active:translate-y-[2px]"
          >
            <FiShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

