import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
const projects = [
  {
    title: "Gaming Rating Website",
    image: "https://i.postimg.cc/x811MNfL/Screenshot-2026-03-02-225059.png",
    description: "A full-stack MERN app for Game Rating",
    liveLink: "https://gaming-rating.web.app/",
  },
  {
    title: "Simple E-commerce",
    image: "https://i.postimg.cc/BZm6sppQ/Screenshot-2026-03-02-225147.png",
    description: "A high-performance, full-stack e-commerce platform.",
    liveLink: "https://melodic-treacle-f5c068.netlify.app/",
  },
  {
    title: "Volunteer-Management",
    image: "https://i.postimg.cc/jdGJ0vqn/Screenshot-2026-03-02-230510.png",
    description: "Connect passionate volunteers with meaningful causes.",
    liveLink: "https://volunter-managment-ae225.web.app",
  },
  {
    title: "English Janala",
    image:
      "https://i.postimg.cc/XYhD8dnW/Screenshot-2026-03-03-174021.png",
    description: "Voice Word Sound",
    liveLink: "https://loquacious-cobbler-646baf.netlify.app/",
  },
];

const ProjectSection = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = btnRef.current.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 200, fill: "forwards" }
      );
    };

    const button = btnRef.current;

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="project" className="py-20 bg-[#f1f5f9] min-h-screen">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold text-center text-slate-900 mb-2"
          >
            All Projects
          </motion.h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[300px] md:h-[350px] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>

              <div className="absolute top-6 right-6 p-2 rounded-full border border-white/30 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <FiArrowUpRight className="text-xl text-white group-hover:text-black" />
              </div>

              <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                <motion.h3 className="text-3xl font-bold mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                  {project.title}
                </motion.h3>
                <p className="text-gray-200 text-sm max-w-sm line-clamp-2 opacity-90">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Spotlight Button */}
        <div className="flex justify-center mt-16">
          <motion.button
            whileTap={{ scale: 0.985 }}
            ref={btnRef}
            className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white"
          >
            <span className="pointer-events-none flex items-center  gap-3 justify-center relative z-10 mix-blend-difference">
              See All Project <FaArrowRight />
            </span>

            <span
              ref={spanRef}
              className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;