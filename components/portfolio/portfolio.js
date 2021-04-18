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
                        <GithubOutlined
                          style={{ fontSize: 50, fontWeight: 800 }}
                        />
                      </span>
                      <span className="title">
                        <GlobalOutlined
                          style={{ fontSize: 50, fontWeight: 800 }}
                        />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </PortfolioStyle>
          </TabPane>
          <TabPane tab="Client Projects" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Side projects" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </PortfolioContainer>
    </>
  );
};
export default AllPortfolios;
