import "../css/Home.css";
import About from "../components/About";
import AuthPage from "./Auth";

const Home: React.FC = () => {
  return (
    <>
      <About />
      <AuthPage />
    </>
  );
};

export default Home;
