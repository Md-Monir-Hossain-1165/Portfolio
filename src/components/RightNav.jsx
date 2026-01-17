import React, { useState, useEffect } from 'react';
import { Home, Layers, Briefcase, Mail, GraduationCap, Zap } from 'lucide-react';
import Magnetic from './Magnetic';

const navItems = [
  { icon: <Home size={20} />, id: "home" },
  { icon: <GraduationCap size={20} />, id: "education" },
  { icon: <Briefcase size={20} />, id: "experience" },
  { icon: <Zap size={20} />, id: "services" },
  { icon: <Layers size={20} />, id: "skills" },
  { icon: <Briefcase size={20} />, id: "projects" },
  { icon: <Mail size={20} />, id: "contact" },
];

const RightNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    // ... existing scroll logic ...
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      <div className="bg-[#111] border border-gray-800 p-2 rounded-full flex flex-col gap-2 shadow-2xl backdrop-blur-sm bg-opacity-80">
        {navItems.map((item, index) => (
          <Magnetic key={index}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeSection === item.id
                ? 'bg-green-500 text-black scale-110'
                : 'text-gray-500 hover:text-white hover:bg-gray-800'
                }`}
            >
              {item.icon}
            </button>
          </Magnetic>
        ))}
      </div>
    </div>
  );
};

export default RightNav;