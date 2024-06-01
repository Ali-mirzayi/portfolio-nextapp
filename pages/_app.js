import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utility/createEmotionCache";
import Theme from "../styles/theme/lightTheme";
import React, { useState } from "react";
import {createTheme, ThemeProvider, CssBaseline} from "@mui/material";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const {lightTheme,darkTheme} = Theme;
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
    <Head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="title" content="Amin Khorasani">
    <title>Amin Khorasani</title>
    <meta name="description" content="محمد امین خراسانی هستم. یک 3D Artist، طراح دکوراسیون داخلی، طراح کابینت خود آموخته هستم. مدت زمان تحویل طراحی دکوراسیون داخلی و طراحی کابینت بستگی به متراژ و سبک کاری که میخواهید متغیر است. برای اطلاع از قیمت ها و مشاوره رایگان، میتوانید با من در شبکه های اجتماعی و شماره تماس های زیر در تماس باشید.">
    <meta property="og:url" content="https://aminkhorasani.netlify.app">
    <meta property="og:title" content="Amin Khorasani" key="title">
    <meta property="og:description" content="سلام! من محمد امین خراسانی هستم. یک 3D Artist، طراح دکوراسیون داخلی و طراح کابینت هستم. خودآموز و مسلط به نرم افزارهای مربوطه می باشم. برای اطلاعات بیشتر، می توانید با من در شبکه های اجتماعی و شماره تماس های زیر در تماس باشید.">
    <meta name="keywords" content="امین خراسانی, amin khorasani, aminkhorasani , 3D Artist, طراح دکوراسیون داخلی, طراح کابینت">
    <link rel="icon" type="image/png" sizes="16x16" href="/icon-192x192.png" />
    </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}>
          <CssBaseline />
          <Layout darkTheme={[setIsDarkTheme,isDarkTheme]}>
            <Component {...pageProps} isDarkTheme={isDarkTheme} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
     </>
  );
}

export default MyApp;
