import React from "react";
import Layout from "../components/Layout";

const TermsOfUse = () => {
  return (
    <Layout>
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Terms of Use</h1>
          <p className="text-sm text-gray-500">Effective Date: January 1st, 2024</p>
        </header>

        {/* Content */}
        <section className="space-y-6 text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold">Introduction</h2>
          <p>
            Welcome to Diagno-Sure. By accessing, viewing, or using our website and platform, you
            acknowledge that you have read, understood, and agree to be bound by these Terms and
            Conditions (Agreement). If you do not agree with any part of these terms, please do not
            use our services. These terms apply to both services rendered through diagnosure.app and
            diagnosure.com.
          </p>

          <h2 className="text-xl font-semibold">Use of the Platform</h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Eligibility:</strong> You must be at least 18 years old to use our platform.
            </li>
            <li>
              <strong>Service Availability:</strong> We strive to ensure the platform is available
              at all times but cannot guarantee uninterrupted access. We reserve the right to
              modify, suspend, or discontinue any part of the service at any time without notice.
            </li>
            <li>
              <strong>Permitted Use:</strong> This website is provided for informational and
              educational purposes only. No dentist/patient relationship is established by your use
              of this site. Always seek the advice of a qualified health provider with any questions
              regarding dental health or medical conditions.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">User Responsibilities</h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Accurate Information:</strong> You are responsible for providing accurate
              information when booking appointments and submitting documents.
            </li>
            <li>
              <strong>Additional Information:</strong> Clinics may use tools to check in and request
              more information. It is your responsibility to understand the policies regarding your
              data by contacting the clinic.
            </li>
            <li>
              <strong>Arrival:</strong> Please arrive at least 15 minutes early for your appointment
              and bring any available dental records.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">Electronic Communications</h2>
          <p>
            By using this website, you agree to be bound by any affirmation, assent, or agreement
            you transmit, including any consent to receive communications from Diagno-Sure solely
            through electronic transmission.
          </p>

          <h2 className="text-xl font-semibold">Data Processing</h2>
          <p>
            Diagno-Sure processes user data in accordance with its Privacy Policy. Users are
            encouraged to review the Privacy Policy to understand how their data is collected, used,
            and protected.
          </p>

          <h2 className="text-xl font-semibold">Limitation of Liability</h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>No Liability for Damages:</strong> Diagno-Sure is not liable for any direct,
              indirect, incidental, consequential, or punitive damages arising out of your use of
              the site or services.
            </li>
            <li>
              <strong>No Warranty:</strong> This site and its content are provided "as is" without
              warranties of any kind, either express or implied.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">Other Conditions</h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Schedule:</strong> Diagno-Sure and its affiliate clinics have the right to
              reschedule or cancel appointments for reasons such as unavailability or unforeseen
              circumstances.
            </li>
            <li>
              <strong>No Service:</strong> The clinic and dentist have the right to reject providing
              the second opinion under any circumstances.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Diagno-Sure, its affiliates, agents,
            employees, and licensors from and against any claims, liabilities, damages, losses, or
            expenses arising out of your use of the site or violation of this Agreement.
          </p>

          <h2 className="text-xl font-semibold">Contact</h2>
          <address className="not-italic">
            Users may contact Diagno-Sure at:
            <br />
            <strong>Email:</strong> support@diagnosure.com
          </address>

          <h2 className="text-xl font-semibold">Acceptance of Terms</h2>
          <p>
            By accessing and using Diagno-Sure's services, you agree to comply with and be bound by
            these terms and conditions.
          </p>
        </section>
      </div>
    </div>
    </Layout>
  );
};

export default TermsOfUse;
