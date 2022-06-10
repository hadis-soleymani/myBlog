//styles
import styles from "../../styles/email.module.css";

//components
import Button from "./shared/button";

export default function Email() {
  return (
    <div className={styles.email_container} id="email">
      <h1>Get in Toucch</h1>
      <div>
        <div className={styles.paragraph_container}>
          <h2>Lets talk about everything!</h2>
          <p>
            Dont like forms? send me an <span>email</span>
          </p>
        </div>
        <form>
          <input placeholder="Your name"></input>
          <input placeholder="Email address"></input>
          <input placeholder="Subject"></input>
          <textarea placeholder="Message"></textarea>
          <Button name="Send Message" />
        </form>
      </div>
    </div>
  );
}
