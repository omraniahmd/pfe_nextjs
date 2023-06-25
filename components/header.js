import Menu from '@/pages/Menu';
import { motion } from 'framer-motion';



const Header = () => {
 
  
  return (
    <header className="w-full bg-sky-600 py-4">
      <Menu/>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}
        className="flex items-center justify-center"
      >
        <motion.img
          src="/steg-logo.png"
          alt="Logo"
          className="h-12 mr-2 rounded-full"
        />
        <motion.span
          
          className="text-white text-lg"
        >
         société tunisienne de l'électricité et du gaz
        </motion.span>
        
      </motion.div>
      
    </header>
  );
};

export default Header;

