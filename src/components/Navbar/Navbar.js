import React from "react";
import image from "../../images/logo-umpa-loompa.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="navbar-content">
        <img src={image} alt="umpa-logo" />
        <h3>Oompa Loompa's Creew</h3>
      </div>
    </div>
  );
}
