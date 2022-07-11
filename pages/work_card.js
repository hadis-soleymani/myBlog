import React from "react";
import Image from "next/image";
import Link from "next/link";

//styles
import styles from "../styles/works.module.css";

const Work_card = ({ image, name, video, git, download }) => {
  return (
    <div className={styles.card_container} data-aos="zoom-in-up">
      <Image src={`/${image}`} alt="avatar" width={140} height={140} />
      <h2>{name}</h2>

      {git != null && (
        <Link href={`${git}`}>
          <a target="_blank" rel="noreferrer">
            Github Code
          </a>
        </Link>
      )}
      {download != null && (
        <Link href={`${download}`}>
          <a target="_blank" rel="noreferrer">
            Download link
          </a>
        </Link>
      )}
      {video != null && (
        <Link href={`${video}`}>
          <a target="_blank" rel="noreferrer">
            Download Demo Video
          </a>
        </Link>
      )}
    </div>
  );
};

export default Work_card;
