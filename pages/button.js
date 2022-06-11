//styles
import styles from "../styles/button.module.css";

const Button = ({ name, onPress_func }) => {
  return (
    <button onClick={onPress_func} className={styles.button}>
      {name}
    </button>
  );
};

export default Button;
