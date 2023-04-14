// components
import Accordion from "../Components/Accordion";
import NewJobListing from "../Components/NewJobListings";

// modules
import { useState } from 'react';
import { Link } from "react-router-dom";

// assets
import iconCircles from "../assets/icon-circles.png";
import arrowRight from "../assets/btn-arrow-right.png";
import iconPen from "../assets/icon-pen.png";
import iconCode from "../assets/icon-code.png";
import iconBriefcase from "../assets/icon-briefcase.png";
import iconPhone from "../assets/icon-phone.png";
import iconBank from "../assets/icon-bank.png";
import iconSettings from "../assets/icon-settings.png";
import line from "../assets/line.png";
import dots from "../assets/slider-buttons.png";
import topTalents from "../assets/effect-circle-full.png";
import beginQuote from "../assets/icon-begin-quote.png";
import logoGoogle from "../assets/logo-google.png";
import logoDiscord from "../assets/logo-discord.png";
import logoDribbble from "../assets/logo-dribbble.png";
import logoWalmart from "../assets/logo-walmart.png";
import logoVine from "../assets/logo-vine.png";
import logoAirbnb from "../assets/logo-airbnb.png";
import arrowRightBig from "../assets/btn-arrow-continue-reading.png";
import arrowDrawn from "../assets/effect-arrow.png";
import drawnEffect from "../assets/effect-1.png";
import arrowSquareLeft from "../assets/btn-arrow-square-left.png";
import arrowSquareRight from "../assets/btn-arrow-square-right.png";

