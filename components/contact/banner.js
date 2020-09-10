import Link from "next/link";
import styled from "styled-components";

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
    grid-template-columns: 2fr 1fr;
    padding: 30px 40px 30px 75px;
    @media (max-width: 788px) {
      padding: 20px 10px 10px 10px;
      grid-template-columns: 2fr;
    }
  }
  .form_area_title {
    font-size: 22px;
    color: 000;
    font-weight: 700;
    margin-bottom: 0;
    text-transform: capitalize;
    font-family: muli;
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
    height: calc(2.25rem + 2px);
    padding: 2.275rem 2.55rem;
    font-size: 1.2rem;
    line-height: 3.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    @media (max-width: 788px) {
      max-width: 280px;
    }
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
`;

const Banner = (props) => (
  <>
    <BannerWrapper>
      <div className="banner_area">
        <h1>contact me</h1>
      </div>
      <div className="contact">
        <div>
          <h1 className="form_area_title">get in touch</h1>
          <form>
            <div className="grid-form">
              <div className="col form-group">
                <textarea
                  placeholder="Enter massege"
                  className="form-control"
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
            </div>
          </form>
        </div>
        <div>2</div>
      </div>
    </BannerWrapper>
  </>
);

export default Banner;
