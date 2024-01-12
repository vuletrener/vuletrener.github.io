

import styles from './page.module.css'
import Banner from "./components/Banner/Banner"
import Kartice from "./components/Kartice/Kartice"
import OMeni from './components/OMeni/OMeni'
import Paket from './components/Paket/Paket'
import FAQ from './components/FAQ/FAQ'
import Dodatno from './components/Dodatno/Dodatno'
import JedanZaSve from './components/JedanZaSve/JedanZaSve'

export default function Home() {
  return (
    <main className={styles.main}>
      <OMeni/>
      <Banner/>
      <Kartice/>
      <JedanZaSve />
      <FAQ/>
      <Dodatno/>
    </main>
  )
}
