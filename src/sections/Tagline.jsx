import React from "react";
import tagline from "../assets/tagline.png";

const Tagline = () => {
  return (
    <section
      id="#tagline"
      className="py-12 w-full lg:w-[990px] xl:w-[1140px] px-4 mx-auto bg-white"
    >
      <div className="w-full  pr-5 lg:pr-0">
        <img src={tagline} className="w-full h-auto" />
      </div>
      {/* <p className="p-4 text-2xl text-center font-bold pr-5 lg:pr-0">
        Save Right, Smile Bright. At Diagno-Sure, we help patients make smarter
        dental decisions.”
      </p> */}
      <div className="mt-4 pr-5 lg:pr-0">
        <h3 className="text-base">Terms of Use & Disclaimer:</h3>
        <p className="text-sm mt-4">
          The information provided by Diagno-Sure is for informational purposes
          only and does not constitute professional dental advice, diagnosis, or
          treatment. Always seek the advice of your dentist or other qualified
          healthcare provider with any questions regarding your dental health.
          Diagno-Sure is not liable for any decisions, both clinical and
          non-clinical, made based on the information provided on the website or
          at our affiliate clinic. Use of this website constitutes acceptance of
          our terms. All services are subject to availability and may vary based
          on your specific case.{" "}
        </p>
      </div>
    </section>
  );
};

export default Tagline;
