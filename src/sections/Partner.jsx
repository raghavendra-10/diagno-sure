import React from "react";
import partner from "../assets/partner.webp";

function Partner() {
  return (
    <section id="partners" className="w-full bg-white pt-16 pb-8">
      <div className="flex flex-col w-full lg:flex-row lg:w-[992px] px-4 xl:w-[1140px] justify-center items-start mx-auto gap-5">
        <div className="px-4 flex-1">
          <img src={partner} className="w-full h-auto" />
        </div>
        <div className="px-4 flex flex-col items-start justify-center flex-1 gap-5">
          {/* <h3 className="text-base text-lightBlue">Our Partner Dental Office in Orlando:</h3> */}
          <h2 className="text-3xl text-blue overflow-y-hidden">
            Our Partner Dental Clinics
          </h2>
          <p className="text-base">
            Diagno-Sure partners exclusively with trusted and ethical dentists
            nationwide, ensuring patients receive unbiased, high-quality care.
            Our aim is to empower patients make informed decisions about their
            dental health.”{" "}
          </p>
          <div>
            <h4 className="text-lg font-bold">Main Qualities We Look For</h4>
            <ul>
              <li>
                <span className="font-bold">• Integrity:</span> Dentists who
                prioritize patient well-being over profits.
              </li>
              <li>
                <span className="font-bold">•Transparency:</span> Clear
                communication about treatments and costs.
              </li>
              <li>
                <span className="font-bold">•Expertise:</span> Verified
                qualifications and extensive clinical experience.
              </li>
              <li>
                <span className="font-bold">•Patient-Centric Care:</span>
                 Commitment to providing honest, personalized advice.
              </li>
            </ul>
          </div>
          {/* <iframe
            class="zpmap zp-pointer-events-no "
            src="https://maps.google.com/maps?hl=en&amp;q=colonial%20town%20dental&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="200px"
            align="left"
            frameborder="0"
          ></iframe> */}
        </div>
      </div>
    </section>
  );
}

export default Partner;
