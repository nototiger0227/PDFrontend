import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-950 p-4 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          PitchDeck
        </motion.h1>
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-white text-lg hover:text-blue-400 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white text-lg hover:text-blue-400 transition duration-300">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white text-lg hover:text-blue-400 transition duration-300">Contact Us</Link>
          </li>
          <li>
            <Link to="/login" className="text-white text-lg hover:text-blue-400 transition duration-300">Login/Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
