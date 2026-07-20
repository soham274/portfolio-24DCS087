function Header({ name, themeColor }) {
  return (
    <header style={{ color: themeColor }}>
      <h1>Portfolio</h1>
      <h2>{name}</h2>
    </header>
  );
}

export default Header;