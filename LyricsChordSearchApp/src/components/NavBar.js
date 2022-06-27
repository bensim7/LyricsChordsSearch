import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/Lyrics"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Lyrics Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Chords"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Chords Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Favorites"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
