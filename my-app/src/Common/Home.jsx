import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Navbar from "/components/Navbar";
import Footer from "/components/Footer"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 p-6 text-center">
      <Navbar />
      <motion.h1 
        className="text-5xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to PitchDeck
      </motion.h1>
      <motion.p 
        className="text-lg text-white mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Connecting Investors, Contributors, and Startups for a brighter future.
      </motion.p>
      <motion.div 
        className="bg-white p-8 rounded-2xl shadow-2xl w-96 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="text-gray-700 mb-6">
          Explore opportunities, collaborate on projects, and make impactful connections.
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full">Get Started</Button>
      </motion.div>
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-2xl w-96 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700">
          Startup Connect is a platform where investors, contributors, and startups can collaborate and grow together.
        </p>
      </motion.div>
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-2xl w-96"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4">Our Functionality</h2>
        <ul className="text-gray-700 list-disc list-inside">
          <li>Investor-Startup matchmaking</li>
          <li>Project collaboration opportunities</li>
          <li>Resource sharing for contributors</li>
          <li>Community-driven networking</li>
        </ul>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;