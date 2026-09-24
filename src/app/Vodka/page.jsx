import React from 'react'
import { vodka } from '@/db'
import Image from 'next/image'
import styles from './page.module.css'

const Vodka = () => {
  return (
    <div className={styles.vodka}>
         {
                vodka.map((prod) => {
                    return (
                        <div className={styles.vodka_card} key={prod.id}>
                            <Image width={300} height={200} src={prod.image} alt='img' />
                            <h2>{prod.name}</h2>
                            <p>{prod.size}</p>
                            <b>{prod.price}</b>
                        </div>
                    )
                })
            }
    </div>
  )
}

export default Vodka