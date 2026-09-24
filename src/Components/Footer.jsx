import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>MyWebsite</h2>
          <p>
            Creating simple, powerful and modern digital experiences.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="#" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>

          <a href="#" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="#" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a href="#" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
}

