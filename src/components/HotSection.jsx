import PlantCardsList from "./PlantCardsList";
import Title from "./Title";
import "./components-styles/HotSection.css";

export default function HotSection() {
  return (
    <section className="light-bg">
      <div className="wrapper hot-section">
        <Title text1={"Hottest"} text2={"Plants"} showLink={true} />
        <PlantCardsList filterType={"hot"} limit={8} />
      </div>
    </section>
  );
}
