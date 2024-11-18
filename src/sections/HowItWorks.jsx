import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import { FaRegCalendarCheck } from "react-icons/fa6";

function HowItWorks() {
  return (
    <section id="howItWorks" className="bg-white w-full pt-4 pb-12">
      <div className="w-full px-4 lg:w-[992px] xl:w-[1140px] mx-auto">
        <div className="mt-8 mb-10">
          <h2 className="text-blue text-2xl font-normal text-center">
            How It Works!
          </h2>
          <div className="h-[3px] w-8 bg-blue m-auto mt-8"></div>
        </div>
        <div className="flex flex-col lg:flex-row mt-5 gap-4">
          <Card
            heading="1. Find an Affiliate Dentist Near You"
            desc="Share your current treatment plan and X-rays with a dentist in our network. It’s quick, secure, and helps the dentist understand your needs."
            icon={<BiSolidPhoneCall />}
          />
          <Card
            heading="2. Receive a Second Opinion"
            desc="The dentist reviews your case and provides
            a second opinion, highlighting potential cost savings
            and alternative treatments, if needed."
            icon={<CgFileDocument />}
          />
          <Card
            heading="3. Decide & Schedule"
            desc="If the second opinion works for you,
            schedule a consultation with the dentist
            to proceed with the recommended treatment plan."
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
    <div className="px-4 flex flex-col justify-start items-center flex-1">
      <div className="text-2xl font-normal text-lightBlue">{icon}</div>
      <h4 className="text-2xl font-normal text-blue mt-3 capitalize text-center">
        {heading}
      </h4>
      <p className="mt-4 text-sm font-normal text-center">{desc}</p>
    </div>
  );
};
