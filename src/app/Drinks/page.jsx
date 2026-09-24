import React from 'react'
import { drinks } from '@/db'
import Image from 'next/image'
import styles from './page.module.css'

const Drink = () => {
    return (
        <div className={styles.drinks}>
            {
                drinks.map((prod) => {
                    return (
                        <div className={styles.drinks_card} key={prod.id}>
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

export default Drink