import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiGithub } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import useDocumentTitle from '../hooks/useDocumentTitle';

const loginHeroImage = 'https://images.pexels.com/photos/3630025/pexels-photo-3630025.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600&dpr=2';

const LoginPage = () => {
  useDocumentTitle('Sign In');
  return (
    <div className="flex min-h-screen bg-[linear-gradient(135deg,#000000,#010101_48%,#000000)]">
      <div
        className="relative hidden overflow-hidden lg:flex lg:w-1/2 flex-col justify-between p-12"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 79, 216, 0.12), rgba(8, 7, 14, 0.28) 24%, rgba(8, 7, 14, 0.86)), url(${loginHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,79,216,0.22),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.16),_transparent_24%),linear-gradient(135deg,rgba(168,85,247,0.14),transparent_40%)]" />

        <div className="relative z-10">
          <Link to="/" className="font-heading text-3xl font-bold text-white">
            Marketly.
          </Link>
        </div>

        <div className="relative z-10 max-w-lg">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-white backdrop-blur">
            Member access
          </div>
          <h2 className="mb-6 mt-6 font-heading text-5xl font-bold leading-[0.95] text-white">
            Return to your premium workspace.
          </h2>
          <p className="mb-8 max-w-md text-lg leading-relaxed text-white">
            Sign in to access downloads, license history, curated releases, and the assets you are building with right now.
          </p>

          <div className="max-w-sm rounded-[28px] border border-white/16 bg-black/20 p-6 backdrop-blur-md">
            <p className="text-[11px] font-black uppercase tracking-[0.26em] text-white">
              Why creators stay
            </p>
            <div className="mt-4 space-y-3 text-sm text-white">
              <p>Fast access to purchases and fresh updates.</p>
              <p>One clean place for licenses, downloads, and saved products.</p>
              <p>Editorial releases and launch-ready assets every week.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center p-8 sm:p-12 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Link to="/" className="font-heading text-3xl font-bold text-primary">
              Marketly.
            </Link>
          </div>

          <h1 className="mb-2 font-heading text-3xl font-bold text-dark">Welcome back</h1>
          <p className="mb-8 text-muted">Please enter your details to sign in.</p>

          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-dark">Email Address</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiMail className="text-muted" />
                </div>
                <input
                  type="email"
                  className="w-full rounded-btn border border-border bg-surface py-3 pl-10 pr-4 text-dark transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-dark">Password</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiLock className="text-muted" />
                </div>
                <input
                  type="password"
                  className="w-full rounded-btn border border-border bg-surface py-3 pl-10 pr-4 text-dark transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-border text-primary accent-primary focus:ring-primary" />
                <span className="text-sm font-medium text-dark">Remember me</span>
              </label>
              <a href="#" className="text-sm font-medium text-primary hover:underline">Forgot password?</a>
            </div>

            <button type="button" className="w-full rounded-btn bg-primary py-3 font-bold text-white shadow-sm transition-colors hover:bg-primary-dark">
              Sign In
            </button>
          </form>

          <div className="relative mb-8 mt-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-cosmos-950 px-4 text-muted">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 rounded-btn border border-border py-2.5 font-medium text-dark transition-colors hover:bg-surface">
              <FcGoogle size={20} /> Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-btn border border-border py-2.5 font-medium text-dark transition-colors hover:bg-surface">
              <FiGithub size={20} /> GitHub
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-dark">
            Don&apos;t have an account? <Link to="/register" className="font-bold text-primary hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
