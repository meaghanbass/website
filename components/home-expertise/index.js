import React, { useState, useEffect } from "react";
import HomeExpertiseContainer from "./index.style.js";
import Button from "../button";
import { gsap } from "gsap";
import Image from "next/image";

const experienceList = [
  {
    name: "one",
    items: [
      {
        title: "Web Design",
        image: "/images/color-swatches.webp",
      },
      {
        title: "Development",
        image: "/images/laptops.webp",
      },
    ],
  },
  {
    name: "two",
    items: [
      {
        title: "User Analytics",
        image: "/images/user-journey.webp",
      },
      {
        title: "UI & UX",
        image: "/images/wireframes.webp",
      },
      {
        title: "Virtual Reality",
        image: "/images/vr.webp",
      },
    ],
  },
  {
    name: "three",
    items: [
      {
        title: "3D Animation",
        // image: "https://media.tenor.com/bxtIl41vKEIAAAAd/stimulated-3d.gif",
        image: "/images/3d.gif",
      },
      {
        title: "Design Systems",
        // image: "https://images.unsplash.com/photo-1537202108838-e7072bad1927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1046&q=80",
        image: "/images/design-systems.webp",
      },
    ],
  },
];

const HomeExpertise = ({}) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    gsap.set(".list img.hoverimage", { yPercent: -50, xPercent: -50 });

    gsap.utils.toArray(".list__item").forEach((el) => {
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
  } else {
    null;
  }

  return (
    <HomeExpertiseContainer>
      <div className="row">
        <div className="column left">
          <h2>My Expertise</h2>
        </div>

        <div className="column right">
          <div className="row">
            <div className="column left">
              <p>I&apos;m passtionate about uncovering the best digital innovations for forward-thinking brands looking to push boundaries and drive significant impact.</p>
            </div>
          </div>

          <div className="list">
            {experienceList.map((row, i) => {
              return (
                <div className={`list__row ${row.name}`} key={i}>
                  {row.items.map((item, i) => {
                    return (
                      <div className="list__item" key={i}>
                        <Image className="hoverimage" src={item.image} alt={item.title} width="200" height="250" />
                        <h3 className="h2 title">{item.title}</h3>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </HomeExpertiseContainer>
  );
};

export default HomeExpertise;
