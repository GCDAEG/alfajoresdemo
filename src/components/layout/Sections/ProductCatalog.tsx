"use client";

import React from "react";
import Image from "next/image";
import { Plus, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { SanityDocument } from "next-sanity";
import { MockProduct, mockProducts } from "@/lib/mockData";

interface ProductCatalogProps {
  posts?: SanityDocument[];
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ posts }) => {
  const { addToCart } = useCart();
  const mockData: MockProduct[] = mockProducts;

  // Agrupamos las categorías de manera limpia
  const categories = Array.from(
    new Set(mockData.map((p) => p.category).filter(Boolean)),
  );

  const getProductsByCategory = (cat: string) => {
    return mockData.filter((p) => p.category === cat);
  };

  return (
    <section 
      id="catalog" 
      className="bg-(--background) py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {categories.map((category) => (
          <div key={category as string} className="space-y-6">
            
            {/* CABECERA DE CATEGORÍA EDITORIAL */}
            <div className="flex items-end justify-between border-b border-(--border)/40 pb-3">
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-(--foreground) tracking-wide">
                  {category as string}
                </h2>
                <div className="h-[2px] w-10 bg-(--primary) rounded-full" />
              </div>
              
              <button className="text-xs font-sans font-semibold text-(--primary) uppercase tracking-widest flex items-center gap-1 hover:opacity-80 transition-opacity group">
                Ver colección 
                <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* REJILLA DE PRODUCTOS (Grid Premium Autoadaptable + Scroll Táctil en Móviles) */}
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-x-visible lg:gap-8 pb-4 no-scrollbar">
              {getProductsByCategory(category as string).map((product) => {
                const pId = product.id;
                const pName = product.name;
                const pPrice = product.price;

                return (
                  <motion.div
                    key={pId}
                    whileTap={{ scale: 0.99 }}
                    className="snap-start shrink-0 w-[200px] sm:w-[240px] lg:w-full flex flex-col group relative"
                  >
                    {/* CONTENEDOR DE IMAGEN VERTICAL (Proporción Estilo Revista de Moda) */}
                    <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-(--muted)/40 mb-3.5 border border-(--border)/10">
                      {product.image && (
                        <Image
                          src={product.image}
                          alt={pName}
                          fill
                          sizes="(max-w-1024px) 240px, 300px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                        />
                      )}

                      {/* Gradiente sutil inferior oculto que se revela al hacer Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-(--foreground)/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* ACCIÓN RÁPIDA: Botón Flotante de Añadir (Diseño de Alta Costura) */}
                      <button
                        onClick={() =>
                          addToCart({
                            id: pId,
                            title: pName,
                            price: pPrice.toString(),
                            category: category as string,
                            image: product.image,
                          })
                        }
                        className="absolute bottom-3 right-3 size-10 bg-(--background)/90 backdrop-blur-md text-(--foreground) rounded-full shadow-md flex items-center justify-center border border-(--border)/40 transition-all duration-300 hover:bg-(--primary) hover:text-(--primary-foreground) hover:scale-105 active:scale-95"
                        title="Añadir a la bolsa"
                      >
                        <Plus className="size-4" strokeWidth={2} />
                      </button>
                    </div>

                    {/* DETALLES DE PRODUCTO MINIMALISTAS */}
                    <div className="space-y-1 px-0.5">
                      <h3 className="text-sm font-sans font-medium text-(--foreground) tracking-tight line-clamp-1 group-hover:text-(--primary) transition-colors">
                        {pName}
                      </h3>
                      <p className="text-sm font-sans font-semibold text-(--foreground)/90 tracking-wide">
                        ${pPrice.toLocaleString("es-AR")}
                      </p>
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default ProductCatalog;