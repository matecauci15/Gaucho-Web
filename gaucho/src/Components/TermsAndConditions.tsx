import { useState } from "react";

export const TermsAndConditions: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="max-w-4xl mx-auto mt-20 p-8 mb-20 bg-white shadow-lg rounded-lg border border-gray-200 relative">
        <div 
          className="flex justify-between items-center cursor-pointer border-b pb-4 m-18" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-3xl font-bold text-gray-800">Privacy Policy</h2>
          <span className="text-2xl text-gray-600">{isOpen ? "▲" : "▼"}</span>
        </div>
        {isOpen && (
          <div className="mt-6 text-gray-700 space-y-6">
            <p className="text-sm text-gray-500">Last updated: February 06, 2025</p>
            <p>
              This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your
              information when you use our service and informs you about your privacy rights and how the law protects you.
            </p>
            <h3 className="text-2xl font-semibold mt-8 border-b pb-2">Interpretation and Definitions</h3>
            <h4 className="text-xl font-medium mt-6">Interpretation</h4>
            <p>
              The words with capitalized initials have meanings defined under the following conditions.
            </p>
            <h4 className="text-xl font-medium mt-6">Definitions</h4>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><strong>Account:</strong> A unique account created for you to access our service.</li>
              <li><strong>Company:</strong> Refers to Gaucho Lab.</li>
              <li><strong>Cookies:</strong> Small files placed on your device containing details of your browsing history.</li>
              <li><strong>Country:</strong> Refers to Argentina.</li>
              <li><strong>Device:</strong> Any device that can access the service, such as a computer or mobile phone.</li>
              <li><strong>Personal Data:</strong> Any information that relates to an identifiable individual.</li>
              <li><strong>Service:</strong> Refers to the Website.</li>
              <li><strong>Website:</strong> Refers to Gaucho Lab, accessible from <a className="text-blue-600 hover:underline" href="https://matecauci15.github.io/Gaucho-Lab/">here</a>.</li>
              <li><strong>You:</strong> The individual accessing or using the service.</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-8 border-b pb-2">Collecting and Using Your Personal Data</h3>
            <p>We may ask you to provide personally identifiable information, including:</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Usage Data</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-8 border-b pb-2">Tracking Technologies and Cookies</h3>
            <p>We use cookies and similar tracking technologies to track the activity on our service.</p>
            <h3 className="text-2xl font-semibold mt-8 border-b pb-2">Use of Your Personal Data</h3>
            <p>
              The company may use personal data to provide and maintain our service, manage your account, and contact you.
            </p>
            <h3 className="text-2xl font-semibold mt-8 border-b pb-2">Security of Your Personal Data</h3>
            <p>
              The security of your personal data is important to us, but remember that no method of transmission over the internet is 100% secure.
            </p>
            <h3 className="text-2xl font-semibold mt-8 border-b pb-2">Changes to This Privacy Policy</h3>
            <p>We may update our Privacy Policy from time to time. Please review it periodically for any changes.</p>
            <h3 className="text-2xl font-semibold mt-8 border-b pb-2">Contact Us</h3>
            <p>If you have any questions, you can contact us:</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>By email: info@gaucholab.com</li>
              <li>By visiting our website: <a className="text-blue-600 hover:underline" href="https://matecauci15.github.io/Gaucho-Lab/">Gaucho Web</a></li>
              <li>By phone: 549 341 397 7076</li>
            </ul>
          </div>
        )}
      </div>
    );
  };
