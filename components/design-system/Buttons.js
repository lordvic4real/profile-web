import styled, { css } from "styled-components";

export const WhiteHoverButton = styled.a`
  width: 121px;
  height: 35px;
  ${(props) =>
    props.large &&
    css`
      width: 237px;
      height: 40px;
      border-radius: 20px;
    `}
  border-radius: 17.5px;
  color: ${(props) => props.theme.vcareWhite};
  background: ${(props) => props.theme.vcareDark};
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    border: 1px solid ${(props) => props.theme.vcareWhite};
    color: ${(props) => props.theme.vcareWhite};
  }
`;

export const PinkHoverButton = styled.a`
  width: 121px;
  height: 35px;
  ${(props) =>
    props.large &&
    css`
      width: 237px;
      height: 40px;
      border-radius: 20px;
    `}
  border-radius: 17.5px;
  color: ${(props) => props.theme.vcareWhite};
  background: ${(props) => props.theme.vcareDark};
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    border: 1px solid ${(props) => props.theme.vcarePink};
    color: ${(props) => props.theme.vcarePink};
  }
`;

export const NavButton = styled.a`
  /* Adapt the colors based on primary prop */
  // background: ${(props) => (props.primary ? "palevioletred" : "white")};
  // color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  background: ${(props) => props.theme.vcareDark};
  border-radius: 17.5px;
  text-align: center;
  height: 35px;
  width: 121px;
  color: ${(props) => props.theme.vcareWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: ${(props) => props.theme.vcareWhite}
  }
`;
export const AppointmentBtn = styled.button`
  background: ${(props) => props.theme.vcareDark};
  box-shadow: -3px 3px 11px rgba(140, 198, 223, 0.8);
  border-radius: 20px;
  height: 40px;
  width: 237px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  color: ${(props) => props.theme.vcareWhite};
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.04em;
`;
