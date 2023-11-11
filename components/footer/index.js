import React, { useState, useEffect } from "react";
import FooterContainer from "./index.style.js";
import Marquee from "react-fast-marquee";
import Button from "../button";

const Footer = ({}) => {
  const date = new Date().getFullYear();

  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <FooterContainer>
      <div className="marquee-wrapper">
        <Marquee className="marquee-container" gradient={false} speed={50}>
          <h3 className={`${isBlurred ? "blurry" : ""}`}>Hey! 👋🏻 Get in touch</h3>
          <Button href="/contact/" onMouseEnter={() => setIsBlurred(true)} onMouseLeave={() => setIsBlurred(false)}>
            Contact
          </Button>
          <h3 className={`${isBlurred ? "blurry" : ""}`}>Hey! 👋🏻 Get in touch</h3>
          <Button href="/contact/" onMouseEnter={() => setIsBlurred(true)} onMouseLeave={() => setIsBlurred(false)}>
            Contact
          </Button>
          <h3 className={`${isBlurred ? "blurry" : ""}`}>Hey! 👋🏻 Get in touch</h3>
          <Button href="/contact/" onMouseEnter={() => setIsBlurred(true)} onMouseLeave={() => setIsBlurred(false)}>
            Contact
          </Button>
          <h3 className={`${isBlurred ? "blurry" : ""}`}>Hey! 👋🏻 Get in touch</h3>
          <Button href="/contact/" onMouseEnter={() => setIsBlurred(true)} onMouseLeave={() => setIsBlurred(false)}>
            Contact
          </Button>
          <h3 className={`${isBlurred ? "blurry" : ""}`}>Hey! 👋🏻 Get in touch</h3>
          <Button href="/contact/" onMouseEnter={() => setIsBlurred(true)} onMouseLeave={() => setIsBlurred(false)}>
            Contact
          </Button>
          <h3 className={`${isBlurred ? "blurry" : ""}`}>Hey! 👋🏻 Get in touch</h3>
          <Button href="/contact/" onMouseEnter={() => setIsBlurred(true)} onMouseLeave={() => setIsBlurred(false)}>
            Contact
          </Button>
        </Marquee>
      </div>

      <div className="credits">
        <p>© {date} MEAGHAN BASS.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
