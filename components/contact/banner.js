import Link from "next/link";
import styled from "styled-components";
import {
  GithubOutlined,
  MailOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const BannerWrapper = styled.div`
  font-family: muli;
  color: black;
  font-size: 17px;

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
    @media (max-width: 768px) {
      font-size: 150%;
    }
  }
  .adres {
    display: grid;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 30px 30px 30px 55px;

    @media (max-width: 788px) {
      padding: 20px 10px 20px 6%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 100px;
    }
    span a {
      font-size: 112%;
    }
  }

  .form_area_title {
    font-size: 22px;
    color: #000;
    font-weight: 700;
    margin-bottom: 0;
    text-transform: capitalize;
    font-family: muli;
    padding: 30px 40px 30px 95px;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 150%;
      padding: 30px;
    }
  }

  .contact,
  span a {
    color: #000;
  }
  .anticon {
    font-size: 45px;
    color: #000;
  }
  .icon-wrap {
    padding-right: 10px;
    display: flex;
  }
  .wrapper {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 767px) {
    .sm {
      padding-left: 52px;
    }
  }
`;

const Banner = () => (
  <>
    <BannerWrapper>
      <div className="banner_area">
        <h1>contact me</h1>
      </div>
      <h1 className="form_area_title">get in touch</h1>
      <div>
        <div className="adres">
          <div className="wrapper">
            <span className="icon-wrap">
              <a
                href="http://www.twitter.com/lordvic001"
                rel="noreferrer noopener"
                target="_blank"
              >
                <TwitterOutlined style={{ color: "skyblue" }} />
                <span> www.twitter.com/lordvic001</span>
              </a>
            </span>
          </div>
          <div className="wrapper">
            <span className="icon-wrap">
              <a href="mailto:hello@lordvic.com" target="_blank">
                <MailOutlined style={{ paddingRight: 4 }} />
                <span>hello@lordvic.com</span>
              </a>
            </span>
          </div>
          <div className="wrapper">
            <span className="icon-wrap">
              <a
                href="http://www.linkedin.com/in/victor-david-097428152"
                rel="noreferrer noopener"
                target="_blank"
              >
                <LinkedinOutlined style={{ color: "skyblue" }} />
                <span>www.linkedin.com/in/victor-david</span>
              </a>
            </span>
          </div>
          <div className="wrapper">
            <span className="icon-wrap">
              <a
                href="http://www.github.com/lordvic4real"
                rel="noreferrer noopener"
                target="_blank"
              >
                <GithubOutlined />
                <span> github.com/lordvic4real</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </BannerWrapper>
  </>
);

export default Banner;
