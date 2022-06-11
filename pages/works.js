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
        <Work_card image={"plant.svg"} name="Nahalito" />
        <Work_card image={"online-shop.svg"} name="Online Shop" />
        <Work_card image={"wallet.svg"} name="Smart City" />
        {show ? (
          <>
            <Work_card
              image={"wallet-management.svg"}
              name="Wallet Management"
            />
            <Work_card image={"chat.svg"} name="Automation" />
            <Work_card image={"login.svg"} name="Authentication test" />
          </>
        ) : null}
      </div>

      <Button name="Show more" onPress_func={show_more} />
    </div>
  );
};

export default Works;