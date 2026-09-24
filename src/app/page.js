'use client'

import Cards from "@/components/Cards";
import { FloatButton } from 'antd';
import styles from "./page.module.css";
import Link from "next/link";


const Home = ()  => {
  return (
    <main className={styles.main}>
      <div className={styles.bc_main}>
        <div className={styles.welcome}>
          <h1>Բարի գալուստ <br /> <span>Օրրան</span></h1>
          <Link href='/Menu'><button className={styles.btn}>Մեր մենյուն</button></Link>
        </div>
      </div>
      <Cards />
      <FloatButton.BackTop />
    </main>
  );
}

export default Home
