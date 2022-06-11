import React from "react";
import Image from 'next/image'

//styles
import styles from "../styles/works.module.css";

const Work_card = ({ image, name }) => {
  return (
    <div className={styles.card_container}>
      <Image
        src={`/${image}`}
        alt="avatar"
        width={140}
        height={140}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default Work_card;
