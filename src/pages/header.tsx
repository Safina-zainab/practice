import "../pages/style.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="li">
            <Link to="/">Home</Link>
          </li>
          <li className="li">
            <Link to="/about">About</Link>
          </li>
          <li className="li">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="li">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
