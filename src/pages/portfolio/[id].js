import React from "react";
import Image from "next/image";
import Slider from "react-styled-carousel";
import { getAllPortfolioIds, getPortfolioData } from "../../lib/portfolio";

const Portfolio_detail = ({ portfolioData }) => {
  return (
    <div>
      {portfolioData.title}
      <br />
      {portfolioData.id}
      <br />
      {portfolioData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: portfolioData.contentHtml }} />
    </div>
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
