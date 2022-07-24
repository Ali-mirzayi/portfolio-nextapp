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
      <meta name="author" content="Ali mirzaei zadeh"/>
      <meta name="description" content="Amin Khorasani"/>
      <meta name="keywords" content="3Dmax, Vray, PhotoShop"/>
      <meta name="keywords" content="Amin, Mohammad, Khorasani"/>
      <meta name="keywords" content="خراسانی, امین, محمد"/>
      <meta name="keywords" content="تری دی مکس, طراحی کابینت, طراحی آشپزخونه,طراحی آشپز خانه"/>
      <meta name="keywords" content="طراحی دکوراسیون,دکوراسیون داخلی,طراح دکوراسیون,طراح دکور داخلی,دکوراسیون,دکوری"/>
      <meta name="keywords" content="طراحی,تریدی ارتیست,سی جی ارتیست,سه بعدی,طراحی کمد دیواری,طراحی سرویس بهداشتی,جاکفشی"/>
      <meta name="keywords" content="دیوار,کابینت,آشپزخانه,آشپزی,خواب"/>
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
