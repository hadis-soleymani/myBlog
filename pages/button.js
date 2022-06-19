//styles
import styles from "../styles/button.module.css";

const Button = ({ name, onPress_func,children }) => {
  return (
    <button onClick={onPress_func} className={styles.button}>
      {children} {name}
    </button>
  );
};

export default Button;
