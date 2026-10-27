import { NavLink, Outlet } from "react-router";
import Header from "../components/Header.jsx";
function RootPage() {
  return (
    <>
      <Header />
      <nav className="container route-nav" aria-label="Основна навігація">
        <NavLink to="/" end>
          Відгуки
        </NavLink>
        <NavLink to="/about">Про застосунок</NavLink>
        <NavLink to="/params/7/React">Параметри</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default RootPage;
