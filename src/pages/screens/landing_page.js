import React from 'react'

//Components
import Hamburger from '../../components/shared/hamburger';
import Home from '../../components/sections/home';
import AboutMe from '../../components/sections/about_me';
import Services from '../../components/sections/services';
import Experience from '../../components/sections/experience';
import Works from '../../components/sections/works';
import Posts from '../../components/sections/posts';
import Email from '../../components/sections/email';
import Footer from '../../components/shared/footer';


const Landing_page = () => {
  return (
    <>
     <Hamburger />
      <Home />
      <AboutMe />
      <Services />
      <Experience />
      <Works />
      <Posts />
      <Email />
      <Footer />
    </>
  )
}

export default Landing_page