import styles from "../../styles/services.module.css";
export default function Service_card(props) {
  return (
    <div className={styles.container}>
        
      <img src={`/${props.image}`} alt="hgjh"></img>
      <h2>{props.title}</h2>
      <p>
        توضیحات توضیحات توضیحاتتوضیحات توضیحات توضیحات توضیحات توضیحات توضیحات
        توضیحات توضیحات توضیحات
      </p>
     
    </div>
  );
}
