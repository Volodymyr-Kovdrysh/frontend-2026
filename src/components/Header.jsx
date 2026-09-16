const Header = ({ title = "Відгуки про курс" }) => {
  return (
    <header>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </header>
  );
};

export default Header;
