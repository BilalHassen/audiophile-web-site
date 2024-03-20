import "./HeaderNav.scss";

export default function HeaderNav() {
  return (
    <section className="header__nav">
      <ul className="header__nav-wrapper">
        <li className="header__nav-item one">home</li>
        <li className="header__nav-item">headphones</li>
        <li className="header__nav-item">speakers</li>
        <li className="header__nav-item">earphones</li>
      </ul>
    </section>
  );
}
