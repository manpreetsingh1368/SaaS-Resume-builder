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

  <Link to="/templates">Templates</Link>

  <Link to="/pricing">Pricing</Link>

  <a href="#faq">FAQ</a>
</nav>

      <button className="login-btn">
        Login
      </button>
    </header>
  );
}