import React from "react";
import SearchSection from "./Search";
const CTASection = () => {
      const goto = () => {
   const section = document.getElementById("search-section");

  section?.scrollIntoView({
    behavior: "smooth",
  });
};
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 mt-24">

      <div className="bg-[#fdf3ee] rounded-[40px] py-20 px-8 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
          Ready to Find Your Perfect Room?
        </h2>

        <p className="text-gray-500 text-lg mt-5 max-w-2xl mx-auto leading-8">
          Join thousands of happy renters who found their new
          home with StayFinder.
        </p>

        <button className="mt-10 bg-[#ff6b35] hover:bg-[#eb5d29] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105" onClick={goto}>
          Get Started Now →
        </button>

      </div>

    </section>
  );
};

export default CTASection;