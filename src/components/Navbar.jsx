import React from "react";
import logo from "../assets/logo.png";
import ButtonWithIcon from "./ButtonWithIcon";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiCalendar } from "react-icons/ci";
import { BiSolidPhoneCall } from "react-icons/bi";

const Navbar = () => {
  return (
    <navbar className="bg-white flex justify-center items-center w-full">
      <div className="flex items-center justify-between px-4 py-4 w-full lg:w-[70%]">
        {/* Logo Section */}
        <div className="w-[151px] h-[58px] md:w-[228px] md:h-[87px]">
          <img src={logo} className="w-full h-full" alt="Logo" />
        </div>

        {/* Buttons Section */}
        <div className="flex justify-center md:justify-end items-center gap-4 md:gap-8">
          {/* Show buttons only for screens 768px and above */}
          <div className="hidden md:flex gap-8">
            <ButtonWithIcon text="Request Online" icon={<CiCalendar />} />
            <ButtonWithIcon text="FAQs" icon={<GiHamburgerMenu />} />
          </div>

          {/* Show a different button for smaller screens */}
          <div className="flex md:hidden">
          <ButtonWithIcon text="Call us today" icon={<BiSolidPhoneCall />} /></div>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
