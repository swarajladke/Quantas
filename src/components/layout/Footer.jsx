import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaPaypal, FaStripe, FaCcVisa, FaCcMastercard, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <span className="font-heading font-bold text-2xl text-dark tracking-tight">Marketly</span>
            </Link>
            <p className="text-muted mb-6">
              Buy premium themes, plugins, and templates built by one passionate creator. High quality, well-documented assets for your next project.
            </p>
            <div className="flex gap-4 text-muted">
              <a href="#" className="hover:text-primary transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaGithub size={20} /></a>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-dark">Categories</h4>
            <ul className="flex flex-col gap-3 text-muted">
              <li><Link to="/browse?category=Themes" className="hover:text-primary transition-colors">WordPress Themes</Link></li>
              <li><Link to="/browse?category=Plugins" className="hover:text-primary transition-colors">Web Plugins</Link></li>
              <li><Link to="/browse?category=Templates" className="hover:text-primary transition-colors">Site Templates</Link></li>
              <li><Link to="/browse?category=UI Kits" className="hover:text-primary transition-colors">UI Templates</Link></li>
              <li><Link to="/browse?category=Graphics" className="hover:text-primary transition-colors">Graphics & Design</Link></li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-dark">About</h4>
            <ul className="flex flex-col gap-3 text-muted">
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-primary transition-colors">Press Kit</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-dark">Subscribe to Newsletter</h4>
            <p className="text-muted mb-4">
              Get weekly updates on new products and special offers!
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-white border border-border rounded-btn px-4 py-2 focus:outline-none focus:border-primary text-dark"
                required
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark text-white w-10 h-10 rounded-btn flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="Subscribe"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm text-center">
            &copy; {new Date().getFullYear()} Marketly. All rights reserved.
          </p>
          <div className="flex gap-3 text-muted text-2xl">
            <FaStripe className="hover:text-dark transition-colors" />
            <FaPaypal className="hover:text-dark transition-colors" />
            <FaCcVisa className="hover:text-dark transition-colors" />
            <FaCcMastercard className="hover:text-dark transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
