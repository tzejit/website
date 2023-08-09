import { motion } from "framer-motion";
import '../index.css'

function LogoHeader({path, header}) {
  return (
    <div style={{display: "flex", alignItems: "center", paddingBottom:"0.5em"}}>
        <img src={require(`../${path}`)} style={{height: "2em", padding: "auto"}}/>
        <div className="justify-align" style={{fontWeight: 500}}>
            &nbsp; {header}<br/>
        </div>
    </div>
  );
}

export default LogoHeader;
