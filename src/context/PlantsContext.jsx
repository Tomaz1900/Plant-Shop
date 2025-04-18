import { createContext } from "react";
import useFetch from "../hooks/useFetch";
const PlantsContext = createContext();
export function PlantsProvider({ children }) {
  const {
    data: plants,
    loading,
    error,
  } = useFetch(
    "https://gist.githubusercontent.com/Tomaz1900/f75d83eecd198149215532b599b35cd1/raw/6d6e18d7466e5a54d86be931c7f29d08fe2b0151/Plant.json",
    "plants",
    "image"
  );
  const value = { plants, loading, error };
  console.log(value);
  return (
    <PlantsContext.Provider value={value}>{children}</PlantsContext.Provider>
  );
}
export default PlantsContext;
