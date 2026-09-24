import React from 'react'
import { FaHome } from "react-icons/fa";
import { TbBuildingCottage } from "react-icons/tb";
import { LuPartyPopper } from "react-icons/lu";
import styles from './Cards.module.css'
import Link from 'next/link';

const Cards = () => {
    return (
        <div className={styles.cards_main}>
            <div className={styles.card}>
            <FaHome className={styles.home} />
                <h3>Փայտե <span>տնակներ</span></h3>
                <p className={styles.p}>Սա այն վայրն է, որտեղ դուք կարող եք կտրվել առօրյա հոգսերից, վայելել պարզությունն ու հարմարավետությունը, ինչպես նաև համեղ ընթրել սիրելիների շրջապատում:</p>
                <Link href='/Cabins'><button className={styles.btnn}>Տեսնել</button></Link>
            </div>
            <div className={styles.card}>
                <TbBuildingCottage className={styles.home} />
                <h3>Հարմարավետ <span>քոթեջներ</span></h3>
                <p className={styles.p}>Այստեղ հանգստանալը ձեզ կտա  հանգստի զգացողություն, կարողություն`ուժերը վերականգնելու և բնությունը վայելելու բացառիկ հնարավորություն։</p>
                <Link href='/Cottage'><button className={styles.btnn}>Տեսնել</button></Link>
            </div>
            <div className={styles.card}>
                <LuPartyPopper className={styles.party} />
                <h3>Հանդիսությունների <span>սրահ</span></h3>
                <p className={styles.p}>Մեր  սրահը  նախատեսված է տարբեր միջոցառումներ անցկացնելու համար՝ հարսանիքներ, տարեդարձներ, կորպորատիվ միջոցառումներ, կոնֆերանսներ և այլ տոնակատարություններ:</p>
                <Link href='/Banquet'><button className={styles.btnn}>Տեսնել</button></Link>
            </div>
        </div>
    )
}

export default Cards