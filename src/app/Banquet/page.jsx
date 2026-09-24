'use client'
import React from 'react'
import img1 from '../../../public/srah1.jpg'
import img2 from '../../../public/srah2.jpg'
import img3 from '../../../public/srah3.jpg'
import img4 from '../../../public/srah4.jpg'
import img5 from '../../../public/srah5.jpg'
import img6 from '../../../public/srah6.jpg'
import img7 from '../../../public/srah7.jpg'
import img8 from '../../../public/srah8.jpg'
import Image from 'next/image'
import { FloatButton } from 'antd';
import styles from './page.module.css'

const Banquet = () => {
    return (
        <div className={styles.banquet}>
            <div className={styles.grid_wrapper}>
                <div className={styles.big} >
                    <Image src={img7} alt="img" className={styles.grid_img} />
                </div>
                <div className={styles.wide}>
                    <Image src={img6} alt="img" className={styles.grid_img} />
                </div>
                <div className={styles.tall}>
                    <Image src={img4} alt="img" className={styles.grid_img} />
                </div>
                <div className={styles.tall}>
                    <Image src={img5} alt="img" className={styles.grid_img} />
                </div>
                <div className={styles.wide}>
                    <Image src={img3} alt="img" className={styles.grid_img} />
                </div>
                <div className=''>
                    <Image src={img1} alt="img" className={styles.grid_img} />
                </div>
                <div className=''>
                    <Image src={img2} alt="img" className={styles.grid_img} />
                </div>
            </div>
            <FloatButton.BackTop />
        </div>
    )
}

export default Banquet