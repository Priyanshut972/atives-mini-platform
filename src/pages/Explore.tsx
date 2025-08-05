import React from 'react';
import { motion } from 'framer-motion';
import { creators } from '../data/mockData';

const Explore: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="text-center space-y-8">
        <h2 className="text-3xl font-bold text-white">Explore Creatives</h2>

        {creators.map((user, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black rounded-lg shadow-lg p-6 max-w-sm mx-auto"
          >
            <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
            <a
              href={user.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Portfolio
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
