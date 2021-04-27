import Link from "next/link";
import styled from "styled-components";
import { useState, useEffect } from "react";
import {
  MenuOutlined,
  CloseOutlined,
  LinkedinOutlined,
  TwitterCircleFilled,
  GithubOutlined,
} from "@ant-design/icons";

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  position: relative;

  .navbar {
    top: 0;
    right: 0;
    left: 0;
    background: #010010;
    position: fixed;
    box-shadow: -21.213px 21.213px 30px 0px rgba(158, 158, 158, 0.3);
    transition: all 0.5s;
    height: 80px;
    z-index: 999;
  }
  .bg {
    /* background: rgb(8, 4, 8); */
    height: 80px;
    background: #6b40dc;
  }
  .navbar a {
    color: #fff;
    font-size: 17px;
    font-family: muli;
  }
  .navbar .icon-bg {
    /* background: black; */
  }
  .navbar .logo a {
    color: #fff;
  }

  .navigations {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 1025px) {
      display: none;
    }
  }
  .navigation-main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 100%;
    height: 100%;
    /* justify-content: center; */
    align-items: center;
    @media (max-width: 1025px) {
      display: none;
    }
  }

  .menu-mobile {
    display: none;
    @media (max-width: 1025px) {
      display: grid;
      justify-content: flex-end;
    }
  }

  .logo a {
    padding-left: 12%;
    font-size: 25px;
    font-family: muli;
    font-weight: bold;
    color: #fff;
  }
  nav a {
    text-transform: capitalize;
    font-family: muli;
    padding: 20px;
    color: #fff;
  }
  .header-bg {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    min-height: 70px;
    grid-gap: 20px;
    /* padding: 10px; */
  }
  .header-bg nav {
    padding-left: 20px;
  }

  .icon {
    color: white;
    padding-right: 5%;
    display: flex;
    justify-content: center;
  }
  .icon-bg {
    color: #fff;
    width: 40px;
    height: 40px;
    display: inline-block;
    text-align: center;
    background: transparent;
    border-radius: 50%;
    line-height: 40px !important;
    margin-right: 7px;
    color: #ffffff;
    line-height: 40px !important;
    border: 1px solid #334a60;
    font-size: 15px;
  }
  .icon-bg:hover {
    color: #fff !important;
    background: #615cfd;
    border: 1px solid #615cfd;
  }
`;
const MobileSubMenu = styled.div`
  background: #000000;
  width: 571px;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #fff;
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 999;
  border-radius: 0px 0px 0px 25px;

  @media (max-width: 768px) {
    width: 300px;
    height: 250px;
    opacity: 0.7;
  }

  .mobile-menu-dropdown-item {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 25px;
    color: #fff;
    transition: all 0.4s ease-in;
    border-bottom: 1.5px solid rgba(255, 255, 255, 0.05);
    @media (max-width: 768px) {
      height: 50px;
      padding-left: 16px;
    }
  }
  .mobile-menu-dropdown-item a {
    color: #fff;
    transition: all 0.4s ease-in;
  }
  .mobile-menu-dropdown-item.mobile-only {
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

const Header = ({ menuOpen, toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 170) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <StyledHeader>
        <div className={scrolled ? "navbar " : "bg"}>
          <header className="header-bg ">
            <div className="logo  ">
              <Link href="/">
                <a>Lordvic</a>
              </Link>
            </div>
            <div className="navigation-main">
              <nav className="navigations">
                <span>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </span>
                <span>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </span>
                <span>
                  <Link href="/portfolio">
                    <a>Portfolio</a>
                  </Link>
                </span>
                <span className="">
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </span>
              </nav>
              <div className="icon">
                <a
                  href="http://www.linkedin.com/in/victor-david-097428152"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <span className="icon-bg">
                    <LinkedinOutlined />
                  </span>
                </a>
                <a
                  href="http://www.twitter.com/lordvic001"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <span className="icon-bg">
                    <TwitterCircleFilled style={{ color: "#fff" }} />
                  </span>
                </a>
                <a
                  href="http://www.github.com/lordvic4real"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <span className="icon-bg">
                    <GithubOutlined style={{ color: "#fff" }} />
                  </span>
                </a>
              </div>
            </div>

            <div className="menu-mobile">
              {menuOpen ? (
                <CloseOutlined
                  onClick={() => toggleMenu()}
                  style={{
                    color: "white",
                    marginRight: "30px",
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                />
              ) : (
                <MenuOutlined
                  onClick={() => toggleMenu()}
                  style={{
                    color: "white",
                    marginRight: "30px",
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                />
              )}
              {menuOpen && (
                <MobileSubMenu>
                  <div className="mobile-menu-dropdown-item">
                    <span>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </span>
                  </div>
                  <div className="mobile-menu-dropdown-item alt-bg">
                    <span>
                      <Link href="/about">
                        <a>About</a>
                      </Link>
                    </span>
                  </div>
                  <div className="mobile-menu-dropdown-item">
                    <span>
                      <Link href="/portfolio">
                        <a>Portfolio</a>
                      </Link>
                    </span>
                  </div>
                  <div className="mobile-menu-dropdown-item alt-bg">
                    <span>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </span>
                  </div>
                </MobileSubMenu>
              )}
            </div>
          </header>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
