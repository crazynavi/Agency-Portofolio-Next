import styles from "../styles/Contact.module.css";
import Circle from "../components/Circle";
const Contact = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="yellow" left="-40vh" top="-20vh"/>
      <Circle backgroundColor="green" right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}> GET IN TOUCH</h1>
      <form className={styles.form}>
        <input
          className={styles.inputSmall}
          type="text"
          placeholder="Username"
        />
        <input className={styles.inputSmall} type="text" placeholder="Phone" />
        <input className={styles.inputLarge} type="text" placeholder="E-mail" />
        <input
          className={styles.inputLarge}
          type="text"
          placeholder="Subject"
        />
        <textarea
          className={styles.textarea}
          type="text"
          placeholder="Message"
          rows={6}
        />
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
};
export default Contact;
