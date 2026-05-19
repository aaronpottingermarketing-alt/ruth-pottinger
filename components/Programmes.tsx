import Link from "next/link";

const programmes = [
  {
    number: "01",
    name: "Fundamentals",
    description:
      "A standalone consultation and assessment to get a full picture of your health issues, symptoms, and medical history. NAET testing will be carried out to determine which foods, nutrients, and environmental substances you are sensitive to and may be causing adverse reactions in the body. Also includes an assessment of food diary and any test results.",
    accent: "#4A6741",
  },
  {
    number: "02",
    name: "Essential Rebalance",
    description:
      "If you suspect or know that you are suffering with allergies, sensitivities, or intolerances to foods and would like to know what they are, this programme is where you start. A non-invasive, gentle therapy called NAET identifies which foods and substances are causing an imbalance in the body. Treatments correct the body's adverse reaction and you will start to see the results for yourself.",
    accent: "#8BAF7C",
  },
  {
    number: "03",
    name: "Advanced Rebalance",
    description:
      "An in-depth programme that will make a real difference in your life. For anyone who has known sensitivities to foods and environmental substances and struggles to keep on top of what to eat and avoid. You want a solution that doesn't involve eliminating lots of popular foods for months on end — and you want to enjoy your environment without suffering from adverse effects like itchy, irritated skin, eyes, and nose.",
    accent: "#C4A882",
  },
  {
    number: "04",
    name: "Restore and Rebuild",
    description:
      "Have you been dealing with ongoing gut or skin issues that have become your \"normal\"? Are you feeling overwhelmed and can't get a handle on what is causing the imbalance in your body? This is a deep dive into peeling back the layers of unresolved issues. There is no quick fix — be prepared to go on a journey of discovery to achieve real and lasting shifts in your health.",
    accent: "#4A6741",
  },
];

export default function Programmes() {
  return (
    <section id="programmes" className="py-24 px-6 bg-[#F8F5F0]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-[#8BAF7C] text-sm tracking-[0.2em] uppercase font-medium mb-3">
            How I Can Help
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[#2C2C2A] text-4xl md:text-5xl font-light leading-tight mb-6">
            Programmes
          </h2>
          <p className="text-[#2C2C2A]/70 max-w-2xl mx-auto leading-relaxed">
            I specialise in helping individuals of all ages — from children to
            adults — who suffer with food and environmental sensitivities which
            can also lead to gut and skin issues. My programmes provide a clear
            pathway to recovery. It&apos;s about restoring the simple pleasure of
            enjoying food and the environment, without fear or discomfort.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {programmes.map((prog) => (
            <div
              key={prog.number}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e4df] flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-5">
                <span
                  className="font-[family-name:var(--font-cormorant)] text-5xl font-light leading-none"
                  style={{ color: prog.accent + "40" }}
                >
                  {prog.number}
                </span>
                <div
                  className="w-2 h-2 rounded-full mt-3"
                  style={{ backgroundColor: prog.accent }}
                />
              </div>
              <h3
                className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold mb-4"
                style={{ color: "#2C2C2A" }}
              >
                {prog.name}
              </h3>
              <p className="text-[#2C2C2A]/70 leading-relaxed text-sm flex-1 mb-6">
                {prog.description}
              </p>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 text-[#4A6741] text-sm font-medium hover:gap-3 transition-all"
              >
                Book a Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
