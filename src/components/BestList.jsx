import useFetch from "../hooks/useFetch";
import DataHandler from "../utils/DataHandler";
import BestCard from "./BestCard";
import "./components-styles/BestList.css";
export default function BetsList() {
  const {
    data: bestCards,
    loading,
    error,
  } = useFetch(
    "https://gist.githubusercontent.com/Tomaz1900/d4960e68435822422f69a7a8a2265487/raw/caf8cb759cb8a0160eabf78639f208a92c21e5ee/BestTags.json",
    "best",
    "fileName"
  );
  return (
    <div className="best-list">
      <DataHandler loading={loading} error={error}>
        {bestCards.map((card) => (
          <BestCard key={card.id} imgSrc={card.imgSrc} title={card.title} />
        ))}
      </DataHandler>
    </div>
  );
}
