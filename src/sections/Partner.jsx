import React from "react";
import partner from "../assets/partner.webp";

function Partner() {
  return (
    <section className="w-full bg-white pt-16 pb-8">
      <div className="flex flex-col w-full lg:flex-row lg:w-[992px] px-4 xl:w-[1140px] justify-center items-start mx-auto gap-5">
        <div className="px-4 flex-1">
          <img src={partner} className="w-full h-auto" />
        </div>
        <div className="px-4 flex flex-col items-start justify-center flex-1 gap-5">
            <h3 className="text-base text-lightBlue">Our Partner Dental Office in Orlando:</h3>
            <h2 className="text-3xl text-blue overflow-y-hidden">Colonial Town Dental</h2>
            <p className="text-base">At Diagno-Sure’s partner dental offices, patients receive top-quality care without unnecessary fees. Dr. Patel and our dedicated team are committed to the science of dentistry, delivering exceptional care that boosts your confidence—all at a fair and affordable price, tailored to the services you need.</p>
          <iframe
            class="zpmap zp-pointer-events-no "
            src="https://maps.google.com/maps?hl=en&amp;q=colonial%20town%20dental&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="200px"
            align="left"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Partner;
