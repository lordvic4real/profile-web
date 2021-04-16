import Link from "next/link";
import styled from "styled-components";
import { services } from "../data/services";

const ServiceContainer = styled.div`
  background: #f5f6f7;
  min-height: 550px;
  font-family: muli;
  .services {
    margin: 0px 7% 0px 7%;
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    grid-gap: 30px;
    justify-content: center;
    padding: 38px 25px 45px 25px;
    min-height: 400px;
    @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
      grid-gap: 10px;
      justify-content: center;
      padding: 8px 5px 5px 5px;
      grid-template-columns: repeat(2, 2fr);
      margin-bottom: 30px;
      font-size: 170%;
    }
    @media (max-width: 767px) {
      grid-template-columns: 270px;
      margin: 0px 2% 0px 2%;
    }
  }
  .services div {
    min-height: 313.6px;
    /* word-wrap: break-word; */
    background-color: #fff;
    background-clip: border-box;
    border: 1.8px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    font-family: muli;
    transition: 0.3s;
    @media (min-width: 300px) and (max-width: 768px) {
      height: 300px;
    }
  }
  .card-title {
    color: #000faf;
    font-weight: bold;
  }
  .card-content {
    display: grid;
    align-content: center;
    justify-content: center;
    text-align: center;
    transition: 0.3s;
    font-family: muli;
    text-align: center;
    transition: 0.5s ease-in;
    padding: 20px;
  }
  .card-content img {
    justify-self: center;
    transition: 0.5s ease-in;
  }
  .card-content:hover {
    border: 1px solid #615cfd;
    transition: 0.5s ease-in;
  }
  .card-content span {
    font-size: min(1.45rem, 16.4px);
    /* text-align: justify; */
    font-weight: 600;
    font-family: "Pacifico", cursive;
    text-align: center;
  }
  .title {
    font-size: 50px;
    font-family: "Pacifico", cursive;
    text-align: center;
    margin-bottom: 10px;
    padding: 10px 20px;
    /* margin-top: 10px; */
    color: #000;
    text-transform: capitalize;
    transition: 0.5s ease-in;
    @media (max-width: 768px) {
      font-size: 30px;
      font-family: muli;
      line-height: 12px;
      padding: 30px 20px;
    }
  }
  .desc {
    text-transform: capitalize;
    color: #000faf;
    @media (max-width: 767px) {
      padding: 2px;
    }
  }
`;

const MyService = () => (
  <>
    <ServiceContainer>
      <p className="title">my services</p>

      <div className="services">
        {services &&
          services.map((service) => (
            <div className="card-content" key={service.id}>
              <img src={service.image} alt="services" />
              <h3 className="card-title">{service.title}</h3>
              <span className="desc">{service.desc}</span>
            </div>
          ))}
      </div>
    </ServiceContainer>
  </>
);

export default MyService;
