//styles
import styles from "../styles/services.module.css";
import Image from "next/image";

//libraries
import styled from "styled-components";

//styled component
const Div = styled.div`
width: 350px;
border-radius: 16px;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
padding: 1.5rem;
margin:1.3rem;
color: ${(props) => props.color};
background-color: ${(props) => props.bgcolor}; 
h2 {
  margin: 1vh 0 0 0;
  font-size: 1.4rem; 
} 
p {
font-size:1.2rem;
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
      <Image src={`/${props.image}`} alt="avatar" width={200} height={200} />
      <h2>{props.title}</h2>
      <p>
        Sit non fugiat aliquip id et irure. Occaecat velit in reprehenderit nisi
        officia commodo in adipisicing mollit sint dolore.
      </p>
    </Div>
  );
}
