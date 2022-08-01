import React from 'react';
import ContactCSS from '../styles/Contact.module.css';
import contactpic from '../img/22.png';

function Contact() {
  return (
    <section className={ContactCSS.contact}>
      <img
        className={ContactCSS.contactpic}
        src={contactpic}
        alt="alexs motto"
      />
      <p>
        [Phone number]
      </p>
      <p>
        [instagram]
      </p>
      <p>
        [email]
      </p>
      <p></p>
    </section>
  );
}

export default Contact;
