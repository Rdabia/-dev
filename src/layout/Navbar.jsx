import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="menu-container">
        <button onClick={() => setIsOpen(!isOpen)} className="menu-btn">
          ☰ Menu
        </button>

        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setIsOpen(false)}>Sign up/Login</Link>
          </li>
          <li>
            <Link to="/todo" onClick={() => setIsOpen(false)}>Todos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

