import styles from "../../styles/about_me.module.css";
import ProgressBar from "@ramonak/react-progress-bar";
export default function AboutMe() {
  return (
    <div className={styles.container}>
      <h1>About me</h1>

      <div className={styles.Ttemscontainer}>
        <img src="/avatar.svg" className={styles.avatar} alt="hgjh"></img>
        <section>
          <div className={styles.resume}>
            <p>
              Hello, My name is Hadis Soleymani.I have a bachlor degree in
              electronics from Hormuzgan University. I work as a mobile
              application and front-end developer.
            </p>
            <button>Download CV</button>
          </div>

          <div className={styles.progressContainer}>
            <p>react-native</p>
            <ProgressBar bgColor="rgb(250, 210, 77)" completed={60} />

            <p>reactjs</p>
            <ProgressBar bgColor="rgb(241, 65, 86)" completed={60} />

            <p>html&css</p>
            <ProgressBar bgColor="rgb(120, 120, 220)" completed={60} />
          </div>
        </section>
      </div>
    </div>
  );
}
