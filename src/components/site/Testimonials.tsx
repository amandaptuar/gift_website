import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./Categories";

const tests = [
  { name: "Priya Sharma", role: "Bride to be", text: "The customized photo frame was beyond my expectations. The packaging itself felt like a gift. Truly premium service!" },
  { name: "Rohan Kapoor", role: "Corporate Buyer", text: "Ordered 200 corporate gift hampers — every single piece arrived perfectly wrapped. My clients were thrilled." },
  { name: "Aisha Mehta", role: "Anniversary Gift", text: "The LED lamp with our photo is now the centerpiece of our bedroom. Absolutely magical and so well-crafted." },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tests.map((t, i) => (
            <div key={i} className="relative rounded-3xl glass-rose p-8 shadow-soft transition hover:shadow-luxury">
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/20" />
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
