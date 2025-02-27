import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 p-6 text-center">
      <motion.h1 
        className="text-5xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>
      <motion.p 
        className="text-lg text-white mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        We'd love to hear from you! Reach out to us with your queries and feedback.
      </motion.p>
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-left">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Your Message"></textarea>
          </div>
          <Button className="bg-blue-500 text-white w-full hover:bg-blue-600 transition duration-300" onClick={(e) => e.preventDefault()}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;