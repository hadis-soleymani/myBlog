import React, { useState } from "react";

//styles
import styles from "../styles/works.module.css";

//components
import Work_card from "./work_card";
import Button from "./button";

const Works = () => {
  const [show, setShow] = useState(false);
  const show_more = () => {
    setShow(!show);
  };

  return (
    <div className={styles.works_container} id="works">
      <h1>Works</h1>
      <div className={styles.cards_container}>
        <Work_card
          image={"plant.svg"}
          name="Nahalito"
          download="https://cafebazaar.ir/app/com.nahalito"
          video="https://drive.google.com/file/d/1CDIVUGcOu4sYOgrC5XXT0ctMS0bT7mSS/view?usp=sharing"
        />
        <Work_card
          git="https://github.com/hadis-soleymani/online-shop"
          video="https://drive.google.com/file/d/1nEJrapesXABVkn5qHzOQKotRO0Nwx9Qw/view?usp=sharing"
          image={"online-shop.svg"}
          name="Online Shop"
        />
        <Work_card
          download="https://cafebazaar.ir/app/com.scanqrcode"
          video="https://drive.google.com/file/d/1oWtT4Krg-OgnAaAjqzkAikV1EYPJY87z/view?usp=sharing"
          image={"wallet.svg"}
          name="wallet"
        />
        {show ? (
          <>
            <Work_card
              image={"wallet-management.svg"}
              name="Wallet Management"
              video="https://drive.google.com/file/d/1IuMEVaYsVfla1yabOlhukdx-gUi0F9lm/view?usp=sharing"
            />
            <Work_card
              image={"chat.svg"}
              video=" https://drive.google.com/file/d/1yTTDOzcG6RhjeuI3o1DT0gyIJZ-c19Uz/view?usp=sharing"
              name="Automation"
            />
            <Work_card
              image={"login.svg"}
              git="https://github.com/hadis-soleymani/signin"
              video="https://drive.google.com/file/d/12FUFfckU1RUU-IvEAT5e1rbn0RaIok05/view?usp=sharing"
              name="Authentication test"
            />
          </>
        ) : null}
      </div>

      <Button name="Show more" onPress_func={show_more} />
    </div>
  );
};

export default Works;
