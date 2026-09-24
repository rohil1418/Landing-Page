import "./Navbar.css";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        <span className="logo-icon">
          <i className="fa-solid fa-house"></i>
        </span>
        <span className="logo-text">MyWebsite</span>
      </a>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="navbar-cta">
        Get Started
        <i className="fa-solid fa-arrow-right"></i>
      </a>
    </nav>
  );
}
