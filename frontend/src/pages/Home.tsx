import { AppShell } from "@mantine/core";
import HomeBanner from "../components/Home/HomeBanner";
import Footer from "../components/Layout/Footer";
import Navigation from "../components/Layout/NavBar";

const HomePage: React.FC = () => {
  return (
    <AppShell>
      <AppShell.Header>
        <Navigation />
      </AppShell.Header>
      <AppShell.Main>
        <HomeBanner />
      </AppShell.Main>
      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};

export default HomePage;
