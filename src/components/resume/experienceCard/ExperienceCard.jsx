import styles from "./ExperienceCard.module.css";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ExperienceCard() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [0, 1],
  });

  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    if (inView) {
      setAnimationTriggered(false);
    }
  }, [inView]);
  console.log(inView);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ x: 100, opacity: 0 }}
        animate={
          inView && !animationTriggered
            ? { x: 0, opacity: 1 }
            : { x: -100, opacity: 0 }
        }
        transition={{ ease: "easeOut", duration: 1.5 }}
        className={styles.container}
      >
        <div className={styles.icon}></div>
        <div className={styles.text}>
          <p>2022 - present</p>
          <h3>Front End developer</h3>
          <p>Mikromax MMC</p>
        </div>
      </motion.div>
      <div className={styles.container}>
        <div className={styles.icon}></div>
        <div className={styles.text}>
          <p>2021 - present</p>
          <h3>Front End developer</h3>
          <p>Freelance</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.icon}></div>
        <div className={styles.text}>
          <p>2015 - 2020</p>
          <h3>Bachelors degree of Mechanical Engineering</h3>
          <p>Baku Engineering University</p>
        </div>
      </div>
    </>
  );
}
