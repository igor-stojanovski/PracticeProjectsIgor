import React from "react";
import MainLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={MainLogo} alt="Logo image" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
