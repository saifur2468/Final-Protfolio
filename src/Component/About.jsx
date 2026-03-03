import React from 'react';
import { Code2, Laptop, Database } from 'lucide-react';
 import abimg from '../assets/441345254_477581964606487_2823494170499752054_n.jpg'
const AboutSection = () => {
  const services = [
    {
      title: "Frontend Dev",
      description: "Sed porttitor lectus nibh. Cras ultricies ligula sed magna.",
      icon: <Code2 className="w-6 h-6 text-white" />,
    },
    {
      title: "Responsive Design",
      description: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.",
      icon: <Laptop className="w-6 h-6 text-white" />,
    },
    {
      title: "MERN Stack Development",
      description: "Vestibulum ac diam sit amet quam vehicula elementum.",
      icon: <Database className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section id='about' className="py-16 px-6 max-w-7xl mx-auto font-sans">
      {/* Top Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#003366] flex items-center gap-3">
          About <span className="h-0.5 w-16 bg-blue-500"></span>
        </h2>
        <p className="text-gray-400 text-sm mt-1 italic">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Side: Profile Photo & Signature */}
        <div className="w-full lg:w-1/3 flex flex-col items-center">
          <div className="relative p-2 rounded-full border-4 border-blue-500 shadow-xl shadow-blue-100 mb-6">
            <img 
              src={abimg}
              alt="Profile" 
              className="w-64 h-64 rounded-full object-cover"
            />
          </div>
          <div className="text-center">
            {/* <h3 className="text-4xl font-serif text-slate-700 mb-1">Eliot Johnson</h3> */}
            <p className="text-gray-400 italic text-sm max-w-[200px]">
              Building meaningful digital experiences through creative code.
            </p>
          </div>
        </div>

        {/* Right Side: Content & Cards */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl font-bold text-[#003366] mb-4">
            Hi, I'm Saifur Rahman - a Creative Developer
          </h1>
          <p className="text-gray-500 leading-relaxed mb-10">
            "Passionate Frontend Developer dedicated to crafting seamless digital experiences. I specialize in building responsive, user-friendly interfaces with React and Tailwind CSS, turning creative ideas into functional, clean-coded reality."
          </p>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-[#f0f7ff] p-6 rounded-xl border border-blue-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-600 p-4 rounded-full mb-4 shadow-lg shadow-blue-200">
                  {service.icon}
                </div>
                <h4 className="text-[#003366] font-bold text-lg mb-2">{service.title}</h4>
                <p className="text-gray-500 text-sm leading-snug">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;