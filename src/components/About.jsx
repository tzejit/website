import { motion } from "framer-motion";
import '../index.css'
import LogoHeader from "./LogoHeader";
import { Box, Grid } from "@mui/material";


function About() {
  return (
    <Box className="altbg" id="about" sx={{width: '100vw', minHeight:'100vh', maxWidth: '100%', }}
    display="flex"
    justifyContent="center"
    alignItems="center"
    >
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
            visible: { opacity: 1,transition: {delay: 0.1}},
            hidden:  { opacity: 0,transition: {type: 'spring'}},
        }}>
        <Grid container spacing={0} alignItems="center" justifyContent="center">
            <Grid xs={11} sm={10} md={6} lg={5}>
                <h2>About Me</h2>
            </Grid>
            <Box width="100%"/>

            <Grid container item xs={11} sm={10} md={8} lg={8} spacing={2} justifyContent="center">
                <Grid item xs={12} sm={12} md={3} lg={3} alignSelf="center">
                    <img src={require(`../images/IMG_20230508_131011_671.jpg`)} style={{ maxWidth: "100%"}}/>
                </Grid>
                <Grid item className="justify-align" xs={12} sm={12} md={8} lg={7}>
                    Hello, I am a Data Science and Machine Learning Masters student at NUS. 
                    I am passionate about technology and am excited about its potential to create meaningful solutions that solve problems and enhance user experiences. 
                    My interest in coding and software development sparked in my first year in university after taking an introductory computing module. Since then, I have never looked back and
                    took on a minor, then a major in Computer Science, with the intention of pursing a career in tech. The recent development of generative AI systems such as Midjourney and ChatGPT 
                    has also piqued my interest in the field, leading me to embark on a Master's programme to further my knowledge in the field. In my free time, I like to stay active by going to  the gym
                    or hiking. 
                    Thank you for visiting my page! 
                </Grid>
            </Grid>
            <Box width="100%"/>

            <Grid xs={11} sm={10} md={6} lg={5}>
                <h3>Education</h3>
            </Grid>
            <Box width="100%"/>

            <Grid xs={11} sm={10} md={6} lg={5}>
                <LogoHeader path='NUS.png' header=' National University of Singapore'/>
            </Grid>
            <Box width="100%"/>

            <Grid xs={11} sm={10} md={6} lg={5} className="justify-align" paddingBottom="2em">
                M.Sc Data Science and Machine Learning
            </Grid>
            <Box width="100%"/>

            <Grid xs={11} sm={10} md={6} lg={5}>
                <LogoHeader path='NUS.png' header=' National University of Singapore'/>
            </Grid>
            <Box width="100%"/>

            <Grid xs={11} sm={10} md={6} lg={5} className="justify-align" paddingBottom="1em">
                B.Eng Chemical Engineering (Highest Distinction) with 2nd Major in Computer Science
            </Grid>

        </Grid>
        </motion.div>
    </Box>
  );
}

export default About;
