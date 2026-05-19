import { motion } from "framer-motion";
import { ProductCard, type Product } from "./ProductCard";
import { SectionHeading } from "./Categories";

// Import all 12 images from src/public
import img1 from "/src/public/WhatsApp Image 2026-05-19 at 12.05.35 AM.jpeg";
import img2 from "/src/public/WhatsApp Image 2026-05-19 at 12.05.36 AM.jpeg";
import img3 from "/src/public/WhatsApp Image 2026-05-19 at 12.05.37 AM (1).jpeg";
import img4 from "/src/public/WhatsApp Image 2026-05-19 at 12.05.37 AM.jpeg";
import img5 from "/src/public/WhatsApp Image 2026-05-19 at 12.05.38 AM (1).jpeg";
import img6 from "/src/public/WhatsApp Image 2026-05-19 at 12.05.38 AM (2).jpeg";
import img7 from "/src/public/WhatsApp Image 2026-05-19 at 12.05.38 AM.jpeg";
import img8 from "/src/public/WhatsApp Image 2026-05-19 at 12.05.39 AM (1).jpeg";
import img9 from "/src/public/WhatsApp Image 2026-05-19 at 12.05.39 AM (2).jpeg";
import img10 from "/src/public/WhatsApp Image 2026-05-19 at 12.05.39 AM.jpeg";
import img11 from "/src/public/WhatsApp Image 2026-05-19 at 12.05.40 AM (1).jpeg";
import img12 from "/src/public/WhatsApp Image 2026-05-19 at 12.05.40 AM.jpeg";

const publicProducts: Product[] = [
  {
    name: "Customized Wooden Photo Frame",
    image: img1,
    price: 699,
    oldPrice: 1299,
    rating: 5,
    badge: "EXCLUSIVE",
  },
  {
    name: "Premium Love Photo Lamp",
    image: img2,
    price: 699,
    oldPrice: 1299,
    rating: 5,
    badge: "HOT",
  },
  {
    name: "Exclusive Couple Gift Hamper",
    image: img3,
    price: 699,
    oldPrice: 1299,
    rating: 5,
    badge: "DELUXE",
  },
  {
    name: "Personalized Magic Mug Pair",
    image: img4,
    price: 699,
    oldPrice: 999,
    rating: 4,
    badge: "POPULAR",
  },
  {
    name: "Luxurious Crimson Gift Set",
    image: img5,
    price: 699,
    oldPrice: 1499,
    rating: 5,
    badge: "PREMIUM",
  },
  {
    name: "Anniversary Shadow Box Lamp",
    image: img6,
    price: 699,
    oldPrice: 1499,
    rating: 5,
    badge: "BEST SELLER",
  },
  {
    name: "Custom Velvet Cushion & Mug",
    image: img7,
    price: 699,
    oldPrice: 1199,
    rating: 4,
    badge: "COMBO",
  },
  {
    name: "Handcrafted Love Letter Box",
    image: img8,
    price: 699,
    oldPrice: 1299,
    rating: 5,
    badge: "NEW",
  },
  {
    name: "Elite Corporate Gift Hamper",
    image: img9,
    price: 699,
    oldPrice: 1299,
    rating: 5,
    badge: "TRENDING",
  },
  {
    name: "Personalized Golden Pendant Set",
    image: img10,
    price: 699,
    oldPrice: 1499,
    rating: 5,
    badge: "LUXURY",
  },
  {
    name: "Warm LED Glass Bottle Gift",
    image: img11,
    price: 699,
    oldPrice: 1199,
    rating: 4,
    badge: "BEST DEAL",
  },
  {
    name: "Prestige Rose Gold Combo Set",
    image: img12,
    price: 699,
    oldPrice: 1299,
    rating: 5,
    badge: "LIMITED",
  },
];

export function WhatsAppGallery() {
  return (
    <section className="bg-gradient-blush py-20 border-t border-border/40" id="whatsapp-collection">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Special Gifting Collection"
          title="Our Exclusive WhatsApp Gifting Collection"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          Explore our signature customized hampers, LED lamps, and couple frames. Click any item to directly connect with us on WhatsApp and place your custom order instantly!
        </p>
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {publicProducts.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
