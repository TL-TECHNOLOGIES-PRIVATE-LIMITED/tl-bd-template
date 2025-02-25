import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import cookie from '../../img/coockie.png'
import { IoClose } from 'react-icons/io5';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const togglePolicyModal = (e) => {
    e.preventDefault();
    setIsPolicyModalOpen(!isPolicyModalOpen);
  };

  const PolicyModal = () => (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-40 p-4 md:p-6">
    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative flex flex-col max-h-[95dvh]">
      {/* Header Section - Fixed */}
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold pr-8">Cookie Policy</h2>
      </div>
  
      {/* Content Section - Scrollable */}
      <div className="p-6 overflow-y-auto flex-grow">
        <div className="prose max-w-none">
          <p className="mb-4">
            Welcome! This Cookie Policy explains how we use cookies and similar technologies on our website to enhance your experience and improve our services.
          </p>
  
          <h3 className="text-xl font-semibold mb-2">What Are Cookies?</h3>
          <p className="mb-4">
            Cookies are small text files stored on your device when you visit a website. They help improve functionality, track usage, and personalize your experience.
          </p>
  
          <h3 className="text-xl font-semibold mb-2">Types of Cookies We Use</h3>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              <strong>Essential Cookies</strong>
              <p>Necessary for basic website functionality, such as navigation and access to secure areas.</p>
            </li>
            <li>
              <strong>Performance Cookies</strong>
              <p>Collect data on site usage to help us optimize performance.</p>
            </li>
            <li>
              <strong>Functional Cookies</strong>
              <p>Enhance user experience by remembering preferences and settings.</p>
            </li>
            <li>
              <strong>Analytics & Advertising Cookies</strong>
              <p>Help us track usage trends and deliver relevant advertisements.</p>
            </li>
          </ol>
  
          <h3 className="text-xl font-semibold mb-2">How We Use Cookies</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>To improve website performance and user experience.</li>
            <li>To analyze traffic and optimize our services.</li>
            <li>To remember user preferences and settings.</li>
          </ul>
  
          <h3 className="text-xl font-semibold mb-2">Managing Cookies</h3>
          <p className="mb-4">
            You can control or disable cookies via your browser settings. However, some features may not function properly without cookies.
          </p>
  
          <h3 className="text-xl font-semibold mb-2">Third-Party Cookies</h3>
          <p className="mb-4">
            We may use third-party services (e.g., analytics tools) that set their own cookies to analyze site traffic and improve marketing efforts.
          </p>
  
          <h3 className="text-xl font-semibold mb-2">Updates to This Policy</h3>
          <p className="mb-4">
            We may update this policy from time to time. Please review it periodically for any changes.
          </p>
  
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="mb-4">
            If you have any questions about our Cookie Policy, feel free to reach out:
            <br />
            Email: support@example.com
            <br />
            Website: www.example.com
          </p>
  
          <p className="italic">
            By continuing to use our website, you consent to our cookie policy.
          </p>
        </div>
      </div>
  
      {/* Footer Section - Fixed */}
      <div className="p-6 border-t bg-white">
        <div className="flex justify-end">
          <button
            onClick={() => setIsPolicyModalOpen(false)}
            className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  
  );

  const portalElement = document.getElementById('cookie-consent-portal');

  return (
    <>
      {visible && portalElement && ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-40 p-4">
          <div className="bg-white border overflow-hidden relative border-gray-300 shadow-lg p-6 max-w-xs w-full">
            <div className="absolute bottom-[-30px] left-[-30px]">
              <img src={cookie} alt="Cookie icon" className="h-28 w-auto z-10" />
            </div>
            
            <div className="flex justify-between items-start z-20 mb-4">
              <div className="text-left">
                <h3 className="text-2xl font-extrabold text-black">
                  We use <span className="bg-yellow-200">cookies</span>
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  We use <strong>cookies</strong> to make your experience on this website better.
                </p>
              </div>
              <button onClick={handleClose} className="p-1 rounded-full hover:bg-gray-100">
                <IoClose className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            <div className="flex justify-between z-20 items-end space-x-4">
              <button
                onClick={togglePolicyModal}
                className="border border-gray-400 text-xs z-20 text-gray-700 py-1 px-4 rounded-lg bg-gray-100 bg-opacity-70"
              >
                Cookie Policies
              </button>
              <button
                onClick={handleAccept}
                className="bg-black text-white z-10 py-1 px-4 rounded-lg hover:bg-gray-800"
              >
                Accept
              </button>
            </div>
          </div>
        </div>,
        portalElement
      )}
      
      {isPolicyModalOpen && portalElement && ReactDOM.createPortal(
        <PolicyModal />,
        portalElement
      )}
    </>
  );
};

export default CookieConsent;