// /src/lib/config/siteConfig.ts

export const siteConfig = {
  // 1. Visual Identity & Branding (Elegante & Sensorial)
  brand: {
    name: "AVANT",
    suffix: "BEAUTÉ", 
    logo: "/logos/avant-logo.png", // Mantiene el path listo para tu nuevo isotipo minimalista
    theme: "luxury-cosmetics", 
    colors: {
      primary: "oklch(0.51 0.21 348)",    // Rosa/Magenta sofisticado: Acento de marca y CTAs
      secondary: "oklch(0.94 0.025 45)",  // Tono Champagne/Nude: Fondos suaves y superficies
      accent: "oklch(0.96 0.03 10)",      // Pétalo Suave: Para hovers, insignias y categorías
      background: "oklch(0.985 0.006 30)" // Crema Orgánico: Calidez premium para resaltar empaques
    }
  },

  // 2. Main Content (Hero Section con Enfoque Editorial)
  hero: {
    badge: "✨ Colección Avant-Garde 2026",
    title: "AVANT BEAUTÉ",
    subtitle: "La sutileza de sentirse única. Explorá nuestra nueva línea de alta perfumería y cosmética inteligente. Fórmulas botánicas diseñadas para realzar tu luz natural.",
    buttonText: "Revelar Catálogo",
    bgImage: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200", 
  },

  // Categorías de Lujo Sin Emojis (Scannability limpia y sofisticada)
  categories: [
    "Colección Completa", 
    "Fragancias", 
    "Maquillaje", 
    "Skincare", 
    "Accesorios"
  ],

  // 3. E-commerce Features & Business Data (Modelo de Venta Directa / Showroom)
  features: {
    hasFilters: true,
    hasCart: true,
    whatsappNumber: "+5493446123456",
    deliveryInfo: "Boutique Virtual. Packaging de regalo premium. Coordiná la entrega con tu asesora oficial de belleza con envíos sin cargo.",
    openingHours: "Lunes a Sábados: 09:00 - 20:00 hs — Consultas en línea"
  },

  // 4. DATABASE CONNECTION (Sanity CMS u origen moldeable de catálogo)
  databaseUrl: "https://script.google.com/macros/s/AKfycbwUm-Wb2BDf8ltibLk4mqkMc2rBwAeSutjZyWbkGfm85hjZcICG_u6yYAw3bG37bDZJ/exec",
};