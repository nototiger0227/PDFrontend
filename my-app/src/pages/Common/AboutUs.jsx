import { motion } from 'framer-motion';

const AboutUs = () => {
  const teamMembers = [
    { name: "Raghvi Gupta", role: "Developer", description: "Expert in Frontend Development" },
    { name: "Vansh Gupta", role: "Backend Developer", description: "Passionate about APIs and Databases" },
    { name: "Parvej Alam", role: "ML Engineer", description: "Loves Machine Learning and AI" },
    { name: "Vyom Bajaj", role: "UI/UX Designer", description: "Designs stunning user interfaces" }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 p-6 text-center">
      <motion.h1 
        className="text-5xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>
      <motion.p 
        className="text-lg text-white mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        We are Attack Of Coders from NIT Kurukshetra, passionate about building innovative solutions.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 rounded-2xl shadow-2xl text-center w-64"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.3, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <p className="text-blue-500 mb-2">{member.role}</p>
            <p className="text-gray-700">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;