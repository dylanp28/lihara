import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getLineBySlug, getLineProducts } from "@/data/products";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getLineProducts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const line = getLineBySlug(params.slug);
  if (!line) return {};
  return {
    title: `${line.name} — LIHARA`,
    description: line.description,
  };
}

export default function LinePage({ params }: PageProps) {
  const line = getLineBySlug(params.slug);
  if (!line) notFound();

  const mainImage = line.images[0];

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Image */}
          <div className="relative h-[50vh] lg:h-auto">
            {mainImage.src ? (
              <img
                src={mainImage.src}
                alt={mainImage.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-cream/[0.03]" />
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-16 lg:py-0">
            <p className="text-cream/20 text-[10px] uppercase tracking-[0.5em] font-body">
              Line
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream mt-4 leading-[0.9]">
              {line.name}
            </h1>
            {line.subtitle && (
              <p className="text-cream/30 text-[11px] uppercase tracking-[0.25em] font-body mt-4">
                {line.subtitle}
              </p>
            )}

            <p className="text-cream/35 font-light leading-[1.8] text-[13px] mt-10 max-w-md">
              {line.description}
            </p>

            {/* Availability */}
            {line.availability && (
              <div className="mt-10 border-l border-cream/10 pl-5">
                <p className="text-cream/50 text-[13px] font-display italic leading-[1.6]">
                  {line.availability}
                </p>
              </div>
            )}

            {/* Details */}
            <ul className="mt-10 space-y-2">
              {line.details.map((detail) => (
                <li
                  key={detail}
                  className="text-cream/20 text-[11px] font-light tracking-wide"
                >
                  {detail}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 text-cream/30 text-[10px] uppercase tracking-[0.25em] font-body hover:text-cream/60 transition-colors duration-500"
              >
                <svg
                  className="w-3.5 h-3.5 transform group-hover:-translate-x-1.5 transition-transform duration-500 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 12h14m-4-4l4 4-4 4" />
                </svg>
                <span>Back to shop</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
