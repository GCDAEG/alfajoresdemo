import ProductCatalog from "@/components/layout/Sections/ProductCatalog";
import HeroSection from "../components/layout/Sections/HeroSection";

import LocationSection from "@/components/layout/Sections/LocationSection";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { CartDrawer } from "@/components/ui/CartDrawer";
// export const roboto = Roboto({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-roboto",
// });

// export const lora = Lora({
//   subsets: ["latin"],
//   display: "optional",
//   variable: "--font-lora",
// });

// export const montserrat = Montserrat({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-montserrat",
// });

// export const title = lora.className;
// export const titleH2 = montserrat.className;
// export const base = roboto.className;



export default async function Home() {
  return (
    <main className={`min-h-screen w-full font-base bg-background `}>
      <HeroSection />
      <ProductCatalog />

      <LocationSection />
      <CartDrawer />
      {/* <Testimonials /> */}
      {/* <WhatsAppChatInput /> */}
    </main>
  );
}
