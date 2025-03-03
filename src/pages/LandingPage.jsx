import React from 'react';
import bg from '../img/bg.jpg';
import Slider from '../components/slider/Slider';
import Navbar from '../components/navbar/Navbar';
import ContactForm from '../components/form/ContactForm';
import CookieConsent from '../components/form/cookieComponents';
import ChatBotModal from '../components/chatbot/ChatBotModel';

const LandingPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        fontFamily: 'sans-serif',
      }}
    >
      <div className="bg-stone-950 bg-opacity-10 flex-grow w-full flex relative overflow-y-auto">
        {/* Cookie Consent positioned absolutely */}
        <CookieConsent />

        {/* Main content container with better positioning */}
        <div className="w-full md:w-fit mx-auto py-4">
          <Navbar />
          <div className="text-white bg-white w-full h-fit flex flex-col lg:flex-row justify-center items-center p-2 gap-3 md:w-fit">
            <div className="md:w-[570px] w-full md:h-[600px] h-[420px] min-w-[300px] max-w-[570px] bg-black shadow-md shadow-black">
              <Slider />
            </div>
            <div className="md:w-[570px] bg-white w-full md:h-[600px] h-fit min-w-[300px] max-w-[570px] rounded-lg">
              <ContactForm />
            </div>
          </div>
          <p className="md:mt-4 py-2 text-center w-full bg-black md:bg-transparent md:text-md text-xs text-white font-bold">
            &#169; 2024 - <a href="https://www.tltechnologies.net/" target="_blank" rel="noopener noreferrer">TL TECHNOLOGIES</a>. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
      
      {/* ChatBotModal positioned at the bottom but within view */}
      <div className="absolute bottom-4 right-4 z-50">
        <ChatBotModal />
      </div>
    </div>
  );
};

export default LandingPage;