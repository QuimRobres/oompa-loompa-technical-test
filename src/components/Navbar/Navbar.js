import React from "react";
import image from "../../images/logo-umpa-loompa.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="navbar-content">
        <Link to={`/`}>
          <img src={image} alt="umpa-logo" />
        </Link>

        <h3>Oompa Loompa's Creew</h3>
      </div>
    </div>
  );
}
