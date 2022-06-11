import React, { useState } from "react";

//styles
import styles from "../../../styles/navbar.module.css";

//libraries
import styled from "styled-components";
import { Link } from "react-scroll";

//styled components
const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: right;
  z-index: 15;
  li:hover {
    color: rgb(226, 224, 74);
    transition: all 0.2s ease-in;
    cursor: pointer;
  }
  li {
    padding: 1.2vw;
    font-size: 1.3rem;
    font-weight: 600;
  }
  @media (max-width: 1200px) and (min-width: 300px) {
    flex-direction: column;
    background-color: #fff;
    margin: 0;
    color: #42474b;
    position: fixed;
    box-shadow: 3px 3px 10px #cbced1;
    transition: all 0.3s linear;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(-100%)"};
    left: 0;
    top: 0;
    padding-top: 8vh;
    width: 65vw;
    height: 100vh;
  }
`;

const H1 = styled.h1`
  @media (max-width: 1200px) and (min-width: 300px) {
    display: ${(props) => (props.open ? "none" : "inline")};
    position: relative;
    margin: 0 auto;
    font-size: 4vw;
    height: 4rem;
    line-height: 4rem;
  }
`;

export default function Navbar({ open }) {
  const [clicked, setClicked] = useState({
    Home: false,
    Services: false,
    AboutMe: false,
    Expriences: false,
    Works: false,
    Blog: false,
    ContactUs: false,
  });

  //click each item
  const clickedItem = (event) => {
    setClicked({ [event.target.text]: true });
  };

  return (
    <div className={styles.container}>
      <H1 open={open}>Hadis Soleymani</H1>
      <Ul open={open}>
        <li>
          <Link
            to="home"
            spy={true}
            className={clicked.Home ? styles.active_item : null}
            onClick={clickedItem}
            smooth={true}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about_me"
            spy={true}
            className={clicked.AboutMe ? styles.active_item : null}
            onClick={clickedItem}
            smooth={true}
          >
            AboutMe
          </Link>
        </li>
        <li>
          <Link
            to="services"
            spy={true}
            className={clicked.Services ? styles.active_item : null}
            onClick={clickedItem}
            smooth={true}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            spy={true}
            className={clicked.Expriences ? styles.active_item : null}
            onClick={clickedItem}
            smooth={true}
          >
            Expriences
          </Link>
        </li>
        <li>
          <Link
            to="works"
            spy={true}
            className={clicked.Works ? styles.active_item : null}
            onClick={clickedItem}
            smooth={true}
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            to="posts"
            spy={true}
            className={clicked.Blog ? styles.active_item : null}
            onClick={clickedItem}
            smooth={true}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="email"
            spy={true}
            className={clicked.ContactUs ? styles.active_item : null}
            onClick={clickedItem}
            smooth={true}
          >
            ContactUs
          </Link>
        </li>
      </Ul>
    </div>
  );
}
