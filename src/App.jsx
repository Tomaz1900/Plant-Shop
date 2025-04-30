import { Route, Routes } from "react-router-dom";
import LayOut from "./pages/LayOut";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContacrtPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<LayOut />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContacrtPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
