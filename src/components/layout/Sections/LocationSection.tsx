"use client";
import React from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Navigation,
  ExternalLink,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function LocationSection() {
  // Datos adaptados a la boutique del catálogo
  const ADDRESS = "Showroom / Punto de Retiro Principal";
  const CITY = "Gualeguaychú, Entre Ríos";
  const MAPS_URL = "https://maps.google.com/?q=-33.0094,-58.5144"; // Coordenadas de ejemplo

  return (
    <section 
      id="ubicacion" 
      className="bg-(--background) py-16 px-4 sm:px-6 lg:px-8 border-t border-(--border)/30 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* COLUMNA IZQUIERDA: Título e Información de Contacto/Retiro */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-sans font-bold text-(--primary) uppercase tracking-[0.2em]">
                Atención Personalizada
              </span>
              <span className="text-[9px] font-sans font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
                Disponible
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-(--foreground) tracking-wide">
              Boutique & Entregas
            </h2>
            <div className="h-[2px] w-12 bg-(--primary) rounded-full" />
          </div>

          <p className="text-sm font-sans font-light text-(--muted-foreground) leading-relaxed">
            Coordiná tus pedidos directamente con tu asesora. Podés retirar tus fragancias y cosméticos en nuestro punto central o solicitar envío a domicilio sin cargo en zonas seleccionadas.
          </p>

          {/* LISTA DE INFORMACIÓN ADICIONAL (Estilo Cards de Lujo Minimalistas) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {/* Horarios de Consulta */}
            <div className="flex items-center gap-4 p-4 bg-(--card) rounded-xl border border-(--border)/40 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <div className="size-10 bg-(--secondary) text-(--primary) rounded-lg flex items-center justify-center shrink-0">
                <Clock className="size-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-sans font-bold text-(--muted-foreground) uppercase tracking-widest">
                  Asesoría en Línea
                </span>
                <span className="text-sm font-sans font-medium text-(--foreground) mt-0.5">
                  Lunes a Sábados: 09:00 — 20:00
                </span>
              </div>
            </div>

            {/* Modalidad de Envíos Cosméticos */}
            <div className="flex items-center gap-4 p-4 bg-(--card) rounded-xl border border-(--border)/40 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <div className="size-10 bg-(--secondary) text-(--primary) rounded-lg flex items-center justify-center shrink-0">
                <Sparkles className="size-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-sans font-bold text-(--muted-foreground) uppercase tracking-widest">
                  Modalidad de Entrega
                </span>
                <span className="text-sm font-sans font-medium text-(--foreground) mt-0.5">
                  Packaging de regalo premium. Pagá al recibir.
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* COLUMNA DERECHA: Mapa y Dirección Editorial */}
        <div className="lg:col-span-7 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-(--card) rounded-2xl border border-(--border)/40 overflow-hidden shadow-xl shadow-(--foreground)/5"
          >
            {/* MOCK DE MAPA MINIMALISTA */}
            <div
              onClick={() => window.open(MAPS_URL, "_blank")}
              className="relative aspect-[21/9] sm:aspect-[16/7] bg-(--muted)/60 cursor-pointer group overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                alt="Ubicación del Showroom"
                fill
                className="object-cover opacity-30 grayscale contrast-125 mix-blend-luminosity transition-transform duration-700 group-hover:scale-103"
              />

              {/* Pin de Navegación Estilo Perfumería */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-(--background) text-(--primary) p-3.5 rounded-full shadow-xl border border-(--border)/40 group-hover:bg-(--primary) group-hover:text-(--primary-foreground) transition-all duration-300">
                  <Navigation className="size-5" strokeWidth={2} />
                </div>
              </div>
            </div>

            {/* PIE DE LA TARJETA: Dirección Física */}
            <div className="p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-(--card)">
              <div className="flex items-start gap-3">
                <MapPin className="size-4.5 text-(--primary) shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <p className="text-sm font-sans font-semibold text-(--foreground) tracking-wide">
                    {ADDRESS}
                  </p>
                  <p className="text-xs font-sans text-(--muted-foreground) mt-0.5">
                    {CITY}
                  </p>
                </div>
              </div>

              <button
                onClick={() => window.open(MAPS_URL, "_blank")}
                className="flex items-center justify-center gap-2 bg-(--foreground) hover:bg-(--primary) text-(--background) hover:text-(--primary-foreground) px-5 py-3 rounded-xl font-sans font-semibold text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]"
              >
                Ver mapa <ExternalLink className="size-3.5 opacity-60" />
              </button>
            </div>
          </motion.div>

          {/* SELLO DE AUTENTICIDAD */}
          <div className="mt-4 flex items-center justify-center gap-2 text-(--muted-foreground)/60">
            <ShieldCheck className="size-4 text-(--primary)" />
            <span className="text-[11px] font-sans font-medium tracking-wide">Canal exclusivo de venta directa garantizado</span>
          </div>
        </div>

      </div>
    </section>
  );
}