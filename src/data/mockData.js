export const categories = [
  { id: 1, name: "Themes", icon: "FiLayout", productCount: 12450 },
  { id: 2, name: "Plugins", icon: "FiCode", productCount: 8320 },
  { id: 3, name: "Templates", icon: "FiLayers", productCount: 6540 },
  { id: 4, name: "UI Kits", icon: "FiSmartphone", productCount: 3210 },
  { id: 5, name: "Fonts", icon: "FiType", productCount: 2150 },
  { id: 6, name: "Graphics", icon: "FiImage", productCount: 15430 },
  { id: 7, name: "Illustrations", icon: "FiPenTool", productCount: 4320 },
  { id: 8, name: "Dashboard", icon: "FiMonitor", productCount: 1250 },
];

const productPresets = [
  {
    title: "Horizon Admin Workspace",
    description: "A refined React dashboard kit with polished analytics, account flows, and launch-ready marketing blocks.",
    tags: ["React", "Dashboard", "Tailwind", "Analytics"],
    compatibility: ["React", "Figma"],
    category: "Dashboard",
    badge: "Bestseller",
    license: "extended",
    fileSize: "18.2 MB",
    lastUpdated: "2026-03-28",
  },
  {
    title: "Northstar Landing Suite",
    description: "Conversion-focused landing page sections designed for SaaS, agencies, and product launches.",
    tags: ["Marketing", "Templates", "HTML", "Tailwind"],
    compatibility: ["HTML5", "React"],
    category: "Templates",
    badge: "New",
    license: "regular",
    fileSize: "9.4 MB",
    lastUpdated: "2026-03-22",
  },
  {
    title: "Vector Commerce Icons",
    description: "A modular icon library with storefront, analytics, logistics, and checkout glyphs for modern teams.",
    tags: ["Icons", "Graphics", "SVG", "Design"],
    compatibility: ["Figma", "Sketch"],
    category: "Graphics",
    badge: "Sale",
    license: "regular",
    fileSize: "6.1 MB",
    lastUpdated: "2026-03-16",
  },
  {
    title: "Studio Serif Collection",
    description: "A premium editorial font family built for striking headlines, branding systems, and product launches.",
    tags: ["Fonts", "Branding", "Editorial", "Variable"],
    compatibility: ["Figma", "HTML5"],
    category: "Fonts",
    badge: null,
    license: "regular",
    fileSize: "12.7 MB",
    lastUpdated: "2026-03-09",
  },
  {
    title: "Pulse UI Essentials",
    description: "A component-rich interface kit with app shells, forms, data visuals, and polished empty states.",
    tags: ["UI Kit", "Design System", "Components", "Tailwind"],
    compatibility: ["Figma", "React"],
    category: "UI Kits",
    badge: "Featured",
    license: "extended",
    fileSize: "21.3 MB",
    lastUpdated: "2026-02-28",
  },
  {
    title: "Orbital Plugin Toolkit",
    description: "A bundle of ready-to-sell product enhancements for search, sorting, and conversion-focused onboarding.",
    tags: ["Plugins", "UX", "Automation", "Checkout"],
    compatibility: ["WordPress", "HTML5"],
    category: "Plugins",
    badge: null,
    license: "extended",
    fileSize: "14.8 MB",
    lastUpdated: "2026-02-22",
  },
];

const reviewComments = [
  "Clean structure, thoughtful spacing, and the documentation made setup really quick.",
  "One of the most polished marketplace assets I have used this year.",
  "The files were organized perfectly and the UI quality is noticeably above average.",
  "Beautiful visual hierarchy and very easy to adapt to our brand system.",
  "Support quality and update cadence made this purchase feel completely worth it.",
];

const statusCycle = ["Completed", "Completed", "Completed", "Pending", "Refunded"];

export const products = Array.from({ length: 20 }, (_, i) => {
  const preset = productPresets[i % productPresets.length];
  const price = 19 + (i % 5) * 12 + Math.floor(i / 5) * 4;
  const rating = (4.2 + (i % 6) * 0.1).toFixed(1);
  const reviewCount = 48 + i * 17;
  const sales = 180 + i * 73;

  return {
    id: i + 1,
    title: `${preset.title} ${i > productPresets.length - 1 ? `Vol. ${Math.floor(i / productPresets.length) + 1}` : ""}`.trim(),
    category: preset.category,
    price,
    rating,
    reviewCount,
    sales,
    createdBy: "Marketly Studio",
    previewImage: `https://picsum.photos/seed/prod${i}/900/700`,
    badge: preset.badge,
    tags: preset.tags,
    description: preset.description,
    compatibility: preset.compatibility,
    license: preset.license,
    fileSize: preset.fileSize,
    lastUpdated: preset.lastUpdated,
  };
});

export const reviews = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  user: `User ${i + 1}`,
  avatar: `https://i.pravatar.cc/150?u=user${i}`,
  rating: i % 4 === 0 ? 4 : 5,
  comment: reviewComments[i % reviewComments.length],
  date: `2026-0${Math.min(3, Math.floor(i / 4) + 1)}-${String(8 + i).padStart(2, "0")}`,
}));

export const orders = Array.from({ length: 5 }, (_, i) => ({
  id: `ORD-2026-${1000 + i}`,
  product: products[i].title,
  price: products[i].price,
  date: `2026-03-${String(8 + i * 3).padStart(2, "0")}`,
  status: statusCycle[i],
  buyer: `Customer ${i + 1}`,
}));

export const revenueData = Array.from({ length: 30 }, (_, i) => ({
  date: `3/${i + 1}`,
  revenue: 320 + (i % 7) * 85 + i * 12,
  sales: 6 + (i % 5) * 2,
}));
