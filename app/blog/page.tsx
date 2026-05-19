import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Ruth Pottinger — Naturopath & NAET Practitioner",
  description:
    "Articles on natural health, NAET therapy, allergy elimination, and naturopathy from Ruth Pottinger.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* Simple nav back */}
      <div className="px-6 py-6 border-b border-[#e8e4df]">
        <Link
          href="/"
          className="text-[#4A6741] text-sm font-medium hover:underline flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-[#8BAF7C] text-sm tracking-[0.2em] uppercase font-medium mb-4">
          Coming Soon
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-[#2C2C2A] text-4xl md:text-5xl font-light leading-tight mb-6">
          Natural Health Blog
        </h1>
        <p className="text-[#2C2C2A]/70 leading-relaxed max-w-xl mx-auto mb-10">
          Articles on NAET therapy, allergy elimination, naturopathy, and
          natural approaches to health. Check back soon.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#4A6741] text-white font-medium px-8 py-3.5 rounded-full hover:bg-[#3d5636] transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
