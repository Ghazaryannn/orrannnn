'use client'
import React, { useState } from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import styles from './Header.module.css'
import Link from 'next/link';

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className={styles.header_main}>
      
      <div className={styles.header}>
        <div className={styles.header_left_logo}>
          <Link href='/'><Image src={logo} width={200} alt='img' /></Link>
        </div>
        <div className={open ? styles.open : styles.header_center_service}>
          <ul>
            <li>Գլխավոր</li>
            <li>Մենյու</li>
            <li>Մեր մասին</li>
          </ul>
        </div>
        <div className={open ? styles.openn : styles.header_right_contact}>
          <div className={styles.phone}>
            <FaPhoneAlt className='phone_icon' /><a>+374 93 370077</a>
          </div>
          <span className={styles.span}>|</span>
          <div className={styles.location}>
            <IoLocation className='location_icon' /><p>Հայաստան / Կոտայքի մարզ,գյուղ Սոլակ</p>
          </div>
        </div>
        <div className={styles.header_menu_mobile} onClick={() => setOpen(!open)}>
          {
            open ? <IoMdClose /> : <IoMdMenu />
          }
        </div>
      </div>
    </header>
  )
}

export default Header