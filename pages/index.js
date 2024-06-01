import Head from "next/head";
import styles from "../styles/Home.module.css";
import AboutMe from "../components/AboutMe";
import Chart from "../components/Charts/Chart";
import Intro from "../components/Intro";
import ContactUs from "../components/Contact";
import Slider from "../components/Slider";
import { Box } from "@mui/system";
import { Typography,Divider } from "@mui/material";
import { NextSeo } from 'next-seo';

export default function Home({isDarkTheme}) {

  return (
   <Box sx={{backgroundColor: "background.superDark"}}>
    <div className={styles.container}>
      <Intro />
      <AboutMe />
      <Box width='fit-content' margin='2rem auto'>
        <Typography id="skills" color= "textColor.superDark" fontSize="35px" fontWeight="300px" sx={{fontSize:"35px",margin:'0 1rem'}}> مهارت ها</Typography>
        <Divider sx={{borderTopWidth:'3px'}}/>
      </Box>
      <Chart isDarkTheme={isDarkTheme} />
      <Box width='fit-content' margin='2rem auto'>
        <Typography id="projects" color= "textColor.superDark" variant="h1" component="h1" sx={{fontSize:"35px",margin:'0 1rem'}}> نمونه کار</Typography>
        <Divider sx={{borderTopWidth:'3px'}}/>
      </Box>
      <Slider sliders={["/img/folder/1.jpg", "/img/folder/2.jpg"]} />
      <Slider sliders={["/img/folder6/1.jpg", "/img/folder6/2.jpg"]} />
      <Slider sliders={["/img/folder1/1.jpg", "/img/folder1/2.jpg", "/img/folder1/3.jpg"]} />
      <Slider sliders={["/img/folder2/1.jpg", "/img/folder2/2.jpg"]} />
      <Slider sliders={[
        "/img/folder3/1.jpg",
        "/img/folder3/2.jpg",
        "/img/folder3/3.jpg",
        "/img/folder3/4.jpg",
      ]} />
      <Slider sliders={["/img/folder7/1.jpg","/img/folder7/12.jpg", "/img/folder7/2.jpg","/img/folder7/3.jpg","/img/folder7/4.jpg","/img/folder7/5.jpg"]}  />
      <Slider sliders={[
          "/img/folder5/1.jpg",
          "/img/folder5/2.jpg",
          "/img/folder5/3.jpg",
          "/img/folder5/4.jpg",
        ]} />
      <ContactUs isDarkTheme={isDarkTheme} />
    </div>
   </Box>
  );
}
