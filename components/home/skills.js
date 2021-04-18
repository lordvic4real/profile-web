import Link from "next/link";
import React, { useEffect } from "react";
import styled from "styled-components";
import { skills } from "../data/services";
import AOS from "aos";

const SkillContainer = styled.div`
  height: auto;
  padding: 5%;
  .skills h1 {
    font-family: muli;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    padding: 20px;
    text-transform: capitalize;
  }
  .img-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    grid-gap: 20px;
    padding: 30px;
    @media (max-width: 767px) {
      grid-template-columns: 1.4fr;
      justify-content: center;
      padding: 20px;
    }
  }
  .img-wrapper img {
    height: 150px;
    width: 150px;
    object-fit: contain;
  }
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    height: 220px;
    justify-content: center;
    box-shadow: 1px 1px 1px 1px rgba(153, 153, 153, 0.53);
  }
  .grow {
    transition: all 0.2s ease-in-out;
  }
  .grow:hover {
    transform: scale(1.02);
  }
`;

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);

  return (
    <>
      <SkillContainer>
        <div className="skills">
          <h1 className="">my skills</h1>
          <div className="img-wrapper">
            {skills &&
              skills.map((skill) => (
                <div
                  className="card grow"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  key={skill.id}
                >
                  <img src={skill.image} alt="skill img" />
                  <h3>{skill.title}</h3>
                </div>
              ))}
          </div>
        </div>
      </SkillContainer>
    </>
  );
}
export default Skills;
