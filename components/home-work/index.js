import HomeWorkContainer from "./index.style.js";
import Button from "../button";

const HomeWork = ({}) => {
  return (
    <HomeWorkContainer>
      <div className="row">
        <div className="column left">
          <Button href="/work/">See What I&apos;ve Done</Button>
        </div>

        <div className="column right">
          <h2>Some of My Work</h2>

          <p>
            From collaborating with diverse industries to implementing an array of cutting-edge tech stacks, these samples encapsulate the essence of how I deliver innovative and visually stunning websites. Explore the diverse range of projects to
            witness firsthand how I blend technical expertise with creative finesse to transform ideas into seamless, user-centric digital experiences. Each portfolio piece reflects not only my technical proficiency but also my dedication to crafting
            solutions that resonate with clients and end-users alike.
          </p>
        </div>
      </div>
    </HomeWorkContainer>
  );
};

export default HomeWork;
