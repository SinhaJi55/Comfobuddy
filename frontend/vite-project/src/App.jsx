import React from "react";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DotCursor from "./pages/DotCursor.jsx";
import ChatBot from "./pages/ChatBot.jsx";
import Whatsapp from "./pages/Whatsapp.jsx";
import Navbar from "./pages/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import Features from "./pages/Features.jsx";
import Rooms from "./pages/Rooms.jsx";
import Verification from "./pages/Verification.jsx";
import Steps from "./pages/Steps.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import CTASection from "./pages/CTA.jsx";
import Footer from "./pages/Footer.jsx";
import ListingSection from "./pages/ListingSection.jsx";
import SearchSection from "./pages/Search.jsx";
import TrustSection from "./pages/TrustSection.jsx";
import Comfoworks from "./pages/Comfoworks.jsx";
import DoorLoader from "./pages/DoorLoader.jsx";
import Comfoanimation from "./pages/Comfoanimation.jsx";
const HomePage = () => {
  return (
    <>
    <DoorLoader />
    <Comfoanimation/>
       <DotCursor /> 
      <Navbar />
      <Hero />
      <SearchSection/>
      <Features />
      <Rooms />
      <Verification />
      <ListingSection/>
      <Comfoworks/>
      {/* <Steps /> */}
      <TrustSection></TrustSection>
      <Testimonials />
      <CTASection />
      <ChatBot />
<Whatsapp />
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