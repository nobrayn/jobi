// modules
import { Link } from "react-router-dom";

// assets
import jobiLogoWhiteText from "../assets/logo-jobi-with-text-white.png";
import effectZigzag from "../assets/effect-zigzag.png";
import categoryBtn from "../assets/btn-category.png";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav nav-left">
          <ul>
            <li className="jobi-logo">
              <Link to="/"><img src={jobiLogoWhiteText} alt="jobi logo"></img></Link>
            </li>
            <li className="category-btn">
              <Link to="/"><img src={categoryBtn} alt="" />Category</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobList">Job</Link>
            </li>
            <li>
              <Link to="/">Explore</Link>
            </li>
            <li>
              <Link to="#footer">Contact</Link>
            </li>
            <li>
              <Link to="https://paigethai.com/" target={"_blank"}>Pages</Link>
            </li>
          </ul>
        </div>
        <div className="nav nav-c">
          <img src={effectZigzag} alt="zigzag effect" />
        </div>
        <div className="nav nav-right">
          <ul>
            <li>
              <Link to="/">Post Job</Link>
            </li>
            <li className="login-btn">
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/">Register</Link>
            </li>
            <li className="talents-btn">
              <Link to="/">Hire Top Talents</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default NavBar;