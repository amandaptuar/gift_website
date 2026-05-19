import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Gift } from "lucide-react";
import heroImg from "@/assets/hero-gifts.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-blush">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-rose/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />

      <div className="container relative mx-auto grid items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-rose px-4 py-1.5 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" /> STARTING FROM ₹299
          </span>
          <h1 className="mt-5 font-display text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Discover The Latest <br />
            <span className="text-gradient-primary">Customized Gifts</span> <br />
            For Your Loved Ones
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Handpicked, hand-wrapped, and personalised with love. Premium gifting for every moment that matters — from anniversaries to corporate celebrations.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/918302309238?text=Hi%20Giforia!%20I%27d%20like%20to%20enquire%20about%20your%20customized%20gifts."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxury hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              WhatsApp Enquiry <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#whatsapp-collection"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-white/60 px-7 py-3.5 text-sm font-semibold text-primary backdrop-blur hover:bg-white transition"
            >
              <Gift className="h-4 w-4" /> View Collection
            </a>
          </div>

          {/* trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <div><div className="text-2xl font-bold text-foreground">50K+</div>Happy Customers</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="text-2xl font-bold text-foreground">10K+</div>Curated Gifts</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="text-2xl font-bold text-foreground">4.9★</div>Rated by Clients</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-square max-w-lg">
            <div className="absolute inset-6 rounded-[3rem] bg-gradient-primary opacity-90 blur-2xl" />
            <img
              src={heroImg}
              alt="Premium customized gift boxes"
              width={1280}
              height={1024}
              className="relative h-full w-full rounded-[2.5rem] object-cover shadow-luxury"
            />
            {/* floating badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-6 top-10 rounded-2xl glass px-4 py-3 shadow-soft"
            >
              <div className="text-[10px] font-semibold text-muted-foreground">PREMIUM</div>
              <div className="font-display text-lg font-bold text-primary">Hand-Wrapped</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-4 bottom-16 rounded-2xl bg-gradient-gold px-4 py-3 text-white shadow-luxury"
            >
              <div className="text-[10px] font-semibold opacity-90">FLAT</div>
              <div className="font-display text-2xl font-bold leading-none">50% OFF</div>
            </motion.div>
            <motion.div
              animate={{ rotate: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-4 right-12 grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-luxury"
            >
              <Gift className="h-7 w-7" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
