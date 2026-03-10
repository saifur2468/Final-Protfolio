import React from 'react';
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import chobi from '../assets/pic.jpg'
import { IoMdCloudDownload } from "react-icons/io";
import cvimg from '../assets/Saifur Final Cv.pdf'
import { resume } from 'react-dom/server';
const HeroSection = () => {
    return (
        <section id='home' className="relative w-full min-h-screen flex items-center overflow-hidden bg-white px-6 py-12 md:px-12 lg:px-24">
            {/* Background Organic Shapes - Adjusted for better visibility */}
            <div className="absolute top-[-5%] right-[-5%] w-72 h-72 md:w-[500px] md:h-[500px] bg-orange-50 rounded-full blur-3xl opacity-70 -z-10 animate-pulse" />
            <div className="absolute bottom-[5%] left-[-5%] w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-80 -z-10" />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    className="space-y-6 z-10 text-center lg:text-left"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                            <Typewriter
                                words={["Fortend Developer"]}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />

                        </h1>


                        {/* Dynamic Subtitle */}
                        <div className="text-xl md:text-2xl text-[#e87d3e] font-medium h-8">
                            <Typewriter
                                words={["React & Next.js", "MongoDB & Node.Js"]}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </div>
                    </div>

                    <p className="text-gray-500 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Crafting efficient, scalable, and beautiful web applications with the latest technologies and best practices.


                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <button className="px-8 py-3 bg-[#e87d3e] hover:bg-[#d16a2d] text-white font-semibold rounded-full transition-all shadow-md active:scale-95">
                            View My Work
                        </button>
                        <a
                            href={cvimg}
                            download="MD_Saifur_Rahman_Resume"
                            className="px-8 py-3 border-2 border-gray-100 flex items-center gap-2 text-gray-700 hover:bg-yellow-400 font-semibold rounded-full transition-all active:scale-95"
                        >
                            <IoMdCloudDownload />
                            View My Resume
                        </a>
                    </div>

                    {/* Stats Section - Restored from original design */}
                    <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-100 max-w-md mx-auto lg:mx-0">
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900">15+</h3>
                            <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Projects Built</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900">300+</h3>
                            <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Git Commits</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900">10+</h3>
                            <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Tech Skills</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Image Composition */}
                <motion.div
                    className="relative flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="relative z-10 w-full max-w-[500px]">

                        <motion.div
                            className="absolute -inset-10 z-0 opacity-30"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-orange-400">
                                <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C86.9,14.5,81.2,29,72.4,41.4C63.6,53.8,51.8,64,38.3,71.5C24.8,79.1,9.6,83.9,-5.2,92.9C-20,101.9,-34.4,115.1,-46.8,114.3C-59.2,113.5,-69.6,98.7,-77,84.1C-84.4,69.5,-88.8,55.1,-91.3,40.6C-93.8,26.1,-94.4,11.5,-90.6,-1.8C-86.8,-15.1,-78.6,-27,-69.3,-36.8C-60,-46.6,-49.6,-54.3,-38.5,-63.4C-27.4,-72.5,-15.6,-83.1,0.5,-83.9C16.6,-84.7,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                            </svg>
                        </motion.div>

                        {/* Replace with your local/hosted image path */}
                        <img
                            src={chobi}
                            alt="MD Saifur Rahman"
                            className="relative z-20 rounded-3xl w-[450px] h-[400px] object-cover shadow-2xl"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;