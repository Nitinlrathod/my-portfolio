import { motion } from 'framer-motion';


const certifications = [
  {
    id: 1,
    title: "Java Full Stack With Cloud",
    issuer: "GreatCoder Hyderabad",
    date: "June 2025",
    credentialId: "Offline Certificate",
    credentialUrl: "#",
    image: "/images/GreatCoderCertificate.jpeg", // Replace with your certificate image
    
  },
  {
    id: 2,
    title: "Web Development",
    issuer: "Pelta Tech",
    date: "May 2024",
    credentialId: "Offline Certificate",
    credentialUrl: "#",
    image: "/images/PeltaTechCertificate.jpeg",
   
  },
  {
    id: 3,
    title: "Deploying and Running Your Application on Server",
    issuer: "NBNSCOE",
    date: "March 2023",
    credentialId: "Offline Certificate",
    credentialUrl: "#",
    image: "/images/NBNSCOECertificate.jpeg",
   
  },
  {
    id: 4,
    title: "Artificial Intelligence Internship",
    issuer: "Maharajshree INdustrial Solutions",
    date: "November 2023",
    credentialId: "Offline Certificate",
    credentialUrl: "#",
    image: "/images/MISCertificate.jpeg",
   
  },
  {
    id: 5,
    title: "Artificial Intelligence",
    issuer: "TechSaksham",
    date: "August 2023",
    credentialId: "TSPLMS23_26333",
    credentialUrl: "#",
    image: "/images/TechSakshamAI.jpeg", // Replace with your certificate image
    
  },
  {
    id: 6,
    title: "Web Development for Biginners by LearnCode.academy",
    issuer: "Cursa",
    date: "April 2023",
    credentialId: "c355-2331507",
    credentialUrl: "#",
    image: "/images/CursaWebDevCertificate.jpeg",
   
  },
  {
    id: 7,
    title: "Data Base Management System (Elite)",
    issuer: "NPTEL",
    date: "March 2023",
    credentialId: "NPTEL23CS41S35620029",
    credentialUrl: "#",
    image: "/images/NPTELdbms.jpeg",
   
  },
  {
    id: 8,
    title: "Cloud Computing (Elite)",
    issuer: "NPTEL",
    date: "April 2024",
    credentialId: "NPTEL24CS17S365202812",
    credentialUrl: "#",
    image: "/images/NPTELcc.jpeg",
   
  },
  {
    id: 9,
    title: "Java Programming",
    issuer: "NBNSCOE",
    date: "August 2022",
    credentialId: "GxOd3vL9rD",
    credentialUrl: "#",
    image: "/images/NBNSCOEjava.jpeg", // Replace with your certificate image
    
  },
  {
    id: 10,
    title: "Annual Project Exhibition cum Competition",
    issuer: "NBNSCOE",
    date: "June 2023",
    credentialId: "Offline Certificate",
    credentialUrl: "#",
    image: "/images/NBNSCOEprojectCompetition.jpeg",
   
  },
  {
    id: 11,
    title: "Java",
    issuer: "sololearn",
    date: "September 2021",
    credentialId: "23385786-1068",
    credentialUrl: "#",
    image: "/images/sololearnJava.jpeg",
   
  },
  {
    id: 12,
    title: "JavaScript",
    issuer: "sololearn",
    date: "September 2021",
    credentialId: "23385786-1024",
    credentialUrl: "#",
    image: "/images/sololearnJavaScript.jpeg",
   
  },
  {
    id: 13,
    title: "(Beta) Data Science Essentials with Python",
    issuer: "CISCO Networking Academy",
    date: "July 2025",
    credentialId: "NA",
    credentialUrl: "#",
    image: "/images/CISCOdswithPython.png", // Replace with your certificate image
    
  },
  {
    id: 14,
    title: "Data Analytics Essentials",
    issuer: "CISCO Networking Academy",
    date: "July 2025",
    credentialId: "NA",
    credentialUrl: "#",
    image: "/images/CISCOdataAnalytics.png",
   
  },
  {
    id: 15,
    title: "Introduction to CyberSecurity",
    issuer: "CISCO Networking Academy",
    date: "July 2025",
    credentialId: "NA",
    credentialUrl: "#",
    image: "/images/CISCOcs.png",
   
  },
  {
    id: 16,
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage",
    date: "July 2025",
    credentialId: "9bXfe5YyeKxKY4Jrj",
    credentialUrl: "#",
    image: "/images/ForageDeloitte.png",
   
  },
  {
    id: 17,
    title: "Skyscanner Software	Engineering	Job	Simulation",
    issuer: "Forage",
    date: "July 2025",
    credentialId: "9bXfe5YyeKxKY4Jrj",
    credentialUrl: "#",
    image: "/images/ForageSkyscanner.png",
   
  },
  {
    id: 18,
    title: "accenture Software Engineering Job Simulation",
    issuer: "Forage",
    date: "July 2025",
    credentialId: "9bXfe5YyeKxKY4Jrj",
    credentialUrl: "#",
    image: "/images/Forageaccenture.png",
   
  },
  
  // Add more certifications as needed
];

const Certifications = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          My professional certifications that validate my expertise in various technologies.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-64 object-contain bg-gray-100 dark:bg-gray-700"
                />
                <div className="absolute top-4 right-4 bg-primary-color text-white px-3 py-1 rounded-full text-sm font-medium">
                  {cert.issuer}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Issued: {cert.date}</p>
                    {cert.credentialId && (
                      <p className="text-gray-500 dark:text-gray-400 text-sm">ID: {cert.credentialId}</p>
                    )}
                  </div>
                  
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;