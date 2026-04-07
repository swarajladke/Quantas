import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';

const galleryImages = [
  // ── Row 1: Top zone ──
  {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    alt: 'Abstract colorful gradient art',
    startX: '-120%', endX: '110%',
    startY: '-140%', endY: '160%',
    rotate: [-15, 22], scale: [0.7, 1.2],
    width: 'w-56 sm:w-64 lg:w-80',
    zIndex: 'z-[3]', position: 'top-[4%] left-[3%]',
    rounded: 'rounded-[28px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80',
    alt: '3D abstract shapes',
    startX: '110%', endX: '-130%',
    startY: '-120%', endY: '180%',
    rotate: [18, -14], scale: [0.65, 1.18],
    width: 'w-52 sm:w-60 lg:w-72',
    zIndex: 'z-[5]', position: 'top-[2%] right-[5%]',
    rounded: 'rounded-[24px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80',
    alt: 'Pink and blue ink in water',
    startX: '-60%', endX: '90%',
    startY: '-160%', endY: '140%',
    rotate: [10, -18], scale: [0.72, 1.16],
    width: 'w-44 sm:w-52 lg:w-60',
    zIndex: 'z-[2]', position: 'top-[6%] left-[36%]',
    rounded: 'rounded-[22px]',
  },

  // ── Row 2: Upper-mid zone ──
  {
    src: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    alt: 'Abstract gradient blur',
    startX: '80%', endX: '-100%',
    startY: '-150%', endY: '130%',
    rotate: [-14, 20], scale: [0.75, 1.18],
    width: 'w-40 sm:w-48 lg:w-56',
    zIndex: 'z-[1]', position: 'top-[22%] left-[20%]',
    rounded: 'rounded-[20px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80',
    alt: 'Modern art gallery wall',
    startX: '120%', endX: '-90%',
    startY: '-80%', endY: '150%',
    rotate: [-20, 14], scale: [0.68, 1.2],
    width: 'w-48 sm:w-56 lg:w-64',
    zIndex: 'z-[4]', position: 'top-[18%] right-[18%]',
    rounded: 'rounded-[26px]',
  },

  // ── Row 3: Center zone ──
  {
    src: 'https://images.unsplash.com/photo-1633218388467-539651dcf81a?w=800&q=80',
    alt: 'Holographic fluid art',
    startX: '140%', endX: '-110%',
    startY: '100%', endY: '-140%',
    rotate: [-22, 16], scale: [0.72, 1.22],
    width: 'w-44 sm:w-52 lg:w-64',
    zIndex: 'z-[4]', position: 'top-[38%] right-[4%]',
    rounded: 'rounded-[22px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80',
    alt: 'Vibrant paint swirl',
    startX: '-130%', endX: '140%',
    startY: '90%', endY: '-120%',
    rotate: [14, -22], scale: [0.7, 1.18],
    width: 'w-48 sm:w-56 lg:w-68',
    zIndex: 'z-[2]', position: 'top-[42%] left-[2%]',
    rounded: 'rounded-[26px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80',
    alt: 'Colorful smoke plumes',
    startX: '-80%', endX: '100%',
    startY: '110%', endY: '-100%',
    rotate: [18, -12], scale: [0.74, 1.16],
    width: 'w-40 sm:w-48 lg:w-56',
    zIndex: 'z-[3]', position: 'top-[36%] left-[42%]',
    rounded: 'rounded-[24px]',
  },

  // ── Row 4: Lower-mid zone ──
  {
    src: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80',
    alt: 'Neon light abstract',
    startX: '110%', endX: '-140%',
    startY: '-100%', endY: '160%',
    rotate: [-18, 24], scale: [0.66, 1.18],
    width: 'w-52 sm:w-60 lg:w-72',
    zIndex: 'z-[5]', position: 'top-[58%] right-[14%]',
    rounded: 'rounded-[28px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1604076913837-52ab5f7c1ac4?w=800&q=80',
    alt: 'Geometric paper art',
    startX: '-140%', endX: '120%',
    startY: '-70%', endY: '170%',
    rotate: [22, -16], scale: [0.7, 1.2],
    width: 'w-44 sm:w-52 lg:w-60',
    zIndex: 'z-[6]', position: 'top-[60%] left-[18%]',
    rounded: 'rounded-[22px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5b2b?w=800&q=80',
    alt: 'Iridescent soap bubble',
    startX: '50%', endX: '-70%',
    startY: '-130%', endY: '120%',
    rotate: [-12, 18], scale: [0.76, 1.14],
    width: 'w-36 sm:w-44 lg:w-52',
    zIndex: 'z-[1]', position: 'top-[56%] left-[44%]',
    rounded: 'rounded-[18px]',
  },

  // ── Row 5: Bottom zone ──
  {
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    alt: 'Retro neon gaming setup',
    startX: '-100%', endX: '150%',
    startY: '-90%', endY: '180%',
    rotate: [-12, 26], scale: [0.64, 1.16],
    width: 'w-52 sm:w-60 lg:w-72',
    zIndex: 'z-[6]', position: 'bottom-[6%] left-[6%]',
    rounded: 'rounded-[30px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&q=80',
    alt: 'Futuristic 3D render',
    startX: '150%', endX: '-120%',
    startY: '-60%', endY: '140%',
    rotate: [16, -24], scale: [0.68, 1.2],
    width: 'w-48 sm:w-56 lg:w-68',
    zIndex: 'z-[7]', position: 'bottom-[4%] right-[4%]',
    rounded: 'rounded-[24px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80',
    alt: 'Laptop on colorful desk',
    startX: '-90%', endX: '130%',
    startY: '60%', endY: '-110%',
    rotate: [14, -20], scale: [0.66, 1.18],
    width: 'w-44 sm:w-52 lg:w-64',
    zIndex: 'z-[4]', position: 'bottom-[8%] left-[34%]',
    rounded: 'rounded-[26px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80',
    alt: 'Colorful crystal prism',
    startX: '100%', endX: '-110%',
    startY: '-120%', endY: '100%',
    rotate: [-18, 14], scale: [0.72, 1.2],
    width: 'w-40 sm:w-48 lg:w-56',
    zIndex: 'z-[3]', position: 'bottom-[2%] right-[32%]',
    rounded: 'rounded-[20px]',
  },
];

