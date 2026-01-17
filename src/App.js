import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import ProfileCard from './components/ProfileCard';
import RightNav from './components/RightNav';
import SnowEffect from './components/SnowEffect';
import { Hero, Skills, Projects, Education, Experience, Services } from './components/Sections';

function App() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div className="bg-black min-h-screen text-gray-300 font-sans selection:bg-green-500 selection:text-black">

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-green-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Background Gradients & Patterns */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Glowing Orbs with Parallax */}
        <motion.div style={{ y: backgroundY }} className="w-full h-full absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-900/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s' }}></div>
        </motion.div>
      </div>

      {/* Snow Effect */}
      <SnowEffect />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row">

          {/* Left Column - Fixed Profile */}
          <div className="lg:w-1/4">
            <ProfileCard />
          </div>

          {/* Right Column - Scrollable Content */}
          <div className="lg:w-3/4 lg:ml-auto px-6 lg:px-20 pb-20">
            <RightNav />

            {/* Main Content Sections */}
            <main className="space-y-12">
              <Hero />
              <Services />
              <Education />
              <Experience />
              <Skills />
              <Projects />

              {/* Contact Form Section based on Image 5 */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                id="contact"
                className="py-20 border-t border-gray-800"
              >
                <h2 className="text-4xl font-bold text-white mb-8">Contact For Work</h2>
                <form className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-500">Your Name</label>
                    <input type="text" className="bg-transparent border-b border-gray-700 py-3 focus:border-green-500 focus:outline-none text-white transition-colors" placeholder="Enter your name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-500">Your Email</label>
                    <input type="email" className="bg-transparent border-b border-gray-700 py-3 focus:border-green-500 focus:outline-none text-white transition-colors" placeholder="Enter the email" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-500">Message</label>
                    <textarea className="bg-transparent border-b border-gray-700 py-3 focus:border-green-500 focus:outline-none text-white transition-colors min-h-[100px]" placeholder="Write your message..."></textarea>
                  </div>
                  <button className="bg-green-600 text-black font-bold px-8 py-4 rounded-full hover:bg-green-500 transition-colors mt-4">
                    Send Message
                  </button>
                </form>
              </motion.section>

              {/* Footer */}
              <footer className="text-center text-sm text-gray-600 pt-12">
                <p>© 2026 MD Monir Hossain. All Rights Reserved.</p>
              </footer>

            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;