import "../css/Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        ResumePro
      </div>

      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#templates">Templates</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
      </nav>

      <button className="login-btn">
        Login
      </button>
    </header>
  );
}