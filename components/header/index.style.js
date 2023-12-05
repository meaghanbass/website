import styled from "@emotion/styled";
import { remCalc, mediaQuery } from "../../utils";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000000;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0a050d;
    box-shadow: #0a050d 0px -10rem 4rem 13rem;
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 2;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: calc(100% - ${remCalc(24)});
    bottom: 0px;
    height: 1px;
    background: rgb(255, 255, 255);
    transition: transform 0.3s ease-in-out 0s;

    ${mediaQuery[3]} {
      width: calc(100% - ${remCalc(36)});
    }
  }

  &.pinned {
    &::before {
      opacity: 1;
    }

    &::after {
      content: "";
      position: absolute;
      z-index: 2;
      left: 50%;
      width: calc(100% - ${remCalc(24)});
      bottom: 0px;
      height: 1px;
      background: rgb(255, 255, 255);
      transform: translateX(-50%) scaleX(1);
      transition: transform 1s cubic-bezier(0.8, 0, 0.2, 1) 0s;

      ${mediaQuery[3]} {
        width: calc(100% - ${remCalc(36)});
      }
    }
  }

  .logo {
    margin-bottom: 0;
    padding: ${remCalc(24)} ${remCalc(12)};
    display: flex;

    ${mediaQuery[3]} {
      padding: ${remCalc(24)} ${remCalc(18)};
    }

    svg {
      width: auto;
      height: ${remCalc(12)};

      ${mediaQuery[3]} {
        height: ${remCalc(20)};
      }
    }
  }

  nav {
    ul {
      display: flex;
      list-style-type: none;
      gap: ${remCalc(24)};
      margin: 0;
      padding: 0;

      li {
        a {
          font-size: ${remCalc(14)};
          text-transform: uppercase;
          letter-spacing: 0.005em;
          color: #ffffff;
        }
      }
    }
  }

  .button-wrapper {
    padding: ${remCalc(24)} ${remCalc(12)};

    ${mediaQuery[3]} {
      padding: ${remCalc(24)} ${remCalc(18)};
    }
  }
`;

export default HeaderContainer;
