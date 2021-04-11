import Link from "next/link";
import styled from "styled-components";
import { HomeOutlined, MailOutlined, MobileOutlined } from "@ant-design/icons";

const BannerWrapper = styled.div`
  font-family: muli;

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
  .contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 30px 40px 30px 75px;
    grid-gap: 20px;
    @media (max-width: 788px) {
      padding: 20px 10px 10px 10px;
      grid-template-columns: 2fr;
    }
  }
  .form-area {
    padding: 20px;
  }
  .adres {
    padding: 20px;
  }
  .form_area_title {
    font-size: 22px;
    color: 000;
    font-weight: 700;
    margin-bottom: 0;
    text-transform: capitalize;
    font-family: muli;
    padding: 30px 40px 30px 95px;
  }
  .grid-form {
    display: flex;
    flex-wrap: wrap;
  }
  .col {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
  }
  .form-control {
    /* display: block; */
    width: 100%;
    height: 50px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in, box-shadow 0.15s ease-in-out;
    @media (max-width: 788px) {
      max-width: 280px;
    }
  }
  .message {
    height: 120px;
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in, box-shadow 0.15s ease-in-out;
  }
  .btn {
    width: 208.5px;
    height: 45px;
    background: #615cfd;
    display: inline-block;
    padding: 5px 10px;
    font-family: "Muli", sans-serif;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid transparent;
    border-radius: 0px;
    text-align: center;
    color: #fff !important;
    text-transform: capitalize;
    transition: 0.5s;
    cursor: pointer;
    @media (max-width: 767px) {
      height: 51px;
      width: 278.5px;
      padding: 10px 30px;
      font-size: 100%;
      margin-bottom: 30px;
    }
  }
  .btn:hover {
    border: 1px solid #615cfd;
    color: #615cfd !important;
    background: transparent;
  }
  .form-group {
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      margin-bottom: 0.72rem;
    }
  }
  .grid-form2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    @media (max-width: 788px) {
      grid-template-columns: 2fr;
    }
  }
  .contact a {
    color: #000;
  }
  .anticon {
    font-size: 45px;
  }
  .icon-wrap {
    padding-right: 10px;
  }
  .wrapper {
    margin-bottom: 15px;
  }
  @media (max-width: 767px) {
    .sm {
      padding-left: 52px;
    }
  }
  input,
  textarea ::placeholder {
    padding-left: 10px;
  }
`;

const Banner = (props) => (
  <>
    <BannerWrapper>
      <div className="banner_area">
        <h1>contact me</h1>
      </div>
      <h1 className="form_area_title">get in touch</h1>
      <div className="contact">
        <div className="form-area">
          <form>
            <div className="grid-form">
              <div className="col form-group">
                <textarea
                  placeholder="Enter Message"
                  className="message"
                ></textarea>
              </div>
            </div>
            <div className="grid-form2">
              <div className="col form-group">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="form-control"
                />
              </div>
              <div className="col form-group">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
                />
              </div>
              <div className="col form-group">
                <span className="btn">send message</span>
              </div>
            </div>
          </form>
        </div>
        <div className="adres">
          <div className="wrapper">
            <span className="icon-wrap">
              <HomeOutlined />
            </span>
            <span>
              Brytahub ICT Training center{" "}
              <span className="sm">Gwagwalada Abuja</span>
            </span>
          </div>
          <div className="wrapper">
            <span className="icon-wrap">
              <MailOutlined />
            </span>
            <span>
              <a href="mailto:victorugbededavid@gmail.com" target="_blank">
                victorugbededavid@gmail.com
              </a>
            </span>
          </div>
          <div className="wrapper">
            <span className="icon-wrap">
              <MobileOutlined />
            </span>
            <span>
              <a href="tel:2347060936070">07060936070</a>
            </span>
          </div>
        </div>
      </div>
    </BannerWrapper>
  </>
);

export default Banner;
