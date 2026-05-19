const credentials = [
  { abbr: "ND", full: "Naturopathic Doctor" },
  { abbr: "NAET", full: "NAET Practitioner Certification" },
  { abbr: "Dip Hom", full: "Diploma in Homeopathy" },
  { abbr: "CNM", full: "College of Naturopathic Medicine, London" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#F8F5F0]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: portrait placeholder + credentials */}
          <div className="space-y-8">
            {/* Portrait area */}
            <div className="relative">
              <div className="w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0 bg-gradient-to-br from-[#8BAF7C]/30 to-[#4A6741]/20 rounded-2xl flex items-center justify-center">
                <div className="text-center text-[#4A6741]/50">
                  <svg
                    className="w-24 h-24 mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="text-sm">Photo of Ruth</p>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full border-2 border-[#C4A882]/30 hidden lg:block" />
            </div>

            {/* Credentials */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8e4df]">
              <h3 className="font-[family-name:var(--font-cormorant)] text-[#4A6741] text-xl font-semibold mb-4">
                Qualifications
              </h3>
              <div className="space-y-3">
                {credentials.map((c) => (
                  <div key={c.abbr} className="flex items-start gap-3">
                    <span className="bg-[#4A6741]/10 text-[#4A6741] text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 mt-0.5">
                      {c.abbr}
                    </span>
                    <span className="text-[#2C2C2A] text-sm leading-relaxed">
                      {c.full}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: story text */}
          <div className="space-y-10">
            <div>
              <p className="text-[#8BAF7C] text-sm tracking-[0.2em] uppercase font-medium mb-3">
                About Ruth
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-[#2C2C2A] text-4xl md:text-5xl font-light leading-tight mb-8">
                My Story
              </h2>
              <div className="space-y-5 text-[#2C2C2A]/80 leading-relaxed">
                <p>
                  Several years ago I went through a period of suffering
                  constant fatigue and exhaustion. I tried various conventional
                  treatments in an attempt to restore my health, but nothing
                  worked. As a child growing up, natural remedies like Ginger
                  were often used in our home for treating ailments such as
                  upset stomachs and travel sickness. On the advice of a family
                  member I turned to a Naturopath for help and received NAET
                  treatments.
                </p>
                <p>
                  After several treatments I noticed a significant change in my
                  energy levels, concentration, and general wellbeing — the worn
                  out feeling I had been experiencing disappeared and I felt like
                  my old self again.
                </p>
                <p>
                  I had been considering a career change and have always been
                  interested in natural remedies. After experiencing such
                  positive results with NAET Treatments, I decided to enrol at
                  the College of Naturopathic Medicine in London, where I
                  trained for four years studying Naturopathy, Homeopathy,
                  Nutrition, and Iridology.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-[#C4A882] pl-6">
              <h3 className="font-[family-name:var(--font-cormorant)] text-[#2C2C2A] text-2xl font-semibold mb-4">
                Today
              </h3>
              <p className="text-[#2C2C2A]/80 leading-relaxed">
                I am a qualified Naturopath, Homeopath, and NAET practitioner
                specialising in Allergy Elimination, Intolerances, Sensitivities,
                and rebalancing the body. I enjoy helping people reach their goal
                of optimal health. It never ceases to amaze me how well natural
                therapies work to help relieve symptoms that often seem hopeless
                and debilitating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
