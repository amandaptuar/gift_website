import { useEffect, useState } from "react";
import { Gift } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "glass shadow-soft" : "bg-background/80"}`}>
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-luxury">
            <Gift className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl font-bold tracking-tight">
            Gif<span className="text-gradient-primary">oria</span>
          </span>
        </a>
      </div>
    </header>
  );
}
