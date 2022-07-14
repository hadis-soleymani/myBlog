import React from "react";
import Image from "next/image";
import Slider from "react-styled-carousel";

import styles from "./work_detail.module.css";

const Work_detail = () => {
  return (
    <div className={styles.container}>
      <header>
        
      </header>
      <video width="600" height='400' controls>
        <source src="https://res.cloudinary.com/dzmzdqy8q/video/upload/v1657650687/B612_20220529_195149_314_e98swn.mp4" type="video/mp4" />
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
        <Image src="https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657650345/1_kboe41.jpg" width={150} height={300} /> 
        <Image src="https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657644874/2_Copy_n2qaf1.jpg" width={150} height={300} />
        <Image src="https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657650455/4_buqyzn.jpg" width={150} height={300} />
        <Image src="https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657650500/5_r7uvp4.jpg" width={150} height={300} />
        <Image src="https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657650541/6_kkdhvl.jpg" width={150} height={300} />
        <Image src="https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657650576/3_dprl2c.jpg" width={150} height={300} />

      </Slider>
    </div>
  );
};

export default Work_detail;
