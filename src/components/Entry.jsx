import { motion } from "framer-motion";
import '../index.css'
import { useEffect, useState } from "react";
import DownArrow from "./DownArrow";


function Entry() {

    let [x, setX] = useState(-100)
    let [o1, seto1] = useState(false)
    let [o2, seto2] = useState(false)

    const variants = {
        transparent: {
            opacity: 0
        },
        full: {
            opacity: 1
        }
      }
    
      useEffect(() => {
        const timer = setTimeout(() => {
            setX(100)
          }, 1000);
        const timer2 = setTimeout(() => {
        seto1(true)
        }, 500);
        const timer3 = setTimeout(() => {
        seto2(true)
        }, 2000);
      },[]);


  return (
    <div className="segment">
        <div className="flex">
            <div className="grid-container">
                <motion.h1 id="hello" variants={variants} style={{opacity: 0}} animate={o1 ? "full" : "transparent"}>Hello</motion.h1>
                <motion.h1 id="name" variants={variants} style={{opacity: 0}} animate={o2 ? "full" : "transparent"}>I'm Tze Jit</motion.h1>
            </div>  

            <motion.div
            className="box center"
            // animate={{
            //     rotate: [0, 45, 90],
            //     borderRadius: ["10%", "50%", "10%"]
            // }}
            animate= {{
                x: x
            }}
            transition={{
                type: 'spring',
            }}
            initial= {{
                x: x
            }}
            />
        </div>
        <DownArrow target="about"/>
    </div>
  );
}

export default Entry;
