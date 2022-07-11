import Image from "next/image";
import Link from "next/link";


//styles
import styles from "../styles/home_sec.module.css";

//Icons
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";

export default function Home() {
  return (
    <div className={styles.container} id="home">
      <div className={styles.ItemsContainer}>
        
        {/* stons animation */}
        <div className={styles.stone} />
        <div className={styles.stone} />
        <div className={styles.stone} />
        <div className={styles.stone} />
        <div className={styles.stone} />
        <div className={styles.stone} />
        <div className={styles.stone} />

        <Image src="/avatar.svg" alt="avatar" width={140} height={140} />
        <br />
        <h1>Hadis Soleymani</h1>
        <h3>Reactjs & React Native developer</h3>
        <div className={styles.iconContainer} >
          <FaInstagram />
          <Link
            href="https://linkedin.com/in/hadis-soleymani-730104203/"
            passHref={true}
          >
            <a target="_blank" rel="noreferrer">
              <AiOutlineLinkedin />
            </a>
          </Link>
          <TbBrandTelegram />
          <FaWhatsapp />
          <Link href="https://github.com/hadis-soleymani/" passHref={true}>
            <a target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
