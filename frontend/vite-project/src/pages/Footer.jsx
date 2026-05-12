import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14">

        <div>
          <div className="flex items-center gap-3 mb-5">

            <div className="w-11 h-11 bg-[#ff6b35] rounded-xl flex items-center justify-center text-white font-bold text-xl">
              S
            </div>

            <h1 className="text-2xl font-bold text-[#1a1a1a]">
              StayFinder
            </h1>

          </div>

          <p className="text-gray-500 leading-7">
            India's most trusted platform for verified rentals.
            Find. Verify. Move In.
          </p>

          <div className="flex gap-4 mt-8">

            {["F", "I", "X", "L"].map((icon, i) => (
              <div
                key={i}
                className="w-11 h-11 rounded-full bg-white border border-[#ece7e2] flex items-center justify-center cursor-pointer hover:bg-[#ff6b35] hover:text-white transition"
              >
                {icon}
              </div>
            ))}

          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-5">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-500">
            <li className="hover:text-[#ff6b35] cursor-pointer">
              Find Rooms
            </li>

            <li className="hover:text-[#ff6b35] cursor-pointer">
              How It Works
            </li>

            <li className="hover:text-[#ff6b35] cursor-pointer">
              For Owners
            </li>

            <li className="hover:text-[#ff6b35] cursor-pointer">
              About Us
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-5">
            Company
          </h3>

          <ul className="space-y-4 text-gray-500">
            <li className="hover:text-[#ff6b35] cursor-pointer">
              Careers
            </li>

            <li className="hover:text-[#ff6b35] cursor-pointer">
              Blog
            </li>

            <li className="hover:text-[#ff6b35] cursor-pointer">
              Contact
            </li>

            <li className="hover:text-[#ff6b35] cursor-pointer">
              Investors
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-5">
            Support
          </h3>

          <ul className="space-y-4 text-gray-500">
            <li className="hover:text-[#ff6b35] cursor-pointer">
              Help Center
            </li>

            <li className="hover:text-[#ff6b35] cursor-pointer">
              Privacy Policy
            </li>

            <li className="hover:text-[#ff6b35] cursor-pointer">
              Safety Center
            </li>

            <li className="hover:text-[#ff6b35] cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-5">
            Stay Updated
          </h3>

          <p className="text-gray-500 leading-7 mb-6">
            Get latest rooms and offers directly in your inbox.
          </p>

          <div className="bg-white rounded-2xl border border-[#ece7e2] p-2 flex items-center">

            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 outline-none px-3 py-2 bg-transparent text-sm"
            />

            <button className="bg-[#ff6b35] hover:bg-[#eb5d29] text-white px-5 py-3 rounded-xl text-sm font-semibold transition">
              Subscribe
            </button>

          </div>
        </div>
      </div>

      <div className="border-t border-[#ece7e2] mt-16 pt-8 text-center text-gray-500 text-sm">
        © 2026 StayFinder. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;