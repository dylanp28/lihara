import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ImageBand } from "@/components/home/ImageBand";
import { LatestDrops } from "@/components/home/LatestDrops";
import { BrandStory } from "@/components/home/BrandStory";
import { Marquee } from "@/components/ui/Marquee";
import { ArtDecoDivider } from "@/components/ui/ArtDecoDivider";
import { NewsletterSection } from "@/components/layout/NewsletterSection";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <FeaturedProducts />
      <ImageBand />
      <LatestDrops />
      <section className="py-12 sm:py-16">
        <Container>
          <AnimatedSection className="flex flex-col items-center gap-6">
            <Link
              href="/products"
              className="inline-block bg-charcoal text-cream px-10 py-3.5 text-[13px] uppercase tracking-[0.2em] hover:bg-charcoal/85 transition-colors duration-300"
            >
              Shop All
            </Link>
          </AnimatedSection>
        </Container>
      </section>
      <ArtDecoDivider />
      <BrandStory />
      <NewsletterSection />
    </>
  );
}
