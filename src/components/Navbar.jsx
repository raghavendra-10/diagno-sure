import React from "react";
import logo from "../assets/logo.png";
import ButtonWithIcon from "./ButtonWithIcon";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiCalendar } from "react-icons/ci";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const getLinkClasses = (path) => {
    if (location.pathname === path) {
      return "bg-orange text-white"; // Active page styles
    }
    return "border border-orange text-orange bg-white"; // Inactive page styles
  };

  return (
    <navbar className="bg-white flex justify-center items-center w-full px-4">
      <div className="flex items-center justify-between px-4 py-4 w-full lg:w-[992px] xl:w-[1140px] mx-auto">
        {/* Logo Section */}
        <div className="w-[151px] h-[58px] md:w-[228px] md:h-[87px]">
          <img src={logo} className="w-full h-full" alt="Logo" />
        </div>

        {/* Buttons Section */}
        <div className="flex justify-center md:justify-end items-center gap-4 md:gap-8">
          {/* Show buttons only for screens 768px and above */}
          <div className="flex gap-4">
            {/* <ButtonWithIcon
              isLink={true}
              text="Dentist"
              icon={<CiCalendar />}
              to="/"
            />
            <ButtonWithIcon
              isLink={true}
              to="/patients"
              text="Patients"
              icon={<GiHamburgerMenu />}
            /> */}
            <Link
              to="/"
              className={`rounded-md py-2 px-3 md:py-3 md:px-8 flex items-center justify-center gap-3 ${getLinkClasses(
                "/"
              )}`}
            >
              <div className="text-xs md:text-base font-normal">Patients</div>
            </Link>
            <Link
              to="/dentist"
              className={`rounded-md py-2 px-3 md:py-3 md:px-8 flex items-center justify-center gap-3 ${getLinkClasses(
                "/dentist"
              )}`}
            >
              <div className="text-xs md:text-base font-normal">Dentist</div>
            </Link>
          </div>

          {/* Show a different button for smaller screens */}
          {/* <div className="flex md:hidden">
            <ButtonWithIcon text="Call us today" icon={<BiSolidPhoneCall />} />
          </div> */}
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