function ParallaxImage({ image, scrollYProgress }) {
  // Compressed range = images complete full travel in less scroll = feels faster
  const x = useTransform(scrollYProgress, [0.05, 0.95], [image.startX, image.endX]);
  const y = useTransform(scrollYProgress, [0.05, 0.95], [image.startY, image.endY]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.9], image.rotate);
  const scale = useTransform(scrollYProgress, [0.1, 0.9], image.scale);
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.88, 1], [0.2, 1, 1, 0.3]);

  return (
    <Motion.div
      className={`absolute ${image.position} ${image.zIndex}`}
      style={{ x, y, rotate, scale, opacity }}
    >
      <div
        className={`${image.width} overflow-hidden ${image.rounded} shadow-[0_20px_70px_-20px_rgba(0,0,0,0.55),0_20px_70px_-28px_rgba(255,95,218,0.24)] ring-1 ring-white/20 transition-shadow duration-500 hover:shadow-[0_30px_90px_-20px_rgba(0,0,0,0.65),0_28px_90px_-30px_rgba(255,43,214,0.2)] hover:ring-white/40`}
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
        />
      </div>
    </Motion.div>
  );
}

const ParallaxGallery = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#000000]"
      style={{ minHeight: '110vh' }}
    >
      {/* Ambient background glow */}
      <Motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute left-[18%] top-[18%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/18 blur-[120px]" />
        <div className="absolute bottom-[18%] right-[20%] h-[420px] w-[420px] rounded-full bg-pink-500/16 blur-[105px]" />
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute right-[34%] top-[20%] h-[300px] w-[300px] rounded-full bg-rose-500/12 blur-[90px]" />
      </Motion.div>

      {/* Subtle grain texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1Ii8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-40" />

      {/* Center headline */}
      <div className="pointer-events-none absolute inset-0 z-[10] flex items-center justify-center">
        <div className="text-center px-4">
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-black uppercase tracking-[0.4em] text-white/40"
          >
            Handpicked visuals
          </Motion.p>
          <Motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-3xl font-heading text-5xl font-bold leading-[1.05] text-white/90 sm:text-6xl lg:text-7xl"
          >
            Assets that move
            <span className="block bg-gradient-to-r from-fuchsia-300 via-violet-300 to-orange-300 bg-clip-text text-transparent">
              as bold as you do.
            </span>
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/35 sm:text-lg"
          >
            Scroll to explore — every piece is designed to make your next project unforgettable.
          </Motion.p>
        </div>
      </div>

      {/* Parallax floating images */}
      <div className="relative h-full w-full" style={{ minHeight: '110vh' }}>
        {galleryImages.map((image, index) => (
          <ParallaxImage
            key={index}
            image={image}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>

      {/* Top / bottom fade edges */}
      <div className="absolute inset-x-0 top-0 z-[8] h-32 bg-gradient-to-b from-[#000000] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[8] h-32 bg-gradient-to-t from-[#000000] to-transparent" />
    </section>
  );
};

export default ParallaxGallery;
