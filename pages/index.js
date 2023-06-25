

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import textData from './textData';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const images = [
  '/image.jpg',
  '/image1.jpg',
  '/image2.png',

];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    // Fonction pour passer à l'image suivante
    const nextImage = () => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    // Définition de l'intervalle pour changer l'image toutes les 5 secondes
    const interval = setInterval(nextImage, 5000);

    // Nettoyage de l'intervalle lorsque le composant est démonté ou lorsque currentImage change
    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  const nextText = () => {
    setCurrentText((prevText) => (prevText === textData.length - 1 ? 0 : prevText + 1));
  };

  const prevText = () => {
    setCurrentText((prevText) => (prevText === 0 ? textData.length - 1 : prevText - 1));
  };

  

  return (
    <div className="relative">
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-9 w-full h-50 text-center text-xl font-bold "
      >
        {textData[currentText]}
      </motion.p>
      <div className=" flex justify-between w-11/12 p-9">
        <button className=" text-gray-600 px-4 py-2 " onClick={prevText}>
        <ChevronLeftIcon className="w-9 h-9" />
        </button>
        <button className=" text-gray-600 px-4 py-2 " onClick={nextText}>
        <ChevronRightIcon className="w-9 h-9" />
        </button>
       
      </div>
      <img src={images[currentImage]} alt="Slider Image" className="w-full h-56  object-cover " />
    </div>
  );
};

export default Slider;


