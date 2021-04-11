import Link from "next/link";
import styled from "styled-components";
import About from "../../components/home/about";

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
  .intro {
    font-size: 25px;
    color: #000;
    font-weight: 700;
    margin-bottom: 0;
    font-family: muli;
    text-align: center;
    line-height: 38px;
  }
`;

const Banner = (props) => (
  <>
    <BannerWrapper>
      <div className="banner_area">
        <h1>about me</h1>
      </div>
      <div className="video">
        <p className="intro">
          Hi there, I am Victor David. I am a skillful Web Developer,
          <br /> a Teacher, Jesus lover and a family oriented, i will like to
          <br /> share with you some of my ideas.
        </p>
      </div>
      <div>
        <About />
      </div>
    </BannerWrapper>
  </>
);

export default Banner;
