import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ruth Pottinger | NAET & Naturopath | West Wickham, Kent",
  description:
    "Struggling with food allergies or sensitivities? Ruth Pottinger is a qualified NAET practitioner & naturopath in Bromley. Book a free 30-min health review.",
  openGraph: {
    title: "Ruth Pottinger | NAET & Naturopath | West Wickham, Kent",
    description:
      "Struggling with food allergies or sensitivities? Ruth Pottinger is a qualified NAET practitioner & naturopath in Bromley. Book a free 30-min health review.",
    locale: "en_GB",
    type: "website",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ruthpottinger.co.uk/#ruth",
      name: "Ruth Pottinger",
      jobTitle: "Naturopath, NAET Practitioner, Homeopath",
      description:
        "Ruth Pottinger is a qualified Naturopath, Homeopath, and NAET practitioner based in West Wickham, Bromley, Kent, specialising in allergy elimination, food intolerances, and sensitivities.",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Naturopathic Doctor (ND)",
          recognizedBy: {
            "@type": "Organization",
            name: "College of Naturopathic Medicine, London",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "NAET Practitioner Certification",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "diploma",
          name: "Diploma in Homeopathy (Dip Hom)",
        },
      ],
      sameAs: [
        "https://www.facebook.com/ruthpottingernaturopath/",
        "https://www.instagram.com/ruth_pottinger_naturopath/",
      ],
    },
    {
      "@type": ["LocalBusiness", "MedicalBusiness", "HealthAndBeautyBusiness"],
      "@id": "https://ruthpottinger.co.uk/#business",
      name: "Ruth Pottinger — Naturopath & NAET Practitioner",
      description:
        "Naturopath and NAET practitioner in West Wickham, Bromley, Kent, offering allergy elimination, food intolerance testing and treatment, and natural health consultations.",
      url: "https://ruthpottinger.co.uk",
      address: {
        "@type": "PostalAddress",
        addressLocality: "West Wickham",
        addressRegion: "Bromley",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.3763,
        longitude: -0.0197,
      },
      areaServed: [
        { "@type": "City", name: "West Wickham" },
        { "@type": "City", name: "Bromley" },
        { "@type": "AdministrativeArea", name: "Kent" },
        { "@type": "City", name: "London" },
      ],
      makesOffer: {
        "@type": "Offer",
        name: "Free 30-Minute Health Review",
        price: "0",
        priceCurrency: "GBP",
      },
      telephone: "07961566058",
      priceRange: "££",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is NAET therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NAET (Nambudripad's Allergy Elimination Technique) is a non-invasive, painless, drug-free natural therapy developed by Dr. Devi Nambudripad in 1983. It combines energy balancing, acupressure, chiropractic, nutritional, and kinesiological procedures to desensitise the body to allergens and sensitivities.",
      },
    },
    {
      "@type": "Question",
      name: "How many NAET sessions will I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Allergies and sensitivities are desensitised one at a time, with one substance treated per session. Usually a single treatment is sufficient, though severe allergens may require several sessions. After each treatment, the substance must be avoided for 25 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is NAET safe for children and the elderly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NAET is a non-invasive, painless, drug-free therapy that can be used safely on everyone from infants to the elderly.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Ruth Pottinger's clinic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ruth's practice is based in West Wickham, Bromley, Kent, England. She offers a free 30-minute health review for new clients.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
