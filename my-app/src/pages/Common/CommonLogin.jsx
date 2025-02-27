import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CommonLoginPage = () => {
  const [userType, setUserType] = useState('');

  const handleSelect = (type) => {
    setUserType(type);
  };

  const userTypes = ['Investor', 'Contributor', 'Startup'];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-blue-900 p-6">
      <motion.h1 
        className="text-5xl font-extrabold text-white mb-10 tracking-wide text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Startup Connect
      </motion.h1>
      <div className="flex space-x-6 mb-10">
        {userTypes.map((type) => (
          <motion.div
            key={type}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant="outline" onClick={() => handleSelect(type)}>{type}</Button>
          </motion.div>
        ))}
      </div>
      {userType && (
        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-2xl text-center w-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">You selected {userType}</h2>
          <div className="flex justify-center space-x-6">
            <Button onClick={() => console.log(`${userType} Login`)} className="bg-blue-600 text-white hover:bg-blue-700">Login</Button>
            <Button variant="outline" onClick={() => console.log(`${userType} Register`)}>Register</Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CommonLoginPage;
