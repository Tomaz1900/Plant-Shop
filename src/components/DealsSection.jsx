import PlantCardsList from "./PlantCardsList";
import Title from "./Title";
import "./components-styles/DealsSection.css";
export default function DealsSection() {
  return (
    <section className="wrapper deals-section">
      <Title text1={"Ferntastic"} text2={"Deals"} showLink={false} />
      <PlantCardsList filterType={"deals"} limit={4} />
    </section>
  );
}
