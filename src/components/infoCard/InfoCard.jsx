import styles from "./InfoCard.module.css";
import ppImage from "../../assets/image/pp.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export function InfoCard() {
  return (
    <div className={styles.container}>
      <div className={styles.cardHeader}>
        <div className={styles.name}>Anar Habib</div>
        <div className={styles.title}>
          Front End <br />
          Developer
        </div>
      </div>
      <div className={styles.imageBox}>
        <img className={styles.image} src={ppImage} alt="profile Image" />
      </div>
      <div className={styles.info}>
        13.05.1998
        <div>
          <p>Baku, Azerbaijan</p>
        </div>
      </div>
      <div className={styles.socialMedias}>
        <div>
          <a
            className={styles.mediaCard}
            href="https://www.linkedin.com/in/anarhabib/"
          >
            <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} />
          </a>
        </div>
        <div>
          <a
            className={styles.mediaCard}
            href="https://www.instagram.com/anarhabib/"
          >
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
          </a>
        </div>
        <div>
          <a className={styles.mediaCard} href="https://github.com/anarhabib">
            <FontAwesomeIcon className={styles.icon} icon={faGithub} />
          </a>
        </div>
        <div>
          <a
            className={styles.mediaCard}
            href="mailto:anarhabibullayev3@gmail.com"
          >
            <FontAwesomeIcon className={styles.icon} icon={faGoogle} />
          </a>
        </div>
      </div>
      <button className={styles.hireBtn}>Hire me !</button>
    </div>
  );
}
