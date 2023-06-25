

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
Link

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="bg-sky-600 flex items-center  justify-between px-4 py-2 text-white">
        
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute mt-2 w-48 bg-white shadow-lg rounded-md"
        >
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100">
            <Link href="/Login">
                <>Login</>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
            <Link href="/Signup">
                <>Signup</>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Menu;
