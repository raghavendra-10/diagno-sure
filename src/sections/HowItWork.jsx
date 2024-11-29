import React from "react";

function HowItWork() {
  return (
    <section className="py-10 px-4 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-black text-center overflow-y-hidden">
        How It Works
      </h2>
      <div className="mt-6 py-6 flex flex-col md:flex-row justify-center bg-white  md:space-x-10">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-black">1. Sign Up</h3>
          <p className="text-gray-700 mt-2">Complete a quick registration form.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center mt-6 md:mt-0">
          <h3 className="text-xl font-bold text-black">2. Review Treatment Plans</h3>
          <p className="text-gray-700 mt-2">Patients upload their plans, and you provide insights.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center mt-6 md:mt-0">
          <h3 className="text-xl font-bold text-black">3. Grow Your Practice</h3>
          <p className="text-gray-700 mt-2">Gain patient trust and new referrals.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;
