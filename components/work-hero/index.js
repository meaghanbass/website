import React from "react";
import WorkHeroContainer from "./index.style.js";
import Icon from "../../assets/fonts/icon/index.js";
import { gsap } from "gsap";
import Image from "next/image";

const workList = [
  {
    name: "Avidian Wealth Solutions",
    description: 'Avidian Wealth Solutions ("Avidian") is a top-tier investment management office in the Houston/Austin area. I led the entire architecure and development of their new website utilizing WordPress, Next.JS, and Vercel.',
    link: "https://avidianwealth.com",
    image: "/images/color-swatches.webp",
  },
  {
    name: "Greater Houston Community Foundation",
    description: "",
    link: "https://ghcf.org",
    image: "/images/design-systems.webp",
  },
  {
    name: "Complete Care",
    description: "",
    link: "https://www.visitcompletecare.com",
    image: "/images/design-systems.webp",
  },
  {
    name: "Kaplan Sinus Relief",
    description: "",
    link: "https://www.kaplansinusrelief.com",
    image: "/images/design-systems.webp",
  },
  {
    name: "Living Designs Furniture",
    description: "",
    link: "https://www.livingdesignsfurniture.com",
    image: "/images/design-systems.webp",
  },
  {
    name: "Texas Mattress Makers",
    description: "",
    link: "https://www.texasmattressmakers.com",
    image: "/images/design-systems.webp",
  },
];

const WorkHero = ({}) => {
  if (typeof window !== "undefined") {
    gsap.set("details img.hoverimage", { yPercent: -50, xPercent: -50 });

    gsap.utils.toArray("details").forEach((el) => {
      const image = el.querySelector("img.hoverimage"),
        setX = gsap.quickSetter(image, "x", "px"),
        setY = gsap.quickSetter(image, "y", "px"),
        align = (e) => {
          setX(e.clientX);
          setY(e.clientY);
        },
        startFollow = () => document.addEventListener("mousemove", align),
        stopFollow = () => document.removeEventListener("mousemove", align),
        fade = gsap.to(image, { autoAlpha: 0.5, ease: "none", paused: true, onReverseComplete: stopFollow });

      el.addEventListener("mouseenter", (e) => {
        fade.play();
        startFollow();
        align(e);
      });

      el.addEventListener("mouseleave", () => fade.reverse());
    });
  }

  return (
    <WorkHeroContainer>
      <h1>Work.</h1>

      {workList.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <details>
              <summary>
                <div className="row justify-between align-center">
                  <h3>{item.name}</h3>

                  <Icon type="arrow" />
                </div>

                <Image className="hoverimage" src={item.image} alt="" width="200" height="250" />
              </summary>

              <div className="content">
                <p className="sm">{item.description}</p>

                <p className="highlight">
                  <a className="xs" href={item.link} target="_blank" rel="noreferrer" title={item.name}>
                    Visit Website <Icon type="external" />
                  </a>
                </p>
              </div>
            </details>
          </React.Fragment>
        );
      })}

      {/* <div className="">
        <details>
          <summary>
            <div className="row justify-between align-center">
              <h3>Avidian Wealth Solutions</h3>

              <Icon type="arrow" />
            </div>

            <Image className="hoverimage" src="/images/color-swatches.webp" alt="" width="200" height="250" />
          </summary>

          <div className="content">
            <p className="sm">
              Avidian Wealth Solutions (&quot;Avidian&quot;) is a top-tier investment management office in the Houston/Austin area. I led the entire architecure and development of their new website utilizing WordPress, Next.JS, and Vercel.
            </p>

            <p className="highlight">
              <a className="xs" href="" target="" title="">
                Visit Website <Icon type="external" />
              </a>
            </p>
          </div>
        </details>
      </div> */}
    </WorkHeroContainer>
  );
};

export default WorkHero;
