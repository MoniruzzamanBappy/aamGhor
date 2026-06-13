import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import {
  ContactSection,
  FaqSection,
  FeatureSection,
  Footer,
  HowToOrderSection,
  ProductSection,
} from "../components/Sections";
import { siteConfig } from "../lib/data";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brandNameBn,
    url: "https://aam-ghor.vercel.app",
    telephone: `+88${siteConfig.phone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.pickupDetails,
      addressLocality: "Demra",
      addressRegion: "Dhaka",
      addressCountry: "BD",
    },
    makesOffer: {
      "@type": "Offer",
      price: "130",
      priceCurrency: "BDT",
      itemOffered: {
        "@type": "Product",
        name: "রাজশাহীর আম্রপালি আম",
        description: "রাজশাহীর তাজা আম্রপালি আম",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen overflow-hidden">
        <Header />
        <Hero />
        <FeatureSection />
        <ProductSection />
        <HowToOrderSection />
        <ContactSection />
        <FaqSection />
        <Footer />
      </main>
    </>
  );
}
