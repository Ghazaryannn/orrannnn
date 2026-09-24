'use client'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import { FloatButton } from 'antd';
import { Hot_dishes } from '@/db';


const Hotdish = () => {
  return (
        <div className={styles.hotdishes}>
      {
            Hot_dishes.map((prod) => {
              return (
                  <div className={styles.hotdishes_card} key={prod.id}>
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

export default Hotdish