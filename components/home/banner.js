import Link from "next/link";
import styled from "styled-components";
import React, { useEffect } from "react";
import AOS from "aos";

const HomeBanner = styled.div`
  min-height: 400px;
  width: 100%;
  background: #6b40dc;
  .banner-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 300px;

    @media (min-width: 200px) and (max-width: 767px) {
      grid-template-columns: 3fr;
    }
  }
  .hide-sm {
    @media (min-width: 200px) and (max-width: 768px) {
      display: none;
    }
  }

  .section-intro {
    padding-left: 10%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 450px;
    @media (min-width: 300px) and (max-width: 768px) {
      min-height: 450px;
      padding-left: 5%;
    }
  }

  .section-intro h1 {
    font-size: 60px;
    font-weight: 700;
    line-height: 76px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-transform: capitalize;
    font-family: muli;
    letter-spacing: 1.8px;
    color: #f2f2f2;
    @media (max-width: 768px) {
      font-size: 40px;
      line-height: 76px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  .section-img {
    display: grid;
  }
  .profile-img {
    background: linear-gradient(
        rgba(40, 31, 91, 0.5),
        rgba(40, 31, 91, 0.5),
        rgba(40, 31, 91, 0.5)
      ),
      url(/images/v3-new.png);
    background-position: center;
    background-size: cover;
    border-radius: 100% 0 0 100%;
    /* border-top-left-radius: 50%; */
    width: 700px;
    height: 650px;
    @media (max-width: 1024px) {
      width: auto;
      object-fit: contain;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  .btn {
    background: #615cfd;
    color: #fff;
    display: inline-block;
    padding: 14px 38px;
    font-size: 14px;
    font-weight: 500;
    border: 0;
    border: 1px solid transparent;
    border-radius: 0px;
    text-align: center;
    color: #fff !important;
    text-transform: capitalize;
    transition: 0.5s;
    font-family: muli;
    cursor: pointer;
    @media (max-width: 767px) {
      height: 51px;
      width: 158.5px;
      padding: 10px 30px;
      font-size: 100%;
      margin-bottom: 30px;
    }
  }
  .intro {
    max-width: 400px;
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 1.8px;
    line-height: 42px;
    margin-bottom: 50px;
    color: #f2f2f2;
    text-transform: capitalize;
    font-family: muli;
    @media (max-width: 768px) {
      font-size: 24px;
      font-family: muli;
      line-height: 32px;
      margin-bottom: 30px;
    }
  }
  .sm {
    @media (max-width: 768px) {
      font-size: 30px;
      font-family: muli;
    }
  }
`;

function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);
  return (
    <>
      <HomeBanner>
        <div className="banner-container">
          <div className="section-intro">
            <h1>
              i am
              <br />
              <span className="sm" data-aos="fade-up" data-aos-duration="2000">
                victor ugbede david
              </span>
            </h1>
            <span className="intro">front-end engineer, and instructor</span>
            <div>
              <Link href="/contact">
                <a>
                  <span className="btn">lets connect</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="section-img">
            <div className="profile-img"></div>
          </div>
        </div>
      </HomeBanner>
    </>
  );
}
export default Banner;
