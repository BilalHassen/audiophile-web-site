import "./MidContentHeadphones.scss";
import { Link } from "react-router-dom";
export default function MidContentHeadphones() {
  return (
    <>
      <div className="midContentHeadphones">
        <div className="midContentHeadphones__img-container"></div>
        <div className="midContentHeadphones__text-box">
          <h1 className="midContentHeadphones__title">yx1 headphones</h1>
          <Link to="/products/1">
            <button className="midContentHeadphones__button">
              <p className="midContentHeadphones__button-txt">see product</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
