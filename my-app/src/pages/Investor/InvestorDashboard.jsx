import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const InvestorDashboard = () => {
  const [startups] = useState([
    { name: 'TechNova', industry: 'AI', funding: '$1M' },
    { name: 'GreenFuture', industry: 'Renewable Energy', funding: '$2M' },
    { name: 'MediCore', industry: 'Healthcare', funding: '$1.5M' }
  ]);

  const [trends] = useState([
    'AI in Healthcare',
    'Blockchain in Finance',
    'Renewable Energy Solutions'
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 p-10">
      <motion.h1
        className="text-5xl font-bold text-white mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Investor Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {startups.map((startup, index) => (
          <Card key={index} className="bg-white shadow-xl rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{startup.name}</h2>
              <p className="text-lg text-gray-700">Industry: {startup.industry}</p>
              <p className="text-lg text-gray-700">Funding: {startup.funding}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Trending Topics</h2>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          {trends.map((trend, index) => (
            <motion.p
              key={index}
              className="text-lg text-blue-700 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3, duration: 1 }}
            >
              {index + 1}. {trend}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;