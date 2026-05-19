import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d3f2a] via-[#4A6741] to-[#3a5338]" />

      {/* Subtle botanical texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(196,168,130,0.3) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(139,175,124,0.2) 0%, transparent 50%)`,
        }}
      />

      {/* Decorative circle elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-white/10 hidden lg:block" />
      <div className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full border border-white/10 hidden lg:block" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="fade-up text-[#C4A882] font-[family-name:var(--font-dm-sans)] text-sm tracking-[0.25em] uppercase mb-6">
          NAET Allergy Elimination & Naturopathy
        </p>

        <h1 className="fade-up-delay-1 font-[family-name:var(--font-cormorant)] text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-6">
          What if you could be free from debilitating food sensitivities?
        </h1>

        <p className="fade-up-delay-2 text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          NAET Allergy Elimination Therapy & Naturopathy in West Wickham,
          Bromley, Kent
        </p>

        <div className="fade-up-delay-3">
          <Link
            href="/book"
            className="inline-block bg-[#C4A882] text-[#2C2C2A] font-medium px-8 py-4 rounded-full text-base hover:bg-[#b59a74] transition-colors shadow-lg"
          >
            Book a Free 30-Minute Health Review
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}
