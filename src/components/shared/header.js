import React from "react";
import Link from 'next/link'
import styles from "./header.module.css";
import { TiArrowBack } from "react-icons/ti";
const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <TiArrowBack size={40} />
      </Link>
    </header>
  );
};

export default Header;
