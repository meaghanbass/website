import { css } from "@emotion/react";
import { Inter, DM_Serif_Display, Monsieur_La_Doulaise, Playfair_Display } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const dmserifdisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
const monsieurladoulaise = Monsieur_La_Doulaise({ weight: "400", subsets: ["latin"] });
const playfairdisplay = Playfair_Display({ subsets: ["latin"] });

const remCalc = (pixel, isDesktop = true) => {
  return `${pixel / 10}rem`;
};

const breakpoints = [320, 375, 768, 1024, 1200, 1400, 1600, 2000];

const mediaQuery = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  ::selection {
    background: #b3d4fc;
  }

  body {
    line-height: 1;
    background-color: #0a050d;
    color: #ffffff;
    font-family: ${inter.style.fontFamily}, sans-serif;
    margin: 0;
    padding: 0;
    cursor: default;
  }

  html {
    overscroll-behavior: none;
    height: -webkit-fill-available;
  }

  html,
  body {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overscroll-behavior-y: none;
  }

  @media only screen and (min-width: 2000px) {
    html {
      font-size: 0.556vw;
    }
  }

  .monsieurladoulaise {
    font-family: ${monsieurladoulaise.style.fontFamily};
    font-size: 150%;
  }

  .playfairdisplay {
    font-family: ${playfairdisplay.style.fontFamily};
  }

  .inter {
    font-family: ${inter.style.fontFamily};
    font-weight: 100;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    font-family: ${playfairdisplay.style.fontFamily};
  }

  h1,
  .h1 {
    // font-size: calc(36px + (48 - 36) * ((100vw - 300px) / (2000 - 300)));
    font-size: calc(36px + (175 - 36) * ((100vw - 300px) / (2000 - 300)));
    margin-bottom: 36px;
  }

  h2,
  .h2 {
    font-size: calc(30px + (36 - 30) * ((100vw - 300px) / (2000 - 300)));
    margin-bottom: 24px;

    ${mediaQuery[8]} {
      font-size: 36px;
    }
  }

  h3,
  .h3 {
    font-size: calc(24px + (24 - 24) * ((100vw - 300px) / (2000 - 300)));
    margin-bottom: 24px;

    ${mediaQuery[8]} {
      font-size: 24px;
    }
  }

  h4,
  .h4 {
    font-size: calc(18px + (20 - 18) * ((100vw - 300px) / (2000 - 300)));
    margin-bottom: 12px;

    ${mediaQuery[8]} {
      font-size: 20px;
    }
  }

  h5,
  .h5 {
    font-size: calc(16px + (16 - 16) * ((100vw - 300px) / (2000 - 300)));
    margin-bottom: 12px;

    ${mediaQuery[8]} {
      font-size: 16px;
    }
  }

  h6,
  .h6 {
    font-size: calc(12px + (14 - 12) * ((100vw - 300px) / (2000 - 300)));
    margin-bottom: 12px;

    ${mediaQuery[8]} {
      font-size: 14px;
    }
  }

  p,
  a {
    font-size: calc(22px + (36 - 22) * ((100vw - 300px) / (2000 - 300)));
    line-height: 1.5;
    font-weight: 200;
    margin-bottom: 0;

    &:not(:last-of-type) {
      margin-bottom: 22px;

      ${mediaQuery[3]} {
        margin-bottom: 36px;
      }
    }

    &.sm {
      font-size: calc(16px + (20 - 16) * ((100vw - 300px) / (2000 - 300)));

      &:not(:last-of-type) {
        margin-bottom: 12px;
      }
    }

    &.xs {
      font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (2000 - 300)));

      &:not(:last-of-type) {
        margin-bottom: 10px;
      }

      .icon {
        svg {
          width: ${remCalc(12)};
          height: ${remCalc(12)};
        }
      }
    }
  }

  a {
    display: inline-flex;
    gap: ${remCalc(12)};
  }

  .uppercase {
    text-transform: uppercase;
  }

  .highlight {
    & * {
      color: #e1cfb7;
      fill: #e1cfb7 !important;
    }
  }

  details {
    position: relative;
    padding: ${remCalc(36)} 0;

    &::before {
      content: "";
      position: absolute;
      height: 1px;
      background: rgb(255, 255, 255);
      top: 0;
      left: 0;
      right: 0;
    }

    &:last-of-type {
      &::after {
        transition: all 0.4s ease-in-out 0s;
        content: "";
        position: absolute;
        height: 1px;
        background: rgb(255, 255, 255);
        bottom: 0;
        left: 0;
        right: 0;
      }
    }

    summary {
      cursor: pointer;

      &::marker,
      &::-webkit-details-marker {
        display: none !important;
      }

      * {
        margin-bottom: 0;
      }

      .icon {
        transition: all 0.4s ease-in-out 0s;
        border: 1px solid #ffffff;
        border-radius: 9999px;
        width: ${remCalc(36)};
        height: ${remCalc(36)};
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &[open] {
      summary {
        .icon {
          transform: rotate(180deg);
        }
      }
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;

    &.justify-between {
      justify-content: space-between;
    }

    &.align-center {
      align-items: center;
    }
  }

  // Conversational Form
  #conversational-form {
    display: none;
  }

  // React-Three-Fiber Styles
  .r3f-label {
    > div {
      font-family: Helvetica, Arial;
      position: absolute;
      background: #00000088;
      color: white;
      padding: 15px;
      white-space: nowrap;
      overflow: hidden;
      border-radius: 30px;
      user-select: none;
    }
  }
`;

export { remCalc, mediaQuery, globalStyles };
