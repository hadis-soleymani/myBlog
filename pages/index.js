import Head from "next/head";
import styles from "../styles/app.module.css";

//Components
import AboutMe from "./components/about_me";
import Experience from "./components/experience";
import Hamburger from "./components/hamburger";
import Home from "./components/home";
import Posts from "./components/Posts";
import Services from "./components/services";
import Works from "./components/works";

export default function App() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hamburger />
      <Home />
      <AboutMe />
      <Services/>
      <Experience/>
      <Works/>
      <Posts />
    </div>
  );
}
