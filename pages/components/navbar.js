import styles from "../../styles/navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <h1>حدیث سلیمانی</h1>
      <div className={styles.item_container}>
        <p>خانه</p>
        <p>درباره ی من</p>
        <p>خدمات</p>
        <p>تجربه ها</p>
        <p>اعضای تیم</p>
        <p>وبلاگ</p>
        <p>ارتباط با من</p>
        <p>نمونه کار ها</p>
      </div>
    </div>
  );
}
