import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiGithub } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import useDocumentTitle from '../hooks/useDocumentTitle';

const registerHeroImage = 'https://images.pexels.com/photos/24243710/pexels-photo-24243710.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600&dpr=2';

const RegisterPage = () => {
  useDocumentTitle('Create Account');
  return (
    <div className="flex min-h-screen bg-[linear-gradient(135deg,#000000,#010101_48%,#000000)]">
      <div
        className="relative hidden overflow-hidden lg:flex lg:w-1/2 flex-col justify-between p-12"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 79, 216, 0.12), rgba(8, 7, 14, 0.24) 24%, rgba(8, 7, 14, 0.86)), url(${registerHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,79,216,0.22),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.16),_transparent_24%),linear-gradient(135deg,rgba(168,85,247,0.16),transparent_42%)]" />

        <div className="relative z-10 border-b border-white/20 pb-8">
          <Link to="/" className="font-heading text-3xl font-bold text-white">
            Marketly.
          </Link>
        </div>

        <div className="relative z-10 flex-1 flex-col justify-end max-w-lg pt-10">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-white backdrop-blur">
            Start creating
          </div>
          <h2 className="mt-6 max-w-md font-heading text-5xl font-bold leading-[0.96] text-white">
            Build your library inside a more inspiring storefront.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white">
            Join creators, founders, and product teams collecting premium assets for launches, campaigns, and polished digital experiences.
          </p>

          <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
            {[
              { label: 'Members', value: '10k+' },
              { label: 'New drops', value: 'Weekly' },
              { label: 'Avg. rating', value: '4.9/5' },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/16 bg-black/20 p-4 backdrop-blur-md">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white">{item.label}</p>
                <p className="mt-2 text-xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-sm rounded-[28px] border border-white/16 bg-black/20 p-6 backdrop-blur-md">
            <p className="text-sm leading-relaxed text-white">
              Designers use Marketly to move faster without giving up taste. The platform stays curated, premium, and easy to browse.
            </p>
            <p className="mt-4 text-[11px] font-black uppercase tracking-[0.24em] text-white">
              Trusted by startup teams and freelancers
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center overflow-y-auto p-8 sm:p-12 lg:w-1/2">
        <div className="my-auto w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Link to="/" className="font-heading text-3xl font-bold text-primary">
              Marketly.
            </Link>
          </div>

          <h1 className="mb-2 font-heading text-3xl font-bold text-dark">Create an account</h1>
          <p className="mb-8 text-muted">Join our community of over 10k happy customers.</p>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-dark">Full Name</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiUser className="text-muted" />
                </div>
                <input
                  type="text"
                  className="w-full rounded-btn border border-border bg-surface py-3 pl-10 pr-4 text-dark transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
            </div>

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
                  placeholder="Create a password"
                />
              </div>
              <p className="mt-2 text-xs font-medium text-muted">Must be at least 8 characters long.</p>
            </div>

            <div className="pt-2">
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border text-primary accent-primary focus:ring-primary" />
                <span className="text-sm font-medium leading-tight text-dark">
                  I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </span>
              </label>
            </div>

            <button type="button" className="mt-6 w-full rounded-btn bg-primary py-3 font-bold text-white shadow-sm transition-colors hover:bg-primary-dark">
              Create Account
            </button>
          </form>

          <div className="relative mb-8 mt-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-cosmos-950 px-4 text-muted">Or sign up with</span>
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
            Already have an account? <Link to="/login" className="font-bold text-primary hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
