import React from "react";
import Image from "next/image";
import Link from "next/link";

//styles
import styles from "./work_card.module.css";

const Work_card = ({ img, name, width }) => {
  return (
    <div className={styles.card_container} data-aos="zoom-in-up">
      <div className={styles.img_container}>
        <Image
          src={img}
          alt="avatar"
          width={width}
          height={180}
          layout="fixed"
          style={{
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            zIndex: -2,
          }}
        />
      </div>
      <h2>{name}</h2>
    </div>
  );
};

export default Work_card;
