import HelloCard from "./HelloCard";
import MainContent from "./MainContent";
import MiddleContent from "./MiddleContent";
import SideContent from "./SideContent";
import SkillsSection from "./SkillSection";

function Hero() {
  return (
    <div className="pt-20">
      <div className="container grid md:grid-cols-12 grid-cols-6 gap-2 mx-auto px-4  text-bentoOneText ">
        <HelloCard />
        <MiddleContent />
        <SideContent />
        <MainContent />
        <SkillsSection />
      </div>
    </div>
  );
}
export default Hero;
