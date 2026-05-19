"use client";

import { useState } from "react";

const allergens = [
  "Egg", "Milk", "Peanuts", "Penicillin", "Aspirin", "Mushrooms",
  "Shellfish", "Latex", "Grass", "Ragweed", "Flowers", "Perfume",
  "Animal Dander", "Make-up", "Chemicals", "Cigarette Smoke",
  "Pathogens", "Heat", "Cold", "Environmental Agents",
];

const faqs = [
  {
    q: "What conditions can NAET treat?",
    a: "NAET can help alleviate adverse reactions to a wide range of substances including foods, environmental agents, chemicals, and more. It is used to treat allergies, food intolerances, and sensitivities that may cause skin conditions, digestive issues, fatigue, and other symptoms.",
  },
  {
    q: "How many NAET sessions will I need?",
    a: "Allergies and sensitivities are desensitised one at a time, with one substance treated per session. Usually a single treatment is sufficient to desensitise an allergen, though severe allergens may require several sessions. After each treatment, the substance must be completely avoided for 25 hours.",
  },
  {
    q: "Is NAET safe for children and the elderly?",
    a: "Yes. NAET is a non-invasive, painless, drug-free therapy that can be used safely on everyone from infants to the elderly.",
  },
  {
    q: "Where is Ruth's clinic located?",
    a: "Ruth's practice is based in West Wickham, Bromley, Kent, England. She offers a free 30-minute health review for new clients — book via the button above.",
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8e4df] last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-[#2C2C2A] group-hover:text-[#4A6741] transition-colors pr-4">
          {q}
        </span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full border border-[#4A6741] flex items-center justify-center text-[#4A6741] transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="pb-5 text-[#2C2C2A]/70 leading-relaxed text-sm">{a}</p>
      )}
    </div>
  );
}

export default function NAETTherapy() {
  return (
    <section id="naet" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#8BAF7C] text-sm tracking-[0.2em] uppercase font-medium mb-3">
            The Treatment
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[#2C2C2A] text-4xl md:text-5xl font-light leading-tight">
            What is NAET Therapy?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: what it is */}
          <div className="space-y-6">
            <div className="prose-like space-y-5 text-[#2C2C2A]/80 leading-relaxed">
              <p>
                Nambudripad&apos;s Allergy Elimination Technique (NAET) is a
                non-invasive, painless, drug-free natural therapy developed by
                Dr. Devi Nambudripad in 1983. It can be used safely on everyone
                from infants to the elderly.
              </p>
              <p>
                NAET uses a combination of energy balancing, testing, and
                treatments including acupressure, chiropractic, nutritional, and
                kinesiological procedures. Allergies and sensitivities are
                desensitised one at a time, with one substance treated per
                session.
              </p>
            </div>

            {/* Allergen pill cloud */}
            <div className="pt-4">
              <p className="text-xs font-semibold text-[#4A6741] uppercase tracking-wider mb-4">
                NAET can help with
              </p>
              <div className="flex flex-wrap gap-2">
                {allergens.map((item) => (
                  <span
                    key={item}
                    className="bg-[#4A6741]/8 text-[#4A6741] text-xs font-medium px-3 py-1.5 rounded-full border border-[#4A6741]/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: how it works */}
          <div className="bg-[#F8F5F0] rounded-2xl p-8 space-y-5">
            <h3 className="font-[family-name:var(--font-cormorant)] text-[#2C2C2A] text-2xl font-semibold">
              How NAET Works
            </h3>
            <p className="text-[#2C2C2A]/80 leading-relaxed">
              The patient lies on the treatment couch with their arm raised and
              holds a vial containing a potential allergen. If the patient is
              allergic, the muscle in the raised arm will show reduced energy —
              this is called a Muscle Response Test (MRT). Treatment then uses
              acupressure through back massage to clear the blockages associated
              with that allergen.
            </p>
            {/* Process steps */}
            <div className="space-y-4 pt-2">
              {[
                { step: "1", text: "Hold allergen vial during Muscle Response Test" },
                { step: "2", text: "Acupressure treatment clears energetic blockages" },
                { step: "3", text: "Avoid the substance for 25 hours post-treatment" },
                { step: "4", text: "Return to confirm clearance in next session" },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#4A6741] text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    {step}
                  </span>
                  <p className="text-[#2C2C2A]/80 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-[family-name:var(--font-cormorant)] text-[#2C2C2A] text-2xl font-semibold mb-2 text-center">
            Frequently Asked Questions
          </h3>
          <p className="text-center text-sm text-[#2C2C2A]/50 mb-8">
            Everything you need to know before your first session
          </p>
          <div className="bg-[#F8F5F0] rounded-2xl px-6">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
