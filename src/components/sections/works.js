import React, { useState } from "react";
import Link from "next/link";

//styles
import styles from "./works.module.css";

//components
import Work_card from "../cards/work_card";
import Button from "../shared/button";

const Works = ({ allPortfolioData }) => {
  const [show, setShow] = useState(false);
  const show_more = () => {
    setShow(!show);
  };

  return (
    <div className={styles.works_container} id="works">
      <h1 data-aos="fade-up">Works</h1>

      <div className={styles.cards_container}>
        {allPortfolioData.map(({ id, width, title, poster_image }) => (
          <Work_card key={id} img={poster_image} name={title} width={width} />
        ))}
      </div>

      <Button name="Show more" onPress_func={show_more} />
    </div>
  );
};

export default Works;
