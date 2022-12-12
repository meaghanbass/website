import FooterContainer from "./index.style.js";
import Marquee from "react-fast-marquee";
import Button from "../button";

const Footer = ({}) => {
  const date = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="marquee-wrapper">
        <Marquee gradient={false} speed={50}>
          <h3>Check out some of my work</h3>
          <Button href="/projects/">Projects</Button>
          <h3>Check out some of my work</h3>
          <Button href="/projects/">Projects</Button>
          <h3>Check out some of my work</h3>
          <Button href="/projects/">Projects</Button>
        </Marquee>
      </div>

      <div className="credits">
        <p>© {date} MEAGHAN BASS.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
