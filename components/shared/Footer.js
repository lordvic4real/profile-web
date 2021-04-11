import Link from "next/link";
import styled from "styled-components";

import {
  FacebookFilled,
  TwitterCircleFilled,
  GithubFilled,
  LinkedinFilled,
  HeartOutlined,
} from "@ant-design/icons";

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 450px;
  background: #001d38;
  box-sizing: border-box;
  font-family: muli;
`;
const Container = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  min-height: 409px;
  .icon-containter {
    width: 750px;
    background: blue;
  }
  .discuss-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  .discuss-container .btn {
    background: #615cfd;
    color: #fff;
    display: inline-block;
    padding: 14px 38px;
    font-family: "Muli";
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
      width: 158.5px;
      padding: 10px 30px;
      font-size: 100%;
      margin-bottom: 30px;
    }
  }
  .discuss-container .btn:hover {
    border: 1px solid #615cfd;
    color: #615cfd !important;
    background: transparent;
  }
  .discuss-title {
    color: #fff;
    font-size: 50px;
    font-weight: 700;
    line-height: 1.2em;
    padding: 150px 0 0px 0;
    margin: 0px 0px 8px;
    @media (max-width: 767px) {
      font-size: 35px;
      padding: 80px 0 0px 0;
    }
  }
  .discuss-desc {
    color: #fff;
    font-size: 15px;
    line-height: 28px;
    margin-bottom: 30px;
    margin-top: 12px;
  }

  .socail_links {
    color: #fff;
    width: 40px;
    height: 40px;
    display: inline-block;
    text-align: center;
    background: transparent;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    line-height: 40px !important;
    margin-right: 7px;
    color: #ffffff;
    line-height: 40px !important;
    border: 1px solid #334a60;
    font-size: 15px;
  }
  .socail_links:hover {
    color: #fff !important;
    background: #615cfd;
    border: 1px solid #615cfd;
  }
  .footer-nav {
    display: flex;
    justify-content: space-between;
    padding: 100px 0px 60px;
    border-bottom: 1px solid #334a60;
    @media (max-width: 767px) {
      text-align: left;
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 25px;
      padding: 50px 0px 30px;
    }
  }
  .footer-link {
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    margin: 0px 46px 0px 0px;
    @media (max-width: 767px) {
      text-align: left;
      margin: 0px 26px 0px 0px;
    }
  }
  .copyright {
    font-size: 13px;
    color: #c7c7c7;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    padding: 0px 0px 30px;

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
  .copyright p {
    position: relative;
    top: 25px;
    @media (max-width: 767px) {
      font-size: 120%;
    }
  }
  .hide-desktop {
    @media (max-width: 767px) {
      border-bottom: 1px solid #334a60;
    }
  }
  .desc {
    color: #fff;
    font-size: 15px;
    line-height: 28px;
    margin-bottom: 30px;
    @media (max-width: 767px) {
      font-size: 100%;
    }
  }
`;

const Footer = (props) => {
  return (
    <StyledFooter>
      {" "}
      <Container>
        <div className="discuss-container">
          <div>
            <h2 className="discuss-title">Let’s discuss for a project</h2>
          </div>
          <div className="discuss-desc">
            <span className="desc">
              One project with us is enough to convince you
            </span>
          </div>
          <div>
            <Link href="/contact">
              <a>
                <span className="btn"> Lets Connect</span>
              </a>
            </Link>
          </div>
          <p className="hide-desktop"> </p>
        </div>
        <div className="footer-nav">
          <nav>
            <Link href="/" passHref>
              <a className="footer-link">Home</a>
            </Link>
            <Link href="/portfolio" passHref>
              <a className="footer-link">Portfolio</a>
            </Link>
            <Link href="/contact" passHref>
              <a className="footer-link">Contact</a>
            </Link>
          </nav>
          <div className="icon-container">
            <a
              href="http://www.github.com/lordvic4real"
              rel="noreferrer noopener"
              target="_blank"
            >
              <span className="socail_links">
                <GithubFilled />
              </span>
            </a>

            <a
              href="http://www.twitter.com/lordvic001"
              rel="noreferrer noopener"
              target="_blank"
            >
              <span className="socail_links">
                <TwitterCircleFilled />
              </span>
            </a>
            <a
              href="http://www.linkedin.com/in/victor-david-097428152"
              rel="noreferrer noopener"
              target="_blank"
            >
              <span className="socail_links">
                <LinkedinFilled />
              </span>
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright ©2020 All rights reserved | made with
            <HeartOutlined style={{ padding: 3 }} /> by Victor
          </p>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
