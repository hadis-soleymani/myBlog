import styles from "../../styles/navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <h1>حدیث سلیمانی</h1>
      <ul className={styles.item_container}>
        <li>خانه</li>
        <li>درباره ی من</li>
        <li>خدمات</li>
        <li>تجربه ها</li>
        <li>اعضای تیم</li>
        <li>وبلاگ</li>
        <li>ارتباط با من</li>
        <li>نمونه کار ها</li>
      </ul>
    </div>
  );
}
