import Link from "next/link";
import styled from "styled-components";
import About from "../../components/home/about";
import AOS from "aos";
import { useEffect } from "react";
const BannerWrapper = styled.div`
  font-family: muli;
  padding-bottom: 30px;

  .banner_area {
    z-index: 0;
    background: #6b40dc;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    font-family: muli;
    @media (max-width: 768px) {
      min-height: 250px;
    }
  }
  .banner_area h1 {
    font-size: 50px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 0;
    text-transform: capitalize;
    font-family: muli;
  }
  .intro {
    /* padding: 5%; */

    margin-bottom: 0;
    font-family: muli;
    text-align: justify;
    line-height: 38px;
  }
  @media (max-width: 768px) {
    .about {
      padding-top: 10%;
    }
    .intro {
      font-size: 135%;
      text-align: justify;
      padding: 5px;
      font-weight: 600;
    }
    .about p {
      font-size: 130%;
      padding: 0;
    }
  }
  label {
    font-size: 32px;
    font-weight: bold;
    font-family: muli;
    color: #000;
    /* padding-top: 40px; */
  }
  .video {
    display: inline-grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
    padding: 40px 6% 0 5%;
  }
`;

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);
  return (
    <>
      <BannerWrapper>
        <div className="banner_area">
          <h1>about me</h1>
        </div>

        <div className="about">
          <About />
        </div>
        <div className="video" data-aos="fade-left" data-aos-duration="3000">
          <div className="">
            <label>Career Objective:</label>
            <p className="intro">
              To gain confidence and fame using my potential in the field of
              “Web Development”, and express my innovative creative skills for
              self and company growth.
            </p>
          </div>
          <div>
            <label>Career Summary:</label>
            <p className="intro">
              - Sound knowledge of React Js,Next Js HTML5, CSS3 and JavaScript.{" "}
              <br />
              - Ability to develop and design webpages and websites to make them
              functional. <br /> - Knowledge of the international web standards
              and protocols <br /> - Ability to develop multi-user applications
              within SOA. <br /> - Multi-tasking ability with the experience of
              handling multiple projects at a time. <br /> - Team player with
              experience of training the new joiners. <br /> - Ability to guide
              and design training programmes on web development. <br /> -
              Excellent communication and inter-personal skills. <br /> -
              Ability to grasp the ideas of the clients and implement in the
              same direction.
            </p>
          </div>
        </div>
      </BannerWrapper>
    </>
  );
};

export default Banner;
