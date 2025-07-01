import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/Auth";
import Navigation from "./components/Layout/NavBar";
import FeedPage from "./pages/Feed";
import "./css/App.css";

function App() {
  return (
    <>
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/feed" element={<FeedPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
