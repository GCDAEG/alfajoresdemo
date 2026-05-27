// src/lib/mockProducts.ts

export interface MockProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export const mockProducts: MockProduct[] = [
  // ====================== FRAGANCIAS DE AUTOR ======================
  {
    id: "frag-1",
    name: "Eternity Noir Intense Eau de Parfum",
    price: 94500,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop",
    category: "Fragancias",
    description: "Notas florales de jazmín nocturno y ámbar cristalino.",
  },
  {
    id: "frag-2",
    name: "L'Ambre Doré Essence",
    price: 112000,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop",
    category: "Fragancias",
    description: "Una sinfonía amaderada con destellos de vainilla de Madagascar y sándalo.",
  },
  {
    id: "frag-3",
    name: "Rosé Pétale Néroli Mist",
    price: 78000,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop",
    category: "Fragancias",
    description: "Fragancia ligera e inspiradora basada en infusión pura de pétalos frescos.",
  },
  {
    id: "frag-4",
    name: "Blanc Minimalist Cologne",
    price: 85000,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop",
    category: "Fragancias",
    description: "Frescura limpia y atemporal con sutiles acordes de bergamota cítrica.",
  },

  // ====================== MAQUILLAJE ROSTRO ======================
  {
    id: "maq-1",
    name: "Base Sérum Velvet Fluide (Nude)",
    price: 34000,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
    category: "Maquillaje",
    description: "Base ligera ultra hidratante con acabado satinado efecto segunda piel.",
  },
  {
    id: "maq-2",
    name: "Labial Rouge Satin Satiné Matt",
    price: 18500,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop",
    category: "Maquillaje",
    description: "Pigmentación intensa de larga duración enriquecida con manteca de karité.",
  },
  {
    id: "maq-3",
    name: "Polvos Iluminadores Rose Gold Glow",
    price: 26900,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop",
    category: "Maquillaje",
    description: "Micropartículas reflectoras de luz para un acabado radiante y tridimensional.",
  },
  {
    id: "maq-4",
    name: "Máscara de Pestañas Cils Rallongeant",
    price: 19800,
    image: "https://images.unsplash.com/photo-1512207159096-c2c91b1dfadd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Maquillaje",
    description: "Alargamiento extremo y volumen definido sin dejar grumos.",
  },

  // ====================== SKINCARE ESENCIAL ======================
  {
    id: "skin-1",
    name: "Sérum Hidratante Ácido Hialurónico al 2%",
    price: 42000,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
    category: "Skincare",
    description: "Hidratación profunda multidimensional para rellenar líneas finas.",
  },
  {
    id: "skin-2",
    name: "Crema Ultra-Nutritiva de Día Botanique",
    price: 49500,
    image: "https://images.unsplash.com/photo-1708477199100-e4d5f56a8eb2?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Skincare",
    description: "Protección celular activa frente al estrés ambiental diario.",
  },
  {
    id: "skin-3",
    name: "Óleo Reparador de Noche Camelia Royale",
    price: 56000,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=600&auto=format&fit=crop",
    category: "Skincare",
    description: "Elixir regenerador nocturno que restaura la elasticidad y luminosidad.",
  },
  {
    id: "skin-4",
    name: "Tónico Equilibrante de Agua de Rosas",
    price: 22000,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=600&auto=format&fit=crop",
    category: "Skincare",
    description: "Calma refrescante y descongestiva inmediata para pieles sensibles.",
  },

  // ====================== ACCESORIOS PREMIUM ======================
  {
    id: "acc-1",
    name: "Rodillo Facial de Cuarzo Rosa Natural",
    price: 18000,
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600&auto=format&fit=crop",
    category: "Accesorios",
    description: "Herramienta de drenaje linfático para descongestionar y relajar el rostro.",
  },
  {
    id: "acc-2",
    name: "Set de Brochas Luxury Masterclass (x8)",
    price: 48500,
    image: "https://images.unsplash.com/photo-1678695692040-e9a39502c357?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Accesorios",
    description: "Fibras sintéticas premium ultra suaves para un difuminado profesional.",
  },
  {
    id: "acc-3",
    name: "Bandeja Organizadora de Mármol Satinado",
    price: 39000,
    image: "https://images.unsplash.com/photo-1625746735133-66dccc334545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWF0dGUlMjBtYXJibGUlMjB2YW5pdHklMjB0cmF5fGVufDB8fDB8fHww",
    category: "Accesorios",
    description: "Soporte minimalista elegante ideal para tu tocador y ritual diario.",
  }
];