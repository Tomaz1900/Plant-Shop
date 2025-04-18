import BetsList from "./BestList";
import Title from "./Title";
import "./components-styles/BestSection.css";

export default function BestSection() {
  return (
    <section className="wrapper best-section">
      <Title text1={"Best"} text2={"Selling"} showLink={true} />
      <BetsList />
    </section>
  );
}
