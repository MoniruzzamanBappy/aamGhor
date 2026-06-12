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

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <FeatureSection />
      <ProductSection />
      <HowToOrderSection />
      {/* <PickupSection /> */}
      <ContactSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
