import styles from "../../styles/navbar.module.css";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: right;
  z-index: 15;
  li:hover {
    color: rgb(226, 224, 74);
    transition: all 0.2s ease-in;
    cursor:pointer;
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
    display: ${(props) =>
      props.open  ? 'none' : "inline" };
    position:relative;
    margin: 0 auto;
    font-size:4vw;
    height:4rem;
    line-height:4rem;
  }
`;

export default function Navbar({ open }) {
  return (
    <div className={styles.container}>
      <H1 open={open}>Hadis Soleymani</H1>
      <Ul open={open}>
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Expriments</li>
        <li>Teamates</li>
        <li>Blog</li>
        <li>Contact us</li>
        <li>works</li>
      </Ul>
    </div>
  );
}
