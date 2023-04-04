// modules
import { Link } from "react-router-dom";

// assets
import jobiLogoGreenBlackText from "../assets/logo-jobi-green-with-text-black.png";
import lineGreen from "../assets/line-green.png"
import logoFacebook from "../assets/logo-facebook.svg"
import logoLinkedin from "../assets/logo-linkedin.svg"
import logoTwitter from "../assets/logo-twitter.svg"
import logoPinterest from "../assets/logo-pinterest.svg"
import logoInstagram from "../assets/logo-instagram.svg"


const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="footer-left">
          <Link to="/"><img src={jobiLogoGreenBlackText} alt="jobi logo"></img></Link>
          <Link className="jobi-email" href="mailto:jobisupport@company.com">jobisupport@company.com</Link>
          <img src={lineGreen} alt="divider" />
          <div className="social-icons">
            <Link to="#"><img className="logo-facebook" src={logoFacebook} alt="facebook logo" /></Link>
            <Link to="#"><img className="logo-twitter" src={logoTwitter} alt="twitter logo" /></Link>
            <Link to=""><img className="logo-linkedin" src={logoLinkedin} alt="linkedin logo" /></Link>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-col-one">
            <ul>
              <li><h5>Links</h5></li>
              <li><Link to="#">Pricing</Link></li>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-col-two">
            <ul>
              <li><h5>Products</h5></li>
              <li><Link to="#">Take the tour</Link></li>
              <li><Link to="#">Live chat</Link></li>
              <li><Link to="#">Self-service</Link></li>
              <li><Link to="#">Mobile</Link></li>
              <li><Link to="#">Collaboration</Link></li>
              <li><Link to="#">Reviews</Link></li>
            </ul>
          </div>
          <div className="footer-col-three">
            <ul>
              <li><h5>Legal</h5></li>
              <li><Link to="#">Terms of use</Link></li>
              <li><Link to="#">Terms & conditions</Link></li>
              <li><Link to="#">Privacy</Link></li>
              <li><Link to="#">Cookie policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <Link to="#"><p><strong>Privacy & Terms</strong></p></Link>
          <Link to="#"><p><strong>Contact Us</strong></p></Link>
        </div>
        <div className="footer-bottom-ctr">
          <p>Copyright ©2023 jobi inc. </p>
        </div>
        <div className="footer-bottom-right">
          <Link to="#"><img className="logo-facebook" src={logoFacebook} alt="facebook logo" /></Link>
          <Link to="#"><img className="logo-instagram" src={logoInstagram} alt="instagram logo" /></Link>
          <Link to="#"><img className="logo-pinterest" src={logoPinterest} alt="pinterest logo" /></Link>
        </div>
      </div>
    </footer>
  )
};

export default Footer;