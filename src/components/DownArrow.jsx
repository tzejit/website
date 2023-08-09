import { motion } from "framer-motion";
import '../index.css'


function DownArrow({target}) {
    const variants = {
        initial: { 
            y: [-10, 0, -10],
            transition: {times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 1}
        },
        hover: {
            scale: 1.3
        }
      }
    

  return (
        <div className="bottom">
            <motion.img 
            src={require('../scroll.png')}
            className="icon"
            whileHover="hover"
            animate="initial"
            variants={variants}
            onClick={()=> document.getElementById(target).scrollIntoView({ behavior: "smooth"})}
            />
        </div>
  );
}

export default DownArrow;
