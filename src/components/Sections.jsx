import React, { useState } from 'react';
import { skills, projects, profileData, services } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Magnetic from './Magnetic';

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// --- Hero Section ---
export const Hero = () => (
  <section id="home" className="min-h-[80vh] flex flex-col justify-center py-20">
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="text-green-500 mb-4 text-lg tracking-wider"
    >
      Introduction
    </motion.span>
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8"
    >
      <motion.span variants={item}>Building</motion.span> <br />
      <motion.span
        variants={item}
        className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.blue.500),theme(colors.green.400))] bg-[length:200%_auto] animate-gradient"
      >
        Digital Experiences.
      </motion.span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="text-gray-400 text-xl max-w-xl leading-relaxed"
    >
      {profileData.bio} I specialize in <span className="text-white">Frontend, Backend,</span> and <span className="text-white">API Integration</span>.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="flex gap-12 mt-12 border-t border-gray-800 pt-8"
    >
      <div>
        <h3 className="text-green-500 text-4xl font-bold">3.92</h3>
        <p className="text-gray-500 text-sm mt-1">CGPA (Out of 4)</p>
      </div>
      <div>
        <h3 className="text-green-500 text-4xl font-bold">3+</h3>
        <p className="text-gray-500 text-sm mt-1">Major Projects</p>
      </div>
    </motion.div>
  </section>
);

// --- Education Section ---
export const Education = () => (
  <section id="education" className="py-20">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-white mb-12"
    >
      Education
    </motion.h2>
    <div className="space-y-8">
      {require('../data').education.map((edu, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          key={index}
          className="relative pl-8 border-l-2 border-gray-800 hover:border-green-500 transition-colors duration-300"
        >
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500" />
          <span className="text-sm text-green-500 font-mono mb-2 block">{edu.year}</span>
          <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
          <p className="text-gray-400 mb-4">{edu.institution}</p>
          <p className="text-gray-500 text-sm">{edu.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// --- Experience Section ---
export const Experience = () => (
  <section id="experience" className="py-20">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-white mb-12"
    >
      Experience
    </motion.h2>
    <div className="space-y-8">
      {require('../data').experience.map((exp, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0px 10px 30px -10px rgba(74, 222, 128, 0.1)" }}
          key={index}
          className="p-6 border border-gray-800 rounded-3xl bg-gray-900/50 hover:border-green-500/50 transition-all duration-300"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <p className="text-green-500">{exp.company}</p>
            </div>
            <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">{exp.year}</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// --- Skills/Services Section ---
export const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-12"
      >
        Technical Skills
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Tabs */}
        <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:min-w-[250px] pb-4 md:pb-0">
          {skills.map((skill, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-left px-6 py-4 rounded-2xl transition-all duration-300 flex items-center gap-4 border ${activeTab === index
                ? 'bg-green-500 text-black border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]'
                : 'bg-gray-900/50 text-gray-400 border-gray-800 hover:bg-gray-800 hover:text-white'
                }`}
            >
              <span className={`p-2 rounded-lg ${activeTab === index ? 'bg-black/20' : 'bg-gray-800'}`}>
                {React.cloneElement(skill.icon, { size: 20 })}
              </span>
              <span className="font-bold whitespace-nowrap">{skill.category}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-gray-900/30 rounded-3xl p-8 border border-gray-800 relative overflow-hidden min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-500">
                  {skills[activeTab].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{skills[activeTab].category}</h3>
                  <p className="text-gray-400 text-sm">{skills[activeTab].description}</p>
                </div>
              </div>

              <div className="h-px bg-gray-800 w-full mb-8" />

              <div className="flex flex-wrap gap-3">
                {skills[activeTab].items.split(',').map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-500 hover:bg-green-500/10 transition-colors cursor-default"
                  >
                    {item.trim()}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// --- Services Section ---
export const Services = () => (
  <section id="services" className="py-20">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-white mb-12"
    >
      Services
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5, borderColor: "rgba(74, 222, 128, 0.5)" }}
          viewport={{ once: true }}
          key={index}
          className="p-6 border border-gray-800 rounded-3xl bg-gray-900/30 hover:bg-gray-900 transition-all duration-300"
        >
          <div className="text-green-500 mb-4 p-3 bg-green-500/10 rounded-xl w-fit">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-gray-400 text-sm">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// --- Projects Section ---
export const Projects = () => (
  <section id="projects" className="py-20">
    <div className="flex items-center justify-between mb-12">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white"
      >
        Selected Work
      </motion.h2>
      <span className="text-green-500 text-sm">See All Projects</span>
    </div>

    <div className="grid gap-8">
      {projects.map((project, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, zIndex: 10 }}
          transition={{ duration: 0.3 }}
          key={index}
          className="group relative rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 shadow-lg hover:shadow-green-900/20"
        >
          <div className="aspect-video bg-gray-800 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
            {/* Project Image */}
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/90 to-transparent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">{project.title}</h3>
                {project.description && <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>}
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-black bg-white px-2 py-1 rounded-md font-bold">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Magnetic>
                    <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 rounded-full hover:bg-green-500 hover:text-black transition-colors text-white flex items-center gap-2 font-bold text-sm">
                      <Github size={16} /> Code
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 rounded-full hover:bg-green-500 hover:text-black transition-colors text-white flex items-center gap-2 font-bold text-sm">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);