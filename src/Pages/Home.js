// components
import Accordion from "../Components/Accordion";

// assets
import iconCircles from "../assets/icon-circles.png";
import arrowRight from "../assets/btn-arrow-right.png";
import iconPen from "../assets/icon-pen.png";
import iconCode from "../assets/icon-code.png";
import iconBriefcase from "../assets/icon-briefcase.png";
import iconPhone from "../assets/icon-phone.png";
import iconBank from "../assets/icon-bank.png";
import iconSettings from "../assets/icon-settings.png";
import line from "../assets/line.png"
import topTalents from "../assets/effect-circle-full.png"
import beginQuote from "../assets/icon-begin-quote.png"
import logoGoogle from "../assets/logo-google.png"
import logoDiscord from "../assets/logo-discord.png"
import logoDribbble from "../assets/logo-dribbble.png"
import logoWalmart from "../assets/logo-walmart.png"
import logoVine from "../assets/logo-vine.png"
import logoAirbnb from "../assets/logo-airbnb.png"
import arrowRightBig from "../assets/btn-arrow-continue-reading.png"
import arrowDrawn from "../assets/effect-arrow.png"
import drawnEffect from "../assets/effect-1.png"

const Home = () => {
  return (
    <>
      <section id="home-top">
        <div className="home-left">
          <h1>Home time</h1>
          <p>With the largest professional creative community online, simply search through our website.</p>
          <div className="home-search">
            <input type="text" name="home-search" id="home-search" />
            <button>Search</button>
          </div>
          <div className="home-circles">
            <img src={iconCircles} alt="" />
            <div className="circles-right">
              <p className="paragraph-bold">18k+</p>
              <p>Individual Freelancers</p>
            </div>
          </div>
        </div>
        <div className="home-right">
        </div>
        <div>
          <h2>Most Demanding Categories.</h2>
          <div>
            <a href="#">Explore All Fields</a>
            <a href="#"><img src={arrowRight} alt="" /></a>
          </div>
        </div>
        <div className="categories">
          <div className="category-button">
            <a href="#"><img src={iconPen} alt="" /></a>
            <a href="#">UI/UX Design</a>
          </div>
          <div className="category-button">
            <a href="#"><img src={iconCode} alt="" /></a>
            <a href="#">Development</a>
          </div>
          <div className="category-button">
            <a href="#"><img src={iconBriefcase} alt="" /></a>
            <a href="#">Marketing</a>
          </div>
          <div className="category-button">
            <a href="#"><img src={iconPhone} alt="" /></a>
            <a href="#">Telemarketing</a>
          </div>
          <div className="category-button">
            <a href="#"><img src={iconBank} alt="" /></a>
            <a href="#">Accounting</a>
          </div>
          <div className="category-button">
            <a href="#"><img src={iconSettings} alt="" /></a>
            <a href="#">Editing</a>
          </div>
        </div>
      </section>
      <section id="how-it-works">
        <div className="hiw-heading">
          {/* replace these with border tops?? */}
          <img src={line} alt="" />
          <h2>How's it work?</h2>
          <img src={line} alt="" />
        </div>
        <div className="one-two-three">
          <div className="one-two-three-box">
            <p className="green-box">01</p>
            <h4>Create Account</h4>
            <p>It's very easy to open an account and start your journey.</p>
          </div>
          <div className="one-two-three-box">
            <p className="green-box">02</p>
            <h4>Complete your profile</h4>
            <p>Complete your profile with all the info to get your client's attention.</p>
          </div>
          <div className="one-two-three-box">
            <p className="green-box">03</p>
            <h4>Apply for job or hire</h4>
            <p>Apply & set your preferred job requirements and get it</p>
          </div>
        </div>
      </section>
      <section id="new-job-listing">
        {/* need to set firebase data structure up here first */}
      </section>
      <section id="find-top-talents">
        <div className="top-talents-left">
          <a href=""><img src={topTalents} alt="" /></a>
        </div>
        <div className="top-talents-right">
          <h2>Find top talents from jobi.</h2>
          <Accordion heading="Seamless Search" content="It only takes 5 minutes. Set up is smooth and simple, with fully customizable page design to reflect your brand." />
          <img src={line} alt="" />
          <Accordion heading="Hire top talents" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sed autem deserunt ab soluta placeat repellat laudantium repudiandae nemo atque." />
          <img src={line} alt="" />
          <Accordion heading="Seamless Search" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque repellendus,  magni illum dignissimos error dolore." />
        </div>
      </section>
      <section id="top-experts">
        <div>
          <h2>Top Experts</h2>
          <div>
            <a href="#">Explore All</a>
            <a href="#"><img src={arrowRight} alt="" /></a>
          </div>
        </div>
        <div className="experts">
          <div className="expert">
            <div className="expert-image-container">
              <img src="https://loremflickr.com/200/200/man?random=1" alt="placeholder image of a person" />
            </div>
            <p><strong>Billy Blinkers</strong></p>
            <p>Horse Whisperer</p>
          </div>
          <div className="expert">
            <div className="expert-image-container">
              <img src="https://loremflickr.com/200/200/karate?random=2" alt="placeholder image of a person" />
            </div>
            <p><strong>Candice Crackercorn</strong></p>
            <p>Kickboxer</p>
          </div>
          <div className="expert">
            <div className="expert-image-container">
              <img src="https://loremflickr.com/200/200/comedian?random=3" alt="placeholder image of a person" />
            </div>
            <p><strong>Björn Smith</strong></p>
            <p>Stand-up Comedian</p>
          </div>
          <div className="expert">
            <div className="expert-image-container">
              <img src="https://loremflickr.com/200/200/child?random=1" alt="placeholder image of a person" />
            </div>
            <p><strong>Dr. Martha Boop</strong></p>
            <p>Actual Doctor</p>
          </div>
        </div>
      </section>
      <section id="feedback">
        <div className="feedback-box-left">
          <div className="inner-box-left">
            <img src={beginQuote} alt="" />
            {/* this has to be a carousel */}
            <h3>"The best service I've ever received from Jobi, and highly recommended.</h3>
          </div>
          {/* where do the arrows go?! */}
        </div>
        <div className="feedback-box-right">
          {/* carousel!? */}
        </div>
        <div className="feedback-lower">
          <p>TRUSTED BY <span className="green-text">500+ </span>COMPANIES</p>
          <div className="company-logos">
            <img src={logoGoogle} alt="" />
            <img src={logoDiscord} alt="" />
            <img src={logoDribbble} alt="" />
            <img src={logoWalmart} alt="" />
            <img src={logoVine} alt="" />
            <img src={logoAirbnb} alt="" />
          </div>
        </div>
      </section>
      <section id="guides">
        <div>
          <h2>Jobi Guides</h2>
          <div>
            <a href="#">Explore More</a>
            <a href="#"><img src={arrowRight} alt="" /></a>
          </div>
        </div>
        <div className="guides-container">
          <div className="guides-left">
            <div className="guides-image">
              <img src="https://loremflickr.com/340/200/layouts?random=1" alt="placeholder image" />
              <p className="guides-image-btn">SOLUTION</p>
            </div>
            <div className="guides-text">
              <p><span className="bold">Featured - </span>18 Jul 2018</p>
              <h4>Print, publishing qui visual quis layout mockups.</h4>
              <a href="#">Continue Reading <img src={arrowRightBig} alt="arrow pointing right" /></a>
            </div>
          </div>
          <div className="guides-right">
            <div className="guides-image">
              <img src="https://loremflickr.com/340/200/userexperience?random=1" alt="placeholder image" />
              <p className="guides-image-btn">DESIGN</p>
            </div>
            <div className="guides-text">
              <p>16 Jul 2018</p>
              <h4>Designer's Checklist for Every UX/UI Project.</h4>
              <a href="#">Continue Reading <img src={arrowRightBig} alt="arrow pointing right" /></a>
            </div>
          </div>
        </div>
      </section>
      <section id="bottom-banner">
        <div className="bottom-banner-left">
          <h3>Complete job portal for everyone.</h3>
          <div className="bottom-banner-btns">
            <p>Looking for a job?</p>
            <p>Post a job</p>
            <img src={arrowDrawn} alt="arrow pointing left" />
          </div>
        </div>
        <div className="bottom-banner-right">
          <img src="https://loremflickr.com/200/200/job?random=1" alt="placeholder image" />
          <img src={drawnEffect} alt="emphasis lines" />
        </div>
      </section>
    </>
  )
}

export default Home;