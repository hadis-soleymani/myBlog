import React from "react";
import Image from "next/image";
import Link from "next/link";

//styles
import styles from "./portfolio_card.module.css";

const Portfolio_card = ({ img, name, width, route }) => {
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
      <Link href={`/portfolio/${route}`}>
        <h2>{name}</h2>
      </Link>
    </div>
  );
};

export default Portfolio_card;
