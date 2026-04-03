import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiGithub } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side - Image/Pattern */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden flex-col justify-between p-12">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="relative z-10 border-b border-white/20 pb-8 mb-8">
          <Link to="/" className="font-heading font-bold text-3xl text-white">Marketly.</Link>
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-md">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-card">
            <div className="flex text-yellow-300 mb-4 text-xl">
              ★★★★★
            </div>
            <p className="text-white text-lg font-medium leading-relaxed mb-6">
              "The quality of templates on Marketly is unparalleled. I was able to launch my startup's landing page in record time with their React components. Truly a game-changer!"
            </p>
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/150?img=32" alt="testimonial" className="w-12 h-12 rounded-full object-cover border-2 border-white" />
              <div>
                <h4 className="font-bold text-white leading-tight">Alex Rivera</h4>
                <p className="text-white/80 text-sm">Founder at TechFlow</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 overflow-y-auto">
        <div className="w-full max-w-md my-auto">
          <div className="lg:hidden mb-8">
            <Link to="/" className="font-heading font-bold text-3xl text-primary">Marketly.</Link>
          </div>
          
          <h1 className="font-heading font-bold text-3xl text-dark mb-2">Create an account</h1>
          <p className="text-muted mb-8">Join our community of over 10k happy customers.</p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-dark mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-muted" />
                </div>
                <input 
                  type="text" 
                  className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-btn focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-dark"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-muted" />
                </div>
                <input 
                  type="email" 
                  className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-btn focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-dark"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="text-muted" />
                </div>
                <input 
                  type="password" 
                  className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-btn focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-dark"
                  placeholder="Create a password"
                />
              </div>
              <p className="text-xs text-muted mt-2 font-medium">Must be at least 8 characters long.</p>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary" />
                <span className="text-sm text-dark font-medium leading-tight">
                  I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </span>
              </label>
            </div>

            <button type="button" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-btn transition-colors shadow-sm mt-6">
              Create Account
            </button>
          </form>

          <div className="mt-8 mb-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-muted">Or sign up with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 border border-border rounded-btn hover:bg-surface transition-colors text-dark font-medium">
              <FcGoogle size={20} /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 border border-border rounded-btn hover:bg-surface transition-colors text-dark font-medium">
              <FiGithub size={20} /> GitHub
            </button>
          </div>

          <p className="mt-8 text-center text-dark text-sm">
            Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
