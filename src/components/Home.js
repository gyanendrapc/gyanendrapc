import React from "react";
import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="home">
      <div className="row">
        <div className="developer__image">
          <div className="image">
            <img src="/images/gyanendrapc.png" alt="developer-image" />
          </div>
        </div>
        <div className="developer__info">
          <h1 className="title">Web Developer</h1>
          <p className="description">Fuck it until you make it!</p>

          <div className="social__icons">
            <ul>
              <li>
                <a href="https://www.facebook.com/gyanendrapc">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/gyane-chaudhary-790994180/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/@Gyanendrapc">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://github.com/gyanendrapc">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
