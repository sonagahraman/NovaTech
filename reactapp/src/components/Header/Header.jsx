import React from "react";
import "./Header.css";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">

        <h1 className="logo">NovaTech</h1>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menyunu aç"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav active" : "nav"}>
          <ul>
            
            <li><a href="#about">Haqqımızda</a></li>
            <li><a href="#gallery">Qalereya</a></li>
            <li><a href="#contact">Əlaqə</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;