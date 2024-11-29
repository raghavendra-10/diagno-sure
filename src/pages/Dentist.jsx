import React from "react";
import Layout from "../components/Layout";
import Header from "../sections/Header";
import AboutDiagnosure from "../sections/AboutDiagnosure";
import WhyPartner from "../sections/WhyPartner";
import HowItWork from "../sections/HowItWork";
import DentistTestimonials from "../sections/DentistTestimonials";
import CallToAction from "../sections/CallToAction";
import ContactForm from "../sections/ContactForm";
import Footer from "../sections/Footer";

function Dentist() {
  return (
    <Layout>
      <Header />
      <AboutDiagnosure />
      <WhyPartner />
      <HowItWork />
      <DentistTestimonials />
      <CallToAction />
      <ContactForm />
      {/* <Footer /> */}
    </Layout>
  );
}

export default Dentist;
