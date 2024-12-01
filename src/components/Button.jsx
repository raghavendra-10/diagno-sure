import React from "react";

function Button({ active = true, text, onClick = () => {} }) {
  return (
    <button
      onClick={onclick}
      className={`${
        active ? "bg-orange text-white" : "text-orange bg-white border border-orange"
      } rounded-[56px] py-3 px-6 font-semibold text-base`}
    >
      {text}
    </button>
  );
}

export default Button;
