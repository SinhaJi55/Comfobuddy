import React from "react";

const data = [
  {
    number: "1",
    title: "Search & Choose",
    desc: "Browse verified rooms that match your preferences.",
  },
  {
    number: "2",
    title: "Verify & Connect",
    desc: "Watch live tour, check details and connect with owner.",
  },
  {
    number: "3",
    title: "Move In Safely",
    desc: "Book your room and move in with total confidence.",
  },
];

const Steps = () => {
  return (
    <section className="pb-20" id="steps-section">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h1 className="text-4xl font-bold mb-16">
          How ComfoBuddy Works?
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {data.map((item, index) => (
            <div key={index}>
              
              <div className="w-20 h-20 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                {item.number}
              </div>

              <h2 className="text-xl font-semibold mt-6">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-3 leading-7">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Steps;