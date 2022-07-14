import Head from "next/head";
import Landing_page from "./screens/landing_page";
import { getSortedPortfolioData } from '../lib/portfolio'

export default function App({allPortfolioData}) {
  return (
    <div>
      <Head>
        <title>Hadis Soleymani</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/avatar.svg" />
      </Head>
     <Landing_page allPortfolioData={allPortfolioData}/>
    </div>
  );
}
export async function getStaticProps() {
  const allPortfolioData = getSortedPortfolioData();
  return {
    props: {
      allPortfolioData,
    },
  };
}
