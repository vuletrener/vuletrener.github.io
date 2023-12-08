import React from 'react'
import styles from "./Paket.module.css"

function Paket() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Paketi treninga</h2>
        <div className={styles.cards}>
            <div className={styles.card}>
            <p className={styles.info}>
            ✔ 3 treninga nedeljno sa mnom<br/>(grupa do 4 osobe)<br/>
            ✔ Neograničeno korišćenje teretane ceo mesec<br/>
            ✔ Personalizovan pristup za najbrže i najbolje rezultate<br/>
            ✔ Whatsapp grupa za pitanja i savete<br/>
            ✔ Saveti za ishranu</p>
            <p className={styles.price}>Cena paketa<br/>12.000 RSD / mesečno</p>
            </div>
            <div className={styles.card}>
            <p className={styles.info}>
            ✔ 4 treninga nedeljno sa mnom<br/>(grupa do 4 osobe)<br/>
            ✔ Neograničeno korišćenje teretane ceo mesec<br/>
            ✔ Personalizovan pristup za najbrže i najbolje rezultate<br/>
            ✔ Whatsapp grupa za pitanja i savete<br/>
            ✔ Saveti za ishranu</p>
            <p className={styles.price}>Cena paketa<br/>14.500 RSD / mesečno</p>
            </div>
            <div className={styles.card}>
            <p className={styles.info}>
            ✔ 3 treninga nedeljno sa mnom<br/>(individualno 1 na 1)<br/>
            ✔ Neograničeno korišćenje teretane ceo mesec<br/>
            ✔ Personalizovan plan treninga na ciklusnom nivou (mezo i makro ciklus)<br/>
            ✔ Whatsapp grupa za pitanja i savete<br/>
            ✔ Saveti za ishranu</p>
            <p className={styles.price}>Cena paketa<br/>26.000 RSD / mesečno</p>
            </div>
        </div>
    </div>
  )
}

export default Paket