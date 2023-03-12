import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardLarge}>
        <h1 className={styles.title}>Scooter Creatives</h1>
        <h1 className={styles.linktitle}>
          <Link href="/contact" className={styles.link} passHref>
            <>
              <span className={styles.linkText}>WORK WITH US</span>
              <Image
                className={styles.linkimg}
                src={"/img/link.png"}
                width="40px"
                height="40px"
                alt=""
              />
            </>
          </Link>
        </h1>
      </div>
      <div className={styles.cardSmall}>
        <div className={styles.cardItem}>
          12 ADAM STREET NY
          <br /> USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@DEVNEXT
          <br /> 2122 455455
        </div>
      </div>
      <div className={styles.cardSmall}>
        <div className={styles.cardItem}>
          12 ADAM STREET NY
          <br /> USA
        </div>
        <div className={styles.cardItem}>
          LEOMOURACSS@FASTMAIL.COM
          <br /> 2122 455455
        </div>
      </div>
      <div className={styles.cardSmall}>
        <div className={styles.cardItem}>
          Follow US:
          <br />
          _FB_IN_BE_TW
        </div>
        <div className={styles.cardItem}>
          © 2022 SCOOTER INTERACTIVE,
          <br /> ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};
export default Footer;
