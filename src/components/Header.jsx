import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {  FaBars, FaTimes } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = ({ activeSection }) => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
     
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="Header-Headerjsx">
      <div className="Headerjsx-div-1">
        <div className="Headerjsx-div-1-1">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            // className="text-2xl font-bold text-gray-900 dark:text-white"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            
          </motion.a>

          {/* Desktop Navigation */}
          <div className="desktop-navigation">
  {/* Navigation Links */}
  <nav>
    <ul>
      {navItems.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => scrollToSection(item.id)}
            className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
              activeSection === item.id
                ? 'text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-gray-800'
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
            }`}
          >
            
            {item.label}
            {activeSection === item.id && (
              <motion.span
                layoutId="activeSection"
                className="absolute bottom-0 left-1/2 h-0.5 bg-primary-600 dark:bg-primary-400"
                style={{ width: '60%', x: '-30%' }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
              
            )}
            
          </button>
          
        </li>
      ))}
      
    </ul>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="social-links"
    >
      <a href="https://github.com/Nitinlrathod" className="social-link-item">
        <FaGithub size={24} />
        <span>GitHub</span>
      </a>
      <a href="https://www.linkedin.com/in/nitin-rathod-6121a4257" className="social-link-item">
        <FaLinkedin size={24} />
        <span>LinkedIn</span>
      </a>
    
      <div className="email-below-social">
        <a href="mailto:nitinlrathod113@gmail.com" className="flex items-center gap-2">
          
          nitinlrathod113@gmail.com
        </a>
      </div>
    </motion.div>
    <span className="Headerjsx-auther">Nitin Lobha Rathod</span> 
    
  </nav>

  
</div>

          {/* Mobile Menu Button */}
          <div className="Headerjsx-mobilemenubutton">
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              
            >
              {mobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
           
          >
            <nav>
              <ul className="Headerjsx-mobilemenu">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;