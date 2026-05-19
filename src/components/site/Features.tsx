import { Truck, ShieldCheck, Gift, Headphones, RefreshCw } from "lucide-react";

const items = [
  { icon: Truck, title: "Free Delivery", desc: "On orders over ₹999" },
  { icon: ShieldCheck, title: "Secure Payment", desc: "100% Protected Checkout" },
  { icon: Gift, title: "Premium Packaging", desc: "Hand-wrapped with love" },
  { icon: Headphones, title: "24/7 Support", desc: "Always here to help" },
  { icon: RefreshCw, title: "Easy Returns", desc: "Within 7 days" },
];

export function Features() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 rounded-3xl bg-gradient-blush p-6 shadow-soft md:grid-cols-3 lg:grid-cols-5">
          {items.map((f) => (
            <div key={f.title} className="group flex items-center gap-3 rounded-2xl bg-white/70 p-4 backdrop-blur transition hover:bg-white hover:shadow-luxury">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-soft transition group-hover:shadow-glow">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold">{f.title}</div>
                <div className="text-xs text-muted-foreground">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
