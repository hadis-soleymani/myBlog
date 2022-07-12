import Head from "next/head";
import Landing_page from "../components/pages/landing_page";

export default function App() {
  return (
    <div>
      <Head>
        <title>Hadis Soleymani</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/avatar.svg" />
      </Head>
     <Landing_page/>
    </div>
  );
}
