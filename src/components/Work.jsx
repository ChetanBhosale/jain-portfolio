import { motion } from 'framer-motion';
import React from 'react';
import Wedding from '../assets/Wedding.png';
import Automobile from '../assets/carr.jpg';
import Reels from '../assets/Reels.png';
const Work = () => {
  const projects = [
    {
      title: "Commercial Edits",
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3",
      link : "https://drive.google.com/drive/folders/1CT3OOatOsCrNttowCKbzLGLdmG5fwHWL"
    },
    {
      title: "Wedding Edits",
      thumbnail: Wedding,
      link : "https://drive.google.com/drive/u/4/folders/1OikQwsacPR0ACA_c_GDWziN_ClP6gNQ_"
    },
    {
      title: "Automobile Edits",
      thumbnail: Automobile,
      link : "https://drive.google.com/drive/u/4/folders/1yI6zzAM-n0UW-yyOPrj2IdT1NQQu6Rmr",
    },
    {
      title: "Reels Edits",
      thumbnail: Reels,
      link : "https://drive.google.com/drive/folders/1Kyf3xlgoChgig0HxF59JhswAMaviHKaN?usp=sharing"
    }
  ];

  return (
    <div className="py-20 bg-black" id="work">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-gray-400">A selection of my recent video editing projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.category}</p>
                  </div>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute top-4 right-4 bg-purple-500 px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full text-white font-semibold">
            <a href="https://drive.google.com/drive/folders/1MLsd5dMPROPpDpu7K4DazT9xdxi4Y8cv" target="_blank" rel="noopener noreferrer">
              View All Work
            </a>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Work; 