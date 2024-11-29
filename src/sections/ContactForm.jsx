import React from "react";
import clinicpic from "../assets/clinicpic.jpg";

function ContactForm() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center overflow-hidden">
          Partner with Us
        </h2>
        {/* Layout */}
        <div className="mt-10 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={clinicpic}
              alt="Diagnosure Logo"
              className="w-full   shadow-lg"
            />
          </div>

          {/* Right Form Section */}
          <div className="flex-1">
            <form className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
              />
              <input
                type="text"
                placeholder="Clinic Name"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
              />
              <input
                type="text"
                placeholder="Specialty"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
              />
              <button
                type="submit"
                className="bg-orange text-white font-semibold px-6 py-4 w-full rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
