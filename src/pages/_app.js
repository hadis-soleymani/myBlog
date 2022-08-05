import { useEffect } from "react";

//add aos
import "../styles/globals.css";
import AOS from "aos";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  //for aos document error
  useEffect(() => {
    AOS.init({});
  }, []);
  return  (
   
      <Component {...pageProps} />
   
  )
}

export default MyApp;
