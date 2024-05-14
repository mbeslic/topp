import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Početna</NavLink>
          </li>
          <li>
            <NavLink to="/proizvodi">Proizvodi</NavLink>
          </li>
          <li>
            <NavLink to="/favoriti">Favoriti</NavLink>
          </li>
          <li>
            <NavLink to="/prijava">Prijava</NavLink>
          </li>
          <li>
            <NavLink to="/kosarica">Košarica</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
