import React from "react";
import Image from "next/image";

//styles
import styles from "./post_card.module.css";

const Post_card = ({ image }) => {
  return (
    <div className={styles.card_container} data-aos="zoom-in-up">
      <Image src={`/${image}`} alt="avatar" width={200} height={200} />
      <h2>Consequat magna ex minim duis occaecat </h2>
      <p>
        29 mey 2012<span>- Hadis Soleymani</span>
      </p>
    </div>
  );
};

export default Post_card;
