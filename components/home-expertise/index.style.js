import styled from "@emotion/styled";
import { remCalc, mediaQuery } from "../../utils";

const HomeExpertiseContainer = styled.div`
  padding: calc(40px + (150 - 40) * ((100vw - 300px) / (2000 - 300))) 0;

  .hoverimage {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 250px;
    object-fit: cover;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    filter: grayscale(100%);
    // filter: sepia(1);
  }

  > .row {
    ${mediaQuery[5]} {
      flex-wrap: unset;
    }

    > .left {
      width: 100%;
      padding-left: ${remCalc(12)};
      padding-right: ${remCalc(12)};

      ${mediaQuery[3]} {
        padding-left: ${remCalc(18)};
        padding-right: ${remCalc(18)};
      }

      ${mediaQuery[5]} {
        width: 41.67%;
      }
    }

    > .right {
      width: 100%;
      padding-left: ${remCalc(12)};
      padding-right: ${remCalc(12)};

      ${mediaQuery[3]} {
        padding-left: ${remCalc(18)};
        padding-right: ${remCalc(18)};
      }

      ${mediaQuery[5]} {
        width: auto;
      }

      > .row {
        align-items: center;

        > .left {
          width: 100%;

          ${mediaQuery[3]} {
            width: auto;
            padding-right: ${remCalc(18)};
            flex: 1;
          }
        }

        > .right {
          width: 100%;

          ${mediaQuery[3]} {
            width: max-content;
          }

          .button {
            margin-top: ${remCalc(36)};
            margin-bottom: ${remCalc(36)};
          }
        }
      }
    }
  }

  .list {
    counter-reset: counter-number;

    &__row {
      ${mediaQuery[3]} {
        display: flex;
        margin: ${remCalc(60)} 0;
      }

      &.one {
        justify-content: flex-end;
      }

      &.two {
        justify-content: flex-start;
      }

      &.three {
        justify-content: center;
      }
    }

    &__item {
      counter-increment: counter-number;
      display: flex;
      margin: ${remCalc(30)} 0;

      ${mediaQuery[3]} {
        margin: 0 ${remCalc(30)} 0 0;
      }

      &::before {
        content: "0" counter(counter-number);
        padding: 0 ${remCalc(30)};
        font-size: ${remCalc(20)};
        font-weight: 200;
        opacity: 0.5;
        order: 2;
        margin-left: auto;

        ${mediaQuery[3]} {
          margin-left: unset;
        }
      }

      &::after {
        content: "";
        width: 1px;
        height: 100%;
        background-color: #ffffff;
        order: 3;
        transform: skew(-23deg);
        display: none;

        ${mediaQuery[3]} {
          display: block;
        }
      }

      .title {
        margin-bottom: 0;
      }
    }
  }
`;

export default HomeExpertiseContainer;
