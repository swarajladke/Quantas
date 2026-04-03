import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FiX, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, cartTotal } = useCart();

  return (
    <Transition.Root show={isCartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsCartOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-dark/40 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-white shadow-2xl">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between px-6 py-6 border-b border-border">
                      <Dialog.Title className="text-lg font-heading font-bold text-dark">
                        Shopping Cart
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="relative -m-2 p-2 text-muted hover:text-dark transition-colors"
                          onClick={() => setIsCartOpen(false)}
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <FiX className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    {/* Cart Items List */}
                    <div className="flex-1 overflow-y-auto px-6 py-6">
                      {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                          <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mb-4">
                            <FiX className="text-muted w-10 h-10" />
                          </div>
                          <p className="text-dark font-heading font-bold text-xl mb-2">Your cart is empty</p>
                          <p className="text-muted mb-6">Looks like you haven't added any premium assets yet.</p>
                          <button 
                            onClick={() => setIsCartOpen(false)}
                            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-btn transition-colors"
                          >
                            Browse Assets
                          </button>
                        </div>
                      ) : (
                        <ul role="list" className="-my-6 divide-y divide-border">
                          {cartItems.map((product) => (
                            <li key={product.id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-border">
                                <img
                                  src={product.previewImage}
                                  alt={product.title}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-bold text-dark">
                                    <h3 className="line-clamp-2">
                                      <Link to={`/product/${product.id}`} onClick={() => setIsCartOpen(false)}>
                                        {product.title}
                                      </Link>
                                    </h3>
                                    <p className="ml-4">${product.price}</p>
                                  </div>
                                  <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-primary">{product.category}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-muted">Personal License</p>

                                  <div className="flex">
                                    <button
                                      type="button"
                                      onClick={() => removeFromCart(product.id)}
                                      className="font-medium text-red-500 hover:text-red-700 flex items-center gap-1"
                                    >
                                      <FiTrash2 size={16} /> Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Footer (Subtotal & Checkout) */}
                    {cartItems.length > 0 && (
                      <div className="border-t border-border px-6 py-6 bg-surface/50">
                        <div className="flex justify-between text-base font-bold text-dark mb-4">
                          <p>Subtotal</p>
                          <p>${cartTotal.toFixed(2)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-muted mb-6">
                          Taxes and licenses calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <Link
                            to="#"
                            className="flex items-center justify-center rounded-btn border border-transparent bg-primary px-6 py-4 text-base font-bold text-white shadow-sm hover:bg-primary-dark transition-colors"
                          >
                            Proceed to Checkout
                          </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-muted">
                          <p>
                            or{' '}
                            <button
                              type="button"
                              className="font-bold text-primary hover:text-primary-dark"
                              onClick={() => setIsCartOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CartDrawer;
