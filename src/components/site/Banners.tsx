import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import birthday from "@/assets/banner-birthday.jpg";
import anniv from "@/assets/banner-anniversary.jpg";
import couple from "@/assets/banner-couple.jpg";

const banners = [
  { tag: "GIFT BOX", title: "Awesome Birthday Collections", img: birthday, tone: "from-primary/80 to-rose/70" },
  { tag: "OCCASION", title: "Best Anniversary Gifts", img: anniv, tone: "from-rose/80 to-primary/70" },
  { tag: "HOT SALE", title: "Couple Sets Up To 50% Off", img: couple, tone: "from-primary/90 to-gold/60" },
];

export function Banners() {
  return (
    <section className="py-12">
      <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
        {banners.map((b, i) => (
          <motion.a
            key={b.title}
            href="#"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative block overflow-hidden rounded-3xl shadow-luxury"
          >
            <img src={b.img} alt={b.title} loading="lazy" className="h-64 w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className={`absolute inset-0 bg-gradient-to-br ${b.tone} mix-blend-multiply`} />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <span className="w-fit rounded-full bg-white/25 px-3 py-1 text-[10px] font-bold backdrop-blur">{b.tag}</span>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight md:text-3xl">{b.title}</h3>
              <span className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-semibold underline-offset-4 group-hover:underline">
                Shop Now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
