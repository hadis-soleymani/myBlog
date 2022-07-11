//styles
import styles from "../styles/experience.module.css";

//components
import Experience_card from "./experience-card";

export default function Experience() {
  return (
    <div className={styles.container} id="experience">
      <h1>Experience</h1>

      <div className={styles.cards_container}>
        <div className={styles.card_container} data-aos="fade-right">
          <Experience_card
            date="2002-2014"
            title="Academic Degree"
            icon="Academi"
          />
          <Experience_card
            date="2014-2019"
            title="Bachlors Degree"
            icon="Academi"
            description="I have a bachlor degree in electronics from Hormuzgan University ."
          />
        </div>
        <div className={styles.card_container} data-aos="fade-left">
          <Experience_card
            date="2020-2022"
            title="Reactjs"
            icon="work"
            description="I worked as a Reactjs & React Native developer at Space Time Company ."
          />
          <Experience_card
            date="2020-2022"
            title="React Native"
            icon="work"
            description="I worked as a Reactjs & React Native developer at Space Time Company ."
          />
        </div>
      </div>
    </div>
  );
}
