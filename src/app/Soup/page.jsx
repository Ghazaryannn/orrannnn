'use client'

import React from 'react'
import { FloatButton } from 'antd';
import { Soup } from '@/db'
import Image from 'next/image'
import styles from './page.module.css'

const Soupee = () => {
  return (
    <div className={styles.soup}>
    {
          Soup.map((prod) => {
            return (
                <div className={styles.soup_card} key={prod.id}>
                <Image width={300} height={200} src={prod.image} alt='img'/>
                <h2>{prod.name}</h2>
                <p>{prod.size}</p>
                <b>{prod.price}</b>
            </div>
            )
        })
    
    }
          <FloatButton.BackTop />
  </div>
  )
}

export default Soupee