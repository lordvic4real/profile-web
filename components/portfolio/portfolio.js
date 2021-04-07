import Link from "next/link";
import styled from "styled-components";
import { PortfolioContainer } from "../home/portfolio";
import { useState, useEffect } from "react";
import { portfolios } from "../data/portfolio";
import {
  TwitterCircleFilled,
  LinkedinFilled,
  HeartOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const AllPortfolios = (props) => {
  const [folios, setFolios] = useState([]);

  useEffect(() => {
    const effectPortfolios = portfolios.map(
      (portfolio) => portfolio.showOnDesktop
    );
    setFolios(effectPortfolios);
  }, [portfolios]);
  return (
    <>
      <PortfolioContainer>
        <div className="port-container">
          {folios.map((folio) => (
            <div className="view overlay " key={folio.id}>
              <img src={folio.image} />
              <div className="mask ">
                <span className="title">
                  <GithubOutlined style={{ fontSize: 50, fontWeight: 800 }} />
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
        <div className="btn-container">
          <span className="line_btn">lets discuss for a project</span>
        </div>
      </PortfolioContainer>
    </>
  );
};
export default AllPortfolios;
