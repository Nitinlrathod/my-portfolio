// src/sections/Home.jsx
import { motion } from 'framer-motion';

import { HiDocumentText } from 'react-icons/hi';

const Home = ({ id }) => {
  return (
    <section id={id} className="relative overflow-hidden">
      <div className="intro-container md:w-1/2 mb-12 md:mb-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="intro-container md:w-1/2 mb-12 md:mb-0"
        >
          <h1 className="intro-name">
            Hi, I'm <span className="intro-name-gradient">NITIN LOBHA RATHOD</span>
          </h1>
          <h2 className="intro-title">
            Computer Science Engineering graduate
          </h2>
          <p className="intro-description">
            I’m a tech enthusiast with a builder’s mindset. I hold a degree in Computer Science Engineering and recently completed an intensive Java Full Stack Development program, mastering everything from backend logic with Spring Boot to creating sleek user interfaces with React.

But I don’t just code—I create. Whether it’s crafting dynamic web apps, exploring the world of AI/ML, or diving into networks and system security, I thrive on turning complexity into clarity.

For me, technology isn’t just a career—it’s a canvas. I’m driven to solve real problems, collaborate with passionate teams, and keep growing with every line of code.
          </p>
          
          <div className="intro-buttons">
            <a
              href="#contact"
              className="intro-btn"
            >
              Contact Me
            </a>
            <a
              href="/documents/NitinRathodCV.pdf"
              download
              className="intro-btn intro-btn-outline"
            >
              <HiDocumentText className="intro-btn-icon" />
              Download CV
            </a>
          </div>
        </motion.div>

        

      
      
      </div>
    </section>
  );
};

export default Home;