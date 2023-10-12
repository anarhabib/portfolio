import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.css";
import {
  faUser,
  faHome,
  faFileAlt,
  faBolt,
  faCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <ul className={styles.container}>
      <li className={styles.navbarItem}>
        <span className={styles.span}>Home</span>
        <a href="">
          <FontAwesomeIcon className={styles.icon} icon={faHome} />
        </a>
      </li>
      <li className={styles.navbarItem}>
        <span className={styles.span}>About</span>
        <a href="">
          <FontAwesomeIcon className={styles.icon} icon={faUser} />
        </a>
      </li>
      <li className={styles.navbarItem}>
        <span className={styles.span}>Resume</span>

        <a href="">
          <FontAwesomeIcon className={styles.icon} icon={faFileAlt} />
        </a>
      </li>
      <li className={styles.navbarItem}>
        <span className={styles.span}>Skills</span>

        <a href="">
          <FontAwesomeIcon className={styles.icon} icon={faBolt} />
        </a>
      </li>
      <li className={styles.navbarItem}>
        <span className={styles.span}>Portfolio</span>

        <a href="">
          <FontAwesomeIcon className={styles.icon} icon={faCode} />
        </a>
      </li>
      <li className={styles.navbarItem}>
        <span className={styles.span}>Contact</span>

        <a href="">
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
        </a>
      </li>
    </ul>
  );
}
