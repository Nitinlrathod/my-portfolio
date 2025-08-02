import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

const About = ({ id }) => {
  const stats = [
    { icon: <FaUser size={24} />, value: "6+", label: "Months Experience" },
    { icon: <FaBriefcase size={24} />, value: "5+", label: "Projects Completed" },
    { icon: <FaGraduationCap size={24} />, value: "10+", label: "Certifications" },
    { icon: <FaAward size={24} />, value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id={id} className="py-20-about">
      <div className="about-container-about">
        <div className="about-content-about">
          {/* Left Side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="profile-picture-container"
          >
            <div className="relative">
              <div className="profile-image-wrapper">
                <img
                  src="/images/Photograph.png" // Replace with your profile image
                  alt="Nitin Lobha Rathod"
                  className="profile-image"
                />
              </div>
              <div className="experience-badge">
                <h3 className="text-white text-2xl font-bold">Fresher</h3>
                <p className="text-white/80"></p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Name and Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-content-right"
          >
            <h1 className="about-name">
              Nitin Lobha Rathod
            </h1>
            
            {/* Education Section */}
            <div className="education-section">
              <h3 className="education-header">
                <FaGraduationCap className="education-icon" />
                Education
              </h3>
              
              <div className="education-card">
                <h4 className="education-degree">BTech Computer Science and Engineering (Hons. AIML)</h4>
                <h5 className="education-degree text-xl font-bold mb-1">N B Navale Sinhgad College of Engineering Solapur</h5>
                <p className="education-duration text-gray-600 dark:text-gray-300 mb-2">Aug 2020 to June 2024</p>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">CGPA: </span>
                  <span className="cgpa-badge">
                    9.5/10
                  </span>
                </div>
              </div>
            </div>

            {/* About Me Text */}
            <div className="about-container">
              <h3 className="about-heading">About Me</h3>
              <p className="about-text">
                I am a Computer Science Engineering graduate with a strong passion for technology and problem-solving. I have completed a Java Full Stack Development training, where I gained hands-on experience in Java, Spring Boot, Hibernate, SQL, HTML, CSS, JavaScript, and React. I'm also exploring areas like machine learning and system/network administration to broaden my skill set.
              </p>
              <p className="about-text">
                My journey in technology began with a curiosity about how machines can learn,
                and has evolved into building intelligent systems that solve real-world problems.
                I'm particularly interested in the intersection of AI and web technologies.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="stat-card"
                >
                  <div className="stat-icon-container">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="stat-value">{stat.value}</h4>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;