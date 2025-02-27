import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const InvestorRegister = () => {
  const handleRegister = () => {
    console.log('Investor Register');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-blue-900 p-6">
      <motion.h1 
        className="text-4xl font-bold text-white mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Investor Register
      </motion.h1>
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl text-center w-96"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input type="text" placeholder="Name" className="w-full p-2 mb-4 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-6 border rounded" />
        <Button onClick={handleRegister} className="bg-blue-600 text-white hover:bg-blue-700 w-full">Register</Button>
      </motion.div>
    </div>
  );
};

export default InvestorRegister;
