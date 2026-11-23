
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">VDART</div>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <ul className={`list ${menuOpen ? "active" : ""}`}>
                <li>
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>
                        About Us
                    </Link>
                </li>

                <li>
                    <Link to="/services" onClick={() => setMenuOpen(false)}>
                        Services
                    </Link>
                </li>

                <li>
                    <Link to="/careers" onClick={() => setMenuOpen(false)}>
                        Careers
                    </Link>
                </li>

                <li>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </Link>
                </li>

                <li>
                    <Link to="/login" onClick={() => setMenuOpen(false)}>
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
