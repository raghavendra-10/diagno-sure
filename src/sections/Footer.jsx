import React from "react";

const Footer = () => {
    return (
        <div className="bg-[#212529] text-white py-10">
            <div className="max-w-7xl mx-auto px-4 md:flex justify-between">
                {/* Logo and Address Section */}
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold">Diagno-Sure</h2>
                    <p className="mt-1">Pay Right, Smile Bright!</p>
                    <address className="mt-4 not-italic">
                        Diagnosure LLC<br />
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
                <div className="grid grid-cols-2 gap-8 md:flex md:space-x-12">
                    <div>
                        <h4 className="font-semibold mb-2">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">How It Works</a></li>
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Media</a></li>
                            <li><a href="#" className="hover:underline">Testimonial</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Terms of Use</a></li>
                            <li><a href="mailto:support@diagnosure.com" className="hover:underline">support@diagnosure.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center">
                <p className="text-sm">© Copyrights 2024 Diagno-Sure. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;