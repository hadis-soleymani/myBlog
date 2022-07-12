import React from "react";
import Image from "next/image";
import Slider from "react-styled-carousel";
import Slide_card from "./slide_card";
import styles from "../styles/work_detail.module.css";

const Work_detail = () => {
  return (
    <div className={styles.container}>
      <header>
        
      </header>
      <video width="600" controls>
        <source src="r.mp4" type="video/mp4" />
      </video>
      <div>
        <h2>project</h2>
        <p>
          uat consequat. Ut si est veniam. Cillum labore veniam voluptate sunt
          do cupidatat in qui culpa dolore commodo. Veniam aliqua duis do amet.
        </p>
      </div>
      <Slider
        className={styles.sliders_container}
        cardsToShow={4}
        pauseOnMouseOver={true}
        infinite={false}
      >
        <Image src="https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657628512/logo_eo9odn.png" width={150} height={300} /> 
        <Image src="/2.jpg" width={150} height={300} />
        <Image src="/3.jpg" width={150} height={300} />
        <Image src="/4.jpg" width={150} height={300} />
        <Image src="/5.jpg" width={150} height={300} />
        <Image src="/6.jpg" width={150} height={300} />
      </Slider>
    </div>
  );
};

export default Work_detail;
