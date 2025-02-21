import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import charminarLogo from '../assets/Charminar_logo.png';
import kewlaniLogo from '../assets/Kewlani_agro.png';
import vasantLogo from '../assets/Orange And Cream Traditional Minimalist Vasant Panchami Greeting Instagram Post.png';
import designLogo from '../assets/Untitled design (2).png';
import  NBS from '../assets/NBS White LogoINTL 3.png'
import United from '../assets/Untitled.png'

const Companies = () => {
  const companies = [
    { logo: charminarLogo },
    { logo: kewlaniLogo },
    { logo: vasantLogo },
    { logo: designLogo },
    {logo : NBS},
    {logo : United}
  ];

  return (
    <section className="py-16 bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Companies Working With
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        {/* Multi-item Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: [`0%`, `-50%`],
              }}
              transition={{
                x: {
                  duration: 15,
                  ease: "linear",
                  repeat: Infinity,
                },
              }}
              style={{
                '@media (max-width: 768px)': {
                  animation: 'scroll 5s linear infinite',
                },
              }}
            >
              {/* Double the items to create seamless loop */}
              {[...companies, ...companies].map((company, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[300px] h-[250px] mx-8"
                >
                  <div className="bg-gray-900 h-full rounded-xl p-8 
                              hover:shadow-2xl transition-all duration-300 
                              transform hover:-translate-y-1 border border-gray-800
                              w-full  flex items-center justify-center">
                    <img 
                      src={company.logo}
                      alt="Partner logo"
                      className="max-h-full max-w-full object-contain
                               transition-all duration-300 hover:brightness-110"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies; 