import React from 'react'
import styles from "./JedanZaSve.module.css"

function JedanZaSve() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Jedna cena za sve!</h2>
        <div className={styles.card}>
            <h3 className={styles.price}>8.500 din <span className={styles.price2}>+ članarina za teretanu</span></h3>
            <div className={styles.list}>
                <p>&bull; Do 4 treninga nedeljno sa mnom</p>
                <p>&bull; Personalizovan plan treninga</p>
                <p>&bull; Saveti za ishranu</p>
                <p>&bull; Nedeljno praćenje napretka</p>
                <p>&bull; Neograničene konsultacije</p>
            </div>
            
        </div>
        <p className={styles.text}>Napravio sam ovu jedinstvenu ponudu kako bih ti omogućio fleksibilnost, ali takođe i kako bih te podstakao da redovno dolaziš na treninge. Možeš da dolaziš 1 ili 4 puta nedeljno, cena je ista. Ovaj sistem takođe otklanja finansijsku demotivaciju pri povećanju broja treninga kada se za tim pokaže potreba. Cena je za grupne treninge i to u grupi do 4 osobe.</p>
    </div>
  )
}

export default JedanZaSve