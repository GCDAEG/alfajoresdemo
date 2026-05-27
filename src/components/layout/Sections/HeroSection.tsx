"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Award, Leaf } from "lucide-react";
import { useLenis } from "lenis/react";

const HeroSection = () => {
  const lenis = useLenis();

  return (
    <section
      id="hero"
      className="relative w-full bg-(--background) py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300"
    >
      {/* Resplandores orgánicos de fondo (Glow satinado definido en tu globals.css) */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-(--public-hero-glow) blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-(--public-hero-glow-soft) blur-[100px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* COLUMNA IZQUIERDA: Textos editoriales y tipografía de lujo */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-(--primary)/5 border border-(--primary)/10 px-3 py-1.5 rounded-full w-max"
          >
            <Sparkles className="size-3.5 text-(--primary) fill-current" />
            <span className="text-[10px] font-sans font-bold text-(--primary) uppercase tracking-[0.25em]">
              Colección Avant-Garde 2026
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-(--foreground) tracking-wide leading-[1.1]">
              La sutileza de <br />
              <span className="font-medium italic text-(--primary)">sentirse única.</span>
            </h1>
            <p className="text-sm sm:text-base font-sans font-light text-(--muted-foreground) tracking-wide max-w-md leading-relaxed">
              Explorá nuestra nueva línea de alta perfumería y cosmética inteligente. Fórmulas botánicas diseñadas para realzar tu luz natural de forma orgánica.
            </p>
          </motion.div>

          {/* CTA Principal de Conversión Editorial */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={() => lenis?.scrollTo("#catalog", { offset: -90, duration: 1.5 })}
              className="group flex items-center justify-center gap-3 bg-(--foreground) text-(--background) px-8 py-4 rounded-xl font-sans font-semibold text-xs uppercase tracking-widest active:scale-[0.98] hover:bg-(--primary) hover:text-(--primary-foreground) transition-all duration-300 shadow-lg shadow-(--foreground)/5"
            >
              Revelar Catálogo
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Micro-tarjeta de Asesora (Estilo firma de autor) */}
            <div className="flex items-center gap-3 px-4 py-2 border-l border-(--border) sm:border-l-2">
              <div className="size-8 rounded-full bg-(--secondary) border border-(--primary)/10 flex items-center justify-center text-(--primary) text-[11px] font-display font-bold">
                MC
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-sans font-bold text-(--muted-foreground) uppercase tracking-wider">
                  Tu Consejera de Belleza
                </span>
                <span className="text-xs font-sans font-medium text-(--foreground)">
                  María Laura G.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Sellos de Confianza Minimalistas */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8 border-t border-(--border)/40 flex items-center gap-6 text-(--muted-foreground)"
          >
            <div className="flex items-center gap-2">
              <Leaf className="size-4 text-(--primary)" />
              <span className="text-[11px] font-sans font-medium tracking-wide">Fórmulas Veganas</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="size-4 text-(--primary)" />
              <span className="text-[11px] font-sans font-medium tracking-wide">Cruelty-Free Certificado</span>
            </div>
          </motion.div>

        </div>

        {/* COLUMNA DERECHA: Composición Asimétrica de Imágenes (Look Editorial de Alta Gama) */}
        <div className="lg:col-span-7 relative w-full h-[380px] sm:h-[480px] lg:h-[550px] flex items-center justify-center">
          
          {/* Bloque Geométrico Nude de Fondo que rompe la simetría */}
          <div className="absolute inset-y-8 right-0 left-12 sm:left-24 bg-(--secondary)/50 rounded-3xl -z-10 transform rotate-1" />

          {/* Imagen Principal (Frasco / Detalle de estética) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-0 w-[65%] h-[85%] rounded-2xl overflow-hidden shadow-2xl shadow-black/5"
          >
            <Image
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop"
              alt="Fragancia Premium Cosmética"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* Imagen Secundaria Solapada (Textura / Rostro / Maquillaje) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute right-0 bottom-4 w-[45%] h-[60%] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border-4 border-(--background)"
          >
            <Image
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
              alt="Textura y Cuidado Esencial"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Badge de valoración flotante flotando sobre las imágenes */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute right-[38%] top-12 bg-(--card)/90 backdrop-blur-md p-3.5 rounded-xl border border-(--border)/40 shadow-xl hidden sm:flex items-center gap-3"
          >
            <div className="size-7 bg-amber-400 text-white rounded-lg flex items-center justify-center text-xs font-bold shadow-sm shadow-amber-400/20">
              ★
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-sans font-bold text-(--foreground) leading-none">4.9 / 5</span>
              <span className="text-[9px] font-sans text-(--muted-foreground) uppercase tracking-wider mt-1">Calidad Premium</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;