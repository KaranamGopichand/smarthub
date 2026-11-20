function Header({ title }) {
  return (
    <header>
      <h2>{title}</h2>

      <nav>
        <a href="#products">Products</a>
        <a href="#support">Support</a>
        <a href="#register">Register</a>
      </nav>
    </header>
  );
}

export default Header;