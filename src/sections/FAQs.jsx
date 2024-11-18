import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

function FAQs() {
  const faqs = [
    {
      question: "Who are your affiliate Dental Partners?",
      answer:
        "Our affiliate dental partners are highly qualified and experienced dentists who collaborate with Diagno-Sure to provide expert insights for the Dental Second Opinion service. We exclusively partner with professionals committed to excellence in dental care.",
    },
    
    {
      question: "Is my data secure?",
      answer:
        "Yes, your personal data is handled with the utmost security. Diagno-Sure follows strict HIPAA-compliant protocols to ensure the confidentiality and privacy of your information throughout the entire Dental Second Opinion process. Our affiliate dentists are bound by Business Associate agreements that adhere to our privacy policy. You can read our full privacy policy and submit a request to delete your information from our platform by filling the form in this link.",
    },
    {
      question:"How is Diagno-Sure able to provide the Dental Opinion Service free of cost?",
      answer:
        "The free Dental Second Opinion service is made possible through the support of our affiliate dentists, who partner with us to offer free consultations. In return, our partners benefit from increased goodwill and expanded presence in their region. This collaboration allows us to provide valuable services at no cost to patients while helping dentists grow their practices.",
    },
    {
      question:"How long does it take to get a second opinion?",
      answer: "The time frame for receiving a second opinion can vary, but our online service typically provides feedback within 24-48 hours."
    },
    {
      question: "What information do i need to submit prior to visit?",
      answer:
        "To ensure an efficient and successful second opinion visit, please submit your X-rays, treatment plans, and any concerns or questions you may have during the appointment booking process. Providing this information in advance allows the dentist to be well-prepared for your visit, ensuring that you receive the best possible care and advice. Patients who complete these steps typically experience a smooth and productive second opinion consultation.",
    },
    {
      question:"Will my dentist be upset if I get a second opinion?",
      answer: "Most dentists understand that patients want to be sure about their treatment plan. A good dentist should support your decision to get a second opinion for peace of mind. It's ultimately your decision to get the treatment you prefer and are comfortable with. "
    },
    {
      question: "Who are your Patner Dental Clinics?",
      answer:"Our dental partners are fully licensed, credentialed, and experienced dentists who collaborate with Diagno-Sure to offer expert insights through our Dental Second Opinion service. We exclusively work with professionals committed to ethical standards and excellence in dental care."
    },
    {
      question: 'Whom do I contact for help?',
      answer:
        "For all questions, concerns, and queries, please reach out to our support@diagnosure.com"
    }
  ];

  const [open, setOpen] = useState(null);
  return (
    <section id="faqs" className="bg-white w-full pt-4 pb-12">
      <div className="w-full px-4 lg:w-[992px] xl:w-[1140px] mx-auto">
        <div className="mt-8 mb-10">
          <h2 className="text-blue text-3xl font-medium overflow-y-hidden">
            FAQs
          </h2>
          <div className="h-[3px] w-8 bg-blue mt-8"></div>
        </div>
        <div className="flex flex-col mt-5 pr-2 lg:pr-0">
          {faqs.map((item, index) => (
            <Accordian
              key={index}
              question={item.question}
              answer={item.answer}
              handleClick={() => {
                console.log(index);
                if (open == index) setOpen(null);
                else setOpen(index);
              }}
              open={open == index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;

const Accordian = ({ question, answer, open, handleClick }) => {
  return (
    <div
      className="border-grey border w-full cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={`flex px-1 py-4 items-center ${
          open ? "border-b border-b-blue2" : ""
        }`}
      >
        <div className="text-base font-normal text-black">
          {open ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        <div className={`ml-6 text-base font-normal text-black}`}>
          {question}
        </div>
      </div>
      {open && <div className="p-4 text-sm">{answer}</div>}
    </div>
  );
};
