import { motion } from 'framer-motion';
import React from 'react';
const Companies = () => {
  const companies = ['Netflix', 'YouTube', 'Prime Video', 'HBO', 'Disney+'];
  
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-gray-500 mb-12">Trusted by</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="text-2xl font-bold text-gray-600"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies; 