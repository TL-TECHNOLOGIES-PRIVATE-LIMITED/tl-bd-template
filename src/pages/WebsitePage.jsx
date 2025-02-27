import React, { useState } from 'react';
import Navbar from '../components/website/Navbar';
import Footer from '../components/website/Footer';
import { Mail, Phone, MapPin, Clock, ArrowRight, Star, ChevronDown, ChevronUp } from 'lucide-react';

function WebsitePage() {
  
const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of web development services including responsive website design, custom web application development, e-commerce solutions, content management systems, SEO optimization, and digital marketing strategies tailored to your business needs."
    },
    {
      question: "How long does it take to complete a website?",
      answer: "The timeline for website completion varies depending on the complexity and scope of the project. A simple website might take 2-4 weeks, while more complex projects with custom functionality could take 2-3 months. We'll provide you with a detailed timeline during our initial consultation."
    },
    {
      question: "Do you offer website maintenance services?",
      answer: "Yes, we offer ongoing website maintenance packages to ensure your site remains secure, up-to-date, and performing optimally. Our maintenance services include regular updates, security monitoring, performance optimization, content updates, and technical support."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on the specific requirements, complexity, and scope of work. We provide detailed quotes after understanding your project needs. We also offer flexible payment options and can work with various budget ranges."
    },
    {
      question: "Can you help with existing websites that need updates?",
      answer: "Absolutely! We specialize in website redesigns and updates for existing sites. Whether you need a complete overhaul or specific improvements to functionality, design, or performance, our team can help bring your existing website up to current standards."
    },
    {
      question: "Do you provide hosting services?",
      answer: "Yes, we offer reliable hosting solutions with excellent uptime, security features, and performance optimization. We can also help you migrate your website to our hosting platform or set up your site on your preferred hosting provider."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-100">
        {/* Hero Section with Animation */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
                <h1 className="text-5xl font-bold leading-tight mb-6 animate-slideInLeft">Welcome to DemoSite</h1>
                <p className="text-xl mb-8 animate-slideInLeft" style={{animationDelay: '0.2s'}}>Your one-stop solution for beautiful, responsive web design and development.</p>
                <button className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 flex items-center animate-slideInLeft hover:scale-105 transform" style={{animationDelay: '0.4s'}}>
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              <div className="md:w-1/2 animate-slideInRight">
                <img
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
                  alt="Demo workspace"
                  className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section with Animation */}
        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 animate-fadeIn">About Us</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 mb-6 animate-scaleIn"></div>
              <p className="text-gray-600 max-w-3xl mx-auto animate-fadeIn" style={{animationDelay: '0.2s'}}>Learn more about our company and what makes us different</p>
            </div>
            
            <div className="md:flex md:items-center md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0 animate-slideInLeft">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="Our team" 
                  className="rounded-lg shadow-lg w-full transition-all duration-500 hover:shadow-xl transform hover:scale-105"
                />
              </div>
              <div className="md:w-1/2 animate-slideInRight">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
                <p className="text-gray-600 mb-4">
                  Founded in 2020, DemoSite has been at the forefront of web innovation, creating beautiful, 
                  functional websites for clients across various industries.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team of experienced designers and developers work together to deliver exceptional 
                  digital experiences that help our clients achieve their business goals.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow transition-all duration-300 hover:shadow-md hover:bg-indigo-50 transform hover:-translate-y-1">
                    <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
                    <p className="text-gray-600 text-sm">To create digital experiences that inspire and elevate brands.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow transition-all duration-300 hover:shadow-md hover:bg-indigo-50 transform hover:-translate-y-1">
                    <h4 className="font-bold text-gray-900 mb-2">Our Vision</h4>
                    <p className="text-gray-600 text-sm">To be the leading web development agency known for innovation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Animation */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 animate-fadeIn">Our Services</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 mb-6 animate-scaleIn"></div>
              <p className="text-gray-600 max-w-3xl mx-auto animate-fadeIn" style={{animationDelay: '0.2s'}}>Comprehensive web solutions tailored to your needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:transform hover:scale-105 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-indigo-200">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Web Design</h3>
                <p className="text-gray-600 mb-4">
                  Beautiful, responsive websites that look great on any device and provide an exceptional user experience.
                </p>
                <a href="#" className="text-indigo-600 font-medium flex items-center group">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:transform hover:scale-105 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-indigo-200">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
                <p className="text-gray-600 mb-4">
                  Custom web applications built with the latest technologies to meet your specific business requirements.
                </p>
                <a href="#" className="text-indigo-600 font-medium flex items-center group">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:transform hover:scale-105 animate-fadeInUp" style={{animationDelay: '0.5s'}}>
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-indigo-200">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Marketing</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive digital marketing strategies to increase your online presence and drive more traffic.
                </p>
                <a href="#" className="text-indigo-600 font-medium flex items-center group">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 animate-fadeIn">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 mb-6 animate-scaleIn"></div>
              <p className="text-gray-600 max-w-3xl mx-auto animate-fadeIn" style={{animationDelay: '0.2s'}}>Find answers to common questions about our services</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="mb-4 animate-fadeInUp"
                  style={{animationDelay: `${0.1 * index}s`}}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-full flex justify-between items-center p-5 rounded-lg text-left transition-all duration-300 ${
                      openFaq === index 
                        ? 'bg-indigo-600 text-white shadow-lg' 
                        : 'bg-white text-gray-900 shadow hover:shadow-md hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-semibold">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 flex-shrink-0" />
                    )}
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-5 bg-white border border-gray-100 rounded-b-lg shadow-inner">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section with Animation */}
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 animate-fadeIn">What Our Clients Say</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 mb-6 animate-scaleIn"></div>
              <p className="text-gray-600 max-w-3xl mx-auto animate-fadeIn" style={{animationDelay: '0.2s'}}>Don't just take our word for it - hear from some of our satisfied clients</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:transform hover:scale-105 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                <div className="flex text-yellow-400 mb-4">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "DemoSite transformed our online presence completely. Their team was professional, 
                  creative, and delivered exactly what we needed."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-indigo-300 transition-all duration-300 hover:border-indigo-500"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                    <p className="text-gray-600 text-sm">CEO, TechStart Inc.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:transform hover:scale-105 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                <div className="flex text-yellow-400 mb-4">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Working with DemoSite was a game-changer for our business. They understood our vision 
                  and executed it flawlessly. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-indigo-300 transition-all duration-300 hover:border-indigo-500"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Michael Chen</h4>
                    <p className="text-gray-600 text-sm">Marketing Director, Global Solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:transform hover:scale-105 animate-fadeInUp" style={{animationDelay: '0.5s'}}>
                <div className="flex text-yellow-400 mb-4">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The team at DemoSite exceeded our expectations in every way. They delivered a website 
                  that perfectly represents our brand and values."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-indigo-300 transition-all duration-300 hover:border-indigo-500"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Emily Rodriguez</h4>
                    <p className="text-gray-600 text-sm">Founder, Creative Designs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default WebsitePage;