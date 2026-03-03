import React from 'react';
import Navbar from '../src/Component/Navbar'
import HeroSection from './Component/Hero';
import AboutSection from './Component/About';
import SkillsSection from './Component/MySkill';
import EducationSection from './Component/Education';
import ProjectSection from './Component/MYProject';
import Footer from './Component/Footer';
import ContactSection from './Component/Contact';
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ProjectSection></ProjectSection> 
       <EducationSection></EducationSection> 
       <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
};

export default App;