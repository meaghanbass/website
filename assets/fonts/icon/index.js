import IconContainer from "./index.style.js";

const Icon = ({ type }) => {
  return (
    <IconContainer className="icon">
      {type === "arrow" && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8L14.59 6.59L9 12.17L9 -6.11959e-07L7 -7.86805e-07L7 12.17L1.42 6.58L6.99382e-07 8L8 16L16 8Z" />
        </svg>
      )}
      {type === "external" && (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 16H2V2H9V0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z" />
        </svg>
      )}
    </IconContainer>
  );
};

export default Icon;
