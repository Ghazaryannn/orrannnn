import React from 'react'
import { wine } from '@/db'
import Image from 'next/image'
import styles from './page.module.css'

const Wine = () => {
  return (
    <div className={styles.wine}>
        {
                wine.map((prod) => {
                    return (
                        <div className={styles.wine_card} key={prod.id}>
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

export default Wine