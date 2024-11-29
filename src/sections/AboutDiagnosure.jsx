import React from "react";
import doctor from "../assets/doctor.jpg";

function AboutDiagnosure() {
  return (
    <section id="about" className="w-full py-16 bg-white">
      {/* Mobile View */}
      <div className="lg:hidden px-6">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-black font-extrabold text-2xl">
            About Diagnosure
          </h2>
          <p className="text-gray-700 text-lg font-normal mt-4">
            Diagnosure is a platform designed to help patients make informed
            dental decisions by offering expert second opinions. We connect
            patients with skilled dentists, ensuring they receive quality care
            and make cost-effective choices.
          </p>
          <img
            src={doctor}
            alt="Dentist"
            className="w-full h-auto mt-6  shadow-lg"
          />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex gap-10 px-10 xl:px-20 items-center mx-auto max-w-screen-xl">
        {/* Left Image Section */}
        <div className="">
          <img
            src={doctor}
            alt="Dentist"
            className="w-72 h-auto  shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex-1 pl-8">
          <h2 className="text-black font-extrabold text-4xl leading-tight">
            About Diagnosure
          </h2>
          <p className="text-gray-700 text-lg font-normal mt-6">
            Diagnosure is a platform designed to help patients make informed
            dental decisions by offering expert second opinions. We connect
            patients with skilled dentists, ensuring they receive quality care
            and make cost-effective choices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutDiagnosure;
