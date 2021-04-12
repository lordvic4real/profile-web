import Link from "next/link";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { GlobalOutlined, GithubOutlined } from "@ant-design/icons";
import { portfolios } from "../data/portfolio";

export const PortfolioContainer = styled.div`
  min-height: 500px;
  font-family: muli;

  .port-container {
    min-height: 400px;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    justify-content: center;
    padding: 0px 5% 10px 5%;
    grid-gap: 30px;
    @media (max-width: 678px) {
      grid-template-columns: 2fr;
    }
  }
  .port-container div {
    height: 450px;
  }
  .port-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .view {
    position: relative;
    overflow: hidden;
    cursor: default;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-attachment: fixed;
  }

  .overlay .mask {
    opacity: 0;
    transition: all 0.4s ease-in;
  }

  .overlay .mask:hover {
    opacity: 0.8;
    background: linear-gradient(rgb(133, 43, 244), rgb(44, 243, 233));
    text-align: center;
    display: flex;
    align-items: center;
    transition: 0.5s;
    overflow: hidden;
    justify-content: center;
  }
  .title {
    margin: 10px;
    box-shadow: -21.213px 21.213px 30px 0px rgba(158, 158, 158, 0.3);
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #f2f3f4;
  }

  .title-container {
    text-align: center;
  }
  .title-container h1 {
    font-size: 50px;
    line-height: 62px;
    font-weight: 700;
    color: #001d38;
    padding-bottom: 15px;
    font-family: muli;
    @media (max-width: 768px) {
      font-size: 30px;
      line-height: 42px;
      text-transform: capitalize;
    }
  }
  .line_btn {
    display: inline-block;
    font-size: 15px;
    color: #615cfd;
    border: 1px solid #615cfd;
    text-transform: capitalize;
    padding: 13px 34px;
    font-weight: 600;
  }
  .btn-container {
    padding: 35px 0 35px;
    text-align: center;
  }

  .line_btn:hover {
    color: #fff !important;
    background: #615cfd;
    border: 1px solid #615cfd;
  }
`;
const Portfolio = (props) => {
  const [folios, setFolios] = useState([]);

  useEffect(() => {
    const effectPortfolios = portfolios.filter(
      (portfolio) => portfolio.showOnDesktop === true
    );
    setFolios(effectPortfolios);
  }, [portfolios]);
  return (
    <>
      <PortfolioContainer>
        <div className="title-container">
          <h1>Some of my awesome stuff</h1>
        </div>
        <div className="port-container">
          {folios.map((folio) => (
            <div className="view overlay " key={folio.id}>
              <img src={folio.image} />
              <div className="mask ">
                {folio.githubLink && (
                  <a
                    href={folio.githubLink}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <span className="title">
                      <GithubOutlined
                        style={{ fontSize: 50, fontWeight: 800 }}
                      />
                    </span>
                  </a>
                )}

                {folio.netlifyLink && (
                  <a
                    href={folio.netlifyLink}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <span className="title">
                      <GlobalOutlined
                        style={{ fontSize: 50, fontWeight: 800 }}
                      />
                    </span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="btn-container">
          <Link href="/portfolio">
            <a>
              <span className="line_btn">more works</span>
            </a>
          </Link>
        </div>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
