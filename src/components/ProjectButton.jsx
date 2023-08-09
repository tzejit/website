import { motion } from "framer-motion";
import '../index.css'

function ProjectButton({path, caption, writeup, link}) {
    const popup = {
        initial: {y:"20em"},
        hover: { scale: 1, y: 0}
      }


  return (
    <motion.div style={{display: "flex", alignItems: "center", paddingBottom:"0.5em", flexDirection:"column", overflow: "hidden", position:"relative"}}
        whileHover="hover"
        initial="initial"
    >
        <motion.a style={{position:"absolute", height:"100%", width:"100%", backgroundColor:"gainsboro", opacity:"95%", display: "flex", alignItems: "center", padding: "1em", boxSizing:"border-box"}}
        variants={popup}
        className="justify-align rounded"
        href={link}
        target="_blank"
        >
            {writeup}
        </motion.a>
            <img src={require(`../${path}`)} style={{height: "10em", padding: "auto"}}/>
            {caption}

    </motion.div>
  );
}

export default ProjectButton;
