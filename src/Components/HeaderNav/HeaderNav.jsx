import "./HeaderNav.scss";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <section className="header__nav">
      <ul className="header__nav-wrapper">
        <Link to="/#top">
          <li className="header__nav-item">home</li>
        </Link>
        <Link to="/headphones#top">
          <li className="header__nav-item">headphones</li>
        </Link>
        <Link to="/speakers#top">
          <li className="header__nav-item">speakers</li>
        </Link>
        <Link to="/earphones#top">
          <li className="header__nav-item">earphones</li>
        </Link>
      </ul>
    </section>
  );
}
