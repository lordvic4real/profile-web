import Link from "next/link";
import styled from "styled-components";

const ServiceContainer = styled.div`
  background: #fff;
  min-height: 550px;
  font-family: muli;
  .services {
    margin: 10px 7% 0px 7%;
    display: grid;
    grid-template-columns: repeat(3, 1.9fr);
    grid-gap: 30px;
    justify-content: center;
    padding: 48px 35px 55px 35px;
    min-height: 400px;

    @media (max-width: 767px) {
      grid-template-columns: 270px;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1.3fr);
    }
  }
  .services div {
    min-height: 313.6px;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    font-family: muli;
    transition: 0.3s;
    @media (min-width: 300px) and (max-width: 768px) {
      height: 300px;
    }
  }
  .card-content {
    display: grid;
    align-content: center;
    justify-content: center;
    text-align: center;
    transition: 0.3s;
    font-family: muli;
    text-align: center;
  }
  .card-content img {
    justify-self: center;
  }
  .card-content:hover {
    border: 1px solid #615cfd;
    transition: 0.5s;
  }
  .card-content span {
    font-size: min(1.3rem, 15px);
    text-align: center;
    font-weight: 600;
    font-family: muli;
  }
  .title {
    font-size: 50px;
    font-family: muli;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
    @media (max-width: 768px) {
      font-size: 30px;
      font-family: muli;
      line-height: 12px;
      margin-bottom: 20px;
    }
  }
  .desc {
    text-transform: capitalize;
  }
`;

const Service = (props) => (
  <>
    <ServiceContainer>
      <p className="title">my services</p>
      <div className="services">
        <div className="card-content">
          <img src="/images/1.svg" alt="services" />
          <h3 className="card-tittle">Mobile App Dev</h3>
          <span className="desc">
            you can trust us for your mobile app project
            <br /> we build with cutting edge technology .
          </span>
        </div>
        <div className="card-content">
          <img src="/images/2.svg" alt="services" />
          <h3 className="card-tittle">Web Development</h3>
          <span className="desc">
            let me be your client for all your web applications
            <br />
            projects we will give you the best .
          </span>
        </div>
        <div className="card-content">
          <img src="/images/3.svg" alt="services" />
          <h3 className="card-tittle">Training</h3>
          <span className="desc">
            we deliver cooperate and personal trainings from <br />
            basic computer knowledge, graphics design and web/software
            development.
          </span>
        </div>
      </div>
    </ServiceContainer>
  </>
);

export default Service;
