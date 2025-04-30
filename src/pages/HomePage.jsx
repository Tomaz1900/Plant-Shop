import BestSection from "../components/BestSection";
import DealsSection from "../components/DealsSection";
import Hero from "../components/Hero";
import HotSection from "../components/HotSection";
import SectionCategory from "../components/SectionCategory";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionCategory />
      <BestSection />
      <HotSection />
      <DealsSection />
    </>
  );
}
