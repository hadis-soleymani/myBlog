import styles from "../../styles/about_me.module.css";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <h1>درباره ی من</h1>

      <div>
        <img src="/profile.jpg" alt="hgjh"></img>
        <section>
          <div>
            <p>
              من حدیث سلیمانی هستم مهندس الکترونیک دانشگاه هرمزگان و هم اکنون
              توسعه دهنده ی اپلیکیشن اندروید و ios و توسعه دهنده ی فرانت اند وب
              سایت هستم.
            </p>
            <button>دانلود رزومه</button>
          </div>

          <div></div>
        </section>
      </div>
    </div>
  );
}
