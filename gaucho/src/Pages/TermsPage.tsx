// src/Pages/TermsPage.tsx
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 index-0 z-50 px-4">
      <div className="max-w-4xl mx-auto mt-20 z-10 relative">
        {/* Header con botón de volver */}
        <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
          <div className="flex items-center justify-between mb-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-[#73A9D8] hover:text-[#5a8bc4] transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Volver al inicio</span>
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Términos y Condiciones de Gaucho Lab</p>
        </div>

        {/* Contenido principal */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <div className="text-gray-700 space-y-6">
            <p className="text-sm text-gray-500">Last updated: February 06, 2025</p>
            
            <p className="text-base">
              This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your
              information when you use our service and informs you about your privacy rights and how the law protects you.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Interpretation and Definitions
              </h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">Interpretation</h3>
              <p className="text-base mb-4">
                The words with capitalized initials have meanings defined under the following conditions.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">Definitions</h3>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li><strong>Account:</strong> A unique account created for you to access our service.</li>
                <li><strong>Company:</strong> Refers to Gaucho Lab.</li>
                <li><strong>Cookies:</strong> Small files placed on your device containing details of your browsing history.</li>
                <li><strong>Country:</strong> Refers to Argentina.</li>
                <li><strong>Device:</strong> Any device that can access the service, such as a computer or mobile phone.</li>
                <li><strong>Personal Data:</strong> Any information that relates to an identifiable individual.</li>
                <li><strong>Service:</strong> Refers to the Website.</li>
                <li><strong>Website:</strong> Refers to Gaucho Lab, accessible from <a className="text-[#73A9D8] hover:underline" href="https://www.gaucholab.com/">here</a>.</li>
                <li><strong>You:</strong> The individual accessing or using the service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Collecting and Using Your Personal Data
              </h2>
              <p className="text-base mb-4">We may ask you to provide personally identifiable information, including:</p>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Usage Data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Tracking Technologies and Cookies
              </h2>
              <p className="text-base">
                We use cookies and similar tracking technologies to track the activity on our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Use of Your Personal Data
              </h2>
              <p className="text-base">
                The company may use personal data to provide and maintain our service, manage your account, and contact you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Security of Your Personal Data
              </h2>
              <p className="text-base">
                The security of your personal data is important to us, but remember that no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Changes to This Privacy Policy
              </h2>
              <p className="text-base">
                We may update our Privacy Policy from time to time. Please review it periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Contact Us
              </h2>
              <p className="text-base mb-4">If you have any questions, you can contact us:</p>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li>By email: info@gaucholab.com</li>
                <li>By visiting our website: <a className="text-[#73A9D8] hover:underline" href="https://www.gaucholab.com/">Gaucho Web</a></li>
                <li>By phone: 549 341 397 7076</li>
              </ul>
            </section>
          </div>

          {/* Botón de volver al final */}
          <div className="mt-12 pt-6 border-t border-gray-200 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#73A9D8] text-white rounded-lg hover:bg-[#5a8bc4] transition-colors"
            >
              <ArrowLeft size={18} />
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};