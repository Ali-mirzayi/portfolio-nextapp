import styles from "../styles/Intro.module.css";
import { useState } from "react";
import { Slide } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Snackbar from "@mui/material/Snackbar";
import InstagramIcon from "@mui/icons-material/Instagram";
import Fade from "@mui/material/Fade";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";

function Intro() {

  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  function phoneCopy(props) {
    return (
      navigator.clipboard.writeText("+989367379446"),
      (<Slide {...props} direction="up" />)
    );
  }

  return (
    <main className={styles.main} id="home">
        <h1 className={styles.label}>Amin Khorasani</h1>
        <h5 className={styles.sublabel}>Engineer & CG Artist</h5>
      <div className={styles.flex}>
      <div className={styles.shadow}></div>
        <div>
          <p className={styles.description}>
          Hi, I’m Khorasani, a self-taught CG Artist, focused on photorealism and top quality CGI.
          </p>
          <div className={styles.icons}>
            <Link href="https://instagram.com/3dartist_khorasani?igshid=YmMyMTA2M2Y=">
              <InstagramIcon className={styles.icon} />
            </Link>
            <Link href="https://t.me/Amiinkhorasanii">
              <TelegramIcon className={styles.icon} />
            </Link>
            <Link href="https://www.linkedin.com/in/mohammad-amin-khorasani-9b3b57244">
              <LinkedInIcon className={styles.icon} />
            </Link>
            <div onClick={handleClick(phoneCopy)}>
              <PhoneIcon className={styles.icon} />
              <Snackbar
                open={state.open}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                message="phone number save in clipboard"
                key={state.Transition.name}
                className={styles.icon}
              />
            </div>
          </div>
        </div>
        <Image
        className={styles.img}
          src="/img/bff.jpg"
          width="170"
          height="270"
          alt="Aminkhorasani"
        />
      </div>
      
    </main>
  );
}

export default Intro;
