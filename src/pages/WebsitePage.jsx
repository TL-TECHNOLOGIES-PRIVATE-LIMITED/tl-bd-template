import React from 'react';
import Navbar from '../components/website/Navbar';
import Footer from '../components/website/Footer';

function  WebsitePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to DemoSite</h1>
            <p className="text-gray-600 mb-4">
              This is a beautiful demo website showcasing a responsive navbar and footer.
              The content area is flexible and can be customized based on your needs.
            </p>
            <img
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
              alt="Demo workspace"
              className="w-full rounded-lg shadow-md mb-6"
            />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default WebsitePage;