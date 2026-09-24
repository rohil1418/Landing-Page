import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="footer-logo-icon">
              <i className="fa-solid fa-house"></i>
            </span>
            <span>MyWebsite</span>
          </a>

          <p>
            Creating simple, powerful and modern digital experiences
            for everyone.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

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

      </div>

      <div className="footer-bottom">
        <p>© 2026 MyWebsite. All rights reserved.</p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}