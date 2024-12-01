import React from "react";
import Layout from "../components/Layout";
import location from "../assets/svgs/location.svg";
import downArrow from "../assets/svgs/downArrow.svg";
import Button from "../components/Button";
import ProfileCard from "../components/ProfileCard";

function Locations() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center px-4 py-5 md:px-32 md:py-20 bg-neutral5">
        <div className="flex-1">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold md:font-semibold leading-[33.6px] tracking-[0.005em] text-left text-primaryBlue90 overflow-y-hidden">
              Dental Second Opinion Near You
            </h3>
            <h6 className="text-sm font-medium text-neutral60 md:text-base md:font-semibold mt-2">
              Enter your location below to discover trusted dentists in your
              area
            </h6>
          </div>
          <div className="mt-5 p-2 rounded-[34px] bg-white flex justify-between items-center gap-4">
            <div className="py-1 px-2 flex justify-start items-center gap-2 flex-1">
              <div className="w-6 h-6">
                <img src={location} className="w-full h-full px-1 py-[1px]" />
              </div>
              <input className="border-none outline-none bg-none text-base font-medium text-neutral80 placeholder:text-neutral30 w-full" />
            </div>
            <Button text="Search" onClick={() => {}} />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium text-neutral80 md:text-base">
                234 Dentists
              </div>
              <div className="flex justify-end gap-3">
                <div className="text-sm font-medium text-neutral60 md:text-base">
                  Sort by:
                </div>
                <div className="flex justify-end gap-3">
                  <div className="text-sm font-medium text-neutral80 md:text-base">
                    Nearest
                  </div>
                  <div className="w-6 h-6 px-1 py-2 cursor-pointer">
                    <img src={downArrow} className="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-h-[1391px] md:max-h-[597px] flex flex-col gap-4 overflow-y-scroll pb-4">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-[48px] overflow-hidden self-stretch">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093746!2d-122.4194154846813!3d37.774929279758616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5cce8f01%3A0x8bff2b0b3a10d6d1!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1633587954552!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}

export default Locations;
