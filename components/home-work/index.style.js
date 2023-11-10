import styled from "@emotion/styled";
import { remCalc, mediaQuery } from "../../utils";

const HomeWorkContainer = styled.div`
  position: relative;
  padding: calc(40px + (150 - 40) * ((100vw - 300px) / (2000 - 300))) 0;

  &::before {
    content: "";
    position: absolute;
    width: calc(100% - ${remCalc(24)});
    height: 1px;
    background: rgb(255, 255, 255);
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    ${mediaQuery[3]} {
      width: calc(100% - ${remCalc(36)});
    }
  }

  &::after {
    transition: all 0.4s ease-in-out 0s;
    content: "";
    position: absolute;
    width: calc(100% - ${remCalc(24)});
    height: 1px;
    background: rgb(255, 255, 255);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    ${mediaQuery[3]} {
      width: calc(100% - ${remCalc(36)});
    }
  }

  .row {
    .column {
      width: 100%;
      padding-left: ${remCalc(12)};
      padding-right: ${remCalc(12)};

      ${mediaQuery[3]} {
        padding-left: ${remCalc(18)};
        padding-right: ${remCalc(18)};
      }

      &.left {
        order: 2;

        ${mediaQuery[3]} {
          width: 33.33%;
          order: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button {
          margin-top: ${remCalc(36)};

          ${mediaQuery[3]} {
            margin-top: 0;
          }
        }
      }

      &.right {
        ${mediaQuery[3]} {
          width: 66.67%;
        }
      }
    }
  }
`;

export default HomeWorkContainer;
