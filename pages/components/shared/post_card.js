import React from "react";

//styles
import styles from "../../../styles/posts.module.css";

const Post_card = ({ image }) => {
  return (
    <div className={styles.card_container}>
      <img src={`/${image}`} />
      <h2>Consequat magna ex minim duis occaecat </h2>
      <p>
        29 mey 2012<span>- Hadis Soleymani</span>
      </p>
    </div>
  );
};

export default Post_card;
