import React from 'react'

//Components
import Hamburger from '../shared/hamburger';
import Home from '../sections/home';
import AboutMe from '../sections/about_me';
import Services from '../sections/services';
import Experience from '../sections/experience';
import Works from '../sections/works';
import Posts from '../sections/posts';
import Email from '../sections/email';
import Footer from '../shared/footer';


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