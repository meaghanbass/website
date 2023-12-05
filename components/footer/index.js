import React, { useState } from "react";
import Link from "next/link.js";
import FooterContainer from "./index.style.js";
import Marquee from "react-fast-marquee";
import Button from "../button";
import Icon from "../../assets/fonts/icon/index.js";

const Footer = ({}) => {
  const date = new Date().getFullYear();

  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <FooterContainer>
      <div className="marquee-wrapper">
        <Marquee className="marquee-container" gradient={false} speed={50}>
          <h3 className={`${isBlurred ? "blurry" : ""}`}>Hey! 👋🏻 Get in touch</h3>
          <Button href="/contact/" title="Contact" data-location="footer" onMouseEnter={() => setIsBlurred(true)} onMouseLeave={() => setIsBlurred(false)}>
            Contact
          </Button>
          <h3 className={`${isBlurred ? "blurry" : ""}`}>Hey! 👋🏻 Get in touch</h3>
          <Button href="/contact/" title="Contact" data-location="footer" onMouseEnter={() => setIsBlurred(true)} onMouseLeave={() => setIsBlurred(false)}>
            Contact
          </Button>
          <h3 className={`${isBlurred ? "blurry" : ""}`}>Hey! 👋🏻 Get in touch</h3>
          <Button href="/contact/" title="Contact" data-location="footer" onMouseEnter={() => setIsBlurred(true)} onMouseLeave={() => setIsBlurred(false)}>
            Contact
          </Button>
          <h3 className={`${isBlurred ? "blurry" : ""}`}>Hey! 👋🏻 Get in touch</h3>
          <Button href="/contact/" title="Contact" data-location="footer" onMouseEnter={() => setIsBlurred(true)} onMouseLeave={() => setIsBlurred(false)}>
            Contact
          </Button>
          <h3 className={`${isBlurred ? "blurry" : ""}`}>Hey! 👋🏻 Get in touch</h3>
          <Button href="/contact/" title="Contact" data-location="footer" onMouseEnter={() => setIsBlurred(true)} onMouseLeave={() => setIsBlurred(false)}>
            Contact
          </Button>
          <h3 className={`${isBlurred ? "blurry" : ""}`}>Hey! 👋🏻 Get in touch</h3>
          <Button href="/contact/" title="Contact" data-location="footer" onMouseEnter={() => setIsBlurred(true)} onMouseLeave={() => setIsBlurred(false)}>
            Contact
          </Button>
        </Marquee>
      </div>

      <div className="row">
        <div className="social-links">
          <Link href="https://www.linkedin.com/in/meaghanbass/" target="_blank">
            <Icon type="linkedin" />
          </Link>

          <Link href="https://github.com/meaghanbass" target="_blank">
            <Icon type="github" />
          </Link>
        </div>

        <div className="credits">
          <p>© {date} MEAGHAN BASS.</p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
