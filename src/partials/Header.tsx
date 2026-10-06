import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/settings" aria-label="Seasons">
        <h1>Seasons</h1>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        <NavLink
          className={({ isActive }) =>
            `nav-link${isActive ? " is-active" : ""}`
          }
          to="/settings"
        >
          Settings
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `nav-link${isActive ? " is-active" : ""}`
          }
          to="/preview"
        >
          Preview
        </NavLink>
      </nav>
    </header>
  );
}
