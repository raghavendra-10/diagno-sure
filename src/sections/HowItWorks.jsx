import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import { FaRegCalendarCheck } from "react-icons/fa6";

function HowItWorks() {
  return (
    <section className="bg-white w-full pt-4 pb-7">
      <div className="w-full px-4 lg:w-[992px] xl:w-[1140px] mx-auto">
        <div className="mt-5 mb-6">
          <h2 className="text-blue text-2xl font-normal text-center">
            How It Works!
          </h2>
          <div className="h-[3px] w-8 bg-blue m-auto mt-5"></div>
        </div>
        <div className="flex flex-col lg:flex-row mt-5 gap-4">
          <Card
            heading="1. Reach Out to us"
            desc="Contact us and we will work with you to gather necessary information. You can also submit an request online by providing necessary information."
            icon={<BiSolidPhoneCall />}
          />
          <Card
            heading="2. get your second opinion"
            desc="Our ​partner dentist in Orlando will carefully review your concerns and call you back with a revised treatment plan, highlighting potential savings and improvements."
            icon={<CgFileDocument />}
          />
          <Card
            heading="3. make an informed decision"
            desc="If you like to proceed with the new treatment plan, schedule your appointment with our partner clinic to get the care you need at a lower cost and as an informed decision."
            icon={<FaRegCalendarCheck />}
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

const Card = ({ icon, heading, desc }) => {
  return (
    <div className="px-4 flex flex-col justify-center items-center flex-1">
      <div className="text-2xl font-normal text-lightBlue">{icon}</div>
      <h4 className="text-2xl font-normal text-blue mt-3 capitalize text-center">
        {heading}
      </h4>
      <p className="mt-4 text-sm font-normal text-center">{desc}</p>
    </div>
  );
};
