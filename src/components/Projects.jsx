import { motion } from "framer-motion";
import '../index.css'
import { Box, Grid } from "@mui/material";
import ProjectButton from "./ProjectButton";


function Projects() {
  return (
    <Box className="altbg" id="about" sx={{width: '100vw', height:'100vh', maxWidth: '100%', }}
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
                <h2>Projects</h2>
            </Grid>
            <Box width="100%"/>

            <Grid xs={11} sm={10} md={6} lg={4}>
                <ProjectButton path='images/webpage.png' caption='Portfolio website' writeup='A portfolio website with React, Material UI and Framer Motion'/>
            </Grid>

            <Grid xs={11} sm={10} md={6} lg={4}>
                <ProjectButton path='images/planner.png' caption='Hackathon group finder' writeup='A webapp that allowed students to find other people taking the same modules or to find hackathon group mates using MERN stack' link="https://github.com/ModMatch"/>
            </Grid>

            <Grid xs={11} sm={10} md={6} lg={4}>
                <ProjectButton path='images/tapp.png' caption='TA helper programme' writeup='A Java and JavaFX class management application to help in managing tutor class tasks such as attendance taking and mark allocation, and to aid group tracking.' link="https://ay2122s1-cs2103-w14-4.github.io/tp/"/>
            </Grid>

            <Grid xs={11} sm={10} md={6} lg={4}>
                <ProjectButton path='images/rdapp.png' caption='Reactor design application' writeup='A MATLAB application with customized HTML components to help in chemical engineering design calculations and visualizations'/>
            </Grid>

            <Grid xs={11} sm={10} md={6} lg={4}>
                <ProjectButton path='images/pixel.png' caption='Pixel art tool' writeup='A simple HTML, CSS, JS tool that helps create pixel art' link="https://tzejit.github.io/miniwebprojects/projects/pixel/pixel.html"/>
            </Grid>

            <Grid xs={11} sm={10} md={6} lg={4}>
                <ProjectButton path='images/tic-tac-toe.png' caption='Unwinnable tic tac toe game' writeup='A simple HTML, CSS, JS tic tac toe game using minimax algorithm with alpha beta pruning' link="https://tzejit.github.io/miniwebprojects/projects/tictactoe/tictactoe.html"/>
            </Grid>
           


        </Grid>
        </motion.div>
    </Box>
  );
}

export default Projects;
