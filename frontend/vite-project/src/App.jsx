import React, { useEffect } from "react";
import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
import Dashboard from "./dashboard/Dashboard.jsx";
import ListingsGrid from "./dashboard/ListingsGrid.jsx";

// REGISTER GSAP

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {

  useEffect(() => {

    const sections = gsap.utils.toArray("section");

    sections.forEach((section) => {

      gsap.fromTo(
        section,

        {
          opacity: 0,
          y: 60,
        },

        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      );

    });

  }, []);

  return (
    <>
     
    {/* <Dashboard></Dashboard> */}
    <ListingsGrid></ListingsGrid>
      {/* <DoorLoader />

      <Comfoanimation />

      <DotCursor />

      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="searching-section">
        <SearchSection />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="rooms">
        <Rooms />
      </section>

      <section id="verification">
        <Verification />
      </section>

      <section id="listing">
        <ListingSection />
      </section>

      <section id="comfoworks-sections">
        <Comfoworks />
      </section>

      <section id="steps">
        <Steps />
      </section>

      <section id="trust">
        <TrustSection />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="cta">
        <CTASection />
      </section>
      <ChatBot />

      <Whatsapp />

      <Footer /> */}
      {/* <Dashboard></Dashboard> */}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/search"
          element={<SearchSection />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;