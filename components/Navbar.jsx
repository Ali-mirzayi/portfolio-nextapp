import { useState } from 'react';
import styles from "../styles/Navbar.module.css";
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';

function Navbar({darkTheme}) {
  const [activeNav, setActiveNav] = useState('#home');
  const [setIsDarkTheme,isDarkTheme] = darkTheme;
  return (
    <section className={styles.sec}>
     <div className={styles.div}/>
     <nav className={styles.container}>
       <a onClick={()=> setIsDarkTheme(!isDarkTheme)} className={activeNav === '#about' ? 'active' : ''}>{isDarkTheme === true ?  <NightsStayIcon /> : <LightModeIcon/>}</a>
       <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><CottageOutlinedIcon /></a>
       <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><EmojiObjectsOutlinedIcon /></a>
       <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><FolderOpenIcon /></a>
       <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MailOutlineIcon /></a>
     </nav>
    </section>
  );
}

export default Navbar;