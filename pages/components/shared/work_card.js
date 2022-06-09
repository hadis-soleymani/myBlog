import React from "react";

//styles
import styles from "../../../styles/works.module.css";

const Work_card = ({ image, name }) => {
  return (
    <div className={styles.card_container}>
      <img src={`/${image}`} />
      <h2>{name}</h2>
    </div>
  );
};

export default Work_card;
