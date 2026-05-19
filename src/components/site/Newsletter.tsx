import { Gift, Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary p-10 text-primary-foreground shadow-luxury md:p-16">
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-12 -bottom-12 h-64 w-64 rounded-full bg-gold/30 blur-3xl" />
          <Gift className="absolute right-10 top-10 h-20 w-20 text-white/15 animate-float" />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">Subscribe</div>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Get Exclusive Gift Offers</h2>
              <p className="mt-3 max-w-md text-sm opacity-90">Be the first to know about new collections, limited drops, and members-only discounts.</p>
            </div>
            <form className="flex gap-2 rounded-full bg-white/15 p-2 backdrop-blur">
              <div className="flex flex-1 items-center gap-2 px-3">
                <Mail className="h-4 w-4 opacity-80" />
                <input placeholder="Enter your email..." className="w-full bg-transparent text-sm placeholder:text-white/70 outline-none" />
              </div>
              <button type="button" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-primary hover:bg-gold hover:text-white transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
