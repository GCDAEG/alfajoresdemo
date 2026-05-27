"use client";
import React, { useState, useEffect } from "react";
import { NavSection } from "@/lib/sections";
import Link from "next/link";
import { X, Menu, Sparkles, ChevronRight, ShoppingBag } from "lucide-react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site/siteConfig";
import { usePathname, useRouter } from "next/navigation";

interface MobileMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ sections, activeSection }) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();
  const router = useRouter();
  const { brand } = siteConfig;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const handleAction = (id: string) => {
    setOpen(false);
    // Ejecución inmediata del scroll de Lenis
    lenis?.scrollTo(`#${id}`, { offset: -80, duration: 1.2 });
  };

  const handleCatalogRedirect = () => {
    setOpen(false);
    router.push("/catalogo");
  };

  return (
    <>
      {/* --- ACTIVADOR INTEGRADO EN LA NAVBAR PADRE (Solo visible en móviles) --- */}
      <div className="w-full flex lg:hidden justify-between items-center h-full">
        <Link
          href="/"
          className="flex items-center gap-2.5 active:opacity-80 transition-opacity"
          onClick={() => setOpen(false)}
        >
          <div className="bg-(--primary) p-2 rounded-lg shadow-sm shadow-(--primary)/10">
            <Sparkles className="text-(--primary-foreground) size-4.5 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-display font-medium tracking-widest leading-none text-(--foreground) uppercase">
              {brand.name}
              <span className="text-(--primary) font-light">{brand.suffix}</span>
            </span>
          </div>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(true)}
          className="size-11 rounded-lg bg-(--muted)/60 text-(--foreground) border border-(--border)/40 active:bg-(--muted)"
        >
          <Menu className="size-5.5" strokeWidth={2} />
        </Button>
      </div>

      {/* --- PANEL LATERAL PREMIUM (DRAWER) --- */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP CON BLUR SATINADO */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[110] bg-(--foreground)/30 backdrop-blur-xs min-h-screen"
            />

            {/* SIDE DRAWER */}
            <motion.div
              initial={{ x: "100%", opacity: 0.9 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.9 }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-dvh w-[85%] max-w-xs z-[120] bg-(--background) flex flex-col rounded-l-2xl shadow-2xl border-l border-(--border)/40"
            >
              {/* HEADER DEL MENU */}
              <div className="flex justify-between items-center px-6 pt-8 pb-5 border-b border-(--border)/40">
                <div className="flex flex-col">
                  <span className="text-[9px] font-sans font-bold text-(--primary) uppercase tracking-[0.2em]">
                    Colecciones
                  </span>
                  <h3 className="text-lg font-display font-medium text-(--foreground) tracking-wide mt-0.5">
                    Explorar Belleza
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="size-9 flex items-center justify-center bg-(--muted) text-(--muted-foreground) rounded-lg active:bg-(--border)"
                >
                  <X className="size-4.5" strokeWidth={2} />
                </button>
              </div>

              {/* LISTA DE ENLACES DE NAVEGACIÓN */}
              <nav className="flex-1 px-3 py-4 overflow-y-auto no-scrollbar">
                <ul className="space-y-1">
                  {sections.map((sec) => {
                    const isActive = activeSection === sec.id && pathname === "/";
                    return (
                      <li key={sec.id}>
                        <button
                          onClick={() => handleAction(sec.id)}
                          className={cn(
                            "w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-200",
                            isActive
                              ? "bg-(--secondary) text-(--primary) font-semibold"
                              : "text-(--foreground)/80 font-medium active:bg-(--muted)/50"
                          )}
                        >
                          <span className="text-sm font-sans tracking-wide">{sec.label}</span>
                          {isActive ? (
                            <div className="size-1.5 bg-(--primary) rounded-full" />
                          ) : (
                            <ChevronRight
                              className="size-4 text-(--muted-foreground)/40"
                              strokeWidth={2}
                            />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* FOOTER DEL MENÚ - ACCESO DIRECTO AL CATÁLOGO DIGITAL */}
              <div 
                onClick={handleCatalogRedirect}
                className="p-5 bg-(--secondary)/40 border-t border-(--border)/40 flex items-center gap-3.5 cursor-pointer active:bg-(--secondary)/80 transition-colors"
              >
                <div className="size-10 rounded-lg bg-(--foreground) flex items-center justify-center shrink-0 shadow-sm">
                  <ShoppingBag className="size-4.5 text-(--background)" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[9px] text-(--primary) font-bold uppercase tracking-[0.15em] leading-none mb-1.5">
                    Boutique Virtual
                  </p>
                  <p className="text-xs font-sans font-medium text-(--foreground) leading-none tracking-tight">
                    Ver Catálogo Completo
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;