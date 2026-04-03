import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Attempt to load cart from local storage if available
    const savedCart = localStorage.getItem('marketly_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync to local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem('marketly_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if product is already in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        toast.error(`${product.title} is already in your cart.`);
        return prevItems; // Digital products usually just have a quantity of 1
      }
      
      toast.success('Added to Cart!');
      return [...prevItems, product];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    toast.success('Removed from Cart');
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      toggleCart,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};
