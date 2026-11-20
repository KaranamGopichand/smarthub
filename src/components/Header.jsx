
function Header({ title }) {
  return (
    <header className="site-header">
      <h2 className="site-logo">{title}</h2>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#products">Products</a>
        <a href="#support">Support</a>
        <a href="#register">Register</a>
      </nav>

      <a className="support-button" href="#support">
        Get Support
      </a>
    </header>
  );
}

export default Header;
