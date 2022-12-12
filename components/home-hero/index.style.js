import styled from "@emotion/styled";
import { remCalc, mediaQuery } from "../../utils";

const HomeHeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: calc(100% - ${remCalc(24)});
    margin-left: auto;
    margin-right: auto;

    ${mediaQuery[3]} {
      width: 80%;
    }

    .monsieurladoulaise {
      transition: all 0.5s cubic-bezier(0.5, 0, 0, 1);

      &:hover {
        transform: skew(15deg);
      }
    }

    .inter {
      letter-spacing: -0.5rem;

      &.split {
        transition: all 0.5s cubic-bezier(0.5, 0, 0, 1);

        &:hover {
          font-weight: 300;
        }
      }
    }

    h1,
    .h1 {
      font-size: calc(36px + (175 - 36) * ((100vw - 300px) / (2000 - 300)));
      margin-bottom: 36px;

      ${mediaQuery[8]} {
        font-size: 48px;
      }
    }
  }
`;

export default HomeHeroContainer;
