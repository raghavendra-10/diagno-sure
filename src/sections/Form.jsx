import React from "react";
import partner from "../assets/partner.webp";

function Form() {
  return (
    <section className="w-full bg-greyVeryLight pt-16 pb-8">
      <h2 className="text-center text-3xl text-blue mt-5">
        Request a Call Back!
      </h2>
      <div className="bg-white p-4 w-full lg:w-[990px] xl:w-[1200px] mx-auto mt-10 gap-5 flex flex-col">
        <InputWithLabel label="Name" />
        <InputWithLabel label="Phone" type="number" />
        <InputWithLabel label="Notes for clinic" multiline={true} />
        <button className="bg-blue2 text-white mx-auto rounded-3xl text-base py-2 px-8">Request a Call Back</button>
      </div>
    </section>
  );
}

export default Form;

const InputWithLabel = ({ label, type = "text", multiline = false }) => {
  return (
    <div className="w-full lg:w-[500px] flex flex-col mb-3 items-start justify-start gap-2 mx-auto">
      <label className="text-base">
        {label} <span className="ml-1 text-red">*</span>
      </label>
      {multiline ? <textarea rows={5} className="bg-white border border-grey w-full py-2 px-1 text-base text-lightBlue">

      </textarea>: <input
        type={type}
        className="bg-white border border-grey w-full py-2 px-1 text-base text-lightBlue"
      />}
    </div>
  );
};
