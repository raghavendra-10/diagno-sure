import React from "react";
import smile from "../assets/smilingdentist.jpg";

function Header() {
  return (
    <section id="home" className="w-full bg-skyBlue py-16">
      {/* Mobile View */}
      <div className="lg:hidden px-6">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-black font-extrabold text-2xl">
            Partner with Diagnosure: Empower Patients, Grow Your Practice
          </h2>
          <p className="text-black text-lg font-normal mt-4">
            Join our network of trusted dental professionals to provide patients with second opinions, increase trust, and grow your patient base.
          </p>
          <img
            src={smile}
            alt="Smiling Dentist"
            className="w-full h-auto mt-6 shadow-lg"
          />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex gap-10 px-10 xl:px-20 items-center mx-auto max-w-screen-xl">
        {/* Left Text Section */}
        <div className="flex-1 pr-8">
          <h1 className="text-black font-extrabold text-4xl leading-tight">
            Partner with Diagnosure: <br />
            Empower Patients, Grow Your Practice
          </h1>
          <p className="text-black text-lg font-normal mt-6">
            Join our network of trusted dental professionals to provide patients with second opinions, increase trust, and grow your patient base.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="">
          <img
            src={smile}
            alt="Smiling Dentist"
            className="w-96 h-auto  shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
