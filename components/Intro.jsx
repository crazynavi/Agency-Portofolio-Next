import styles from "../styles/intro.module.css";
import Image from "next/image";
import Circle from "../components/Circle";
function Intro() {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#66A6B0" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#66A6B0" top="10vh" right="5vh" />
      <Circle backgroundColor="#fff" top="10vh" right="15vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>
            SC<span className={styles.scooterLight}>OO</span>TER{" "}
          </span>
          Digital Product Agency
        </h1>
        <p className={styles.description}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          alt="fff"
          src="/img/Scooter.png"
          width="80%"
          height="80%"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
export default Intro;
