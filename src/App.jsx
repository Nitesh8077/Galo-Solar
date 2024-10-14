import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import "./App.css"; // Import the updated CSS
import QRForm from "./QrProject/QRForm";
import CustomerContactUs from "./QrProject/CustomerContactUs";
import QrChannelPartner from "./QrChannelPartner/QrChannelPartner";
import ImageGrid from "./QrProject/ImageGrid";
import CommonQR from "./QrProject/CommonQR";

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
        <Route path="/delhi" element={<Delhi />} />
        <Route path="/up" element={<UP />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/distributor" element={<Distributor />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/channelpartner" element={<Dealer />} />
        <Route path="/qr" element={<QRForm />} />
        <Route path="/image" element={<ImageGrid />} />
        <Route path="/customer" element={<CustomerContactUs />} />
        <Route path="/qrcp" element={<QrChannelPartner />} />
        <Route path="/commonqr" element={<CommonQR />} />
      </Routes>
      {location.pathname === "/l1" ? (
        <DelhiFloatingButton />
      ) : location.pathname === "/l2" ? (
        <UPFB />
      ) : location.pathname !== "/customer" && location.pathname !== "/channelpartner" ? (
        <FloatingButton />
      ) : null}
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate the curtain opening and then hide the overlay
    const timer = setTimeout(() => {
      setLoading(false); // Hide the curtains after 2.5 seconds (animation duration)
    }, 2000); 

    return () => clearTimeout(timer); // Clean up the timeout on unmount
  }, []);

  return (
    <Router>
      {loading && (
        <div className="curtain-container">
          <div className="curtain left-curtain"></div>
          <div className="curtain right-curtain"></div>
        </div>
      )}
      <AppContent />
    </Router>
  );
}
