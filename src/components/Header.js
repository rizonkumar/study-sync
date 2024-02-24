import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import LOGO from "../assets/StudySyn.svg";
import Hamburger from "../assets/Hamburger.svg";

const Header = () => {
  return (
    <div className={classes.header}>
      <header className={classes.headerContent}>
        <Link to="/" className={classes.logo}>
          <img src={LOGO} alt="logoName" className={classes.logoIcon} />
          <span className={classes.logoText}>StudySync</span>
        </Link>
        <nav className={classes.nav}>
          <ul className={classes.navList}>
            <li>
              <Link to="/" className={classes.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" className={classes.navLink}>
                Features
              </Link>
            </li>
            <li>
              <Link to="/pricing" className={classes.navLink}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/blog" className={classes.navLink}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className={classes.navLink}>
                About
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/contact-us" className={classes.contactButton}>
          Contact Us
        </Link>

        <button type="button" className={classes.menuButton}>
          <img src={Hamburger} className={classes.menuIcon} alt="Hamburger" />
        </button>
      </header>
    </div>
  );
};

export default Header;
