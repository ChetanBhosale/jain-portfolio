import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import charminarLogo from '../assets/Charminar_logo.png';
import kewlaniLogo from '../assets/Kewlani_agro.png';
import vasantLogo from '../assets/Orange And Cream Traditional Minimalist Vasant Panchami Greeting Instagram Post.png';
import designLogo from '../assets/Untitled design (2).png';
import  NBS from '../assets/NBS White LogoINTL 3.png'
import United from '../assets/Untitled.png'
import Avintra from '../assets/Untitled design (4) (1).png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Companies = () => {
  const companies = [
    { logo: charminarLogo },
    { logo: kewlaniLogo },
    { logo: vasantLogo },
    { logo: designLogo },
    {logo : NBS},
    {logo : Avintra}
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
            Working With
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-900 h-[250px] rounded-xl p-8 
                            hover:shadow-2xl transition-all duration-300 
                            transform hover:-translate-y-1 border border-gray-800
                            flex items-center justify-center">
                <img 
                  src={company.logo}
                  alt="Partner logo"
                  className="max-h-full max-w-full object-contain
                           transition-all duration-300 hover:brightness-110"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Companies; 