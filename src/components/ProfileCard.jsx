import React from "react";
import Profile from "../assets/profile.png";
import Bag from "../assets/svgs/bag.svg";
import Location from "../assets/svgs/locationFilled.svg";
import Button from "./Button";

function ProfileCard() {
  return (
    <div className="rounded-xl border border-neutral20 p-6 flex-shrink-0 cursor-pointer hover:border-primaryBlue60">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img src={Profile} className="w-full h-full" />
        </div>
        <div>
          <div>
            <div className=" text-lg font-bold text-primaryBlue90">
              Dr. Sarah Thompson, DMD
            </div>
            <div className="text-sm font-medium text-neutral60">
              Oral Surgery
            </div>
          </div>
          <div className="mt-4">
            <div className="rounded-lg flex gap-3 py-2 justify-start items-center">
              <div className="w-5 h-5 px-[2px] py-[1px]">
                <img className="w-full h-full" src={Bag} />
              </div>
              <div>8 years</div>
            </div>
            <div className="rounded-lg flex gap-3 py-2 justify-start items-center">
              <div className="w-5 h-5 px-[2px] py-[1px]">
                <img className="w-full h-full" src={Location} />
              </div>
              <div className="underline text-base font-medium text-primaryBlue60">
                987 Urgent Ct, New York, NY 10006
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block h-[1px] bg-neutral20 my-4 w-32"></div>
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <Button text="View Profile" active={false} />
        <Button text="Book a FREE Second Opinion" />
      </div>
    </div>
  );
}

export default ProfileCard;
