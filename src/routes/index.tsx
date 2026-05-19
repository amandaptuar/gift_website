import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WhatsAppGallery } from "@/components/site/WhatsAppGallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Giforia — Premium Customized Gifts for Every Occasion" },
      { name: "description", content: "India's premium customized gift shop. Personalized photo frames, mugs, LED lamps, couple gifts & corporate hampers — hand-wrapped and delivered with love." },
      { property: "og:title", content: "Giforia — Premium Customized Gifts" },
      { property: "og:description", content: "Luxury customized gifting for birthdays, anniversaries, couples & corporates." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhatsAppGallery />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
