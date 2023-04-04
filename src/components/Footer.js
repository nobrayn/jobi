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
          <a className="jobi-email" href="mailto:jobisupport@company.com">jobisupport@company.com</a>
          <img src={lineGreen} alt="divider" />
          <div className="social-icons">
            <a href="#"><img className="logo-facebook" src={logoFacebook} alt="facebook logo" /></a>
            <a href="#"><img className="logo-twitter" src={logoTwitter} alt="twitter logo" /></a>
            <a href=""><img className="logo-linkedin" src={logoLinkedin} alt="linkedin logo" /></a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-col-one">
            <ul>
              <li><h5>Links</h5></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col-two">
            <ul>
              <li><h5>Products</h5></li>
              <li><a href="#">Take the tour</a></li>
              <li><a href="#">Live chat</a></li>
              <li><a href="#">Self-service</a></li>
              <li><a href="#">Mobile</a></li>
              <li><a href="#">Collaboration</a></li>
              <li><a href="#">Reviews</a></li>
            </ul>
          </div>
          <div className="footer-col-three">
            <ul>
              <li><h5>Legal</h5></li>
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Terms & conditions</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Cookie policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <a href="#"><p><strong>Privacy & Terms</strong></p></a>
          <a href="#"><p><strong>Contact Us</strong></p></a>
        </div>
        <div className="footer-bottom-ctr">
          <p>Copyright ©2023 jobi inc. </p>
        </div>
        <div className="footer-bottom-right">
          <a href="#"><img className="logo-facebook" src={logoFacebook} alt="facebook logo" /></a>
          <a href="#"><img className="logo-instagram" src={logoInstagram} alt="instagram logo" /></a>
          <a href="#"><img className="logo-pinterest" src={logoPinterest} alt="pinterest logo" /></a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;