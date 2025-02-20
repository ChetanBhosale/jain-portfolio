import { motion } from 'framer-motion';
import React from 'react';
const Description = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">
            Transforming Ideas into
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {" "}Visual Excellence{" "}
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            With over 5 years of experience in video editing and motion design, 
            I specialize in creating compelling visual narratives that captivate 
            audiences. From commercial projects to creative storytelling, 
            I bring technical expertise and artistic vision to every project.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Video Editing", value: "100+" },
              { title: "Happy Clients", value: "50+" },
              { title: "Projects Completed", value: "200+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                <p className="text-gray-400 mt-2">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Description; 