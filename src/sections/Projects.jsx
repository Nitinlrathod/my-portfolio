import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: "AI-Powered-chatbot",
    description: "I have developed an AI-powered chatbot using Java that interacts intelligently with users through natural language processing, decision-making logic, and backend integration for dynamic responses.",
   
    image: "https://tse1.mm.bing.net/th/id/OIP.qEyI5U7zrDDey9boLhmBjwHaD4?pid=Api&P=0&h=180", // Replace with your image
    githubUrl: "https://github.com/Nitinlrathod/AI-Powered-Chatbot",
    
  },
  {
    id: 2,
    title: "Hospital-Management-System",
    description: "I have built a Hospital Management System in Java to manage patient records, doctor scheduling, billing, and appointments efficiently through a user-friendly interface and database integration.",
   
    image: "https://tse4.mm.bing.net/th/id/OIP.HZT1SSHO9AK2jOH8V0hFwAHaD4?pid=Api&P=0&h=180",
    githubUrl: "https://github.com/Nitinlrathod/Hospital-Management-System",
    
  },
  {
    id: 3,
    title: "Hibernate-Project",
    description: "I have developed a Hibernate project in Java that simplifies database operations using ORM, enabling seamless CRUD functionality and mapping Java objects to relational database tables.",
    
    image: "https://miro.medium.com/v2/resize:fit:1000/1*2brROSGKPFrzyuFUd8uXxQ.jpeg", // Replace with your image
    githubUrl: "https://github.com/Nitinlrathod/Hibernate-Project",
    
  },
  {
    id: 4,
    title: "JDBC-Project",
    description: "I have created a JDBC project in Java to connect and interact with databases, performing CRUD operations directly using SQL queries and managing data efficiently.",
   
    image: "https://miro.medium.com/v2/resize:fit:1358/1*vSkjUc3d4YLKQWsPTND5-A.jpeg",
    githubUrl: "https://github.com/Nitinlrathod/JDBC-Practice",
    
  },
  {
    id: 5,
    title: "Online-Product-store",
    description: "I have built an Online Product Store using Java, allowing users to browse, add to cart, and purchase products with secure transactions and database-backed inventory management.",
    
    image: "https://tse4.mm.bing.net/th/id/OIP.lVchgCV1rwpL9CpF8WKtxgHaEK?pid=Api&P=0&h=180", // Replace with your image
    githubUrl: "https://github.com/Nitinlrathod/OnlineProductStore",
    
  },
  {
    id: 6,
    title: "Student-Alumni-Portal",
    description: "I have developed a Student Alumni Portal in Java to connect alumni and students, share updates, manage events, and maintain academic and professional networking through a secure platform.                   Note:This was a college project, so no GitHub link is available.",
    
    image: "https://tse4.mm.bing.net/th/id/OIP.H7B1jTk8poecoOAar-sR8QHaFu?pid=Api&P=0&h=180",
    githubUrl: "https://github.com/Nitinlrathod",
    
  },
  
  // Add more projects as needed
];

const Projects = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Here are some of my featured projects. Each project represents a unique challenge and solution.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;