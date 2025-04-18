import CategorysList from "./CategorysList";
import Title from "./Title";
import "../components/components-styles/SectionCategory.css";

export default function SectionCategory() {
  return (
    <section className="wrapper section-categories">
      <Title text1={"Shop"} text2={"By categorry"} showLink={false} />
      <CategorysList />
    </section>
  );
}
