import React, { useState, useEffect } from "react";
import Link from "next/link";

//styles
import styles from "./portfolio.module.css";

//components
import Portfolio_card from "../cards/portfolio_card";
import Button from "../shared/button";

const Portfolio = ({ allPortfolioData }) => {
  const [show, setShow] = useState(false);

  //To prevent the entry of undefine props
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => setIsBrowser(true), []);

  const show_more = () => {
    setShow(!show);
  };

  return isBrowser ? (
    <div className={styles.portfolio_container} id="portfolio">
      <h1 data-aos="fade-up">Portfolio</h1>

      <div className={styles.cards_container}>
        {allPortfolioData.map(({ id, width, title, poster_image }) => (
          <Portfolio_card key={id} img={poster_image} name={title} width={width} route={id}/>
        ))}
      </div>

      <Button name="Show more" onPress_func={show_more} />
    </div>
  ) : null;
};

export default Portfolio;
