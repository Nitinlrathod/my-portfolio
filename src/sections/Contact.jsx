
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = ({ id }) => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Location",
      value: "Solapur, Maharashtra, India.",
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      value: "nitinlrathod113@gmail.com",
      link: "mailto:nitinlrathod113@gmail.com",
    },
    {
      icon: <FaPhone size={24} />,
      title: "Phone",
      value: "+91 9607890157",
      link: "tel:+919607890157",
    },
    {
      icon: <FaClock size={24} />,
      title: "Working Hours",
      value: "Mon-Fri: 9AM - 5PM",
    },
  ];

  return (
    <section id={id} className="py-contact">
      <div className="container-contact">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to discuss potential opportunities? Feel free to contact me!
        </p>

        <div className="flex-contact">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="contactinfo-div">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6-contact">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex-contact"
                  >
                    <div className="p-3-contact">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold-contact">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600-contact"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600-conatct">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="message-contact"
          >
            <div className="bg-white-white">
              <h3 className="text-2xl-contact">Send Me a Message</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16-contact"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;