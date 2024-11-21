import React from "react";

import Layout from "../components/Layout";
const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg p-8">
          {/* Header Section */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-blue-600">Privacy Policy for Diagno-Sure</h1>
            <p className="text-sm text-gray-500">Effective Date: January 1st, 2024</p>
          </header>

          {/* Content */}
          <section className="space-y-6 text-gray-800 leading-relaxed">
            <h2 className="text-xl font-semibold">Introduction</h2>
            <p>
              At Diagno-Sure, your privacy is our priority. This Privacy Policy outlines how we
              collect, use, share, and protect your personal information when you use our services,
              including our website, platform, and any related applications. By using Diagno-Sure, you
              agree to the terms outlined in this Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
            <ul className="list-disc pl-5">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and other
                contact details. Payment information for transactions.
              </li>
              <li>
                <strong>Medical Information:</strong> Treatment plans, X-rays, or dental records you
                upload to our platform.
              </li>
              <li>
                <strong>Technical Information:</strong> Device type, browser type, IP address, and
                usage data for website and platform analytics.
              </li>
              <li>
                <strong>Communication Information:</strong> Messages, feedback, or inquiries submitted
                through our platform or customer support channels.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5">
              <li>Provide and improve our services, including connecting patients with dentists.</li>
              <li>Facilitate secure payments and transactions.</li>
              <li>Personalize your experience on our platform.</li>
              <li>
                Communicate with you regarding your account, service updates, or promotional offers.
              </li>
              <li>Comply with legal obligations or enforce our terms and policies.</li>
            </ul>

            <h2 className="text-xl font-semibold">3. How We Share Your Information</h2>
            <p>
              We only share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>With Affiliated Dentists:</strong> To facilitate second opinions on dental
                treatment plans.
              </li>
              <li>
                <strong>Service Providers:</strong> Trusted third-party vendors who assist with
                payment processing, data hosting, or analytics, bound by strict confidentiality
                agreements.
              </li>
              <li>
                <strong>Legal Compliance:</strong> If required by law or to protect our legal rights.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of
                assets.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">4. Data Security</h2>
            <p>
              We implement robust security measures to protect your data, including encryption,
              restricted access, and regular audits.
            </p>

            <h2 className="text-xl font-semibold">5. Your Rights</h2>
            <ul className="list-disc pl-5">
              <li>Access and update your personal information at any time.</li>
              <li>
                Request the deletion of your account and associated data, subject to our legal and
                operational requirements.
              </li>
              <li>Opt-out of marketing communications through your account settings.</li>
            </ul>

            <h2 className="text-xl font-semibold">6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your browsing experience and analyze
              usage patterns.
            </p>

            <h2 className="text-xl font-semibold">7. Children’s Privacy</h2>
            <p>
              Diagno-Sure is not intended for individuals under the age of 18. If you believe we have
              collected such data, please contact us immediately.
            </p>

            <h2 className="text-xl font-semibold">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Significant changes will be
              communicated via email or a prominent notice on our platform.
            </p>

            <h2 className="text-xl font-semibold">9. Contact Us</h2>
            <address className="not-italic">
              If you have any questions about this Privacy Policy or your personal data, please
              contact us at:
              <br />
              <strong>Email:</strong> support@diagnosure.com
              <br />
              <strong>Address:</strong> 7901 4th St N # 8719, St. Petersburg, FL 33702
            </address>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
