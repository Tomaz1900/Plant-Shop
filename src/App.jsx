import Header from "./components/Header";
import TopBaner from "./components/TopBaner";
import Hero from "./components/Hero";

import SectionCategory from "./components/SectionCategory";
import BestSection from "./components/BestSection";
import HotSection from "./components/HotSection";
import DealsSection from "./components/DealsSection";

export default function App() {
  return (
    <>
      <TopBaner />
      <Header />
      <Hero />
      <SectionCategory />
      <BestSection />
      <HotSection />
      <DealsSection />
    </>
  );
}
