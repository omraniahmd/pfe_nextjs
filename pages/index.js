

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const images = [
  '/image.jpg',
  '/image1.jpg',
  '/image2.png',

];

const textData = [
  'Jusqu en août 1959, l industrie électrique tunisienne est répartie entre huit sociétés différentes. Ayant décidé de prendre provisoirement en charge ces sociétés, l État tunisien place, le 15 août 1958, un comité de gestion à la tête de l une de ces sociétés connue sous le nom de Compagnie tunisienne d électricité et transports. Par le décret-loi n°62-8 du 3 avril 1962, l État met fin à cette situation en créant un monopole public confié à la STEG  Peu après une politique d électrification est mise en place qui, en une quarantaine d années, fait passer le taux d électrification urbain de 20 % à près de 100 % et le taux d électrification rural de 6 % à 99 %.',
  
  'La STEG dispose en 2011 d un parc de production composé de 24 unités de production d une capacité totale de 3 526 MW, alimentées à 82 % par le gaz naturel5. Par rapport aux choix technologiques utilisés dans les centrales, voici le tableau de répartition thermique vapeur (40,1 %) cycle combiné (29,2 %) turbine à gaz (28,2 %)  hydraulique (2,1 %)  éolienne (2 % en 2010) Alstom Power a été successivement chargée de la construction des centrales à cycle combiné de la STEG, à Sousse (1994), Radès (2001) et Ghannouch (2011)7,8.',
  'La STEG se penche sur la maîtrise et l introduction de l énergie solaire en Tunisie. Elle développe trois axes Solaire photovoltaïque : Cette énergie existe en Tunisie depuis le début des années 1980 ; la première centrale photovoltaïque en Tunisie est implantée près de Siliana avec une capacité de 30 kWc soit 40 MWh par an. Pour la période 2009-2010, la STEG prévoit l installation de 3 000 kWc de toits solaires photovoltaïques. Entre 2011 et 2014, les efforts seront étendus en vue de l installation de 10 000 kWc de toits solaires15.Solaire thermodynamique : La STEG projette de réaliser une centrale thermo-solaire de 25 MW à l horizon 201416.Solaire thermique : La surface totale installée de chauffe-eau solaire avoisine les 442 000 m2 en 2010. Ce secteur est fortement subventionné par l État, la STEG jouant un rôle actif dans la mise sur le marché du chauffe-eau solaire ; elle sécurise tant le fournisseur que le bailleur de fonds en simplifiant les formalités pour le client et en lui permettant de profiter de paiements échelonnés17. Pour développer les énergies éoliennes et solaires, la STEG crée en 2010 une filiale spécialisée : STEG énergies renouvelables.',
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


