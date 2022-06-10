//styles
import styles from "../../styles/home.module.css";

//Icons
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";

export default function Home() {
  return (
    <div className={styles.container} id="home">
      <div className={styles.ItemsContainer}>
        <img src="/avatar.svg" alt="avatar"></img>
        <br />
        <h1>Hadis Soleymani</h1>
        <h3>Reactjs & React Native developer</h3>
        <div className={styles.iconContainer}>
          <FaInstagram />
          <AiOutlineLinkedin />
          <TbBrandTelegram />
          <FaWhatsapp />
          <AiFillGithub />
        </div>
      </div>
    </div>
  );
}
