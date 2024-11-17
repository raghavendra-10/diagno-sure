import React from "react";

const ButtonWithIcon = ({ icon, text }) => {
  return (
    <button className="bg-orange rounded-md py-2 px-3 md:py-3 md:px-8 flex items-center justify-center gap-3">
      <div className="text-xs md:text-base font-normal text-white">{icon}</div>
      <div className="text-xs md:text-base font-normal text-white">{text}</div>
    </button>
  );
};

export default ButtonWithIcon;
