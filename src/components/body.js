import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import HeroImage from "./../assets/Hero-image.jpg";

import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import backgroundImg from "./../assets/background-img.svg";
import icon1 from "../assets/icon-1.svg";
import icon2 from "../assets/icon-2.svg";
import icon3 from "../assets/icon-3.svg";

import whyNowImage from "../assets/why-now-image.jpg";
import imageSolution from "../assets/image-solution.svg";

// import Carousel from "react-multi-carousel";
import RenuShah from "./../assets/team/Renu-shah.jpg";
import SheetalPratik from "./../assets/team/Sheetal Pratik.jpg";
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
              What we do?
            </p>
            <p onClick={() => aboutUs.current.scrollIntoView()}>About Us</p>
            <p onClick={() => team.current.scrollIntoView()}>Team</p>
            <p onClick={() => contactUs.current.scrollIntoView()}>Contact us</p>
          </div>
        </div>
        <div className="headerRight">
          <a href="https://refactored.ai/partner/Sheee/partner/register/">
            <button className="btn">Register now! </button>
          </a>
        </div>
      </div>
      <div className="bodyHeroContainer" ref={home}>
        <div className="bodyHeroText">
          <p className="bodyHeroTextEnglish textLineHeightBody">
            SHEEE is a women only platform that connects women in the blue
            collar and entry level white collar segment to job opportunities
          </p>

          <p className="bodyHeroTextHindi textLineHeightBody">
            SHEEE ????????????????????? ????????? ????????? ?????? ?????? ????????????????????? ?????? ???????????? ???????????? ????????????????????? ????????? ???????????????
            ?????? ?????????????????? ?????? ?????????????????? ?????????
          </p>
          <hr style={{ marginTop: "20px" }} />
          <p
            classNamne="registerNow marginTopMed"
            style={{ marginTop: "20px" }}
          >
            {" "}
            Register ????????????????????? ????????????
          </p>
          <a href="https://refactored.ai/partner/Sheee/partner/register/">
            <button className="btn marginTopMed">Register now </button>
          </a>
        </div>
        <div className="bodyHeroImgContainer">
          <img src={HeroImage} alt="hero" />
        </div>
      </div>
      <div className="bodybackground" ref={background}>
        <div className="bodyBackgroundHeading">
          <h2>Background ??????????????????</h2>
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
                  8M women are dropping out from the education system and are
                  being added to this pool of unemployed women every year.
                </p>
                <p className="backgroundTextItemText marginTopMed">
                  ??????????????? ???????????? 80 ????????? ????????????????????? ????????????????????? ??????????????? ??? ??????????????? ?????? ??????????????? ?????????
                  ?????? ?????? ???????????????????????? ????????????????????? ?????? ?????????????????? ????????? ????????? ???????????? ????????????
                </p>
              </div>
            </div>

            <div className="backgroundTextItem">
              <img src={icon2} />
              <div className=" backgroundTextItemText">
                <p>
                  8M women are dropping out from the education system and are
                  being added to this pool of unemployed women every year.
                </p>
                <p className="backgroundTextItemText marginTopMed">
                  ??????????????? ???????????? 80 ????????? ????????????????????? ????????????????????? ??????????????? ??? ??????????????? ?????? ??????????????? ?????????
                  ?????? ?????? ???????????????????????? ????????????????????? ?????? ?????????????????? ????????? ????????? ???????????? ????????????
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
                  ??????????????? ???????????? 80 ????????? ????????????????????? ????????????????????? ??????????????? ??? ??????????????? ?????? ??????????????? ?????????
                  ?????? ?????? ???????????????????????? ????????????????????? ?????? ?????????????????? ????????? ????????? ???????????? ????????????
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
            <h2> Why now? ????????????????????? ?????? ????????????????????????</h2>
            <ul>
              <li>
                Increasing women participation will push India???s GDP by 27%{" "}
                <br />
                ???????????????????????????????????? ????????? ????????????????????? ?????? ???????????????????????? ??????????????? ?????? ???????????? ?????? GDP 27%
                ????????? ??? ???????????? ?????????
              </li>
              <li>
                90M Gig economy new jobs are going to be added by 2025
                <br />
                ???????????? 2025 ?????? ????????? ?????????????????? ????????? 9 ???????????? ?????? ???????????????????????? ??????????????? ?????? ?????????????????????
                ????????????
              </li>
              <li>
                There are 1M+ STEM educated women in India who can be trained in
                emerging gig economy jobs
                <br />
                ???????????? ????????? 10 ?????????+ STEM ????????????????????? ???????????????????????? ????????? ?????????????????????, ??????????????? ?????????
                ????????? ?????????????????? ?????? ???????????????????????? ????????? ?????????????????????????????? ???????????? ?????? ???????????? ?????????
              </li>
              <li>
                There is a Global focus on Gender Equality
                <br />
                ????????????????????? ?????? ?????????????????? ?????? ????????????????????? ????????? ?????????
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
                <span> ??????????????? </span> <br /> ??????????????????
              </h2>
            </div>
            <div className="bodySolutionTextContainer">
              <div className="bodySolutionText">
                SHEEE is a women only platform that connects women in the blue
                collar and entry level white collar segment to job
                opportunities. We provide a roadmap through a curated DISCOVERY,
                NURTURING and PLACEMENT program. <br />
                SHEEE ????????????????????? ????????? ????????? ?????? ?????? ????????????????????? ?????? ???????????? ???????????? ????????????????????? ?????????
                ??????????????? ?????? ?????????????????? ?????? ?????????????????? ????????? ?????? ??????????????? ????????????????????????????????? ?????? ?????? ???????????????
                ????????? ?????? ????????????????????? ???????????? ????????? - ?????????-???????????????-??????????????? ?????? ?????????????????????????????? ??????????????????
                ???????????? ????????????
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
            <div>About Us</div>
          </div>
          <div className="bodyAboutUsTextContainer">
            <div className="bodyAboutUsLeft">
              <h2>???????????? Vision</h2>
              <p>
                To build a gender balanced world by linking
                <br /> women to economic opportunities <br />
                ????????????????????? ?????? ?????????????????? ?????????????????? ?????? ?????????????????? ?????? ???????????????-??????????????????
                <br /> ????????????????????? ??????????????? ?????? ????????????????????? ????????????
              </p>
            </div>
            <div className="bodyAboutUsRight">
              <h2>???????????????????????? Mission</h2>
              <p>
                To build employment connections for 10 million
                <br /> women
                <br />1 ???????????? ????????????????????? ?????? ?????????????????? ?????? ?????????????????? ????????????
              </p>
            </div>
          </div>

          <div className="bodyAboutUsFooter">
            <a href="https://refactored.ai/partner/Sheee/partner/register/">
              <button className="btn marginTopMed">Register now!</button>
            </a>
          </div>
        </div>
      </div>
      <div className="bodyTeam" ref={team}>
        <div className="bodyHeading">
          <h2>Team ?????????</h2>
        </div>
        <div className="bodyCarousel">
          <div className="bodyCarouselItem">
            <img src={RenuShah} />
            <div className="bodyCarouselItemText">
              <div className="bodyCarouselItemName">Renu shah</div>
              <div className="bodyCarouselItemPosition"> Co-Founder</div>
            </div>
          </div>
          <div className="bodyCarouselItem">
            <img src={TaraGopal} />
            <div className="bodyCarouselItemText">
              <div className="bodyCarouselItemName">Tara Gopal</div>
              <div className="bodyCarouselItemPosition"> Co-Founder</div>
            </div>
          </div>
          <div className="bodyCarouselItem">
            <img src={SheetalPratik} />
            <div className="bodyCarouselItemText">
              <div className="bodyCarouselItemName">Sheetal Pratik </div>
              <div className="bodyCarouselItemPosition">
                Consultant (Tech & BD)
              </div>
            </div>
          </div>
          <div className="bodyCarouselItem">
            <img src={SushmitaKaneri} />
            <div className="bodyCarouselItemText">
              <div className="bodyCarouselItemName">Sushmita Kaneri</div>
              <div className="bodyCarouselItemPosition"> Consultant (Tech)</div>
            </div>
          </div>
          <div className="bodyCarouselItem">
            <img src={NehaVatsala} />
            <div className="bodyCarouselItemText">
              <div className="bodyCarouselItemName">Neha Vatsala </div>
              <div className="bodyCarouselItemPosition">
                Consultant - <br /> Media & Digital Outreach{" "}
              </div>
            </div>
          </div>
          <div className="bodyCarouselItem">
            <img src={AbhiYadav} />
            <div className="bodyCarouselItemText">
              <div className="bodyCarouselItemName">Abhi Yadav</div>
              <div className="bodyCarouselItemPosition">Advisor</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer" ref={contactUs}>
        <div className="footerContainer">
          <div className="footerLeft">
            <img src={logo} />
            <p>
              SHEEE is a women only platform that
              <br /> connects women in the blue <br />
              collar and entry level white collar segment to job opportunities
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
