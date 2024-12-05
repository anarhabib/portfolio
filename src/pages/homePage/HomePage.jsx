import styles from "./HomePage.module.css";
import About from "../../components/about/About";
import Resume from "../../components/resume/Resume";
import Introduce from "../../components/introduce/Introduce";

export function HomePage() {
  return (
    <div className={styles.landingPage}>
      <Introduce />
      <About />
      <Resume />
    </div>
  );
}
