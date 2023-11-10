import styled from "@emotion/styled";
import { remCalc, mediaQuery } from "../../utils";

const WorkHeroContainer = styled.div`
  padding: ${remCalc(180)} ${remCalc(12)} ${remCalc(100)} ${remCalc(12)};

  ${mediaQuery[3]} {
    padding: ${remCalc(180)} ${remCalc(18)} ${remCalc(100)} ${remCalc(18)};
  }

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
  }

  .content {
    margin-top: ${remCalc(24)};

    a {
      text-decoration: none;
    }
  }
`;

export default WorkHeroContainer;
