"use client";
import React from "react";
import {
  Instagram,
  Facebook,
  Sparkles,
  MapPin,
  Heart,
  ArrowUp,
  MessageCircle,
} from "lucide-react";
import { useLenis } from "lenis/react";
import { sections } from "@/lib/sections";
import Link from "next/link";
import { siteConfig } from "@/lib/site/siteConfig";

export function FooterSection() {
  const lenis = useLenis();
  const { brand } = siteConfig;

  return (
    <footer className="bg-(--secondary)/30 border-t border-(--border)/40 text-(--foreground) pt-20 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center relative overflow-hidden transition-colors duration-300">
      
      {/* Línea divisoria superior con gradiente sutil oro rosa */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-(--primary)/20 to-transparent" />

      <div className="z-10 flex flex-col items-center max-w-2xl w-full">
        
        {/* BRANDING EDITORIAL MINIMALISTA */}
        <div className="flex flex-col items-center gap-4 mb-14 text-center">
          <div className="size-11 bg-(--primary) rounded-xl flex items-center justify-center shadow-md shadow-(--primary)/10">
            <Sparkles className="text-(--primary-foreground) size-5.5 fill-current" />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-display font-medium tracking-widest uppercase">
              {brand.name}
              <span className="text-(--primary) font-light">{brand.suffix}</span>
            </h2>
            <p className="text-[9px] font-sans font-medium text-(--muted-foreground) tracking-[0.35em] uppercase">
              Haute Parfumerie & Beauté
            </p>
          </div>
        </div>

        {/* CANALES DE CONTACTO PREMIUM (Cards Estilo Boutique) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-14">
          <a
            href="https://wa.me/5493446123456"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 bg-(--card) hover:bg-(--card)/80 p-5 rounded-xl border border-(--border)/40 transition-all duration-300 active:scale-[0.99] shadow-[0_4px_20px_rgba(0,0,0,0.01)]"
          >
            <div className="size-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <MessageCircle size={18} className="fill-current/10" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-sans font-semibold text-(--foreground) tracking-wide mb-0.5">
                Pedidos vía WhatsApp
              </span>
              <span className="text-[11px] font-sans text-(--muted-foreground) tracking-tight">
                Asesoría inmediata de belleza
              </span>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-(--card) p-5 rounded-xl border border-(--border)/40 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            <div className="size-11 rounded-lg bg-(--secondary) text-(--primary) flex items-center justify-center shrink-0">
              <MapPin size={18} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-sans font-semibold text-(--foreground) tracking-wide mb-0.5">
                Punto Central de Entrega
              </span>
              <span className="text-[11px] font-sans text-(--muted-foreground) tracking-tight">
                Gualeguaychú, Entre Ríos
              </span>
            </div>
          </div>
        </div>

        {/* NAVEGACIÓN REFINADA (Pills Minimalistas) */}
        <nav className="mb-14 w-full border-y border-(--border)/30 py-5">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => lenis?.scrollTo(`#${section.id}`, { offset: -90, duration: 1.2 })}
                  className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-(--muted-foreground) hover:text-(--primary) transition-colors"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* REDES SOCIALES EN SINTONÍA DE COLOR */}
        <div className="flex gap-3 mb-16">
          {[Instagram, Facebook].map((Icon, i) => (
            <Link
              key={i}
              href="#"
              className="size-10 rounded-lg bg-(--card) text-(--muted-foreground)/70 flex items-center justify-center hover:bg-(--primary) hover:text-(--primary-foreground) hover:scale-105 transition-all duration-300 border border-(--border)/40 shadow-sm"
            >
              <Icon className="size-4.5" />
            </Link>
          ))}
        </div>
      </div>

      {/* PIE DE PÁGINA FINAL (Sub-Footer Editorial) */}
      <div className="w-full max-w-4xl border-t border-(--border)/40 pt-8 flex flex-col items-center gap-6">
        
        {/* Volver arriba sutil */}
        <button
          onClick={() => lenis?.scrollTo(0, { duration: 1.5 })}
          className="flex flex-col items-center gap-1.5 text-(--muted-foreground)/60 hover:text-(--primary) transition-colors group"
        >
          <div className="size-8 rounded-full border border-(--border) flex items-center justify-center group-hover:-translate-y-0.5 transition-transform duration-300">
            <ArrowUp size={14} />
          </div>
          <span className="text-[9px] font-sans font-bold uppercase tracking-[0.25em]">
            Volver arriba
          </span>
        </button>

        {/* Firma del Cliente y Copyright */}
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-[10px] font-sans font-medium text-(--muted-foreground) tracking-wider flex items-center gap-1.5">
            Desarrollado con
            <Heart size={9} className="text-(--primary) fill-current animate-pulse" /> para
            <span className="text-(--foreground) font-semibold">{brand.name}</span>
          </p>
          <p className="text-[9px] font-sans text-(--muted-foreground)/50 tracking-widest uppercase">
            © {new Date().getFullYear()} — Todos los derechos reservados.
          </p>
        </div>
      </div>

    </footer>
  );
}