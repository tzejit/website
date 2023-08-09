import { easeIn, motion } from "framer-motion";
import '../index.css'
import LogoHeader from "./LogoHeader";

function Card({path, header, role, body, direction}) {
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
        visible: { opacity: 1, scale: 1, filter: "blur(0px)", x: 0, transition: {repeat: 0}},
        hidden:  { opacity: 0, scale: 1, filter: "blur(5px)", x: `${direction ? '-' : ''}20vw`,  transition: {repeat: 0} },
    }}
    style={{backgroundColor: "#AFD5F0", padding: "1em", borderRadius: "1em", margin: 0}}>
    <LogoHeader path={path} header={header}/>
    <div className="altbg rounded" style={{textAlign: "left", padding:"0.2em 1em"}}>{role}</div>
    <div style={{textAlign: "left", padding: "1em"}}>
    {body.map((b, i) => <div><span>‣ {b}</span><br/></div>)}
    </div>
    </motion.div>
  );
}

export default Card;
