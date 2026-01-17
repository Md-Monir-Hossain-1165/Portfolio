import React from 'react';
import { Mail, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import { profileData } from '../data';
import Magnetic from './Magnetic';

const ProfileCard = () => {
  return (
    <div className="lg:fixed lg:w-1/4 lg:h-screen p-6 flex flex-col justify-center">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-[#111] border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group"
      >



        {/* Profile Image Area - 3D Effect */}
        {/* Profile Image Area */}
        <div className="w-full aspect-square rounded-2xl bg-gray-800 mb-6 overflow-hidden relative">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Text Info */}
        <h1 className="text-3xl font-bold text-white mb-1">{profileData.name}</h1>
        <p className="text-gray-400 text-sm mb-6">{profileData.role}</p>

        <div className="flex flex-col gap-3 mb-8">
          <a href={`mailto:${profileData.email}`} className="text-gray-400 hover:text-green-400 text-sm flex items-center gap-2 transition-colors">
            <Mail size={16} /> {profileData.email}
          </a>
          <span className="text-gray-500 text-sm flex items-center gap-2">
            <MapPin size={16} /> {profileData.location}
          </span>
        </div>

        {/* Social Actions */}
        <div className="flex gap-3 justify-center">
          <SocialBtn icon={<Github size={18} />} link={profileData.socials.github} />
          <SocialBtn icon={<Linkedin size={18} />} link={profileData.socials.linkedin} />
          <SocialBtn icon={<MessageCircle size={18} />} link={profileData.socials.whatsapp} />
        </div>

        <button className="w-full mt-8 bg-white text-black font-bold py-3 rounded-xl hover:bg-green-400 transition-colors flex items-center justify-center gap-2">
          Contact Me
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <a
          href="/mD Monir hossain.pdf"
          download="MD_Monir_Hossain_CV.pdf"
          className="w-full mt-4 bg-gray-800 text-white font-bold py-3 rounded-xl hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
        >
          Download Resume
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
        </a>
      </motion.div>
    </div>
  );
};

const SocialBtn = ({ icon, link }) => (
  <a href={link} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
    {icon}
  </a>
);

export default ProfileCard;