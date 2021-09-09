import React from "react";
import "./Photography.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Photography() {
  return (
    <div className="photography">
      {/* search */}
      <div className="photography__search">
        <input
          className="photography__search__input"
          type="text"
          placeholder="Search"
        />
        <FontAwesomeIcon
          className="photography__search__icon"
          icon={faSearch}
        />
      </div>
      <div className="gallery">
        <div className="gallery__category">
          <h1>Category</h1>
          <ul>
            <li>
              <input type="checkbox" value="nature" />
              <span>Nature</span>
            </li>
            <li>
              <input type="checkbox" value="animal" />
              <span>Animal</span>
            </li>
            <li>
              <input type="checkbox" value="general" />
              <span>General</span>
            </li>
          </ul>
        </div>
        <div className="gallery__images">
          <div className="cover__image">
            <img src="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photography;
