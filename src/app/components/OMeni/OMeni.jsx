import React from 'react'
import styles from "./OMeni.module.css"
import Image from 'next/image'

function OMeni() {
  return (
    <div className={styles.container}>
      <div className={styles.imgAndText}>
        <div className={styles.image}>
          <Image className={styles.img} src="/images/ja.jpg" alt="Vule trener na pobedničkom postolju" fill={true}/>
        </div>
        <div>
          <h2 className={styles.title}>O meni</h2>
          <p className={styles.text}>
          Zdravo, ja sam Vukašin Veizović, personalni trener i trener rvanja. Trenerskim poslom se bavim preko 4 godine, a u januaru 2023. sam na Fakultetu sporta i fizičkog vaspitanja stekao i stručno zvanje ,,Operativni trener rvanja”, gde sam usavršio svoje veštine prenošenja znanja iz sporta i fitnesa na druge, ali i proširio svoj asortiman vežbi snage i kondicije kojima ću ti pomoći da oblikuješ svoje telo baš onako kako želiš.<br/><br/>Jako sam posvećen svom poslu i cilj mi je da pomognem svakom mom polazniku da kroz trening postane najbolja verzija sebe, kako fizički tako i mentalno. Verujem da trening nije samo stvar izgleda, već i prostor gde prevazilazimo svakodnevne izazove, oslobađamo negativnu energiju i razbistrujemo um.<br/><br/>Moja filozofija vođenja treninga fokusira se na rekompoziciju celog tela, doprinoseći boljem zdravlju i održavanju željenog fizičkog izgleda na duže staze. Ne pratim klasične treninge koji se rade u teretani; umesto toga, trudim se da svaki trening bude dinamičan, sportski, ali i uravnotežen kako bismo efikasno postigli željene rezultate uz pravilan rad i minimalan rizik od povreda.<br/><br/><strong>Treninge držim u Sportskom centru Vračar (Sjenička 1, Beograd).<br/>Moj broj telefona je: +381 62 1 097 098</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default OMeni