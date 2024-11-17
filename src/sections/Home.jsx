import React from "react";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import ButtonWithIcon from "../components/ButtonWithIcon";
import { BiSolidPhoneCall } from "react-icons/bi";

function Home() {
  return (
    <section className="w-full bg-grey pt-16 pb-8">
      <div className="md:mx-11 lg:hidden px-4">
        <div className="flex lg:hidden flex-col justify-start items-center">
          <h2 className="text-black text-center text-xl font-normal">
            Get a{" "}
            <span className="text-orange">FREE Dental Second Opinion</span>{" "}
            <br /> from home, quick and easy.
          </h2>
          <div className="mt-4 w-full">
            <img src={home1} className="w-full h-auto" />
          </div>
          <p className=" text-lg text-black font-normal text-center mt-5">
            Get trusted dental care in{" "}
            <span className="font-bold">Orlando</span> with confidence.
          </p>
          <p className="text-sm font-normal text-black mt-2">
            Offer valid for self-pay patients only*
          </p>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-[992px] px-4 xl:w-[1140px] mx-auto">
        <div className="flex-1 px-4 flex flex-col items-start justify-center">
          <div>
            <p className="text-3xl font-bold text-wrap overflow-y-hidden">
              Get a FREE Dental Second Opinion
            </p>
            <p className="text-2xl font-normal">from home, quick and easy</p>
          </div>
          <p className=" text-lg text-black font-normal mt-10">
            Get trusted dental care in{" "}
            <span className="font-bold">Orlando</span> with confidence.
          </p>
          <div className="mt-4">
            <ButtonWithIcon text="Call us today" icon={<BiSolidPhoneCall />} />
            <p className="text-sm font-normal text-black mt-2">
              Offer valid for self-pay patients only*
            </p>
          </div>
        </div>
        <div className="flex-1 px-4">
          <div className="w-full">
            <img src={home2} className="w-full h-auto" />
          </div>
          <div className="mt-8 text-lg font-normal">
            "Diagno-sure helped me understand my options and save money!"
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
