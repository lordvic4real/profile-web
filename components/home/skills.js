import Link from "next/link";
import Styled from "styled-components";
import styled from "styled-components";

const SkillContainer = styled.div`
  height: auto;
  .skills h1 {
    font-family: muli;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    padding: 20px;
  }
  .img-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    grid-gap: 10px;
    padding: 12px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-content: center;
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
  }
  .grow {
    transition: all 0.2s ease-in-out;
  }
  .grow:hover {
    transform: scale(1.02);
  }
  .move-me {
    display: inline-block;
    padding: 20px;
    color: white;
    position: relative;
    margin: 0 0 10px 0;
  }
  .move-me-1 {
    animation: move-in-steps 8s steps(4) infinite;
  }
  .move-me-2 {
    animation: move-in-steps 8s steps(4, start) infinite;
  }
  .move-me-3 {
    animation: move-in-steps 8s infinite;
  }

  @keyframes move-in-steps {
    0% {
      left: 0;
      color: teal;
    }
    100% {
      left: 100%;
      color: red;
      border-radius: 5px;
      padding: 5px;
    }
  }
`;

const Skills = (props) => (
  <SkillContainer>
    <div className="skills">
      <h1 className="move-me-3">my skills</h1>
      <div className="img-wrapper">
        <div className="card grow">
          <img src="/images/react.png" />
          <h3>React Js</h3>
        </div>
        <div className="card grow">
          <img src="/images/next.png" />
          <h3>Next Js</h3>
        </div>
        <div className="card grow">
          <img src="/images/js.png" />
          <h3>Javascript</h3>
        </div>
        <div className="card grow">
          <img src="/images/class.png" />
          <h3>Teaching</h3>
        </div>
      </div>
    </div>
  </SkillContainer>
);
export default Skills;
