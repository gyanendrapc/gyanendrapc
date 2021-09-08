import React, { useState } from "react";
import "./Navbar.css";
import Home from "./Home";
import WebDevelopment from "./WebDevelopment";
import MobileAppDevelopment from "./MobileAppDevelopment";
import Photography from "./Photography";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const dropdownFunc = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
    console.log(dropdown);
  };
  return (
    <div className="navbar">
      <Router>
        <nav>
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <label for="learnings" onClick={dropdownFunc} className="">
                Learnings
              </label>
              <div
                className="learnings"
                name="learnings"
                style={{ display: `${dropdown ? "block" : "none"}` }}
              >
                <Link to="/web_development" className="nav-link">
                  Web Development
                </Link>
                <br />
                <Link to="/mobile_app_development" className="nav-link">
                  Mobile App Development
                </Link>
                <br />
                <Link to="/photography" className="nav-link">
                  Photography
                </Link>
                <br />
              </div>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/web_development">
            <WebDevelopment />
          </Route>
          <Route path="/mobile_app_development">
            <MobileAppDevelopment />
          </Route>
          <Route path="/photography">
            <Photography />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default Navbar;
