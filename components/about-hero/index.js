import AboutHeroContainer from "./index.style.js";

const AboutHero = ({}) => {
  return (
    <AboutHeroContainer>
      <h1>A bit about me.</h1>

      <div className="content">
        <p>I'm a digital creator based in Houston, TX. I intersect beauty and functionality to create experiences that users love to interact with.</p>

        <p>
          For over 15 years I've been creating websites and tools that are fast, scalable, and interactive. Since the days of MySpace 🤣, I've been hooked on all things tech - from building computers, to creating amazing 3D animations - and take
          every opportunity to continue learning.
        </p>

        <p>
          I'm particularly skilled in creating <em>efficient</em> solutions to architectural conundrums. I thrive in situations where I need to build products that are scalable far into the future.{" "}
          <span className="highlight">(I think this stems from my organization obsession.)</span>
        </p>

        <p>Creative construction is my passion, and I love the joy that it brings those who are impacted by it.</p>
      </div>
    </AboutHeroContainer>
  );
};

export default AboutHero;
