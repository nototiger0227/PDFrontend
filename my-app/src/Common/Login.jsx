import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 p-6">
      <motion.div 
        className="bg-white p-10 rounded-2xl shadow-2xl w-96 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 w-full">Login</Button>
        </form>
        <p className="mt-4 text-gray-600">Don't have an account? <a href="/signup" className="text-blue-700 hover:underline">Sign Up</a></p>
      </motion.div>
    </div>
  );
};

export default Login;