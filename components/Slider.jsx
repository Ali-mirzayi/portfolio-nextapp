import Image from "next/image";
import styles from "../styles/Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box } from "@mui/material";

export default function Slider({sliders}) {
  return (
    <>
    {/* <Box sx={{ backgroundColor: "background.superDark"}}> */}
      <Swiper
        style={{
            "--swiper-pagination-color": "#fff",
            backgroundColor: "background.superDark"
          }}
          loop={true}
          lazy={true}
          pagination={{
            clickable: true,
          }}
          modules={[Lazy, Pagination]}
          className={styles.swiper}
      >
        {sliders.map((s,i)=>(
             <SwiperSlide key={i} className={styles.swiperSlide}>
                <Image src={s} layout="fill" className="swiper-lazy"  alt=""/>
            </SwiperSlide>
        ))}
      </Swiper>
     {/* </Box> */}
    </>
  );
}
