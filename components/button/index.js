import styled from "@emotion/styled";
import { remCalc } from "../../utils";
import Link from "next/link";

export const gtmButtonClick = (rest) => {
  window.dataLayer?.push({
    event: "ButtonClick",
    linkTo: null,
    ...rest,
  });
};

const Button = ({ children, ...props }) => {
  const mainDataLayer = {
    linkTo: props.href,
  };
  const handleClick = () => {
    gtmButtonClick(mainDataLayer);
  };

  return (
    <ButtonContainer className="button" onClick={handleClick} onKeyDown={handleClick} {...props}>
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
