import { motion } from "framer-motion";
import { Frame, Coffee, Lamp, Heart, Sofa, Gem, Shirt, Briefcase, Cake, PartyPopper } from "lucide-react";

const cats = [
  { name: "Photo Frames", icon: Frame, count: 120 },
  { name: "Custom Mugs", icon: Coffee, count: 85 },
  { name: "LED Lamps", icon: Lamp, count: 64 },
  { name: "Couple Gifts", icon: Heart, count: 142 },
  { name: "Cushions", icon: Sofa, count: 48 },
  { name: "Jewelry", icon: Gem, count: 96 },
  { name: "T-Shirts", icon: Shirt, count: 71 },
  { name: "Corporate", icon: Briefcase, count: 38 },
  { name: "Birthday", icon: Cake, count: 110 },
  { name: "Anniversary", icon: PartyPopper, count: 89 },
];

export function Categories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Shop by Category" title="Find the Perfect Gift" />
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
          {cats.map((c, i) => (
            <motion.a
              key={c.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center rounded-3xl border border-border bg-card p-6 text-center shadow-soft transition hover:shadow-luxury hover:border-primary/40"
            >
              <div className="relative mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 blur-xl transition group-hover:opacity-50" />
                <div className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-blush ring-2 ring-primary/10 transition group-hover:bg-gradient-primary group-hover:ring-primary/30">
                  <c.icon className="h-7 w-7 text-primary transition group-hover:text-primary-foreground" />
                </div>
              </div>
              <div className="text-sm font-semibold">{c.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.count} items</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, align = "center" }: { eyebrow: string; title: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
        <span className="h-px w-8 bg-primary" /> {eyebrow} <span className="h-px w-8 bg-primary" />
      </div>
      <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">{title}</h2>
    </div>
  );
}
