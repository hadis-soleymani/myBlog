//styles
import styles from "../styles/services.module.css";
import Image from "next/image";

//libraries
import styled from "styled-components";

//styled component
const Div = styled.div`
width: 280px;
border-radius: 16px;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
padding: 1rem 0 4rem 0;
margin:1.3rem;
color: ${(props) => props.color};
background-color: ${(props) => props.bgcolor}; 
h2 {
  margin: 1vh 0 0 0;
  font-size: 1.1rem; 
} 
p {
font-size:.9rem;
text-align: center;
}
}
`;

export default function Service_card(props) {
  return (
    <Div
      className={styles.container}
      color={props.color}
      bgcolor={props.bgcolor}
    >
      <Image src={`/${props.image}`} alt="avatar" width={170} height={170} />
      <h2>{props.title}</h2>
    </Div>
  );
}
