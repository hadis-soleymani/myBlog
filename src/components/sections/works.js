import React, { useState, useEffect } from "react";
import Link from "next/link";

//styles
import styles from "./works.module.css";

//components
import Work_card from "../cards/work_card";
import Button from "../shared/button";

const Works = ({ allPortfolioData }) => {
  const [show, setShow] = useState(false);

  //To prevent the entry of undefine props
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => setIsBrowser(true), []);

  const show_more = () => {
    setShow(!show);
  };

  return isBrowser ? (
    <div className={styles.works_container} id="works">
      <h1 data-aos="fade-up">Works</h1>

      <div className={styles.cards_container}>
        {allPortfolioData.map(({ id, width, title, poster_image }) => (
          <Work_card key={id} img={poster_image} name={title} width={width} />
        ))}
      </div>

      <Button name="Show more" onPress_func={show_more} />
    </div>
  ) : null;
};

export default Works;
