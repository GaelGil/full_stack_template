import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/Auth";
import Navigation from "./components/Layout/NavBar";
import "./css/App.css";
import ProfilePage from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Layout/Footer";
import FollowersPage from "./pages/Followers";
import PostsPage from "./pages/Posts";

function App() {
  return (
    <>
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              // <RedirectIfAuthenticated>
              // {" "}
              <AuthPage />
              // </RedirectIfAuthenticated>
            }
          />
          {/* <Route path="/feed" element={<FeedPage />} /> */}
          <Route element={<PrivateRoute />}>
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Route>
          <Route path="/followers/:userId" element={<FollowersPage />} />
          <Route path="/posts/:userId" element={<PostsPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
