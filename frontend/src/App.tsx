import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/Auth";
import Navigation from "./components/Layout/NavBar";

// import AboutSection from "./components/Home/AboutSection";
import FeedPage from "./pages/Feed";
import "./css/App.css";
import ProfilePage from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Layout/Footer";
import FriendsPage from "./pages/Friends";

function App() {
  return (
    <>
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Route>
          <Route path="/friends/:userId" element={<FriendsPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
