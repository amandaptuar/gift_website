import { Phone, Truck, Instagram, Facebook, Twitter, ChevronDown, User } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-gradient-primary text-primary-foreground text-xs">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 px-4 py-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><Truck className="h-3.5 w-3.5" /> Free Shipping on orders over ₹999</span>
          <span className="hidden md:inline opacity-80">|</span>
          <span className="hidden md:inline">✨ Flat 25% OFF on Festive Gifts — Code: <b>LOVE25</b></span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://wa.me/919999999999" className="hidden md:flex items-center gap-1 hover:text-gold transition"><Phone className="h-3.5 w-3.5" /> +91 99999 99999</a>
          <div className="hidden md:flex items-center gap-2">
            <Instagram className="h-3.5 w-3.5 hover:text-gold cursor-pointer transition" />
            <Facebook className="h-3.5 w-3.5 hover:text-gold cursor-pointer transition" />
            <Twitter className="h-3.5 w-3.5 hover:text-gold cursor-pointer transition" />
          </div>
          <button className="flex items-center gap-1 opacity-90 hover:opacity-100">INR <ChevronDown className="h-3 w-3" /></button>
          <button className="flex items-center gap-1 hover:text-gold transition"><User className="h-3.5 w-3.5" /> Login</button>
        </div>
      </div>
    </div>
  );
}
