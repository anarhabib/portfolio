import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "../../pages/homePage/HomePage.module.css";
import ExperienceCard from "./experienceCard/ExperienceCard";

export default function Resume() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <>
      <motion.div
        ref={ref}
        style={{ scale: scaleProgress, opacity: scrollYProgress }}
        className={styles.container}
      >
        <div className={styles.header}>
          <div className={styles.introduceCard}>
            <FontAwesomeIcon className={styles.icon} icon={faFileAlt} />
            Resume
          </div>
        </div>
        <div className={styles.text}>
          <h1>
            Education & <span>Experience</span>
          </h1>
        </div>
        <ExperienceCard />
      </motion.div>
    </>
  );
}
