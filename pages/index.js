import Head from "next/head";
import styles from "../styles/app.module.css";

//Components
import AboutMe from "./components/about_me";
import Hamburger from "./components/hamburger";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Services from "./components/services";

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
    </div>
  );
}
