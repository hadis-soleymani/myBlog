//styles
import styles from "../../../styles/experience.module.css";

//Icons
import { HiOutlineAcademicCap } from "react-icons/hi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export const Experience_card = ({ date, title, icon }) => {
  return (
    <div>
      <div className={styles.icon_date_container}>
        {icon === "work" ? (
          <AiOutlineFundProjectionScreen
            color="rgb(241, 65, 86)"
            size={"2rem"}
          />
        ) : (
          <HiOutlineAcademicCap color="rgb(241, 65, 86)" size={"2rem"} />
        )}
        <p>{date}</p>
      </div>
      <div className={styles.detail_container}>
        <h2>{title}</h2>
        <p>
          n dboris lt incididunt eiusmod do. Magna deserunt elit eu eu id nisi
          amet nostrud non quis qui.
        </p>
      </div>
    </div>
  );
};
