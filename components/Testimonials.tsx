const testimonials = [
  {
    quote:
      "I had been to the doctors several times and had used all sorts of creams and steroid tablets. I was also under the hospital where I was under the dermatologist but none of it helped at all — in fact I would say it just made it worse. The rash on my face looked as if I had been scalded and as each week passed it grew more painful, I could hardly sleep. Everything had failed, so in desperation I looked on the internet for alternative medicine and found Ruth. She gave me a free consultation and we arranged our first session. Ruth did something called NAET, which is used for allergy elimination. It worked really well so I started a course of sessions and my face soon started to get better. I found Ruth to be very professional and had a fantastic knack of making me feel very relaxed. It has all been cured — all thanks to Ruth. She is a very warm, caring, kind person and if I ever have a problem with anything else I won't hesitate to contact her again.",
    name: "Mrs Susan Perez",
    location: "Surrey",
  },
  {
    quote:
      "My wife discovered NAET on the internet and Ruth Pottinger in West Wickham as a local practitioner. At first I was highly sceptical and don't normally take to alternative medical treatments but, noting that NAET was a non-invasive technique, I decided to give it a try. After the first two treatments I noticed an improvement in what I could eat and drink. Later tests showed that my intolerance was to casein. I persevered with a number of treatments lasting nearly a year. I can now eat yoghurt, cheese, butter and have milk in my tea and coffee. Gone are the conversations in restaurants about the contents of food and the close reading of labels in shops. Ruth was highly professional in her approach. I know it has significantly improved my health. I would recommend anyone with similar ailments to at least give NAET a try.",
    name: "David",
    location: "",
  },
  {
    quote:
      "In January last year I developed appalling eczema for the first time in my life and could only get various ointments from the NHS. I looked around on the internet and eventually found Ruth. After a 30-minute chat on the phone I made my first appointment. Ruth is extremely easy to get along with as well as knowledgeable so from the outset I was impressed. Ruth gave me several NAET treatments and recommended a range of supplements suitable for my condition and general health. My problem has now all but gone. I would say that should you have a medical type condition your conventional doctor cannot help with, or you prefer a natural approach to healing, then Ruth's approach is very well worth considering.",
    name: "KH",
    location: "",
  },
  {
    quote:
      "Ruth was recommended by my chiropractor. I had been suffering from eczema for some months and badly needed help and advice. Ruth identified and treated my food sensitivities using the NAET allergy elimination practice and also offered excellent advice on the right food supplements and a healthy diet. Thankfully, after several visits to Ruth, the eczema has now gone. I would not hesitate to recommend her for treatment and/or advice. What's more, I even found the treatment experience relaxing, encouraging and enjoyable.",
    name: "Margaret Brown",
    location: "Bromley",
  },
  {
    quote:
      "Having suffered from different allergies for many, many years, I have tried many different creams without success. I came across Ruth's website and after my initial telephone conversation with her I made an appointment and things have only improved. I have found Ruth to be kind, understanding, knowledgeable and very professional. Each treatment I have had with Ruth has been a positive experience with great results and I am so happy that I can now enjoy visiting friends with pets and using different products without the need to take a pill. I would thoroughly recommend NAET treatment with Ruth to anyone suffering with allergy symptoms. It has been a great experience and I wish I had found her years ago.",
    name: "Debbie",
    location: "",
  },
  {
    quote:
      "Having struggled for many years with food sensitivity, I found Ruth who treated me by testing with food products in order to find out what was going on. With her knowledge and understanding she transformed me into a different person. I can eat foods which affected me before. I feel healthier, more confident and above all a happier and better person. I would recommend Ruth Pottinger without a doubt.",
    name: "Filomena Vieira",
    location: "",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-4 h-4 text-[#C4A882]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#8BAF7C] text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Client Stories
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[#2C2C2A] text-4xl md:text-5xl font-light leading-tight">
            What Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#F8F5F0] rounded-2xl p-7 flex flex-col border border-[#e8e4df] hover:border-[#8BAF7C]/40 transition-colors"
            >
              <StarRating />
              <blockquote className="mt-4 flex-1 text-[#2C2C2A]/75 text-sm leading-relaxed italic font-[family-name:var(--font-cormorant)] text-base">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 pt-4 border-t border-[#e8e4df]">
                <p className="font-medium text-[#2C2C2A] text-sm">{t.name}</p>
                {t.location && (
                  <p className="text-[#2C2C2A]/50 text-xs mt-0.5">{t.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
