import Link from "next/link";

export default function BookCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#2d3f2a] via-[#4A6741] to-[#3a5338] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-white/10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full border border-white/10 -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-[#C4A882] text-sm tracking-[0.2em] uppercase font-medium mb-4">
          Take the First Step
        </p>
        <h2 className="font-[family-name:var(--font-cormorant)] text-white text-4xl md:text-5xl font-light leading-tight mb-6">
          Ready to Take Action?
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          If you are suffering from allergic reactions to food and environmental
          sensitivities that dominate your life, now is the time to begin the
          journey back to balance. Book a free 30-minute Health Review and let
          Ruth explain how she can help you rebalance and get back to your
          normal.
        </p>
        <Link
          href="/book"
          className="inline-block bg-[#C4A882] text-[#2C2C2A] font-medium px-10 py-4 rounded-full text-base hover:bg-[#b59a74] transition-colors shadow-lg"
        >
          Book Your Free Health Review
        </Link>
      </div>
    </section>
  );
}
