import Footer from "../components/Footer";
import Header from "../components/Header";
import TopBaner from "../components/TopBaner";
import { Outlet } from "react-router-dom";

export default function LayOut() {
  return (
    <div className="container">
      <div>
        <TopBaner />
        <Header />
      </div>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
