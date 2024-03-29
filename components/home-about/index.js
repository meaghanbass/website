import HomeAboutContainer from "./index.style.js";
import Button from "../button";

const HomeAbout = ({}) => {
  return (
    <HomeAboutContainer>
      <div className="row">
        <div className="column left">
          <Button href="/about/" title="More About Me" data-location="home-about">
            More About Me
          </Button>
        </div>

        <div className="column right">
          <h2>About Me</h2>

          <p>With over 15 years of experience in Development, I&apos;ve focused on UX, interactivity, and architecting unique web experiences, while maintaining the highest standards in performance, scalability, and accessibility.</p>
        </div>
      </div>
    </HomeAboutContainer>
  );
};

export default HomeAbout;
