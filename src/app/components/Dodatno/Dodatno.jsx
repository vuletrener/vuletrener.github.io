import React from 'react'
import styles from "./Dodatno.module.css"

function Dodatno() {

    const phone = "+381621097098"
    const websiteUrl = "https://www.instagram.com/vuletrener/"
  return (
    <div className={styles.containerWrapper}>
    <div className={styles.container}>
        <p className={styles.last}>Ukoliko imaš dodatna pitanja, slobodno me pozovi ili mi pošalji poruku na instagram<br/><br/><a className={styles.link} href={`tel:${phone}`}>+381 62 1 097 098</a><br/><br/><a className={styles.link} href={websiteUrl} target="_blank" rel="noopener noreferrer">@vuletrener</a></p>
    </div>
    <p className={styles.end}>Vukašin Veizović - Tvoj trener</p>
    </div>
  )
}

export default Dodatno