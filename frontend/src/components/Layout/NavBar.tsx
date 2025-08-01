import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState<boolean>();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        console.log(res.status);
      }
    } catch (error) {
      alert(`error logging out: ${error}`);
    } finally {
      setLoading(false);
    }
    console.log(loading);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Home
        </Link>

        <button
          className="md:hidden text-gray-400 hover:text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div
          className={`md:flex md:items-center gap-4 ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-700">
            About
          </Link>
          {!token ? (
            <Link
              to="/login"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Log In
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="block px-3 py-2 rounded hover:bg-gray-700 text-left w-full md:w-auto"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
