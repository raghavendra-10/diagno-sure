import React from "react";
import features1 from "../assets/features-1.png";
import features2 from "../assets/features-2.png";
import contracts from '../assets/contracts.jpg'

function Features() {
  return (
    <section className="w-full bg-skyBlue pt-16 pb-8">
      <div className="flex flex-col w-full lg:flex-row lg:w-[992px] px-4 xl:w-[1140px] justify-center items-start mx-auto gap-5">
        <div className="px-4 flex flex-col items-start justify-center">
          <h2 className="text-xl">Smarter Dental Decisions.</h2>
          <p className="mt-5 text-base">
            Get the care you need with confidence and control. Discover the
            benefits of Second Opinions over Dental Savings Plans.
          </p>
        </div>
        <div className="px-4">
          {/* <img src={features1} className="w-full h-auto md:hidden" />
          <img
            src={features2}
            className="w-full h-auto hidden md:inline-block"
          /> */}
          <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full max-w-screen-lg mx-auto">
            {/* <div className="flex-1 min-w-[calc(50%-1rem)] bg-blue-100 p-4 rounded shadow">
              <div className="flex flex-row gap-1">
                <div className="flex-1"><img src={contracts} className="w-full h-auto"  /></div>

              <h3 className="text-lg font-semibold border-b border-b-black pb-4 mb-4 flex-1">No Contracts or Commitments</h3>
              </div>
              <p className="text-gray-600">Dental Second Opinions provide straightforward pricing and payment plans. Dental savings plans involve signing up for contracts.</p>
            </div>
            <div className="flex-1 min-w-[calc(50%-1rem)] bg-blue-200 p-4 rounded shadow">
            <h3 className="text-lg font-semibold border-b border-b-black pb-4 mb-4">Customization of Treatment Plans</h3>
              <p className="text-gray-600">Second Opinions may provide personalized treatment options tailored to your unique goals.</p>
            </div>
            <div className="flex-1 min-w-[calc(50%-1rem)] bg-blue-300 p-4 rounded shadow">
            <h3 className="text-lg font-semibold border-b border-b-black pb-4 mb-4">Customizable Payment Plans</h3>
              <p className="text-gray-600">Our partner clinics support payment flexibility, unlike savings plans that may offer fixed discounts on immediate payments.</p>
            </div>
            <div className="flex-1 min-w-[calc(50%-1rem)] bg-blue-400 p-4 rounded shadow">
            <h3 className="text-lg font-semibold border-b border-b-black pb-4 mb-4">Avoid Unnecessary Treatments</h3>
              <p className="text-gray-600">A Second Opinion may help you avoid unnecessary or over-aggressive procedures, potentially saving you money on treatments you don’t need.</p>
            </div> */}
            <Card
        image={contracts}
        title="No Contracts or Commitments"
        description="Dental Second Opinions provide straightforward pricing and payment plans. Dental savings plans involve signing up for contracts."
        bgColor="bg-blue-100"
      />
      <Card
        image={contracts}
        title="Customization of Treatment Plans"
        description="Second Opinions may provide personalized treatment options tailored to your unique goals."
        bgColor="bg-blue-200"
      />
      <Card
        image={contracts}
        title="Customizable Payment Plans"
        description="Our partner clinics support payment flexibility, unlike savings plans that may offer fixed discounts on immediate payments."
        bgColor="bg-blue-300"
      />
      <Card
        image={contracts}
        title="Avoid Unnecessary Treatments"
        description="A Second Opinion may help you avoid unnecessary or over-aggressive procedures, potentially saving you money on treatments you don’t need."
        bgColor="bg-blue-400"
      />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

const Card = ({ image, title, description, bgColor }) => {
  return (
    <div className={`flex-1 min-w-[calc(50%-1rem)] ${bgColor} p-4 rounded shadow`}>
      <div className="flex flex-row items-start gap-2 border-b border-b-black pb-4 mb-4">
        <img src={image} alt={title} className="w-12 h-12 flex-shrink-0" />
        <h3 className="text-lg font-semibold">
          {title}
        </h3>
      </div>
      {/* Description visible on larger screens */}
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
