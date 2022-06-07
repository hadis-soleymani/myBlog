import styles from "../../styles/navbar.module.css";
import styled from "styled-components";

const Ul = styled.ul`
    list-style:none;
    display:flex;
    justify-content: right;
    margin: 2vh 2vw;
    z-index:15;
    li:hover{
      color:#f0f;
    }
    li{
        padding:2vw
    }
    @media (max-width: 768px){
        flex-direction:column;
        background-color: pink;
        margin:0;
        color:white;
        position:fixed;
        transition: all 0.3s linear;
        transform: ${props => props.open ? 'translateX(0)':'translateX(100%)' };
        right:0;
        top:0;
        padding-top:6vh;
        width:45vw;
        height: 100vh;

    }
`

export default function Navbar({open}) {
  return (
    <div className={styles.container}>
      <h1>حدیث سلیمانی</h1>
      <Ul open={open} >
        <li>خانه</li>
        <li>درباره ی من</li>
        <li>خدمات</li>
        <li>تجربه ها</li>
        <li>اعضای تیم</li>
        <li>وبلاگ</li>
        <li>ارتباط با من</li>
        <li>نمونه کار ها</li>
      </Ul>
    </div>
  );
}
