import Link from "next/link";
import styled from "styled-components";
import { PortfolioContainer } from "../home/portfolio";
// import { useState, useEffect } from "react";
import { portfolios } from "../data/portfolio";
import { TwitterCircleFilled, GithubOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const PortfolioStyle = styled(PortfolioContainer)`
  .port-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
const AllPortfolios = () => (
  <>
    <PortfolioContainer>
      <div className="btn-container">
        <Link href="/contact">
          <a>
            <span className="line_btn">lets discuss for a project</span>
          </a>
        </Link>
      </div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="All projects" key="1">
          <PortfolioStyle>
            <div className="port-container ">
              {portfolios.map((folio) => (
                <div className="view overlay " key={folio.id}>
                  <img src={folio.image} />
                  <div className="mask ">
                    <span className="title">
                      <GithubOutlined
                        style={{ fontSize: 50, fontWeight: 800 }}
                      />
                    </span>
                    <span className="title">
                      <TwitterCircleFilled
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
export default AllPortfolios;
