import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const ContributorDashboard = () => {
  const [trendingTopics] = useState([
    'AI in Healthcare',
    'Web3 and Blockchain',
    'Sustainable Energy Solutions'
  ]);

  const [investors] = useState([
    { name: 'John Doe', firm: 'TechVentures' },
    { name: 'Jane Smith', firm: 'Green Capital' }
  ]);

  const [startups] = useState([
    { name: 'InnovateX', industry: 'Tech' },
    { name: 'EcoFuture', industry: 'Environment' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 p-10">
      <motion.h1
        className="text-5xl font-bold text-white mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contributor Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Trending Topics</h2>
          {trendingTopics.map((topic, index) => (
            <motion.p
              key={index}
              className="text-lg text-blue-700 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3, duration: 1 }}
            >
              {index + 1}. {topic}
            </motion.p>
          ))}
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Top Investors</h2>
          {investors.map((investor, index) => (
            <p key={index} className="text-lg text-gray-700 mb-2">
              {investor.name} ({investor.firm})
            </p>
          ))}
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Top Startups</h2>
        {startups.map((startup, index) => (
          <p key={index} className="text-lg text-gray-700 mb-2">
            {startup.name} - {startup.industry}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContributorDashboard;
