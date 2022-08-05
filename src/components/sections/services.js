//styles
import styles from "./services.module.css";

//components
import Service_card from "../cards/service_card";

export default function Services() {
  return (
    <div className={styles.services} id="services">
      <h1 data-aos="fade-up">Services</h1>
      <div className={styles.cards_container}>
        <Service_card
        
          title="html , css"
          bgcolor={"rgba(120, 120, 220,.7)"}
          color={"rgb(234, 233, 239)"}
          image={"images/mob.png"}
        />
        <Service_card
          title="reactjs developer"
          className={styles.Yellow}
          image={"images/web.png"}
          color={"#42474b"}
          bgcolor={"rgb(250, 210, 77)"}
        />
        <Service_card
          title="react native developer"
          bgcolor={"rgb(235, 84, 102)"}
          color={"rgb(234, 233, 239)"}
          image={"images/design.png"}
        />
      </div>
    </div>
  );
}
