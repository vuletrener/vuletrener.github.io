'use client'
import React from 'react'
import { useState } from 'react';
import styles from "./Banner.module.css"
import Image from 'next/image'

function Banner() {
  const [name, setName] = useState('marko');
  const [contactDetails, setContactDetails] = useState('062 4557 457');
  const [selectedDate, setSelectedDate] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(true);
  const [buttonText, setButtonText] = useState("Zakaži moj BESPLATAN probni trening")

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleContactDetailsChange = (e) => {
    setContactDetails(e.target.value);
  };
  
  const handleDateDetailsChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const sendEmail = async (e) => {
    e.preventDefault()
    
    const formData = { name, contactDetails, selectedDate };

    
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setFormSubmitted(true);

    };

  return (
    <div className={styles.container}>
        <div className={styles.leftSide}>
            <h1 className={styles.title}>Hajde da zajedno izgradimo figuru u kojoj ćeš se osećati savršeno!</h1>
            <p className={styles.subtitle}>Na pravi, sportski i zdrav način, bez jo-jo efekata!</p>
            {formSubmitted ? (
        <div className={styles.successMessage}>
          <p className={styles.successText}>
            Besplatan probni trening je uspešno zakazan. Uskoro ću te kontaktirati putem SMS-a ili DM-a da potvrdimo vreme. Molim te proveri unete podatke i ukoliko nisu tačni, samo klikni na dugme "Pošalji ponovo" i opet zakaži trening kako bi mogli da potvrdimo isti.<br/><br/><strong>Ime: {name}<br/>Kontakt: {contactDetails}</strong><br/><br/>Hvala na poverenju i vidimo se uskoro! 
          </p>
          <button className={styles.buttonAgain} onClick={() => {setFormSubmitted(false); setButtonText("Zakaži moj BESPLATAN probni trening")}}>Pošalji ponovo</button>
        </div>
      ) : (
            <form className={styles.form1}>
              <input className={styles.inputNaC} type="text" value={name} onChange={handleNameChange} required placeholder="Ime"/>
              <input className={styles.inputNaC} type="text" value={contactDetails} onChange={handleContactDetailsChange} required placeholder="Broj telefona ili instagram @" />
              <input className={styles.inputDate} type="text" value={selectedDate} onChange={handleDateDetailsChange} required placeholder="Datum i vreme (okvirno)" />
              <button className={styles.button} type="button" onClick={(e) => {setButtonText("Šalje se..."); sendEmail(e)}}>
                {buttonText}
              </button>
              <p className={styles.info}>Obećavam da ću ove informacije koristiti samo za potvrdu probnog treninga preko SMS-a ili DM-a i neću ih deliti ni sa kim. :)</p>
            </form>
      )}
        </div>
        <div className={styles.image}>
            <Image className={styles.img} src="/images/g4.png" alt="Transformisana devojka" fill={true}/>
        </div>
    </div>
  )
}

export default Banner