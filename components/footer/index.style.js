import styled from "@emotion/styled";
import { remCalc, mediaQuery } from "../../utils";

const FooterContainer = styled.div`
  .marquee-wrapper {
    position: relative;
    padding: ${remCalc(36)} 0;

    &::before,
    &::after {
      transition: all 0.4s ease-in-out 0s;
      content: "";
      position: absolute;
      left: ${remCalc(12)};
      right: ${remCalc(12)};
      height: ${remCalc(5)};
      border-top: ${remCalc(1)} solid #ffffff;
      border-bottom: ${remCalc(1)} solid #ffffff;

      ${mediaQuery[3]} {
        left: ${remCalc(18)};
        right: ${remCalc(18)};
      }
    }

    &::before {
      top: 0px;
    }

    &::after {
      bottom: 0px;
    }

    .marquee-container {
      .rfm-marquee {
        h3 {
          margin: ${remCalc(5)} 0;
          transition: all 0.4s ease-in-out 0s;

          &.blurry {
            filter: blur(4px);
            transition: all 0.4s ease-in-out 0s;
          }
        }

        .button {
          margin: 0 ${remCalc(100)};
        }
      }
    }
  }

  .credits {
    padding: ${remCalc(36)} ${remCalc(12)};
    text-align: right;
    opacity: 0.7;

    ${mediaQuery[3]} {
      padding: ${remCalc(36)} ${remCalc(18)};
    }

    p {
      font-size: ${remCalc(12)};

      ${mediaQuery[3]} {
        font-size: ${remCalc(14)};
      }
    }
  }
`;

export default FooterContainer;
