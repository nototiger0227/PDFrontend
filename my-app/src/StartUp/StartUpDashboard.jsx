import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const StartUpDashboard = () => {
  const [visitors] = useState([
    { name: 'Alice Johnson', company: 'Tech Corp' },
    { name: 'Bob Williams', company: 'Green Solutions' },
    { name: 'Charlie Brown', company: 'Future Innovations' }
  ]);

  const [topInvestors] = useState([
    { name: 'John Doe', firm: 'TechVentures' },
    { name: 'Jane Smith', firm: 'Green Capital' },
    { name: 'Michael Scott', firm: 'Paper Inc.' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 p-10">
      <motion.h1
        className="text-5xl font-bold text-white mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        StartUp Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Recent Visitors</h2>
          {visitors.map((visitor, index) => (
            <motion.p
              key={index}
              className="text-lg text-blue-700 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3, duration: 1 }}
            >
              {visitor.name} ({visitor.company})
            </motion.p>
          ))}
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Top Investors</h2>
          {topInvestors.map((investor, index) => (
            <p key={index} className="text-lg text-gray-700 mb-2">
              {investor.name} ({investor.firm})
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartUpDashboard;