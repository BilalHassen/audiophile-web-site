import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
export default function Header() {
  return (
    <>
      <section className="header">
        <FontAwesomeIcon icon={faBars} className="header__icon" />
      </section>
    </>
  );
}
