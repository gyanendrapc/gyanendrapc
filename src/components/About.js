import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="image__wrapper">
        <img src="/images/gyanendrapc.png" />
      </div>
      <div className="dev__info">
        <h1 className="dev__name">GyanendraPC</h1>
        <h4 className="dev__email">chaudharygyane699@gmail.com</h4>
        <p className="dev__thought">
          <q>
            The way we fight for something we want
            <br /> decides the time we achieve our goal
          </q>
        </p>
      </div>
    </div>
  );
}

export default About;
