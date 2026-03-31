import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id='contact' className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-4">
            Contact <span className="h-0.5 w-16 bg-blue-600 inline-block"></span>
          </h2>
          <p className="text-gray-500 mt-2">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-2 bg-blue-700 rounded-lg p-8 text-white shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis.
            </p>

            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/50 p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Our Location</h4>
                  <p className="text-blue-100">Shafipur Bazar</p>
                  <p className="text-blue-100">Gazipur, Dhaka</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/50 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone Number</h4>
                  <p className="text-blue-100">01404260731</p>
                  {/* <p className="text-blue-100">01635281361</p> */}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/50 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Address</h4>
                  {/* <p className="text-blue-100">mdislamshakib218@gmail.com</p> */}
                  <p className="text-blue-100">saifur.devweb@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Get In Touch</h3>
            <p className="text-gray-500 mb-8">
              Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <textarea 
                placeholder="Message" 
                rows="6"
                className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              ></textarea>
              
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-10 rounded-full transition-colors duration-300 shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;