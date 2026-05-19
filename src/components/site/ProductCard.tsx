import { motion } from "framer-motion";
import { Heart, Eye, ShoppingBag, Star, Sparkles } from "lucide-react";

export type Product = {
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  rating: number;
  badge?: string;
};

export function ProductCard({ p }: { p: Product }) {
  const waMsg = encodeURIComponent(`Hi, I want to enquire about this customized gift: ${p.name}`);
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:shadow-luxury"
    >
      <div className="relative overflow-hidden bg-gradient-blush">
        <img src={p.image} alt={p.name} loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110" />
        {p.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-gradient-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-soft">
            {p.badge}
          </span>
        )}
        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition group-hover:opacity-100">
          <IconBtn icon={<Heart className="h-4 w-4" />} />
          <IconBtn icon={<Eye className="h-4 w-4" />} />
        </div>
        <div className="absolute inset-x-3 bottom-3 flex translate-y-12 gap-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
          <button className="flex-1 rounded-full bg-gradient-primary py-2.5 text-xs font-semibold text-primary-foreground shadow-luxury">
            <ShoppingBag className="mr-1 inline h-3.5 w-3.5" /> Add to Cart
          </button>
          <button className="rounded-full bg-white px-3 py-2.5 text-xs font-semibold text-primary shadow-soft">
            <Sparkles className="inline h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-0.5 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-3.5 w-3.5 ${i < p.rating ? "fill-current" : "opacity-30"}`} />
          ))}
          <span className="ml-1 text-[10px] text-muted-foreground">({p.rating}.0)</span>
        </div>
        <h3 className="mt-2 line-clamp-1 font-semibold">{p.name}</h3>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary">₹{p.price}</span>
          <span className="text-sm text-muted-foreground line-through">₹{p.oldPrice}</span>
        </div>
        <a
          href={`https://wa.me/918302309238?text=${waMsg}`}
          target="_blank"
          rel="noreferrer"
          className="mt-3 flex items-center justify-center gap-2 rounded-full bg-whatsapp/10 py-2.5 text-xs font-bold text-whatsapp transition hover:bg-whatsapp hover:text-white"
        >
          <WhatsAppIcon className="h-4 w-4" /> Enquire on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

function IconBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-primary shadow-soft backdrop-blur transition hover:bg-primary hover:text-white">
      {icon}
    </button>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}
