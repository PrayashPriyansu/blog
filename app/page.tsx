import Hero from "./_components/portfolio/Hero";
import PFooter from "./_components/portfolio/PFooter";
import PHeader from "./_components/portfolio/PHeader";

export default function Home() {
  return (
    <div>
      <div className="pb-5">
        <PHeader />
        <Hero />
      </div>
      <PFooter />
    </div>
  );
}
