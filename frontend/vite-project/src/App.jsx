import React from "react";
import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./pages/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import Features from "./pages/Features.jsx";
import Rooms from "./pages/Rooms.jsx";
import Verification from "./pages/Verification.jsx";
import Steps from "./pages/Steps.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import CTASection from "./pages/CTA.jsx";
import Footer from "./pages/Footer.jsx";

import SearchSection from "./pages/Search.jsx";
import TrustSection from "./pages/TrustSection.jsx";
import Comfoworks from "./pages/Comfoworks.jsx";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchSection/>
      <Features />
      <Rooms />
      <Verification />
      <Comfoworks/>
      {/* <Steps /> */}
      <TrustSection></TrustSection>
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* Search Page */}
        <Route
          path="/search"
          element={<SearchSection />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;