import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import HeroImage from "./../assets/Hero-image.jpg";

import { useRef } from "react";

import backgroundImg from "./../assets/background-img.svg";
import icon1 from "../assets/icon-1.svg";
import icon2 from "../assets/icon-2.svg";
import icon3 from "../assets/icon-3.svg";

import whyNowImage from "../assets/why-now-image.jpg";
import imageSolution from "../assets/image-solution.svg";

// import Carousel from "react-multi-carousel";
import RenuShah from "./../assets/team/Renu-shah.jpg";
// import SheetalPratik from "./../assets/team/Sheetal Pratik.jpg";
import SushmitaKaneri from "./../assets/team/Sushmita Kaneri.jpg";
import TaraGopal from "./../assets/team/Tara Gopal.jpg";
import NehaVatsala from "./../assets/team/Neha Vatsala.jpg";
import AbhiYadav from "./../assets/team/Abhi Yadav.jpg";

import logo from "./../assets/logo.png";
import location from "../assets/contact us/location.svg";
import phone from "../assets/contact us/phone.svg";
import email from "../assets/contact us/email.svg";

const Body = () => {
  const background = useRef(null);
  const aboutUs = useRef(null);
  // const whyNow = useRef(null);
  const ourSolution = useRef(null);
  const team = useRef(null);
  const contactUs = useRef(null);
  const home = useRef(null);

  return (
    <div className="body">
      <div className="header">
        <div className="headerLeft">
          <div className="logoContainer">
            <img
              src={logo}
              alt="logo"
              onClick={() => home.current.scrollIntoView()}
            />
          </div>
        </div>
        <div className="headerCenter">
          <div className="headerLinks">
            <p onClick={() => background.current.scrollIntoView()}>
              Background
            </p>
            <p onClick={() => ourSolution.current.scrollIntoView()}>
              What we do
            </p>
            <p onClick={() => aboutUs.current.scrollIntoView()}>About us</p>
            <p onClick={() => team.current.scrollIntoView()}>Team</p>
            <p onClick={() => contactUs.current.scrollIntoView()}>Contact us</p>
          </div>
        </div>
        <div className="headerRight">
          <a href="https://forms.gle/HbMrASD6bpjoymKV8">
            <button className="btn mobileHeader">Register/Login now</button>
          </a>
        </div>
      </div>
      <div className="bodyHeroContainer" ref={home}>
        <div className="bodyHeroText">
          <p className="bodyHeroTextEnglish textLineHeightBody">
            SHEEE is India's first women-only platform that connects women in
            the grey collar segment to job opportunities
          </p>

          <p className="bodyHeroTextHindi textLineHeightBody">
            SHEEE भारत का पहला एकमात्र ऐसा मंच है जो महिलाओं को ग्रे कॉलर
            सेगमेंट में नौकरी के अवसरों से जोड़ता है।
          </p>
          <hr style={{ marginTop: "20px" }} />
          <a
            href="https://forms.gle/HbMrASD6bpjoymKV8"
            className="registerNow marginTopMed hindiregister secondaryBtn"
            style={{ marginTop: "20px", color: "#ffffff" }}
          >
            {" "}
            रजिस्टर/लॉग इन करें
          </a>
          <a href="https://forms.gle/HbMrASD6bpjoymKV8">
            <button className="btn registerNowEnglish marginTopMed">
              Register/Login now{" "}
            </button>
          </a>
        </div>
        <div className="bodyHeroImgContainer">
          <img src={HeroImage} alt="hero" />
        </div>
      </div>
      <div className="bodybackground" ref={background}>
        <div className="bodyBackgroundHeading">
          <h2>Background भूमिका</h2>
        </div>
        <div className="bodyBackgroundContainer">
          <div className="backgroundLeft">
            <img src={backgroundImg} />
          </div>
          <div className="backgroundRight">
            <div className="backgroundTextItem">
              <img src={icon1} />
              <div className=" backgroundTextItemText">
                <p>
                  Female Labour Force Participation (FLFP) rate is less than
                  20%, lower than even countries like Bangladesh, Nepal and Sri
                  Lanka
                </p>
                <p className="backgroundTextItemText marginTopMed">
                  भारत में महिला श्रम बल भागीदारी (FLFP) दर 20% से भी कम है और
                  इस सन्दर्भ में भारत का स्थान बांग्लादेश, नेपाल और श्रीलंका
                  जैसे देशों से भी नीचे आता है।
                </p>
              </div>
            </div>

            <div className="backgroundTextItem">
              <img src={icon2} />
              <div className=" backgroundTextItemText">
                <p>
                  Only 5 out of the top 15 sectors in skilling are focussing on
                  women covering traditional areas like apparel, beauty,
                  healthcare etc. There is no focus on Future of Work skills.
                </p>
                <p className="backgroundTextItemText marginTopMed">
                  कौशल विकास में शीर्ष 15 क्षेत्रों में से केवल 5 क्षेत्र
                  महिलाओं पर केंद्रित हैं और वो भी परिधान, सौंदर्य, स्वास्थ्य
                  सेवा आदि जैसे पारंपरिक क्षेत्रों तक सिमित हैं। भविष्य में
                  उपयोग होने वाले आधुनिक कार्य कौशल विकास पर विशेष ध्यान नहीं
                  है।
                </p>
              </div>
            </div>

            <div className="backgroundTextItem">
              <img src={icon3} />
              <div className=" backgroundTextItemText">
                <p>
                  8M women are dropping out from the education system and are
                  being added to this pool of unemployed women every year.
                </p>
                <p className="backgroundTextItemText marginTopMed">
                  प्रति वर्ष 80 लाख शिक्षित लड़कियाँ स्कूल व कॉलेज से ड्राप आउट
                  हो कर बेरोजगार महिलाओं की सँख्या में जुड़ रहीं हैं।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bodyWhynow">
        <div className="bodyWhyNowContainer">
          <div className="bodyWhyNowContainerLeft">
            <img src={whyNowImage} />
          </div>
          <div className="bodyWhyNowContainerRight">
            <h2> Why now शीघ्रता की आवश्यकता</h2>
            <ul>
              <li>
                Increasing women participation will push India’s GDP by 27%{" "}
                <br />
                कार्यक्षेत्र में महिलाओं की भागीदारी बढ़ने से भारत के GDP 27%
                बढ़त आ सकती है।
              </li>
              <li>
                90M Gig economy new jobs are going to be added by 2025
                <br />
                वर्ष 2025 तक गिग इकॉनमी में 9 करोड़ तक नौकरियाँ जुड़ने की संभावना
                हैं।
              </li>
              <li>
                There are 1M+ STEM educated women in India who can be trained in
                emerging gig economy jobs
                <br />
                भारत में 10 लाख+ STEM शिक्षित महिलायें हैं जिन्हें, उभरती हुई
                गिग इकॉनमी की नौकरियों में प्रशिक्षित किया जा सकता है।
              </li>
              <li>
                There is a Global focus on Gender Equality
                <br />
                महिलाओं की समानता पर वैश्विक ज़ोर है।
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bodySolution" ref={ourSolution}>
        <div className="bodySolutionContainer">
          <div className="bodySolutionLeft">
            <div className="bodySolututionHeading">
              <h2 className="bodySolutionHeadingEnglish">
                <span>
                  Our <br />{" "}
                </span>{" "}
                Solution
              </h2>
              <h2 className="bodySolutionHeadingHindi">
                <span> हमारा </span> <br /> समाधान
              </h2>
            </div>
            <div className="bodySolutionTextContainer">
              <div className="bodySolutionText">
                SHEEE is India's first women-only platform that connects women
                in the grey collar segment to job opportunities. We provide a
                roadmap through a curated DISCOVERY, NURTURING and PLACEMENT
                program. <br />
                SHEEE भारत का पहला एकमात्र ऐसा मंच है जो महिलाओं को ग्रे कॉलर
                सेगमेंट में नौकरी के अवसरों से जोड़ता है। हम महिला आकांक्षियों
                को एक विशेष रूप से क्यूरेट किया गया - खोज-विकास-नौकरी का
                प्लेटफार्म प्रदान करते हैं।
              </div>
            </div>
          </div>
          <div className="bodySolutionRight">
            <img src={imageSolution} />
          </div>
        </div>
      </div>
      <div className="bodyAboutUs" ref={aboutUs}>
        <div className="bodyAboutUsContainer">
          <div className="bodyAboutUsHeading">
            {" "}
            <div>About us</div>
          </div>
          <div className="bodyAboutUsTextContainer">
            <div className="bodyAboutUsLeft">
              <h2>विज़न Vision</h2>
              <p>
                To build a gender balanced world by linking
                <br /> women to economic opportunities <br />
                महिलाओं को आर्थिक अवसरों से जोड़कर एक पुरुष-स्त्री
                <br /> संतुलित विश्व का निर्माण करना
              </p>
            </div>
            <div className="bodyAboutUsRight">
              <h2>उद्देश्य Mission</h2>
              <p>
                To build employment connections for 10 million
                <br /> women
                <br />1 करोड़ महिलाओं को रोजगार से संपर्क करना
              </p>
            </div>
          </div>

          <div className="bodyAboutUsFooter">
            <a href="https://forms.gle/HbMrASD6bpjoymKV8">
              <button className="btn marginTopMed">Register/Login now</button>
            </a>
          </div>
        </div>
      </div>
      <div className="bodyTeam" ref={team}>
        <div className="bodyHeading">
          <h2>Team टीम</h2>
        </div>
        <div className="bodyTeamCoFounders">
          <div className="bodyCarouselItem">
            <a href="https://www.linkedin.com/in/renu-shah-00b2ba7/">
              <img src={RenuShah} />
              <div className="bodyCarouselItemText">
                <div className="bodyCarouselItemName">Renu Shah</div>
                <div className="bodyCarouselItemPosition"> Co-Founder</div>
              </div>
            </a>
          </div>
          <div className="bodyCarouselItem">
            <a href="https://www.linkedin.com/in/tara-gopal-ba241310/">
              <img src={TaraGopal} />
              <div className="bodyCarouselItemText">
                <div className="bodyCarouselItemName">Tara Gopal</div>
                <div className="bodyCarouselItemPosition"> Co-Founder</div>
              </div>
            </a>
          </div>
        </div>
        <div className="bodyCarousel">
          <div className="bodyCarouselItem">
            <a href="https://www.linkedin.com/in/kanerisushmita/">
              <img src={SushmitaKaneri} className="team" />
              <div className="bodyCarouselItemText">
                <div className="bodyCarouselItemName">Sushmita Kaneri</div>
                <div className="bodyCarouselItemPosition">
                  {" "}
                  Consultant (Tech)
                </div>
              </div>
            </a>
          </div>
          <div className="bodyCarouselItem">
            <a href="https://www.linkedin.com/in/neha-vatsala/">
              <img src={NehaVatsala} className="team" />
              <div className="bodyCarouselItemText">
                <div className="bodyCarouselItemName">Neha Vatsala </div>
                <div className="bodyCarouselItemPosition">
                  Consultant - <br /> Media & Digital Outreach{" "}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer" ref={contactUs}>
        <div className="footerContainer">
          <div className="footerLeft">
            <img src={logo} />
            <p>
              SHEEE is India's first women-only platform that
              <br /> connects women in the grey <br />
              collar segment to job opportunities
            </p>
          </div>
          <div className="footerRight">
            <div className="contactUsItem">
              <img src={location} />
              <p>
                C-5/43 INTERNAL ROAD VASANT KUNJ <br /> NEW DELHI 110070
              </p>
            </div>
            <div className="contactUsItem marginTopMin">
              <img src={phone} />
              <p>+91 8588848696</p>
            </div>
            <div className="contactUsItem marginTopMin">
              <img src={email} />
              <p>sheeejobs@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
