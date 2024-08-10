import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import FloatingButton from "./FloatingButton/FloatingButton";
import Home from "./Home/Home";
import Homes from "./Homes/Homes";
import Residential from "./Residential/Residential";
import Commercial from "./Commercial/Commercial";
import PMKUSUM from "./PMKUSUM/PMKUSUM";
import ContactUs from "./ContactUs/ContactUs";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/pmkusum" element={<PMKUSUM />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <FloatingButton />
    </Router>
  );
}
