import React from "react";
import WorkHeroContainer from "./index.style.js";
import Icon from "../../assets/fonts/icon/index.js";
import Html2react from "../common/html2react.js";
import { gsap } from "gsap";
import Image from "next/image";

const workList = [
  {
    name: "Avidian Wealth Solutions",
    description:
      '<p className="sm">Avidian Wealth Solutions ("Avidian") is a top-tier investment management firm in the Houston/Austin area. I led the architecure and development of their new website utilizing WordPress, Next.JS, and Vercel.</p><p className="sm">Our goal was to resdesign their existing site with updated branding, create a more modern and high-end feel, and build a web experience that is scalable. We went to great lenths to imcorporate any user experience we had previously gathered about their old website to help guide the new user experience. Using my proprietary component system, we were able to deliver a site that is completely manageable by both developers and the client. They are now able to manage 99% of the website completely on their own without any required development knowledge.</p><p className="sm">Our marketing efforts and A/B testing implemented throughout the site allow us to gain invaluable insights into the entire user journey, providing all of the necessary and minute interaction details that are needed to constantly adjust advertising efforts and improve overall conversions.</p>',
    link: "https://avidianwealth.com",
    image: "/images/avidian.webp",
  },
  {
    name: "Greater Houston Community Foundation",
    description:
      '<p className="sm">I’ve done extensive work with local Houston non-profits - Greater Houston Community Foundation being the most recent. I led the architecture and development of their new website utilizing WordPress, Frontity (a React framework), and Vercel.</p><p className="sm">This client came to us needing their website redesigned and developed. I managed the extensive planning of their site structure, while keeping scalability at the forefront of the project. This is the first site where I rolled out my unique architecture style, allowing the client to be able handle any website updates completely on their own… all while retaining the integrity of fun interactive elements that typically need to be maintained by a development team.</p><p className="sm">As a non-profit, web accessibility and security was critical to them. I led the way to ensuring their site would exceed compliance standards, while maintaining their brand integrity.</p>',
    link: "https://ghcf.org",
    image: "/images/ghcf.webp",
  },
  {
    name: "Complete Care",
    description:
      '<p className="sm">Complete Care is a multi-state urgent care and emergency room company that makes it easier and more convenient for people to access care when they need it most.</p><p className="sm">Our goal was the redesign and restructure their existing website into one that was more user-friendly and easily accessible and navigable. Due to the high number of locations, the site structure was extremely important to ensure our SEO efforts would be successful, and the make sure users could easily find the locations that would be closest to them no matter where they are.</p><p className="sm">While leading the development of this project, I integrated user location tracking, ensuring that site visitors would be served location information based on their exact coordinates.</p>',
    link: "https://www.visitcompletecare.com",
    image: "/images/complete-care.webp",
  },
  {
    name: "Kaplan Sinus Relief",
    description:
      '<p className="sm">Kaplan Sinus Relief in a Houston-based ENT, led by Dr. Kaplan. I led the development of his redesigned website using WordPress, Frontity (a React framework), and Vercel. We had been working with Dr. Kaplan for years before the redesign was initiated, allowing us to feed off of extensive user data from their old website. This gave us valuable insights that would be worked into the design, development, and archtecture of their new website.</p><p className="sm">One of the highest priorities was the Balloon Sinuplasty Quiz, which has enabled end-users to get immediate information about whether their symptons are covered by Dr. Kaplan. They end the quiz with a prompt to either schedule and appointment or get more information about what their next steps should be.</p>',
    link: "https://www.kaplansinusrelief.com",
    image: "/images/kaplan.webp",
  },
  {
    name: "Living Designs Furniture",
    description:
      '<p className="sm">A unique custom furniture manufacturer in Houston, Living Designs Furniture came to us needing a multi-phased website redesign, for which I led all of the architecture and development.</p><p className="sm">Phase 1 entailed rebranding and redesigning their core website. During the planning of this phase, we needed to incorporate our insights on the rest of the project to ensure that our first phase of development would set us up for success during the second phase.</p><p className="sm">Phase 2 came with the incorporation of their semi-ecommerce experience. The custom nature of their work meant that we had to think long term about the structure of their product variations and data to ensure that future products offerings would be able to be incorporated into the site smoothly. Now, they have a beautiful website that functions as a custom furntiure creation experience.</p>',
    link: "https://www.livingdesignsfurniture.com",
    image: "/images/ldf.webp",
  },
  {
    name: "Texas Mattress Makers",
    description:
      '<p className="sm">Texas Mattress Makers is a large, multi-location mattress manufacturer in the Houston area. They came to us needing an extensive redesign for their 50+ product ecommerce site.</p><p className="sm">I was part of the initial development team and now lead development on many parts of their website and lead their monthly sales promotions. During development, we had to incorporate a wide variety of products and promotions into their sales process. Where many of their promotions prior to the redesign were done only in store, we needed to bring all of that to the web experience as well.</p><p className="sm">Thanks to our marketing efforts and data-driven analysis, they’ve been able to expand their retail locations!</p>',
    link: "https://www.texasmattressmakers.com",
    image: "/images/tmm.webp",
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

                <Image className="hoverimage" src={item.image} alt="" width="300" height="200" />
              </summary>

              <div className="content">
                <Html2react html={item.description} />

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
