import { usePlants } from "../hooks/usePlants";
import DataHandler from "../utils/DataHandler";
import useFetch from "../hooks/useFetch";
export default function PlantCardsList() {
  //   const { plants, loading, error } = usePlants();
  const {
    data: plants,
    loading,
    error,
  } = useFetch(
    "https://gist.githubusercontent.com/Tomaz1900/f75d83eecd198149215532b599b35cd1/raw/6d6e18d7466e5a54d86be931c7f29d08fe2b0151/Plant.json",
    "plants",
    "image"
  );
  console.log(plants);
  return (
    <div className="plant-cards-list">
      <DataHandler loading={loading} error={error}></DataHandler>
    </div>
  );
}
