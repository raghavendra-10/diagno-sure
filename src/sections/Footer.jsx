import React from "react";
import logo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <div className="bg-[#212529] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-0 md:flex justify-between">
        {/* Logo and Address Section */}
        <div className="mb-6 md:mb-0">
          <div className="w-[151px] h-[58px] md:w-[228px] md:h-[87px]">
            <img src={logo} className="w-full h-full" alt="Logo" />
          </div>
          <p className="mt-1">Pay Right, Smile Bright!</p>
          <address className="mt-4 not-italic">
            Diagnosure LLC
            <br />
            7901 4th St N # 8719, St. Petersburg, FL 33702
          </address>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-0">
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#howItWorks" className="hover:underline">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacyPolicy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/termsOfUse" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#partners" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us - support@diagnosure.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          © Copyrights 2024 Diagno-Sure. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
