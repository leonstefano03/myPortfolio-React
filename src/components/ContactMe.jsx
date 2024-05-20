import React from 'react';
import aliensContact from '../assets/alienContact.png';
import starsAlone from '../assets/starsAlone.png';
import '../style/ContactMe.css';

function ContactMe() {
  return (
    <section className="fondo" id="contact">
      <div className="cont-form">
        <div className="cont-formm">
          <h1>CONTACT ME</h1>
          <form
            className="form"
            action="https://formspree.io/f/mwkdkdya"
            method="POST"
            target="_blank"
          >
            <input
              className="input"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              name="lastName"
            />
            <input
              className="input"
              type="tel"
              placeholder="Phone"
              name="phone"
            />

            <input
              className="input"
              type="email"
              placeholder="E-Mail"
              name="email"
            />
            <textarea
              className="textarea"
              placeholder="Enter message"
              name="message"
            ></textarea>
            <center>
              <button className="buttonContact">Submit</button>
            </center>
          </form>
        </div>
      </div>

      <div className="container-line9">
        <div className="containerr-line9">
          <div className="line9"></div>
          <div className="line9"></div>
          <div className="line9"></div>
          <div className="line9"></div>

          <img className="starsAlone" src={starsAlone} alt="starsAlone" />
          <img
            className="alienContact"
            src={aliensContact}
            alt="alienContact"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
