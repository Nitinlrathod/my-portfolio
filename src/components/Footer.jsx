import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub size={24} />, url: "https://github.com/Nitinlrathod" },
    { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/nitin-rathod-6121a4257" },
    
    { icon: <FaInstagram size={24} />, url: "https://www.instagram.com/konnn.nitin?igsh=MTlkaDJkbWplaDR6ag==" },
    { icon: <FaFacebook size={24} />, url: "https://www.facebook.com/profile.php?id=100032143008170&mibextid=ZbWKwL" },
    { icon: <FaYoutube size={24} />, url: "https://youtube.com/@nityaarathod?si=F6wtaY7VRueUNen7" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 hover:text-primary-color transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#certifications" className="text-gray-300 hover:text-white transition-colors">Certifications</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>

          <div className="w-full h-px bg-gray-700 mb-8"></div>

          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Nitin Rathod. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;