import React from "react";
import LeftFeatures from "./LeftFeature.jsx";
import RatingCard from "./RatingCard.jsx";

const TrustSection = () => {
  return (
    <section className="w-full bg-white py-24 px-6" id="trust-section">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <LeftFeatures />

        <RatingCard />

      </div>

    </section>
  );
};

export default TrustSection;