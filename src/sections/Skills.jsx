import { motion } from 'framer-motion';

const skills = [
  {
    name: "Java",
    icon: "https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png", // Replace with your icon path
    description: "Java is a versatile, object-oriented programming language used for applications."
  },
  {
    name: "Python",
    icon: "https://miro.medium.com/v2/resize:fit:870/1*ZVi3vmxlPZpUngKXRS18oQ.jpeg",
    description: "Python is a simple, powerful language used in web, AI, and automation."
  },
  {
    name: "HTML",
    icon: "https://s.yimg.com/zb/imgv1/e0983ef9-d1f0-36ff-bcd1-3ab7d1a5d3b1/t_500x300",
    description: "HTML structures web content using tags like headings, paragraphs, and links."
  },
  {
    name: "CSS",
    icon: "https://i.pinimg.com/originals/f7/a5/4f/f7a54f971dc96c5d8b66b82c4ac5960d.png",
    description: "CSS styles HTML elements with colors, layouts, fonts, and spacing."
  },
  {
    name: "JavaScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png",
    description: "JavaScript adds interactivity and dynamic behavior to websites and web applications."
  },
  {
    name: "React.js",
    icon: "https://tse4.mm.bing.net/th/id/OIP.gMUAfrHInWGo6p_QSrEVAwHaD8?pid=Api&P=0&h=180",
    description: "React.js builds interactive user interfaces using components and virtual DOM updates."
  },
  {
    name: "Node.js",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/200px-Node.js_logo.svg.png", // Replace with your icon path
    description: "Node.js runs JavaScript on servers, enabling backend development with high performance."
  },
  {
    name: "SQL",
    icon: "https://static.tildacdn.com/tild6238-3035-4335-a333-306335373139/IMG_3349.jpg",
    description: "SQL manages and queries relational databases using structured commands and syntax."
  },
  {
    name: "SpringBoot",
    icon: "https://tse4.mm.bing.net/th/id/OIP.GPe6FXZEGUWbGm2vkdAMtAHaEO?pid=Api&P=0&h=180",
    description: "Spring Boot simplifies Java backend development with auto-configuration and embedded servers."
  },
  {
    name: "Cloud computing",
    icon: "https://tse1.mm.bing.net/th/id/OIP.Ikw8wcZ_rMDU5lS1BdhTkwHaDv?pid=Api&P=0&h=180",
    description: "Cloud computing delivers scalable computing services over the internet on demand."
  },
  {
    name: "GitHub",
    icon: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png",
    description: "GitHub hosts code repositories for version control, collaboration, and project management."
  },
  {
    name: "AWS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/300px-Amazon_Web_Services_Logo.svg.png",
    description: "AWS provides on-demand cloud services like computing, storage, and databases globally."
  },
  {
    name: "Docker",
    icon: "https://tse1.mm.bing.net/th/id/OIP.vz4a646El-ASTq4wsC09HAHaDL?pid=Api&P=0&h=180", // Replace with your icon path
    description: "Docker packages applications into containers for consistent and portable deployment."
  },
  {
    name: "Kubernetes",
    icon: "https://1000logos.net/wp-content/uploads/2022/07/Kubernetes-Logo.jpg",
    description: "Kubernetes automates deployment, scaling, and management of containerized applications."
  },
  {
    name: "Linux",
    icon: "https://tse1.mm.bing.net/th/id/OIP.o2o2WtGUskylC4ATGnLBowHaDt?pid=Api&P=0&h=180",
    description: "Linux is an open-source operating system used in servers, desktops, and devices."
  },
  {
    name: "Excel",
    icon: "https://tse2.mm.bing.net/th/id/OIP.keZtVVs5joIL-lj56kb42AHaEK?pid=Api&P=0&h=180",
    description: "Excel organizes, analyzes, and visualizes data using spreadsheets and formulas."
  },
  {
    name: "Tableau",
    icon: "https://tse3.mm.bing.net/th/id/OIP.w-qTcyA4TSToAE1FZlj5nwHaEK?pid=Api&P=0&h=180",
    description: "Tableau visualizes data interactively, enabling easy analysis and business insights."
  },
  {
    name: "Machine Learning",
    icon: "https://www.acte.in/wp-content/uploads/2022/01/Artificial-Intelligence-and-Machine-Learning-ACTE.png",
    description: "Machine Learning enables systems to learn from data and improve automatically."
  },
  {
    name: "Basic Cyber Security",
    icon: "https://tse1.mm.bing.net/th/id/OIP.5Li7ahKLddsDdk9DGck13AHaEh?pid=Api&P=0&h=180",
    description: "Cybersecurity protects systems, networks, and data from digital attacks and breaches."
  },
  {
    name: "Basic Computer Networking",
    icon: "https://i.ytimg.com/vi/bY5OfBrBg1M/maxresdefault.jpg",
    description: "Computer networks connect devices to share data, resources, and communication efficiently."
  }

];

const Skills = ({ id }) => {
  return (
    <section id={id} className="skills-section">
      <div className="container mx-auto px-4 sm:px-6">
         <div className="text-center mb-16">
      <h2 className="section-title">My Skills</h2>
      <p className="section-subtitle">
        Technologies and tools I work with to create amazing solutions
      </p>
    </div>
        
        <div className="skills-grid">
      {skills.map((skill) => (
        <div key={skill.name} className="skill-card">
          <div className="skill-icon-container">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
          </div>
          <h3 className="skill-name">{skill.name}</h3>
          <p className="skill-description">{skill.description}</p>
        </div>
      ))}
    </div>
  </div>
    </section>
  );
};

export default Skills;