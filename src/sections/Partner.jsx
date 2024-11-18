import React from "react";
import partner from "../assets/partner.webp";

function Partner() {
  return (
    <section id="partners" className="w-full bg-white pt-16 pb-8">
      <div className="flex flex-col w-full lg:flex-row lg:w-[992px] px-4 xl:w-[1140px] justify-center items-start mx-auto gap-5">
        <div className="px-4 flex-1">
          <img src={partner} className="w-full h-auto" alt="Partner" />
        </div>
        <div className="px-4 flex flex-col items-start justify-center flex-1 gap-5">
          <h2 className="text-3xl text-blue overflow-y-hidden">
            Our Partner Dental Clinics
          </h2>
          <p className="text-base">
            Diagno-Sure partners exclusively with trusted and ethical dentists
            nationwide, ensuring patients receive unbiased, high-quality care.
            Our aim is to empower patients make informed decisions about their
            dental health.
          </p>
          <div>
            <h4 className="text-lg font-bold">Main Qualities We Look For</h4>
            <ul className="list-none">
              <li className="flex items-start pb-2">
                <div
                  className="text-gold font-bold pr-2"
                  style={{ color: "#FFD700" }}
                >
                  ✔
                </div>
                <span>
                  <span className="font-bold">Integrity:</span> Dentists who
                  prioritize patient well-being over profits.
                </span>
              </li>
              <li className="flex items-start pb-2">
                <span
                  className="text-gold font-bold pr-2"
                  style={{ color: "#FFD700" }}
                >
                  ✔
                </span>
                <span>
                  <span className="font-bold">Transparency:</span> Clear
                  communication about treatments and costs.
                </span>
              </li>
              <li className="flex items-start pb-2">
                <span
                  className="text-gold font-bold pr-2"
                  style={{ color: "#FFD700" }}
                >
                  ✔
                </span>
                <span>
                  <span className="font-bold">Expertise:</span> Verified
                  qualifications and extensive clinical experience.
                </span>
              </li>
              <li className="flex items-start pb-2 ">
                <span
                  className="text-gold font-bold pr-2"
                  style={{ color: "#FFD700" }}
                >
                  ✔
                </span>
                <span>
                  <span className="font-bold">Patient-Centric Care:</span>{" "}
                  Commitment to providing honest, personalized advice.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
