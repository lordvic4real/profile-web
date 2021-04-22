import Link from "next/link";
import styled from "styled-components";
import { PortfolioContainer } from "../home/portfolio";
import { useEffect } from "react";
import { portfolios } from "../data/portfolio";
import { GlobalOutlined, GithubOutlined } from "@ant-design/icons";
import AOS from "aos";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const PortfolioStyle = styled(PortfolioContainer)`
  .port-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 7%;
    grid-gap: 30px;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      padding: 3%;
      grid-gap: 15px;
      justify-content: center;
    }
  }
  .view img {
    object-fit: cover;
  }
  .tab-title {
    text-align: center;
    padding: 10px;
    font-size: 22px;
  }
`;
const AllPortfolios = () => {
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);
  return (
    <>
      <PortfolioContainer>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="All projects" key="1">
            <PortfolioStyle>
              <div className="port-container ">
                {portfolios.map((folio) => (
                  <div
                    className="view overlay "
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    key={folio.id}
                  >
                    <img src={folio.image} />
                    <div className="mask ">
                      <span className="title">
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
                      </span>
                      <span className="title">
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
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </PortfolioStyle>
          </TabPane>
          <TabPane tab="Client Projects" key="2">
            <PortfolioStyle>
              <h2 className="tab-title">In progress</h2>
            </PortfolioStyle>
          </TabPane>
          <TabPane tab="Side projects" key="3">
            <PortfolioStyle>
              <div className="port-container ">
                {portfolios.map((folio) => (
                  <div
                    className="view overlay "
                    data-aos="fade-left"
                    data-aos-duration="3000"
                    key={folio.id}
                  >
                    <img src={folio.image} />
                    <div className="mask ">
                      <span className="title">
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
                      </span>
                      <span className="title">
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
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </PortfolioStyle>
          </TabPane>
        </Tabs>
      </PortfolioContainer>
    </>
  );
};
export default AllPortfolios;
