import styled from "@emotion/styled";
import { remCalc, mediaQuery } from "../../utils";

const AboutHeroContainer = styled.div`
  padding: ${remCalc(180)} ${remCalc(12)} ${remCalc(100)} ${remCalc(12)};

  ${mediaQuery[3]} {
    padding: ${remCalc(180)} ${remCalc(18)} ${remCalc(100)} ${remCalc(18)};
  }

  .content {
    ${mediaQuery[3]} {
      margin-left: 20.5vw;
    }
  }
`;

export default AboutHeroContainer;
