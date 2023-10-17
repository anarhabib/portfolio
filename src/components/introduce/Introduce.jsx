import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styles from "../../pages/homePage/HomePage.module.css";

export default function Introduce() {
  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className={styles.container}
      >
        <div className={styles.header}>
          <div className={styles.introduceCard}>
            <FontAwesomeIcon className={styles.icon} icon={faHome} />
            Introduce
          </div>
        </div>
        <div className={styles.text}>
          <h1>
            Say Hi from <span>Anar</span>, Front End Developer
          </h1>
          <p>
            I specialize in crafting elegant and efficient user interfaces as a
            front-end developer at an ERP company, where I primarily focus on
            writing JavaScript code. I absolutely love what I do, and it's all
            about keeping it streamlined and straightforward!
          </p>
        </div>
      </motion.div>
    </>
  );
}
