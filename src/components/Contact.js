import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__heading">You can get in touch with me!</h1>
      <div className="contact__row">
        <div className="contact__text">
          <h1>How Can I Help You...?</h1>
          <p>Here are some of my fields i can help you.</p>
          <ol type="1" className="skill__list">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Photography</li>
          </ol>
        </div>

        <div className="contact__form">
          <form>
            <div className="form__fields">
              <label for="name">Name</label>
              <div className="input__field">
                <input type="text" className="input" name="name" id="name" />
                <FontAwesomeIcon className="icon" icon={faUser} />
              </div>
            </div>
            <div className="form__fields">
              <label for="email">Email</label>
              <div className="input__field">
                <input type="email" className="input" name="email" id="email" />
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
              </div>
            </div>
            <div className="form__fields">
              <label for="contact">Contact</label>
              <div className="input__field">
                <input
                  type="tel"
                  className="input"
                  name="contact"
                  id="contact"
                />
                <FontAwesomeIcon className="icon" icon={faMobile} />
              </div>
            </div>
            <div className="form__fields">
              <label for="message">Message</label>
              <div className="input__field">
                <textarea
                  className="input"
                  id="message"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className="form__fields">
              <div className="input__field">
                <button className="submit" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
