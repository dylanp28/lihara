import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { BrandStory } from "@/components/home/BrandStory";
import { Marquee } from "@/components/ui/Marquee";
import { ArtDecoDivider } from "@/components/ui/ArtDecoDivider";
import { NewsletterSection } from "@/components/layout/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <FeaturedProducts />
      <ArtDecoDivider />
      <CategoryShowcase />
      <ArtDecoDivider />
      <BrandStory />
      <NewsletterSection />
    </>
  );
}
