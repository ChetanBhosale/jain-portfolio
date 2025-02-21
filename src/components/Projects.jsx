import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import Yt_thumbnail from '../assets/Yt_thumbnail.jpg';

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Cinematic Edit",
      category: "editing",
      videoId: "AFNdAu8Xxzo",
      thumbnail: `https://img.youtube.com/vi/AFNdAu8Xxzo/hqdefault.jpg`,
    },
    {
      id: 2,
      title: "Dynamic Edit Showcase",
      category: "motion",
      videoId: "POey-HV-Zk0",
      thumbnail: `https://img.youtube.com/vi/POey-HV-Zk0/hqdefault.jpg`,
    },
    {
      id: 4,
      title: "Motion Graphics",
      category: "motion",
      videoId: "kIT5JZ81pfc",
      thumbnail: `https://img.youtube.com/vi/kIT5JZ81pfc/hqdefault.jpg`,
    },
    {
      id: 5,
      title: "Special Edit",
      category: "editing",
      videoId: "6yM-UunIvkk",
      thumbnail: Yt_thumbnail
    },
    
  ];

  const filters = ['all', 'editing', 'motion'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="py-20 bg-gradient-to-b from-black to-gray-900" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">My Youtube Edits</h2>
          <p className="text-gray-400 mb-8">Showcasing my best video editing work</p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full capitalize ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group rounded-xl overflow-hidden"
              >
                <div 
                  className="aspect-video cursor-pointer"
                  onClick={() => setSelectedVideo(project)}
                >
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://img.youtube.com/vi/${project.videoId}/mqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 capitalize">{project.category}</p>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500/80 px-6 py-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    Play Video
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative w-full max-w-4xl aspect-video"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-10 right-0 text-white hover:text-purple-500"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <iframe
                  className="w-full h-full rounded-xl"
                  src={`https://www.youtube.com/embed/${selectedVideo?.videoId}`}
                  title={selectedVideo?.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects; 