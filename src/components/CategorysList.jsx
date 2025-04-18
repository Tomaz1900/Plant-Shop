import useFetch from "../hooks/useFetch";
import DataHandler from "../utils/DataHandler";
import Category from "./Category";
import "./components-styles/CategoriesList.css";
export default function CategorysList() {
  const {
    data: categories,
    loading,
    error,
  } = useFetch(
    "https://gist.githubusercontent.com/Tomaz1900/6169b5d76b1993614414e6415bf568f1/raw/8a8a45d6cb0ab1185b4067d5c476617d727769af/category.json",
    "category",
    "fileName"
  );
  console.log(categories);
  return (
    <div className="categories-list">
      <DataHandler loading={loading} error={error}>
        {categories.map((category) => (
          <Category
            key={category.id}
            title={category.title}
            imgSrc={category.imgSrc}
          />
        ))}
      </DataHandler>
    </div>
  );
}
