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
import Delhi from "./Delhi/Delhi";
import UP from "./UP/UP";
import DelhiFloatingButton from "./DelhiFloatingButton/DelhiFloatingButton";
import UPFB from "./UPFB/UPFB";
import Thanks from "./Delhi/Thanks";
import Faq from "./FAQ/Faq";
import Distributor from "./Distributor/Distributor";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Dealer from "./Dealer/Dealer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <div className="sticky top-0 bg-white z-50">
      <Navigation />
      </div> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/pmkusum" element={<PMKUSUM />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/l1" element={<Delhi />} />
        <Route path="/l2" element={<UP />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/distributor" element={<Distributor />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Dealer" element={<Dealer />} />
      </Routes>
      {location.pathname === "/l1" ? (
        <DelhiFloatingButton />
      ) : location.pathname === "/l2" ? (
        <UPFB />
      ) : (
        <FloatingButton />
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
