"use client";
import React from "react";
import { NavSection } from "@/lib/sections";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { siteConfig } from "@/lib/site/siteConfig";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const DesktopMenu = ({
  sections,
  activeSection,
}: {
  sections: NavSection[];
  activeSection: string | null;
}) => {
  const lenis = useLenis();
  const router = useRouter();
  const pathname = usePathname();
  const { brand } = siteConfig;

  const handleNavigation = (id: string) => {
    if (pathname !== "/") {
      router.push("/");
    } else {
      lenis?.scrollTo(`#${id}`, {
        offset: -90,
        duration: 1.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing premium exponencial
      });
    }
  };

  return (
    <div className="hidden lg:flex items-center justify-between w-full h-full">
      
      {/* LOGO - Identidad Corporativa Cosmética (Estilo Avon / Lancôme) */}
      <Link
        href="/"
        className="group flex items-center gap-3.5 active:scale-98 transition-all"
      >
        <div className="relative">
          {/* Resplandor oro rosa de fondo */}
          <div className="absolute inset-0 bg-[color:var(--public-hero-glow)] blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
          <div className="relative bg-(--primary) p-2.5 rounded-xl transition-all duration-500 group-hover:scale-105 shadow-md shadow-(--primary)/10">
            <Sparkles className="text-(--primary-foreground) size-5.5 fill-current" />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-display font-medium tracking-widest text-(--foreground) leading-none uppercase">
            {brand.name}
            <span className="text-(--primary) font-light">{brand.suffix}</span>
          </h1>
          <span className="text-[9px] font-sans font-medium text-(--muted-foreground) tracking-[0.35em] uppercase mt-1">
            Haute Parfumerie & Beauté
          </span>
        </div>
      </Link>

      {/* NAVIGATION - Minimalist Luxury Capsule Pill */}
      <div className="hidden xl:flex items-center bg-(--muted)/40 p-1 rounded-full border border-(--border)/30 backdrop-blur-sm">
        <ul className="flex items-center gap-0.5">
          {sections.map((s) => {
            const isActive = activeSection === s.id && pathname === "/";
            return (
              <li key={s.id} className="relative">
                <button
                  onClick={() => handleNavigation(s.id)}
                  className={cn(
                    "px-6 py-2 rounded-full text-[10px] font-sans font-semibold uppercase tracking-[0.2em] transition-all duration-300 relative z-10",
                    isActive
                      ? "text-(--primary)"
                      : "text-(--muted-foreground) hover:text-(--foreground)"
                  )}
                >
                  {s.label}
                </button>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill-desktop"
                    className="absolute inset-0 bg-(--card) rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.03)] border border-(--border)/40"
                    transition={{
                      type: "spring",
                      bounce: 0.1,
                      duration: 0.5,
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* ACTIONS - Conversión y Boutique Premium */}
      <div className="flex items-center gap-5">
        <div
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => router.push("/catalogo")}
        >
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-sans font-bold text-(--primary) uppercase tracking-widest">
              Boutique Digital
            </span>
            <span className="text-xs font-sans font-medium text-(--foreground) tracking-tight">
              Explorar Catálogo
            </span>
          </div>
          <button className="relative size-10 flex items-center justify-center bg-(--foreground) text-(--background) rounded-lg overflow-hidden transition-all duration-300 group-hover:bg-(--primary) group-hover:text-(--primary-foreground) active:scale-95">
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="h-6 w-px bg-(--border)" />

      </div>

    </div>
  );
};

export default DesktopMenu;