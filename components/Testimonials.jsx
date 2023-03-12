import styles from "../styles/Testimonials.module.css";
import Circle from "./Circle";
import { users } from "../data";
import Image from "next/image";
function Testimonials() {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#66A6B0" top="-50vh" left="0" right="0" />
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.wrapper}>
        {users.map((users) => (
          <div key={users.id} className={styles.card}>
          <Image
              src={`/img/${users.logo}`}
              alt=""
              width="30px"
              height="30px"
            />
            <p className={styles.comments}>{users.comment}</p>
            <div className={styles.person}>
              <Image
              className={styles.avatar}
                src={`/img/${users.avatar}`}
                alt=""
                width="45px"
                height="45px"
                objectFit="cover"
              />
              <div className={styles.info}>
                <span className={styles.username}>{users.name}</span>
                <span className={styles.jobtitle}>{users.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Testimonials;
