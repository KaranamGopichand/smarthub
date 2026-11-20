
function Footer({ companyName }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>{companyName}</h2>
          <p>Your trusted product support center.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>

      <p className="footer-copyright">
        © {currentYear} {companyName}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
