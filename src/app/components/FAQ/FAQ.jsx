'use client'

import React from 'react'
import styles from "./FAQ.module.css"
import Accordion from './Accordion'
function FAQ() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Česta pitanja</h2>
        <div className={styles.pitanja}>
            <Accordion title="Kada će se videti rezultati?">
                <p>Vidljive rezultate je realno očekivati <strong>posle 3 meseca redovnog treniranja</strong>. Zato pravimo testiranje na početku trenažnog procesa i nakon mesec dana treniranja. Tako ćemo videti realan učinak prema brojevima, što će nam poslužiti kao dodatna motivacija da nastavimo ka cilju. Svako ko tvrdi drugačije, izazivam ga da napravimo mini serijal gde ćemo jednom nedeljno praviti komparaciju i videti ko je upravu :)</p>
            </Accordion>
            <Accordion title="Koliko treba da traje trening?">
                <p>Za početnike, dobro koncipiran trening treba da traje između 45 i 60 minuta. To uključuje zagrevanje (razgibavanje), glavni deo treninga i istezanje. Naravno, uslov da se dobar trening odradi u ovom roku i da ima efekta je da: <strong>radiš vežbe pravilno, poštuješ pauze</strong> (za početnike 90 sekundi između serija i oko 120 sekundi između vežbi - ukoliko je neka vežba zahtevnija ide veća pauza), <strong>Ne kradeš, tj. ne kratiš pokret.</strong></p>
            </Accordion>
            <Accordion title="Šta mi je potrebno od opreme?">
                <p>Majica, šorc (helanke, trenerka), peškir i čiste patike.</p>
            </Accordion>
        </div>
    </div>
  )
}

export default FAQ