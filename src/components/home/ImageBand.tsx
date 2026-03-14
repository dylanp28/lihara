export function ImageBand({ className }: { className?: string }) {
  return (
    <section className={`w-full py-2 sm:py-3 bg-cream overflow-hidden -my-14 sm:-my-20 ${className ?? ""}`}>
      <img
        src="/images/banner-hands.jpg"
        alt="LIHARA — hands wearing bracelets"
        className="w-full h-auto max-h-[3rem] sm:max-h-[4rem] lg:max-h-[5rem] object-contain object-center"
      />
    </section>
  );
}
