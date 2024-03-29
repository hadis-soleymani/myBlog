import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

//styles
import styles from "./about_me.module.css";
import Image from "next/image";
//libraries
import ProgressBar from "@ramonak/react-progress-bar";

//components
import Button from "../shared/button";

export default function AboutMe() {
  const router = useRouter()
  return (
    <div className={styles.container} id="about_me" >
      
      <h1 data-aos="fade-up" onClick={() => router.push('/screens/work_detail')}>About me</h1>

      <div className={styles.Ttemscontainer} data-aos="flip-right">
        <Image src="/images/avatar.svg" alt="avatar" width={150} height={150} />
        <section>
          <div className={styles.resume}>
            <p>
              Hello, My name is Hadis Soleymani.I have a bachlor degree in
              electronics from Hormuzgan University. I work as a mobile
              application and front-end developer.
            </p>
            <Button>
              <Link href="https://drive.google.com/file/d/1ieiRKiHLGQg4xgelZt_C1waOEn7_k_Lm/view?usp=sharing">
                <a target="_blank" rel="noreferrer">
                  Download Resume
                </a>
              </Link>
            </Button>
          </div>

          <div className={styles.progressContainer}>
            <p>react-native</p>
            <ProgressBar bgColor="rgb(250, 210, 77)" completed={70} />

            <p>reactjs</p>
            <ProgressBar bgColor="rgb(241, 65, 86)" completed={80} />

            <p>html&css</p>
            <ProgressBar bgColor="rgb(120, 120, 220)" completed={60} />
          </div>
        </section>
      </div>
    </div>
  );
}
