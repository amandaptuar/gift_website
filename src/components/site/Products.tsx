import { useState } from "react";
import { motion } from "framer-motion";
import { ProductCard, type Product } from "./ProductCard";
import { SectionHeading } from "./Categories";

import frame from "@/assets/product-frame.jpg";
import mug from "@/assets/product-mug.jpg";
import lamp from "@/assets/product-lamp.jpg";
import cushion from "@/assets/product-cushion.jpg";
import jewelry from "@/assets/product-jewelry.jpg";
import hamper from "@/assets/product-hamper.jpg";

const all: Product[] = [
  { name: "Floral Photo Frame", image: frame, price: 699, oldPrice: 999, rating: 5, badge: "NEW" },
  { name: "Love Heart Mug", image: mug, price: 699, oldPrice: 999, rating: 4, badge: "HOT" },
  { name: "Glow LED Lamp", image: lamp, price: 699, oldPrice: 1299, rating: 5, badge: "-35%" },
  { name: "Floral Cushion", image: cushion, price: 699, oldPrice: 999, rating: 4 },
  { name: "Rose Gold Pendant", image: jewelry, price: 699, oldPrice: 1499, rating: 5, badge: "SALE" },
  { name: "Pink Rose Hamper", image: hamper, price: 699, oldPrice: 1499, rating: 5, badge: "NEW" },
  { name: "Custom Mug Pair", image: mug, price: 699, oldPrice: 999, rating: 4 },
  { name: "Premium Frame XL", image: frame, price: 699, oldPrice: 1299, rating: 5 },
];

const tabs = ["All", "Birthday", "Anniversary", "Couple", "Corporate"];

export function TrendingProducts() {
  return (
    <section className="bg-gradient-blush py-20">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Trending Now" title="Best Selling Gifts" />
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {all.slice(0, 8).map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function PopularProducts() {
  const [tab, setTab] = useState(0);
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Popular Items</div>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Loved by Everyone</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tabs.map((t, i) => (
              <button
                key={t}
                onClick={() => setTab(i)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  tab === i ? "bg-gradient-primary text-primary-foreground shadow-luxury" : "bg-secondary text-foreground/70 hover:bg-accent"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4"
        >
          {all.slice(tab, tab + 4).concat(all.slice(0, Math.max(0, 4 - (all.length - tab)))).slice(0, 4).map((p) => (
            <ProductCard key={p.name + tab} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
