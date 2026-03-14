import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <section className="py-12 sm:py-20">
      <Container>
        <nav className="mb-10 flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-charcoal/30">
          <Link href="/" className="hover:text-charcoal/60 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-charcoal/60 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal/50">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ProductGallery images={product.images} category={product.category} />
          <ProductInfo product={product} />
        </div>

        <RelatedProducts products={related} />
      </Container>
    </section>
  );
}
