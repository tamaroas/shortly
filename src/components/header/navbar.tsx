// Navbar.tsx
import React, { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false); // État pour suivre l'état du menu

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <h1 className="very-dack-Violet">Shortly</h1>
        {/* Menu pour les petits écrans */}
        <div className={styles.mobileMenu}>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            &#9776;
          </div>
          <div className={`${styles.menuItems} ${menuOpen ? styles.active : ""}`}>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
            <hr className="grayish-violet max-widht" />
            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">
                  <button className="btn-cyan-raduis-50 max-widht">Sign up</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Fin du menu pour les petits écrans */}
        {/* Liens principaux pour les grands écrans */}
        <ul className={styles.navLinks}>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
        {/* Liens de fin pour les grands écrans */}
        <ul className={styles.navLinksEnd}>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">
              <button className="btn-cyan-raduis-50">Sign up</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
