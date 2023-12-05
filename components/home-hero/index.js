import HomeHeroContainer from "./index.style.js";

const HomeHero = ({}) => {
  return (
    <HomeHeroContainer>
      <div className="content">
        <h1 className="inter">
          <span className="playfairdisplay">Creating</span> <span className="monsieurladoulaise">beautiful</span> & <span className="inter split">functional</span> websites
        </h1>
      </div>
    </HomeHeroContainer>
  );
};

export default HomeHero;
