"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import DesktopMenu from "./Nav/DesktopMenu";
import MobileMenu from "./Nav/MobileMenu";
import { motion } from "framer-motion";
import { useWindowScroll } from "react-use";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { sections } from "@/lib/sections";

export function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const { y } = useWindowScroll();
  
  // 1. Estado para saber si ya estamos en el cliente de forma segura
  const [mounted, setMounted] = useState(false);

  // 2. Se ejecuta inmediatamente después del primer renderizado en el navegador
  useEffect(() => {
    const handle = window.requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => window.cancelAnimationFrame(handle);
  }, []);

  // 3. Solo evaluamos el scroll si ya montó en el cliente. En SSR siempre será false.
  const isScrolled = mounted && y > 20;

  /* ---------------------------------------------
      Sección activa (limpio)
  --------------------------------------------- */
  const activeSection = useScrollSpy(sections.map((s) => s.id));

  return (
    <motion.nav
      ref={ref}
      className={cn(
        // Altura fija, pegajoso en la parte superior y máxima prioridad de capa
        "sticky h-20 top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-[color:var(--public-glass-bg)] backdrop-blur-md border-b border-[color:var(--public-glass-border)] shadow-[0_4px_30px_rgba(0,0,0,0.02)]" 
          : "bg-transparent border-b border-transparent"
      )}
    >
      {/* Contenedor interno para centrar los menús y asegurar 
        que hereden la misma altura de la barra 
      */}
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <DesktopMenu sections={sections} activeSection={activeSection} />
        <MobileMenu sections={sections} activeSection={activeSection} />
      </div>
    </motion.nav>
  );
}