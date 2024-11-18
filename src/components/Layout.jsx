import React from "react";
import Navbar from "./Navbar";
import Footer from "../sections/Footer";

function Layout({ children }) {
  return (
    <div className="w-screen overflow-x-hidden min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
