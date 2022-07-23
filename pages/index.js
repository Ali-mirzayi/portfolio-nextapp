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
      <Head>
        <link rel="icon" href="/icon-192x192.png" />
      </Head>
      <NextSeo 
        title="Amin Khorasani"
        description="محمد امین خراسانی هستم.طراح تری دی"
        openGraph={{
          url:'https://aminkhorasani.netlify.app',
          title: 'محمد امین خراسانی',
          description: 'محمد امین خراسانی هستم.طراح تری دی',
          images:[
            {
              url:'https://aminkhorasani.netlify.app/_next/image?url=%2Fimg%2Fbff.jpg&w=256&q=75',
              width:256,
              height:379,
              alt: 'AminKhorasani',
              type: 'image/jpg',
            },{
              url:'https://aminkhorasani.netlify.app/_next/image?url=%2Fimg%2Ffolder6%2F1.jpg&w=1920&q=75',
              width:1800,
              height:1200,
              alt: 'AminKhorasani',
              type: 'image/jpg',
            },{
              url:'https://aminkhorasani.netlify.app/_next/image?url=%2Fimg%2Ffolder%2F2.jpg&w=1920&q=75',
              width:1800,
              height:1200,
              alt: 'AminKhorasani',
              type: 'image/jpg',
            },
            {url:"https://aminkhorasani.netlify.app/_next/image?url=%2Fimg%2Ffolder6%2F2.jpg&w=1920&q=75"},
            {url:"https://aminkhorasani.netlify.app/_next/image?url=%2Fimg%2Ffolder2%2F1.jpg&w=1920&q=75"},
          ],
          site_name:'AminKhorasani'
        }}
        />
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
