import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Clock, ArrowUpRight, BookOpen } from 'lucide-react';

const skills = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 'Frontend',  },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 'Frontend', },
  { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', level: 'Frontend',  },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 'Frontend'  },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Frontend',  },
   { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', level: 'Frontend', },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 'Backend',  },
   { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 'Backend', },

    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 'Backend', },
      { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg', level: 'Backend' },

    { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', level: 'Frontend' },

    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 'Version Control' }
];

const SkillsSection = () => {
  return (
    <main id='skills' className="bg-[#0a0a0a] min-h-screen py-16 px-4 md:px-10">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl text-center md:text-6xl font-bold text-white mb-4 tracking-tight"
        >
          My <span className="text-gray-500">Skills</span>
        </motion.h2>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
        
        {/* Newsletter / Call to Action Style Card (Top Left in Image) */}
        {/* <div className="relative aspect-square border-r border-b border-white/10 p-8 flex flex-col justify-between group cursor-pointer hover:bg-white/[0.02] transition-colors">
          <div className="flex justify-end">
            <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" size={28} />
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-400 leading-tight">
              JOIN OUR <br />
              <span className="text-white">WEEKLY NEWSLETTER</span>
            </h3>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs font-bold tracking-widest">
            <BookOpen size={14} />
            YOUR.BEEHIIV.COM
          </div>
        </div> */}

        {/* Map Skills into the Grid */}
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square border-r border-b border-white/10 p-8 flex flex-col justify-between group cursor-pointer hover:bg-white/[0.02] transition-colors"
          >
            {/* Top Bar: Time and Eye Icon */}
            {/* <div className="flex justify-between items-center text-gray-500 text-[10px] font-bold tracking-widest uppercase">
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                {skill.time}
              </div>
              <Eye size={16} className="group-hover:text-white transition-colors" />
            </div> */}

            {/* Middle: Skill Name */}
            <div className="flex flex-col gap-4">
               <h3 className="text-3xl md:text-4xl font-medium text-white leading-tight max-w-[80%]">
                {skill.name}
              </h3>
            </div>

            {/* Bottom: Skill Icon and Level */}
            <div className="flex items-center justify-between">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
              <span className="text-[10px] text-gray-500 font-bold border border-white/10 px-2 py-1 rounded">
                {skill.level}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default SkillsSection;