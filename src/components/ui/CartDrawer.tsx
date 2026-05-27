"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  X,
  Trash2,
  MessageCircle,
  Plus,
  Minus,
  Check,
  Sparkles,
  Truck,
  Gift,
  ChevronLeft,
  ArrowRight,
  MapPin,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site/siteConfig";
import { cn } from "@/lib/utils";

interface CartItem {
  id: string;
  title: string;
  price: string | number;
  quantity: number;
  image?: string;
}

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [showWSModal, setShowWSModal] = useState(false);
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">("delivery");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  const WHATSAPP_NUMBER = siteConfig.features.whatsappNumber.replace(/[+\s]/g, "");
  const DELIVERY_FEE = 0; // Envíos bonificados estilo boutique premium

  const finalTotal = totalPrice;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // ==================== EFECTOS DE CONTROL DE UI ====================

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    const isOpenState = () => {
if (cart.length === 0 && isOpen) {
      setIsOpen(false);
    }
    };
    isOpenState()
  }, [cart.length, isOpen]);

  useEffect(() => {
    const step = (e:1|2) => {
      setStep(e);
      setAddress("");
      setNotes("");
    };
       if (!isOpen) {
      step(1)
      
    }
  }, [isOpen]);

  // ==================== GENERADOR DE MENSAJE EDITORIAL ====================

  const generateWSMessage = (): string => {
    const productList = cart
      .map(
        (item) =>
          `🌸 ${item.quantity}x ${item.title} — $${(Number(item.price) * item.quantity).toLocaleString("es-AR")}`
      )
      .join("\n");

    const deliveryInfo =
      deliveryType === "delivery"
        ? `📍 *ENTREGA A DOMICILIO:* ${address || "A coordinar con mi asesora"}`
        : `🛍️ *RETIRO EN SHOWROOM / PUNTO CENTRAL*`;

    const notesInfo = notes ? `\n\n🎁 *DETALLES DE EMBALAJE / NOTAS:* ${notes}` : "";

    return `✨ *SOLICITUD DE PEDIDO — ${siteConfig.brand.name}*\n\n${deliveryInfo}\n\n*PRODUCTOS SELECCIONADOS:*\n${productList}${notesInfo}\n\n*TOTAL DE LA CONSULTA:* $${finalTotal.toLocaleString("es-AR")}\n\n_A la espera de la confirmación de stock de mi asesora oficial de belleza._`;
  };

  const handleFinalSend = () => {
    const message = generateWSMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setShowWSModal(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* BARRA FLOTANTE INFERIOR (Estilo Notificación Satinada de App de Lujo) */}
      <AnimatePresence>
        {totalItems > 0 && !isOpen && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-sm z-[110]"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="w-full bg-(--foreground) text-(--background) p-3.5 rounded-xl flex items-center justify-between shadow-xl shadow-black/10 hover:bg-(--primary) hover:text-(--primary-foreground) transition-all duration-300 active:scale-98"
            >
              <div className="flex items-center gap-3">
                <div className="relative size-9 bg-(--background)/10 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="size-4.5" />
                  <span className="absolute -top-1.5 -right-1.5 size-4.5 bg-(--primary) text-(--primary-foreground) text-[9px] font-sans font-bold rounded-full flex items-center justify-center border-2 border-(--foreground)">
                    {totalItems}
                  </span>
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-sans font-bold uppercase tracking-widest opacity-80">
                    Bolsa de compras
                  </span>
                  <p className="text-xs font-sans font-medium tracking-tight">Ver mis cosméticos</p>
                </div>
              </div>
              <span className="text-sm font-sans font-semibold tracking-wide">
                ${finalTotal.toLocaleString("es-AR")}
              </span>
            </button>
          </div>
        )}
      </AnimatePresence>

      {/* DRAWER COMPLETO PANORÁMICO */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[130] bg-(--background) flex flex-col overflow-hidden"
          >
            {/* Cabecera del Carrito */}
            <div className="p-5 flex items-center justify-between border-b border-(--border)/40 bg-(--card)">
              <div className="flex items-center gap-2">
                {step === 2 && (
                  <button
                    onClick={() => setStep(1)}
                    className="p-1.5 hover:bg-(--muted) rounded-lg transition-colors text-(--muted-foreground)"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}
                <h2 className="text-md font-display font-medium text-(--foreground) tracking-wide">
                  {step === 1 ? "Tu Selección de Belleza" : "Detalles de Envío Directo"}
                </h2>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="size-9 bg-(--muted)/60 hover:bg-(--muted) text-(--muted-foreground) rounded-lg flex items-center justify-center transition-colors"
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>

            {/* Cuerpo Flexible */}
            <div className="flex-1 overflow-y-auto bg-(--secondary)/10 p-4">
              {step === 1 && (
                <div className="space-y-3 max-w-md mx-auto">
                  {cart.map((item: CartItem) => (
                    <div
                      key={item.id}
                      className="relative flex gap-4 p-4 bg-(--card) rounded-xl border border-(--border)/30 shadow-xs"
                    >
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-2 right-2 p-1.5 text-(--muted-foreground)/40 hover:text-(--primary) transition-colors z-10"
                      >
                        <Trash2 size={15} />
                      </button>

                      {/* Imagen Vertical de Producto */}
                      <div className="relative size-20 aspect-[3/4] rounded-lg overflow-hidden shrink-0 bg-(--muted)/30 border border-(--border)/30">
                        <Image
                          src={item.image || "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=200"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Detalles del Cosmético */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                        <div className="pr-6">
                          <h4 className="font-sans font-medium text-(--foreground) text-sm truncate tracking-tight">
                            {item.title}
                          </h4>
                        </div>

                        <div className="flex items-center justify-between w-full mt-auto">
                          <p className="text-(--foreground)/90 font-sans font-semibold text-sm">
                            ${Number(item.price).toLocaleString("es-AR")}
                          </p>

                          {/* Selector de Cantidades Elegante */}
                          <div className="flex items-center bg-(--muted)/50 rounded-lg p-0.5 border border-(--border)/30">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="size-6.5 flex items-center justify-center text-(--muted-foreground) disabled:opacity-20 active:bg-(--card) active:rounded-md transition-all"
                            >
                              <Minus size={12} strokeWidth={2.5} />
                            </button>
                            <span className="font-sans font-semibold text-(--foreground) text-xs w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="size-6.5 flex items-center justify-center bg-(--card) text-(--foreground) rounded-md shadow-xs active:scale-95 transition-all"
                            >
                              <Plus size={12} strokeWidth={2.5} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 max-w-md mx-auto pt-2">
                  {/* Selector Segmentado de Envío */}
                  <div className="grid grid-cols-2 gap-3 bg-(--muted)/40 p-1 rounded-xl border border-(--border)/30">
                    <button
                      onClick={() => setDeliveryType("delivery")}
                      className={cn(
                        "flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-sans font-semibold uppercase tracking-wider transition-all",
                        deliveryType === "delivery"
                          ? "bg-(--card) text-(--primary) shadow-xs"
                          : "text-(--muted-foreground) hover:text-(--foreground)"
                      )}
                    >
                      <Truck size={15} /> Envío Directo
                    </button>
                    <button
                      onClick={() => setDeliveryType("pickup")}
                      className={cn(
                        "flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-sans font-semibold uppercase tracking-wider transition-all",
                        deliveryType === "pickup"
                          ? "bg-(--card) text-(--primary) shadow-xs"
                          : "text-(--muted-foreground) hover:text-(--foreground)"
                      )}
                    >
                      <Gift size={15} /> Showroom
                    </button>
                  </div>

                  {/* Inputs Editoriales */}
                  <div className="space-y-4">
                    {deliveryType === "delivery" && (
                      <div className="space-y-1.5">
                        <label className="flex items-center gap-2 text-xs font-sans font-bold text-(--foreground)/80 uppercase tracking-wider">
                          <MapPin size={14} className="text-(--primary)" /> Dirección de entrega
                        </label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Ej: San Martín 450, Piso 2 o Barrio Centro"
                          className="w-full p-3.5 bg-(--card) border border-(--border)/50 rounded-xl focus:border-(--primary) outline-none font-sans text-sm shadow-xs transition-colors"
                        />
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label className="flex items-center gap-2 text-xs font-sans font-bold text-(--foreground)/80 uppercase tracking-wider">
                        <FileText size={14} className="text-(--primary)" /> Aclaraciones de embalaje o notas
                      </label>
                      <textarea
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Ej: Es para un regalo de cumpleaños, preparar empaque especial..."
                        className="w-full p-3.5 bg-(--card) border border-(--border)/50 rounded-xl focus:border-(--primary) outline-none font-sans text-sm shadow-xs resize-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pie del Check-out */}
            <div className="p-5 bg-(--card) border-t border-(--border)/40">
              <div className="max-w-md mx-auto space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-sans font-medium text-(--muted-foreground)">Monto Final</span>
                  <span className="text-xl font-sans font-semibold text-(--foreground)">
                    ${finalTotal.toLocaleString("es-AR")}
                  </span>
                </div>

                {step === 1 ? (
                  <button
                    onClick={() => setStep(2)}
                    className="w-full h-12 bg-(--foreground) hover:bg-(--primary) text-(--background) hover:text-(--primary-foreground) rounded-xl font-sans font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 active:scale-98 shadow-md shadow-black/5"
                  >
                    Continuar al despacho <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={() => setShowWSModal(true)}
                    disabled={deliveryType === "delivery" && !address.trim()}
                    className="w-full h-12 bg-(--primary) disabled:bg-(--muted) disabled:text-(--muted-foreground)/40 text-(--primary-foreground) rounded-xl font-sans font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 active:scale-98 shadow-md shadow-(--primary)/10"
                  >
                    Confirmar por WhatsApp <MessageCircle size={16} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL EDITORIAL: PREVISUALIZACIÓN DE MENSAJE (Sin look WhatsApp rústico) */}
      <AnimatePresence>
        {showWSModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-(--foreground)/40 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="bg-(--background) w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-(--border)/40"
            >
              {/* Header Minimalista */}
              <div className="bg-(--card) p-4 border-b border-(--border)/40 flex items-center gap-3">
                <div className="size-9 bg-(--primary)/10 text-(--primary) rounded-lg flex items-center justify-center">
                  <Sparkles size={18} className="fill-current" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-(--foreground)">{siteConfig.brand.name}</p>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-wider text-emerald-600">Asesora en línea</p>
                </div>
              </div>

              {/* Contenedor del Mensaje */}
              <div className="bg-(--secondary)/20 p-5 min-h-[260px] flex items-end">
                <div className="w-full bg-(--card) p-4 rounded-xl border border-(--border)/30 text-xs font-mono text-(--foreground)/90 leading-relaxed whitespace-pre-wrap shadow-xs">
                  {generateWSMessage()}
                </div>
              </div>

              {/* Botonera de Acción */}
              <div className="p-4 flex gap-3 bg-(--card) border-t border-(--border)/40">
                <button
                  onClick={() => setShowWSModal(false)}
                  className="flex-1 py-3 text-xs font-sans font-bold uppercase tracking-wider text-(--muted-foreground) hover:bg-(--muted) rounded-xl transition-colors"
                >
                  Modificar
                </button>
                <button
                  onClick={handleFinalSend}
                  className="flex-[2] py-3 bg-(--foreground) hover:bg-(--primary) text-(--background) hover:text-(--primary-foreground) rounded-xl font-sans font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300"
                >
                  <Check size={16} strokeWidth={2.5} /> Enviar Solicitud
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};