const Home = () => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <section className="home" id="home-top">
        <div className="wrapper">
          <div className="home-top">
            <div className="home-left">
              <h1>Find your job without any hassle.</h1>
              <p>With the largest professional creative community online, simply search through our website.</p>
              <div className="search-btn">
                <input type="text" name="home-search" id="home-search" placeholder="Search job, title, etc..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <Link to={`/search?q=${encodeURIComponent(searchTerm)}`}><button>Search</button></Link>
              </div>
              <div className="home-circles">
                <img src={iconCircles} alt="circles" />
                <div className="circles-right">
                  <p><strong>18k+</strong></p>
                  <p>Individual Freelancers</p>
                </div>
              </div>
            </div>
            <div className="home-right">
              <img src="https://loremflickr.com/550/650/business" alt="placeholder"></img>
            </div>
          </div>
        </div>
      </section>
      <section id="demanding-categories">
        <div className="wrapper">
          <div className="demanding-categories">
            <div className="demanding-categories-top">
              <div>
                <h4>Most Demanding Categories.</h4>
              </div>
              <div className="explore-link">
                <Link to="#">Explore All Fields</Link>
                <Link to="#"><img src={arrowRight} alt="arrow pointing right" /></Link>
              </div>
            </div>
          </div>
          <div className="categories">
            <div className="category-button">
              <Link to="#"><img src={iconPen} alt="pen icon" /></Link>
              <Link to="#">UI/UX Design</Link>
            </div>
            <div className="category-button">
              <Link to="#"><img src={iconCode} alt="code icon" /></Link>
              <Link to="#">Development</Link>
            </div>
            <div className="category-button">
              <Link to="#"><img src={iconBriefcase} alt="briefcase icon" /></Link>
              <Link to="#">Marketing</Link>
            </div>
            <div className="category-button">
              <Link to="#"><img src={iconPhone} alt="phone icon" /></Link>
              <Link to="#">Telemarketing</Link>
            </div>
            <div className="category-button">
              <Link to="#"><img src={iconBank} alt="bank building icon" /></Link>
              <Link to="#">Accounting</Link>
            </div>
            <div className="category-button">
              <Link to="#"><img src={iconSettings} alt="settings icon" /></Link>
              <Link to="#">Editing</Link>
            </div>
          </div>
        </div>
      </section>
      <section id="how-it-works">
        <div className="wrapper how-it-works">
          <div className="hiw-heading">
            <div className="line">
            </div>
            <h2>How's it work?</h2>
            <div className="line">
            </div>
          </div>
          <div className="one-two-three">
            <div className="one-two-three-box">
              <p className="green-box">01</p>
              <h5>Create Account</h5>
              <p>It's very easy to open an account and start your journey.</p>
            </div>
            <div className="one-two-three-box">
              <p className="green-box">02</p>
              <h5>Complete your profile</h5>
              <p>Complete your profile with all the info to get your client's attention.</p>
            </div>
            <div className="one-two-three-box">
              <p className="green-box">03</p>
              <h5>Apply for job or hire</h5>
              <p>Apply & set your preferred job requirements and get it!</p>
            </div>
          </div>
        </div>
      </section>
      <section className="new-job-listings" id="new-job-listings">
        <div className="wrapper new-job-listings-header">
          <h3>New Job Listing</h3>
          <ul className="new-job-listings-header-menu">
            <li>
              <Link to="#">All Categories</Link>
            </li>
            <li>
              <Link to="#">Design</Link>
            </li>
            <li>
              <Link to="#">Developer</Link>
            </li>
            <li>
              <Link to="#">Marketing</Link>
            </li>
            <li>
              <Link to="#">Business</Link>
            </li>
          </ul>
        </div>
        <NewJobListing />
      </section>
      <section id="find-top-talents">
        <div className="wrapper find-top-talents">
          <div className="top-talents-left">
            <Link to=""><img src={topTalents} alt="screenshot of webpage with three job seekers listed" /></Link>
          </div>
          <div className="top-talents-right">
            <h2>Find top talents from jobi.</h2>
            <Accordion heading="Seamless Search" content="It only takes 5 minutes. Set up is smooth and simple, with fully customizable page design to reflect your brand." />
            <img src={line} alt="" />
            <Accordion heading="Hire top talents" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sed autem deserunt ab soluta placeat repellat laudantium repudiandae nemo atque." />
            <img src={line} alt="" />
            <Accordion heading="Seamless Search" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque repellendus,  magni illum dignissimos error dolore." />
          </div>
        </div>
      </section>
      <section id="top-experts">
        <div className="wrapper">
          <div className="top-experts-top">
            <h2>Top Experts</h2>
            <div className="explore-link">
              <Link to="#">Explore All</Link>
              <Link to="#"><img src={arrowRight} alt="arrow pointing right" /></Link>
            </div>
          </div>
          <div className="experts">
            <div className="expert">
              <div className="expert-image-container">
                <img src="https://loremflickr.com/200/200/man?random=1" alt="placeholder of a person" />
              </div>
              <p><strong>Billy Blinkers</strong></p>
              <p>Horse Whisperer</p>
            </div>
            <div className="expert">
              <div className="expert-image-container">
                <img src="https://loremflickr.com/200/200/karate?random=2" alt="placeholder of a person" />
              </div>
              <p><strong>Candice Crackercorn</strong></p>
              <p>Kickboxer</p>
            </div>
            <div className="expert">
              <div className="expert-image-container">
                <img src="https://loremflickr.com/200/200/comedian?random=3" alt="placeholder of a person" />
              </div>
              <p><strong>Björn Smith</strong></p>
              <p>Stand-up Comedian</p>
            </div>
            <div className="expert">
              <div className="expert-image-container">
                <img src="https://loremflickr.com/200/200/child?random=1" alt="placeholder of a person" />
              </div>
              <p><strong>Dr. Martha Boop</strong></p>
              <p>Actual Doctor</p>
            </div>
          </div>
          <div className="break">
            <img src={dots} alt="break" />
          </div>
        </div>
      </section>
      <section id="feedback">
        <div className="wrapper feedback">
          <div className="feedback-upper">
            <div className="feedback-box-left">
              <div className="inner-box-left">
                <img src={beginQuote} alt="quotation marks" />
                {/* this has to be a carousel eventually */}
                <h4>"The best service I've ever received from Jobi, and highly recommended.</h4>
                <p><strong>Zubayer Al Hasan</strong>, Dhaka</p>
              </div>
              {/* where do the arrows go?! */}
              <div className="square-arrows">
                <div className="arrow-square-left">
                  <img src={arrowSquareLeft} alt="left arrow" />
                </div>
                <div className="arrow-square-right">
                  <img src={arrowSquareRight} alt="right arrow" />
                </div>
              </div>
            </div>
            <div className="feedback-box-right">
              {/* carousel!? */}
              <h3>Our Customer Feedback</h3>
            </div>
          </div>
          <div className="feedback-lower">
            <p>TRUSTED BY <span className="green-text">500+ </span>COMPANIES</p>
            <div className="company-logos">
              <img src={logoGoogle} alt="google logo" />
              <img src={logoDiscord} alt="discord logo" />
              <img src={logoDribbble} alt="dribbble logo" />
              <img src={logoWalmart} alt="walmart logo" />
              <img src={logoVine} alt="vine logo" />
              <img src={logoAirbnb} alt="airbnb logo" />
            </div>
          </div>
        </div>
      </section>
      <section id="guides">
        <div className="wrapper">
          <div>
            <h2>Jobi Guides</h2>
            <div>
              <Link to="foo">Explore More</Link>
              <Link to="#"><img src={arrowRight} alt="arrow pointing right" /></Link>
            </div>
          </div>
          <div className="guides-container">
            <div className="guides-left">
              <div className="guides-image">
                <img src="https://loremflickr.com/340/200/layouts?random=1" alt="placeholder" />
                <p className="guides-image-btn">SOLUTION</p>
              </div>
              <div className="guides-text">
                <p><span className="bold">Featured - </span>18 Jul 2018</p>
                <h4>Print, publishing qui visual quis layout mockups.</h4>
                <Link to="#">Continue Reading <img src={arrowRightBig} alt="arrow pointing right" /></Link>
              </div>
            </div>
            <div className="guides-right">
              <div className="guides-image">
                <img src="https://loremflickr.com/340/200/userexperience?random=1" alt="placeholder" />
                <p className="guides-image-btn">DESIGN</p>
              </div>
              <div className="guides-text">
                <p>16 Jul 2018</p>
                <h4>Designer's Checklist for Every UX/UI Project.</h4>
                <Link to="#">Continue Reading <img src={arrowRightBig} alt="arrow pointing right" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="bottom-banner">
        <div className="wrapper">
          <div className="bottom-banner-left">
            <h3>Complete job portal for everyone.</h3>
            <div className="bottom-banner-btns">
              <p>Looking for a job?</p>
              <p>Post a job</p>
              <img src={arrowDrawn} alt="arrow pointing left" />
            </div>
          </div>
          <div className="bottom-banner-right">
            <img src="https://loremflickr.com/200/200/job?random=1" alt="placeholder" />
            <img src={drawnEffect} alt="emphasis lines" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;