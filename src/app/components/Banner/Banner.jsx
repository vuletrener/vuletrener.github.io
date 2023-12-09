"use client"
import React, { useState } from 'react';
import styles from './Banner.module.css';
import Image from 'next/image';

function Banner() {
  const [name, setName] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [buttonText, setButtonText] = useState('Zakaži moj BESPLATAN probni trening');
  const [nameRequired, setNameRequired] = useState(false);
  const [contactDetailsRequired, setContactDetailsRequired] = useState(false);
  const [dateRequired, setDateRequired] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameRequired(false);
  };

  const handleContactDetailsChange = (e) => {
    setContactDetails(e.target.value);
    setContactDetailsRequired(false);
  };

  const handleDateDetailsChange = (e) => {
    setSelectedDate(e.target.value);
    setDateRequired(false);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name || !contactDetails || !selectedDate) {
      // Update state to display required message in placeholders
      if (!name) setNameRequired(true);
      if (!contactDetails) setContactDetailsRequired(true);
      if (!selectedDate) setDateRequired(true);
      return; // Do not proceed with form submission
    }

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
        <h1 className={styles.title}>
          Hajde da zajedno izgradimo figuru u kojoj ćeš se osećati savršeno!
        </h1>
        <p className={styles.subtitle}>
          Na pravi, sportski i zdrav način, bez jo-jo efekata!
        </p>
        {formSubmitted ? (
          <div className={styles.successMessage}>
            <p className={styles.successText}>
              Uspešno smo zakazali tvoj probni trening. Uskoro ću te kontaktirati putem
              SMS-a ili DM-a da potvrdimo vreme. Molim te proveri unete podatke i ukoliko
              nisu tačni, samo klikni na dugme "Pošalji ponovo" i opet zakaži trening kako
              bi mogli da potvrdimo isti.
              <br />
              <br />
              <strong>
                Ime: {name}
                <br />
                Kontakt: {contactDetails}
              </strong>
              <br />
              <br />
              Hvala na poverenju i vidimo se uskoro!
            </p>
            <button
              className={styles.buttonAgain}
              onClick={() => {
                setFormSubmitted(false);
                // Only change the button text if all required fields are filled
                if (name && contactDetails && selectedDate) {
                  setButtonText('Zakaži moj BESPLATAN probni trening');
                }
              }}
            >
              Pošalji ponovo
            </button>
          </div>
        ) : (
          <form className={styles.form1}>
            <input
              className={`${styles.inputNaC} ${nameRequired ? styles.redText : ''}`}
              type="text"
              value={name}
              onChange={handleNameChange}
              required
              placeholder={nameRequired ? 'Ime *' : 'Ime'}
            />
            <input
              className={`${styles.inputNaC} ${contactDetailsRequired ? styles.redText : ''}`}
              type="text"
              value={contactDetails}
              onChange={handleContactDetailsChange}
              required
              placeholder={
                contactDetailsRequired
                  ? 'Broj telefona ili instagram @ *'
                  : 'Broj telefona ili instagram @'
              }
            />
            <input
              className={`${styles.inputDate} ${dateRequired ? styles.redText : ''}`}
              type="text"
              value={selectedDate}
              onChange={handleDateDetailsChange}
              required
              placeholder={dateRequired ? 'Datum i vreme (okvirno) *' : 'Datum i vreme (okvirno)'}
            />
            <button
              className={styles.button}
              type="button"
              onClick={(e) => {
                // Only change the button text if all required fields are filled
                if (name && contactDetails && selectedDate) {
                  setButtonText('Šalje se...');
                }
                sendEmail(e);
              }}
            >
              {buttonText}
            </button>
            <p className={styles.info}>
              Obećavam da ću ove informacije koristiti samo za potvrdu probnog treninga
              preko SMS-a ili DM-a i neću ih deliti ni sa kim. :)
            </p>
          </form>
        )}
      </div>
      <div className={styles.image}>
        <Image className={styles.img} src="/images/g4.png" alt="Transformisana devojka" fill={true} />
      </div>
    </div>
  );
}

export default Banner;
