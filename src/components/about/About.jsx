import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "../../pages/homePage/HomePage.module.css";

export default function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className={styles.container}
      >
        <div className={styles.header}>
          <div className={styles.introduceCard}>
            <FontAwesomeIcon className={styles.icon} icon={faUser} />
            About
          </div>
        </div>
        <div className={styles.text}>
          <h1>
            Every exceptional development journey begins with a{" "}
            <span>compelling story</span>
          </h1>
          <p>
            Two years ago, I embarked on my journey as a front-end developer,
            starting with some freelance projects where I patiently honed my
            skills. Through these experiences, I developed a quiet confidence
            and a deep curiosity for web development. Eventually, I transitioned
            into a full-time role as a developer at an ERP company, where I
            continue to be dedicated to remote assignments for various
            companies. My commitment to growth remains unwavering, as I tackle
            coding challenges one by one, perpetually striving to enhance my
            skills.
          </p>
        </div>
      </motion.div>
    </>
  );
}
