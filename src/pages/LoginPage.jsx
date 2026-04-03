import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiGithub } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side - Image/Pattern */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden flex-col justify-between p-12">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="relative z-10">
          <Link to="/" className="font-heading font-bold text-3xl text-white">Marketly.</Link>
        </div>
        <div className="relative z-10 max-w-md">
          <h2 className="font-heading font-bold text-4xl text-white mb-6 leading-tight">Access your handcrafted digital assets.</h2>
          <p className="text-white/80 text-lg mb-8">Sign in to manage your premium downloads, licenses, and exclusive early-access marketplace updates.</p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=1" alt="user" className="w-10 h-10 rounded-full border-2 border-primary" />
              <img src="https://i.pravatar.cc/100?img=2" alt="user" className="w-10 h-10 rounded-full border-2 border-primary" />
              <img src="https://i.pravatar.cc/100?img=3" alt="user" className="w-10 h-10 rounded-full border-2 border-primary" />
            </div>
            <div className="text-white text-sm">
              <span className="font-bold">10k+</span> customers
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <Link to="/" className="font-heading font-bold text-3xl text-primary">Marketly.</Link>
          </div>
          
          <h1 className="font-heading font-bold text-3xl text-dark mb-2">Welcome back</h1>
          <p className="text-muted mb-8">Please enter your details to sign in.</p>

          <form className="space-y-6">
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
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary" />
                <span className="text-sm text-dark font-medium">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary font-medium hover:underline">Forgot password?</a>
            </div>

            <button type="button" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-btn transition-colors shadow-sm">
              Sign In
            </button>
          </form>

          <div className="mt-8 mb-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-muted">Or continue with</span>
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
            Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
