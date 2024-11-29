import React from "react";
import Layout from "../components/Layout";
import Features from "../sections/Features";
import Form from "../sections/Form";
import Home from "../sections/Home";
import HowItWorks from "../sections/HowItWorks";
import Partner from "../sections/Partner";
import Tagline from "../sections/Tagline";
import FAQs from "../sections/FAQs";

function Patient() {
  return (
    // <div className="w-screen overflow-x-hidden min-h-screen">
    <Layout>
      <Home />
      <HowItWorks />
      <Features />
      <Partner />
      {/* <Form /> */}
      <FAQs />
      <Tagline />
    </Layout>
    // </div>
  );
}

export default Patient;
