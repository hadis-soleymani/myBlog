import styles from "../../styles/experience.module.css";
import { Experience_card } from "./experience-card";

export default function Experience() {
  return (
    <div className={styles.container}>
      <h1>Experience</h1>

      <div className={styles.cards_container}>
        <div className={styles.card_container}>
          <Experience_card
            date="2016-2017"
            title="Academic Degree"
            icon="Academi"
          />
          <Experience_card
            date="2014-2016"
            title="Bachlors Degree"
            icon="Academi"
          />
        </div>
        <div className={styles.card_container}>
          <Experience_card date="2010-2020" title="Reactjs" icon="work" />
          <Experience_card date="201-2019" title="React Native" icon="work" />
        </div>
      </div>
    </div>
  );
}
