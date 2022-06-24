import React, {Component} from 'react';
import ContactCSS from '../styles/Contact.module.css';
import contactpic from "../img/adddrink-photo.png"
class Contact extends Component {
  render() {
    return (
      <section className={ContactCSS.contact}>
      <img
        className={ContactCSS.contactpic}
        src={contactpic}
        alt="alexs motto" />
      <p>
        [Phone number]
      </p>
      <p>
        [instagram]
      </p>
      <p>
        [email]
      </p>

    </section>
    )
  }
}

export default Contact;