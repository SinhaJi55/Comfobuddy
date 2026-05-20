import React, { useEffect } from "react";
import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// HOME PAGE COMPONENTS
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
import Schedule from "./components/BuddyDashboard/Schedule/Schedule.jsx";
// OWNER DASHBOARD
import OwnerView from "./components/OwnerPortal/OwnerView.jsx";
import BuddyDashboard from "./components/BuddyDashboard/BuddyDashboard.jsx";
import Sidebar from "./components/BuddyDashboard/Sidebar.jsx";
import Dashboard from "./components/BuddyDashboard/Schedule/ScheduleDashboard.jsx";
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


      <DoorLoader />

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

      <Footer /> 
      {/* <BuddyDashboard></BuddyDashboard> */}
    </>
  );
};

const App = () => {
  return (

    <BrowserRouter>

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={<HomePage />}
        />
        {/* Owner PAGE */}
        <Route
  path="/owner-dashboard"
  element={<OwnerView />}
/>

        {/* SEARCH PAGE */}
        <Route
          path="/search"
          element={<SearchSection />}
        />

        {/* OWNER DASHBOARD */}
        <Route
          path="/owner-dashboard"
          element={<OwnerView />}
        />
        {/* BUDDY DASHBOARD */}
        <Route
  path="/buddy-dashboard"
  element={<BuddyDashboard />}
/>
  <Route
   path ="/schedule"
 
  element={<Dashboard />}
  
/>


      </Routes>
      

    </BrowserRouter>

  );
};

export default App;