import React from 'react'
import Image from 'next/image';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import img from '../../public/logo.png'
import Link from 'next/link';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_left}>
        <p className={styles.about}>
          <span> About the restaurant</span> Փնտրու՞մ եք վայր, որտեղ կարող եք վայելել հիանալի խոհանոց օրվա ցանկացած ժամի,ապա բարի գալուստ մեր ռեստորան։Մենք աշխատում ենք ձեզ համար 24/7: Լինի դա առավոտյան նախաճաշ, թե ուշ ընթրիք երկար և  աշխատանքային հոգնած օրվանից հետո, մենք միշտ ուրախ ենք ձեզ մատուցել թարմ պատրաստված ուտեստներ: Այցելեք մեզ և վայելեք հարմարավետությունն ու հաճելի մթնոլորտը, երբ ցանկանում եք
          Սիրով սպասում ենք Օրրան ռեստորան
        </p>
        <div className={styles.icons}>
          <a href=""><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
        </div>
      </div>
      <div className={styles.footer_right}>
        <Image src={img} alt="logo"  width={200}/>
        <div className={styles.menu}>
          <ul>
           <li> <Link href='/Menu'>Մենյու</Link></li>
          </ul>
        </div>
        <p className={styles.name}> Orran &copy; 2024</p>
      </div>
    </footer>
  )
}

export default Footer