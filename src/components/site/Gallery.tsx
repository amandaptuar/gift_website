import { motion } from "framer-motion";
import { SectionHeading } from "./Categories";
import frame from "@/assets/product-frame.jpg";
import mug from "@/assets/product-mug.jpg";
import lamp from "@/assets/product-lamp.jpg";
import cushion from "@/assets/product-cushion.jpg";
import jewelry from "@/assets/product-jewelry.jpg";
import hamper from "@/assets/product-hamper.jpg";
import couple from "@/assets/banner-couple.jpg";
import birthday from "@/assets/banner-birthday.jpg";

const imgs = [frame, mug, lamp, cushion, jewelry, hamper, couple, birthday];
const heights = ["h-64", "h-80", "h-56", "h-72", "h-60", "h-80", "h-64", "h-72"];

export function Gallery() {
  return (
    <section className="bg-gradient-blush py-20">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Photo Gallery" title="Let's Check Our Gift Stories" />
        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4">
          {imgs.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-soft group cursor-pointer`}
            >
              <img src={src} alt="" loading="lazy" className={`w-full ${heights[i]} object-cover transition duration-700 group-hover:scale-110`} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
