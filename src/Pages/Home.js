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


const Home = () => {
  return (
    <>
      <section className="home-top">
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
      <section className="how-it-works">
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
      <section className="new-job-listing">
        {/* need to set firebase data structure up here first */}
      </section>
      <section className="find-top-talents">
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
      <section className="top-experts">
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
              <img src="https://placeimg.com/200/200/people" alt="placeholder image of a person" />
            </div>
            <p><strong>Billy Blinkers</strong></p>
            <p>Horse Whisperer</p>
          </div>
          <div className="expert">
            <div className="expert-image-container">
              <img src="https://placeimg.com/200/200/people" alt="placeholder image of a person" />
            </div>
            <p><strong>Candice Crackercorn</strong></p>
            <p>Kickboxer</p>
          </div>
          <div className="expert">
            <div className="expert-image-container">
              <img src="https://placeimg.com/200/200/people" alt="placeholder image of a person" />
            </div>
            <p><strong>Björn Smith</strong></p>
            <p>Stand-up Comedian</p>
          </div>
          <div className="expert">
            <div className="expert-image-container">
              <img src="https://placeimg.com/200/200/people" alt="placeholder image of a person" />
            </div>
            <p><strong>Dr. Martha Boop</strong></p>
            <p>Actual Doctor</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;