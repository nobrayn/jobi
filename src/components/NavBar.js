// modules
import { Link } from "react-router-dom";

// assets
import jobiLogoBlackText from "../assets/logo-jobi-with-text-black.png";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-left">
        <ul>
          <li>
            <Link to="/"><img src={jobiLogoBlackText} alt="jobi logo"></img></Link>
          </li>
          <li>
            <Link to="/">Category</Link>
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
      <div className="nav-right">
        <ul>
          <li>
            <Link to="/">Post Job</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/">Register</Link>
          </li>
          <li>
            <Link to="/">Hire Top Talents</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;