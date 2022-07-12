import React from "react";

//styles
import styles from "./experience_card.module.css";

//Icons
import { HiOutlineAcademicCap } from "react-icons/hi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Experience_card = ({ date, title, icon, description }) => {
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
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Experience_card;
