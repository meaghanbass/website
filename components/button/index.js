import styled from "@emotion/styled";
import { remCalc } from "../../utils";
import Link from "next/link";

const Button = ({ children, ...props }) => {
  return (
    <ButtonContainer className="button" {...props}>
      {children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled(Link)`
  padding: ${remCalc(12)} ${remCalc(60)};
  border: 1px solid #ffffff;
  border-radius: 9999px;
  font-size: ${remCalc(12)};
  line-height: 1.1666;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
  font-weight: 400;
  display: block;
  width: max-content;
  text-align: center;
  color: #ffffff;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    background-color: #ffffff;
    color: #0a050d;
  }
`;
