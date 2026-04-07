import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FiCheckCircle,
  FiChevronRight,
  FiDownload,
  FiEye,
  FiExternalLink,
  FiLayers,
  FiShield,
  FiShoppingCart,
  FiStar,
  FiZap,
} from 'react-icons/fi';
import { products, reviews } from '../data/mockData';
import Tabs from '../components/common/Tabs';
import ReviewCard from '../components/products/ReviewCard';
import Badge from '../components/common/Badge';
import { useCart } from '../context/CartContext';
import useDocumentTitle from '../hooks/useDocumentTitle';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart, setIsCartOpen } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [license, setLicense] = useState('regular');
  const [showStickyBar, setShowStickyBar] = useState(false);

  const product = products.find((item) => item.id === Number.parseInt(id, 10)) || products[0];
  useDocumentTitle(product.title);
  const regularPrice = product.price;
  const extendedPrice = product.price * 5;
  const selectedPrice = license === 'regular' ? regularPrice : extendedPrice;
  const formattedUpdateDate = new Date(product.lastUpdated).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const images = [
    product.previewImage,
    `https://picsum.photos/seed/prod${product.id}a/1200/900`,
    `https://picsum.photos/seed/prod${product.id}b/1200/900`,
    `https://picsum.photos/seed/prod${product.id}c/1200/900`,
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 620);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featureCards = [
    {
      icon: <FiLayers size={18} />,
      title: 'Launch-ready structure',
      body: 'Every screen is laid out for quick adaptation, with polished spacing, hierarchy, and reusable building blocks.',
    },
    {
      icon: <FiZap size={18} />,
      title: 'Fast visual payoff',
      body: 'Use the included sections, components, and styles to ship a page that looks premium much faster.',
    },
    {
      icon: <FiShield size={18} />,
      title: 'Commercial-safe licensing',
      body: 'Clear usage rules, dependable updates, and a support policy designed for client and internal work.',
    },
    {
      icon: <FiDownload size={18} />,
      title: 'Asset bundle included',
      body: `Package includes ${product.fileSize} of files with source assets, setup notes, and curated compatibility guidance.`,
    },
  ];

  const supportCards = [
    {
      title: 'Install in minutes',
      body: 'Extract the package, install dependencies, and use the included notes to get the main screens live quickly.',
    },
    {
      title: 'Built for customization',
      body: 'Typography, colors, and layout systems are structured so you can adapt the look without fighting the design.',
    },
    {
      title: 'Support window',
      body: 'You get guidance for setup issues, broken assets, and update questions during the active support period.',
    },
  ];

  const changelogItems = [
    {
      version: '2.1.0',
      date: formattedUpdateDate,
      highlight: 'Latest update',
      notes: [
        'Refined showcase screens and visual hierarchy',
        'Improved tablet and mobile layout spacing',
        'Updated asset bundle and compatibility notes',
      ],
    },
    {
      version: '2.0.0',
      date: 'Feb 12, 2026',
      notes: [
        'Introduced the new premium storefront visual language',
        'Added richer product modules and polished section spacing',
        'Tuned interaction states across key UI surfaces',
      ],
    },
    {
      version: '1.0.0',
      date: 'Jan 5, 2026',
      notes: ['Initial marketplace release'],
    },
  ];

  const starBreakdown = [5, 4, 3, 2, 1].map((star) => {
    const percentages = { 5: 72, 4: 18, 3: 6, 2: 3, 1: 1 };
    return {
      star,
      percentage: percentages[star],
      count: Math.max(1, Math.round((product.reviewCount * percentages[star]) / 100)),
    };
  });

  const tabData = [
    {
      label: 'Overview',
      content: (
        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2">
            {featureCards.map((item) => (
              <div key={item.title} className="gallery-panel rounded-[24px] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-heading text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/66">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="gallery-panel rounded-[28px] p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-primary">
                Why this works
              </p>
              <h3 className="mt-3 font-heading text-3xl font-bold leading-tight text-white">
                A premium visual system designed to look finished from the first screen.
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/66">
                {product.title} is built for teams that want a polished launch surface without spending days rebuilding basic structure. The package is tuned for clarity, speed, and a stronger first impression.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="gallery-chip rounded-full px-3 py-1.5 text-xs font-medium text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'File size', value: product.fileSize },
                  { label: 'Compatible with', value: product.compatibility.join(' / ') },
                  { label: 'Last update', value: formattedUpdateDate },
                ].map((item) => (
                  <div key={item.label} className="gallery-chip rounded-2xl p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/42">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-bold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="gallery-frame overflow-hidden rounded-[28px] shadow-sm">
              <div className="relative aspect-[4/3]">
                <img
                  src={images[1]}
                  alt={`${product.title} alternate preview`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.68))]"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-white/65">
                    Included experience
                  </p>
                  <h4 className="mt-3 font-heading text-3xl font-bold leading-tight">
                    Strong previews, cleaner sections, sharper visual rhythm.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: 'Reviews',
      content: (
        <div className="space-y-6">
          <div className="grid gap-6 xl:grid-cols-[0.55fr_1fr]">
            <div className="gallery-panel rounded-[28px] p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-primary">
                Review summary
              </p>
              <div className="mt-4 flex items-end gap-4">
                <span className="font-heading text-6xl font-bold text-white">{product.rating}</span>
                <div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <FiStar key={index} className="fill-current" size={16} />
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-white/58">{product.reviewCount} reviews from buyers</p>
                </div>
              </div>
            </div>

            <div className="gallery-panel rounded-[28px] p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-primary">
                Rating spread
              </p>
              <div className="mt-5 space-y-3">
                {starBreakdown.map((item) => (
                  <div key={item.star} className="flex items-center gap-3">
                    <span className="w-4 text-sm font-bold text-white">{item.star}</span>
                    <FiStar className="text-yellow-400" size={12} />
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-10 text-right text-xs font-medium text-white/55">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      ),
    },
    {
      label: 'Changelog',
      content: (
        <div className="space-y-5">
          {changelogItems.map((item, index) => (
            <div
              key={item.version}
              className={`rounded-[28px] p-6 ${
                index === 0 ? 'gallery-panel border border-primary/30' : 'gallery-panel'
              }`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-2xl font-bold text-white">Version {item.version}</h3>
                    {item.highlight && (
                      <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-white">
                        {item.highlight}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-white/55">{item.date}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {item.notes.map((note) => (
                  <div key={note} className="gallery-chip flex items-start gap-3 rounded-2xl px-4 py-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary"></span>
                    <span className="text-sm leading-relaxed text-white">{note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: 'Support',
      content: (
        <div className="space-y-6">
          <div className="grid gap-4 lg:grid-cols-3">
            {supportCards.map((item) => (
              <div key={item.title} className="gallery-panel rounded-[24px] p-5">
                <h3 className="font-heading text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/66">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="gallery-panel rounded-[28px] p-6">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-primary">
              Coverage
            </p>
            <h3 className="mt-3 font-heading text-3xl font-bold text-white">
              Support is designed to keep launches moving.
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/66">
              If the package does not behave as described, setup notes are unclear, or a purchased file is broken, support covers troubleshooting and replacement guidance within the active support window.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] pb-24">
      <section className="border-b border-primary/15 bg-[linear-gradient(145deg,#000000,#040405_44%,#12090d_78%,#000000)]">
        <div className="container mx-auto px-4 py-8 lg:py-10">
          <div className="flex flex-wrap items-center gap-y-2 text-sm text-white/52">
            <Link to="/" className="transition-colors hover:text-primary">Home</Link>
            <FiChevronRight className="mx-2 flex-shrink-0" size={14} />
            <Link to={`/browse?category=${product.category}`} className="transition-colors hover:text-primary">
              {product.category}
            </Link>
            <FiChevronRight className="mx-2 flex-shrink-0" size={14} />
            <span className="truncate font-medium text-white">{product.title}</span>
          </div>

          <div className="mt-8 grid gap-10 xl:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
                  {product.category}
                </span>
                {product.badge && <Badge variant={product.badge.toLowerCase()}>{product.badge}</Badge>}
              </div>

              <h1 className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-[0.95] text-white sm:text-5xl xl:text-6xl">
                {product.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/66">
                {product.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  `${product.rating} rating`,
                  `${product.reviewCount} reviews`,
                  `${product.sales.toLocaleString()} sales`,
                  `${product.fileSize} package`,
                ].map((item) => (
                  <div key={item} className="gallery-chip rounded-full px-4 py-2 text-sm font-medium text-white">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              {[
                {
                  label: 'Built for',
                  value: product.compatibility.join(' / '),
                },
                {
                  label: 'Creator',
                  value: product.createdBy,
                },
                {
                  label: 'Updated',
                  value: formattedUpdateDate,
                },
              ].map((item) => (
                <div key={item.label} className="gallery-panel rounded-[26px] p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/42">{item.label}</p>
                  <p className="mt-3 font-heading text-2xl font-bold leading-tight text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-10 xl:grid-cols-[1.12fr_0.88fr]">
          <div>
            <div className="gallery-panel overflow-hidden rounded-[34px]">
              <div className="gallery-frame relative m-3 aspect-[16/10] rounded-[28px] bg-slate-950">
                <img
                  src={images[activeImage]}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.62))]"></div>
                <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-primary/18 bg-[linear-gradient(135deg,rgba(16,9,18,0.96),rgba(34,10,30,0.94)_56%,rgba(18,8,10,0.94)_100%)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white">
                    Premium preview
                  </span>
                  {product.badge && <Badge variant={product.badge.toLowerCase()}>{product.badge}</Badge>}
                </div>
                <button className="gallery-chip absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-primary hover:text-primary">
                  <FiEye />
                  Live preview
                </button>
              </div>

              <div className="grid gap-4 border-t border-white/10 p-5 sm:grid-cols-[0.72fr_0.28fr]">
                <div className="grid grid-cols-4 gap-3">
                  {images.map((image, index) => (
                    <button
                      key={image}
                      onClick={() => setActiveImage(index)}
                      className={`gallery-frame overflow-hidden rounded-[20px] transition-all ${
                        activeImage === index
                          ? 'border-primary shadow-sm'
                          : 'opacity-75 hover:opacity-100'
                      }`}
                    >
                      <div className="aspect-[4/3]">
                        <img src={image} alt={`Preview ${index + 1}`} className="h-full w-full object-cover" />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="gallery-chip rounded-[24px] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/42">Fast summary</p>
                  <div className="mt-4 space-y-3 text-sm text-white">
                    <div className="flex items-center gap-2">
                      <FiLayers className="text-primary" />
                      {product.tags[0]}-ready visual system
                    </div>
                    <div className="flex items-center gap-2">
                      <FiShield className="text-primary" />
                      Clear commercial usage
                    </div>
                    <div className="flex items-center gap-2">
                      <FiDownload className="text-primary" />
                      Instant file access
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gallery-panel mt-10 rounded-[34px] p-6 sm:p-8">
              <Tabs tabs={tabData} />
            </div>
          </div>

          <div className="xl:pl-4">
            <div className="sticky top-24 space-y-6">
              <div className="gallery-panel overflow-hidden rounded-[32px]">
                <div className="bg-[linear-gradient(145deg,#ff9cf0_0%,#ff2bd6_22%,#7a206f_58%,#8b5cf6_100%)] px-6 py-6 text-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/55">Purchase access</p>
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="font-heading text-5xl font-bold">${selectedPrice}</span>
                    <span className="text-sm text-white/45 line-through">${Math.round(selectedPrice * 1.35)}</span>
                  </div>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/72">
                    Choose the license that fits your use case, then add the asset to your workspace and launch fast.
                  </p>
                </div>

                <div className="p-6">
                  <div className="grid gap-3">
                    {[
                      {
                        value: 'regular',
                        label: 'Regular license',
                        helper: 'Single end product / non-paid end users',
                        price: regularPrice,
                      },
                      {
                        value: 'extended',
                        label: 'Extended license',
                        helper: 'Paid end users / larger commercial scope',
                        price: extendedPrice,
                      },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setLicense(option.value)}
                      className={`rounded-[24px] px-5 py-4 text-left transition-colors ${
                          license === option.value
                            ? 'gallery-chip border border-primary'
                            : 'gallery-chip hover:border-primary/30 hover:bg-white/6'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="font-heading text-2xl font-bold text-white">{option.label}</div>
                            <p className="mt-1 text-sm text-white/55">{option.helper}</p>
                          </div>
                          <span className="font-bold text-white">${option.price}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="gallery-chip mt-6 rounded-[24px] p-4">
                    <div className="flex items-start gap-3">
                      <FiCheckCircle className="mt-0.5 text-primary" size={18} />
                      <p className="text-sm leading-relaxed text-white/62">
                        {license === 'regular'
                          ? 'Use this asset in one end product where end users are not directly charged.'
                          : 'Use this asset in one end product where end users may be charged for access.'}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <button
                      onClick={() => {
                        addToCart(product);
                        setIsCartOpen(true);
                      }}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-gradient px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-500 ease-out hover:shadow-neon"
                    >
                      <FiShoppingCart />
                      Buy now
                    </button>
                    <button
                      onClick={() => addToCart(product)}
                      className="gallery-chip inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-primary hover:text-primary"
                    >
                      Add to cart
                    </button>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                    {[
                      'Instant download after purchase',
                      'Cleanly organized source files',
                      'Commercial-friendly support window',
                    ].map((item) => (
                      <div key={item} className="gallery-chip rounded-2xl px-4 py-3 text-sm text-white">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="gallery-panel rounded-[30px] p-7 text-center">
                <div className="relative inline-block">
                  <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-primary text-4xl font-bold text-white shadow-lg">
                    M
                  </div>
                  <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-[2px]">
                    <FiCheckCircle className="fill-white text-primary" size={22} />
                  </div>
                </div>
                <p className="mt-5 text-[10px] font-black uppercase tracking-[0.22em] text-primary">Creator profile</p>
                <h3 className="mt-3 font-heading text-3xl font-bold text-white">{product.createdBy}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/62">
                  Productized design assets, polished storefront systems, and UI work made to look premium from the first click.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  <div>
                    <p className="font-heading text-2xl font-bold text-white">10k+</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/42">Customers</p>
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-white">4.9/5</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/42">Average rating</p>
                  </div>
                </div>
              </div>

              <div className="gallery-panel rounded-[30px] p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">Product details</p>
                <div className="mt-5 space-y-4 text-sm">
                  {[
                    { label: 'Last updated', value: formattedUpdateDate },
                    { label: 'File size', value: product.fileSize },
                    { label: 'Category', value: product.category },
                    { label: 'Compatibility', value: product.compatibility.join(' / ') },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                      <span className="text-white/52">{item.label}</span>
                      <span className="text-right font-bold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/browse?tag=${tag}`}
                      className="gallery-chip rounded-full px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-primary hover:text-primary"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              <button className="gallery-chip inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-brand-gradient hover:text-white">
                <FiExternalLink />
                Open live preview
              </button>
            </div>
          </div>
        </div>
      </section>

      <div
        className={`fixed bottom-0 left-0 z-40 w-full border-t border-white/10 bg-[linear-gradient(135deg,rgba(12,9,14,0.96),rgba(20,10,19,0.96)_52%,rgba(10,8,12,0.98)_100%)] p-4 shadow-[0_-18px_48px_-24px_rgba(0,0,0,0.8)] backdrop-blur transition-transform duration-300 ${
          showStickyBar ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between gap-4 px-4">
          <div className="flex min-w-0 items-center gap-4">
            <img src={images[0]} alt={product.title} className="gallery-frame hidden h-14 w-14 rounded-2xl object-cover shadow-sm sm:block" />
            <div className="min-w-0">
              <h4 className="line-clamp-1 font-bold text-white">{product.title}</h4>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-white/55">
                <span className="font-bold text-primary">${selectedPrice}</span>
                <span>{license === 'regular' ? 'Regular license' : 'Extended license'}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              addToCart(product);
              setIsCartOpen(true);
            }}
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-2xl bg-brand-gradient px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:shadow-neon"
          >
            <FiShoppingCart />
            <span className="hidden sm:inline">Buy now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
