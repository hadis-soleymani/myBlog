import React, { Fragment } from "react";
import Image from "next/image";
import styles from "./portfolio.module.css";
import { getAllPortfolioIds, getPortfolioData } from "../../lib/portfolio";
import Header from "../../components/shared/header";

import My_slide from "../../components/cards/my_slide";
import Link from "next/link";

const Portfolio_detail = ({ portfolioData }) => {
  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        <h1>
          Project name:
          <span>
            <i>{portfolioData.title}</i>
          </span>
        </h1>

        <br />

        <My_slide data={portfolioData} />
        <h1>Project description:</h1>
        <p className={styles.text}>
          exercitation. Ea enim cillum proident eiusmod deserunt aliquip.
          Officia sint occaecat qui exercitation magna mollit elit deserunt.
          Sunt ipsum commodo ea sunt proident voluptate fugiat in. Sint sit
          cupidatat et fugiat culpa Lorem culpa sit non occaecat laborum
        </p>
        <video controls>
          <source src={portfolioData.video} type="video/mp4" />
        </video>
        <h1>Technologies used in the project:</h1>

        <br />
        <div
          className={styles.html_container}
          dangerouslySetInnerHTML={{ __html: portfolioData.contentHtml }}
        />

        <div className={styles.buttons_container}>
          {portfolioData.bazar != null && (
            <Link href={`${portfolioData.bazar}`}>
              <a target="_blank" rel="noreferrer">
                <Image
                  src="/images/bazar.png"
                  width={100}
                  height={40}
                  layout="fixed"
                />
              </a>
            </Link>
          )}
          {portfolioData.github != null && (
            <Link href={`${portfolioData.github}`}>
              <a target="_blank" rel="noreferrer">
                <Image
                  src="/images/github.svg"
                  width={50}
                  height={50}
                  layout="fixed"
                />
              </a>
            </Link>
          )}
          {portfolioData.google_drive != null && (
            <Link href={`${portfolioData.google_drive}`}>
              <a target="_blank" rel="noreferrer">
                <Image
                  src="/images/google_drive.svg"
                  width={50}
                  height={50}
                  layout="fixed"
                />
              </a>
            </Link>
          )}
          {portfolioData.internet != null && (
            <Link href={`${portfolioData.internet}`}>
              <a target="_blank" rel="noreferrer">
                <Image
                  src="/images/internet.svg"
                  width={50}
                  height={50}
                  layout="fixed"
                />
              </a>
            </Link>
          )}
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio_detail;

export async function getStaticPaths() {
  const paths = getAllPortfolioIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolioData = await getPortfolioData(params.id);
  return {
    props: {
      portfolioData,
    },
  };
}
