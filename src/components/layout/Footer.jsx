import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaPaypal,
  FaStripe,
  FaCcVisa,
  FaCcMastercard,
  FaPaperPlane,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#020203,#000000)] pt-16 pb-8 theme-neon">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,95,218,0.14),_transparent_28%),radial-gradient(circle_at_70%_20%,_rgba(217,70,239,0.08),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(255,43,214,0.06),_transparent_24%)]" />

      <div className="container relative mx-auto px-4">
        <div className="gallery-panel mb-10 rounded-[34px] px-6 py-8 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary">Closing frame</p>
              <h3 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-tight text-white">
                Turn the last section into another dark gallery wall, not a plain footer.
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/68">
                Keep the atmosphere alive all the way to the bottom with framed newsletter controls, low-key links, and the same cinematic black-pink glow.
              </p>
            </div>
            <div className="gallery-frame rounded-[28px] p-4">
              <form className="flex gap-3" onSubmit={(event) => event.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email address"
                  className="gallery-chip flex-1 rounded-[18px] px-4 py-3 text-white placeholder:text-white/35 focus:border-primary focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[18px] bg-brand-gradient text-white transition-transform hover:scale-105"
                  aria-label="Subscribe"
                >
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="mb-6 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-xl font-bold text-white shadow-neon">
                Q
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-white">Quantas</span>
            </Link>
            <p className="mb-6 text-white/68">
              Buy premium themes, plugins, and templates built by one passionate creator. High quality, well-documented assets for your next project.
            </p>
            <div className="flex gap-4 text-white/48">
              <a href="#" className="transition-colors hover:text-primary"><FaTwitter size={20} /></a>
              <a href="#" className="transition-colors hover:text-primary"><FaFacebook size={20} /></a>
              <a href="#" className="transition-colors hover:text-primary"><FaInstagram size={20} /></a>
              <a href="#" className="transition-colors hover:text-primary"><FaGithub size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-heading text-lg font-bold text-white">Categories</h4>
            <ul className="flex flex-col gap-3 text-white/68">
              <li><Link to="/browse?category=Themes" className="transition-colors hover:text-primary">WordPress Themes</Link></li>
              <li><Link to="/browse?category=Plugins" className="transition-colors hover:text-primary">Web Plugins</Link></li>
              <li><Link to="/browse?category=Templates" className="transition-colors hover:text-primary">Site Templates</Link></li>
              <li><Link to="/browse?category=UI Kits" className="transition-colors hover:text-primary">UI Templates</Link></li>
              <li><Link to="/browse?category=Graphics" className="transition-colors hover:text-primary">Graphics & Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-heading text-lg font-bold text-white">About</h4>
            <ul className="flex flex-col gap-3 text-white/68">
              <li><Link to="/about" className="transition-colors hover:text-primary">Our Story</Link></li>
              <li><Link to="/blog" className="transition-colors hover:text-primary">Blog</Link></li>
              <li><Link to="/careers" className="transition-colors hover:text-primary">Careers</Link></li>
              <li><Link to="/press" className="transition-colors hover:text-primary">Press Kit</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-heading text-lg font-bold text-white">Subscribe to Newsletter</h4>
            <p className="mb-4 text-white/68">
              Get weekly updates on new products and special offers!
            </p>
            <form className="flex gap-2" onSubmit={(event) => event.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="gallery-chip flex-1 rounded-btn px-4 py-2 text-white placeholder:text-white/35 focus:border-primary focus:outline-none"
                required
              />
              <button
                type="submit"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-btn bg-brand-gradient text-white transition-transform hover:scale-105"
                aria-label="Subscribe"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            &copy; {new Date().getFullYear()} Quantas. All rights reserved.

          <div className="flex gap-3 text-2xl text-white/38">
            <FaStripe className="transition-colors hover:text-primary" />
            <FaPaypal className="transition-colors hover:text-primary" />
            <FaCcVisa className="transition-colors hover:text-primary" />
            <FaCcMastercard className="transition-colors hover:text-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
