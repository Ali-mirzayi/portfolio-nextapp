import styles from "../styles/AboutMe.module.css";
import Link from '@mui/material/Link';
function AboutMe() {
  return (
    <section className={styles.container} id="about" dir="rtl">
      <h2 style={{ margin: ".7rem" }}>درباره ی &nbsp; من</h2>
      <p className={styles.more}>
        سلام امین خراسانی هستم. یک 3d Artist، طراح دکوراسیون داخلی، طراح کابینت
        خود آموخته هستم که به نرم افزار هایی ک در نمودار مشخص شده است مسلط هستم.
        مدت زمان تحویل طراحی دکوراسیون داخلی کل واحد های تجاری، مسکونی... بستگی
        به متراژ و سبک کاری که میخواهید متغیر است مدت زمان تحویل طراحی کابینت 24
        الی 48 ساعت است که باز بسته به سبک کاری ک میخواهید متغیر هستند برای
        اطلاع از قیمت ها و مشاوره رایگان، میتوانید با من در شبکه های اجتماعی از
        طریق آیکون های بالا از جمله instagram, whatsapp, telegram در تماس باشید.
        همچنین میتوانید با شماره هایی که در زیر قرار دادم تماس بگیرید.
        <br />
        با&nbsp; تشکر
        <br />
        <Link href="tel:09367379446" className={styles.numbers} underline="hover" color= "textColor.superDark">
          09367379446
        </Link>
        <br />
        <Link href="tel:09367379602" className={styles.numbers} underline="hover" color= "textColor.superDark">
          09367379602
        </Link>
      </p>
    </section>
  );
}

export default AboutMe;
