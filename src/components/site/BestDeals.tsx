import { useEffect, useState } from "react";
import { ProductCard, type Product } from "./ProductCard";
import frame from "@/assets/product-frame.jpg";
import jewelry from "@/assets/product-jewelry.jpg";
import hamper from "@/assets/product-hamper.jpg";
import lamp from "@/assets/product-lamp.jpg";

const deals: Product[] = [
  { name: "Premium Photo Frame", image: frame, price: 699, oldPrice: 1299, rating: 5, badge: "-46%" },
  { name: "Rose Gold Locket", image: jewelry, price: 1799, oldPrice: 2999, rating: 5, badge: "HOT" },
  { name: "Rose Box Hamper", image: hamper, price: 1299, oldPrice: 2199, rating: 4, badge: "DEAL" },
  { name: "Aurora LED Lamp", image: lamp, price: 999, oldPrice: 1799, rating: 5, badge: "-45%" },
];

function useCountdown(seconds: number) {
  const [t, setT] = useState(seconds);
  useEffect(() => {
    const i = setInterval(() => setT((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(i);
  }, []);
  const d = Math.floor(t / 86400);
  const h = Math.floor((t % 86400) / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  return { d, h, m, s };
}

export function BestDeals() {
  const { d, h, m, s } = useCountdown(385 * 86400 + 92 * 3600 + 43 * 60 + 10);
  const units = [
    { v: d, l: "Days" }, { v: h, l: "Hours" }, { v: m, l: "Mins" }, { v: s, l: "Secs" },
  ];
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Limited Time</div>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
              Best Deals For <span className="text-gradient-primary">This Week</span>
            </h2>
          </div>
          <div className="flex gap-2">
            {units.map((u) => (
              <div key={u.l} className="grid place-items-center rounded-2xl bg-gradient-primary px-4 py-3 text-primary-foreground shadow-luxury min-w-[64px]">
                <div className="font-display text-2xl font-bold">{String(u.v).padStart(2, "0")}</div>
                <div className="text-[10px] uppercase opacity-80">{u.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {deals.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  );
}
