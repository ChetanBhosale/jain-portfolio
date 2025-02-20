import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Creative Studios",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      text: "Working with Yash was an absolute pleasure. His attention to detail and creative vision brought our brand story to life in ways we couldn't have imagined.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Independent Artist",
      company: "Music Industry",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      text: "The music video Yash created exceeded all my expectations. His ability to capture the essence of my music through visuals is truly remarkable.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Event Planner",
      company: "Luxury Events",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      text: "Yash's work on our wedding videos has been phenomenal. He captured every precious moment perfectly, creating memories that will last a lifetime.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-20 bg-black" id="reviews">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Client Reviews</h2>
          <p className="text-gray-400">What people say about my work</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl text-gray-300 italic mb-6">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <h3 className="text-xl font-bold mb-2">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-purple-500">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="bg-purple-500 p-3 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="bg-purple-500 p-3 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-purple-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews; 