import { motion } from "framer-motion";
import '../index.css'
import Card from "./Card";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from "@mui/lab";
import { Box } from "@mui/material";

function Experience() {
  return (
    <Box id="exp" sx={{width: '100vw', minHeight:'100vh', maxWidth: '100%', overflow: "hidden"}}
    display="flex"
    justifyContent="center"
    alignItems="center"
    >
    <Box id="exp" sx={{width: {xs: '100vw', sm: '90vw', md: '80vw', lg: '70vw', xl: '60vw'}, maxWidth: '100%', }}>
    <Box paddingTop="2em" paddingBottom="1em">
        <h2>Experiences</h2>
    </Box>
    <Timeline position="alternate">
    <TimelineItem>
    <TimelineOppositeContent color="text.secondary">
          May - Jul 2023
        </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Card header="TikTok" body={["Developed automated scripts for offline and online API regression testing and mock data injection using Go", "Initialized automated UI and FE regression tests using an internal Typescript framework built on Puppeteer, Selenium, and Chai"]} path='tiktok.png' role="Test Engineer"/>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
    <TimelineOppositeContent color="text.secondary">
          Jul 2022 - Jan 2023
        </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
      <Card header="NUS" body={["Developed an educational app for use in Chemical Kinetics Module using MATLAB App Designer", "Created custom embedded components using HTML, JavaScript, and CSS to replace and supplement inbuilt MATLAB components"]} path='NUS.png' role="Software Engineer" direction={true}/>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
    <TimelineOppositeContent color="text.secondary">
          May - Jul 2022
        </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="secondary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
      <Card header="GovTech" body={["Performed software testing on newly developed features", "Created and refactored automated test scripts using Robot Framework, Python for use in regression testing"]} path='govtech.png' role="Quality Engineer"/>

      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
      </TimelineSeparator>
      <TimelineContent></TimelineContent>
    </TimelineItem>
  </Timeline>
  </Box>
  </Box>

  );
}

export default Experience;
