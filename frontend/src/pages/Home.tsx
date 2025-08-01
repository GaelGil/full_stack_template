import "../css/Home.css";
import HomeBanner from "../components/Home/HomeBanner";
import FeaturesSection from "../components/Home/FeatureSection";
import AboutSection from "../components/Home/AboutSection";
import Testimonials from "../components/Home/Testimonials";
const HomePage: React.FC = () => {
  return (
    <>
      <HomeBanner />
      <h1 className="text-3xl font-bold underline"> Hello world! </h1>
      <FeaturesSection />
      <AboutSection />
      <Testimonials />
    </>
  );
};

export default HomePage;
