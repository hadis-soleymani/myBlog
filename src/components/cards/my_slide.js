import React from "react";
import styles from "./my_slide.module.css";
import Image from "next/image";
import Slider from "react-styled-carousel";

const My_slide = ({ data }) => {
  return (
    <Slider
      className={styles.sliders_container}
      cardsToShow={1}
      pauseOnMouseOver={true}
      infinite={false}
    >
      {data.pic.map((item) => (
        <div className={styles.image_container} key={item.id}>
          <Image src={item.slide_pic_url} width={item.width} height={300} />
        </div>
      ))}
    </Slider>
  );
};

export default My_slide;
