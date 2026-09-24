'use client'
import React from 'react'
import { scrambled } from '@/db'
import Image from 'next/image'
import styles from './page.module.css'

const Scrambled = () => {
  return (
    <div className={styles.scrambled}>
        {
            scrambled.map((prod) => {
                return (
                <div className={styles.scrambled_card} key={prod.id}>
                  <Image width={300} height={200} src={prod.image} alt='img'/>
                  <h2>{prod.name}</h2>
                  <b>{prod.price}</b>
                </div>
                )
            })
        }

    </div>
  )
}

export default Scrambled