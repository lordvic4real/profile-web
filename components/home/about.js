import Link from "next/link";
import styled from "styled-components";
// import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";

const AboutContainer = styled.div`
  min-height: 450px;
  .about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    position: relative;
    margin: 0px 5% 0px 5%;
    @media (min-width: 200px) and (max-width: 768px) {
      grid-template-columns: 2fr;
      margin: 0px 5% 0px 3%;
    }
  }
  .btn {
    background: #615cfd;
    color: #fff;
    display: inline-block;
    padding: 14px 38px;
    font-family: "Muli", sans-serif;
    font-size: 14px;
    font-weight: 500;
    border: 0;
    border: 1px solid transparent;
    border-radius: 0px;
    text-align: center;
    color: #fff !important;
    text-transform: capitalize;
    transition: 0.5s;
    cursor: pointer;
    @media (max-width: 767px) {
      height: 51px;
      /* width: 168.5px; */
      padding: 10px 30px;
      font-size: 120%;
      margin-bottom: 30px;
    }
  }
  .about .title {
    font-weight: 800;
    color: #f5f6f7;
    font-size: 235px;
    position: absolute;
    left: 21%;
    top: 0;
    line-height: 1;
    z-index: 1;
    @media (max-width: 768px) {
      font-size: 100px;
      font-family: muli;
      line-height: 32px;
      margin-bottom: 30px;
      left: 2%;
    }
  }
  .about p {
    font-size: 15px;
    font-weight: 400;
    color: #727272;
    margin-top: 20px;
    margin-bottom: 36px;
  }
  .about-desc {
    z-index: 888;
    padding: 20px;
  }
  .about-desc h1 {
    margin-top: 60px;
    font-family: muli;
    font-weight: bold;
    font-size: 34px;
  }
  .img-sec img {
    height: 450px;
    width: 100%;
    padding: 70px 0 0 150px;
    object-fit: cover;
    @media (max-width: 767.8px) {
      padding: 50px 0 0 6px;
    }
  }

  .img-sec {
    z-index: 444;
  }
  .skills h1 {
    font-family: muli;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    padding: 20px;
  }
  .img-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    grid-gap: 10px;
    padding: 12px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .img-wrapper img {
    height: 150px;
    width: 150px;
    object-fit: contain;
  }
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    height: 220px;
    justify-content: center;
  }
  .grow {
    transition: all 0.2s ease-in-out;
  }
  .grow:hover {
    transform: scale(1.02);
  }
`;

function About() {
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);
  return (
    <>
      <AboutContainer>
        <div className="about" data-aos="fade-up" data-aos-duration="3000">
          <div className="title">About</div>
          <div className="about-desc">
            <h1 className="">About me</h1>
            <div>
              <p className="">
                I'm a programmer per excellence, a graduate of the University of
                Abuja, Abuja Nigeria. Studied Biology Education. I like to
                contribute to knowledge, build awesome projects and reach out to
                the world. am Self-motivated Web Development professional with
                3+ years of experience looking for Web Development Job with your
                Company utilizing unmatched web programming skills and
                abilities.
              </p>

              <a href="www.brytahub.com" rel="noopener" target="_blank">
                <span className="btn">
                  <small>Trained by Brytahub</small>
                </span>
              </a>
            </div>
          </div>
          <div className="img-sec">
            <img src="/images/about.jpg" alt="my-pix" title="victor" />
          </div>
        </div>
      </AboutContainer>
    </>
  );
}
export default About;
