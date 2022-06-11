//styles
import styles from "../styles/about_me.module.css";
import Image from "next/image";

//libraries
import ProgressBar from "@ramonak/react-progress-bar";

//components
import Button from "./button";

export default function AboutMe() {
  return (
    <div className={styles.container} id="about_me" >
      <h1 >About me</h1>

      <div className={styles.Ttemscontainer}>
      <Image src="/avatar.svg" alt="avatar" width={150} height={150} />
        <section>
          <div className={styles.resume}>
            <p>
              Hello, My name is Hadis Soleymani.I have a bachlor degree in
              electronics from Hormuzgan University. I work as a mobile
              application and front-end developer.
            </p>
            <Button name="Download CV" />
          </div>

          <div className={styles.progressContainer}>
            <p>react-native</p>
            <ProgressBar bgColor="rgb(250, 210, 77)" completed={70} />

            <p>reactjs</p>
            <ProgressBar bgColor="rgb(241, 65, 86)" completed={80} />

            <p>html&css</p>
            <ProgressBar bgColor="rgb(120, 120, 220)" completed={60} />
          </div>
        </section>
      </div>
    </div>
  );
}
