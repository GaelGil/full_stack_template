import React, { useState } from "react";
import LogInForm from "../components/Auth/LoginForm";
import SignUpForm from "../components/Auth/SignUpForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage: React.FC = () => {
  const [selected, setSelected] = useState<"login" | "signup">("login"); // declare the default state as string
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);
    if (token) {
      console.log("Redirecting because token exists");
      navigate("/", { replace: true }); // Or your route
    } else {
      console.log("No token — stay on auth page");
    }
  }, [navigate]);

  return (
    <div className="mt-5">
      {/* the selection options for sorting options */}
      <div className="mb-4 flex justify-center space-x-4">
        <label
          htmlFor="sorting-toggle"
          className={`cursor-pointer rounded border px-4 py-2 select-none 
        ${
          selected === "login"
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
        }`}
        >
          <input
            id="sorting-toggle"
            type="radio"
            name="visualizer"
            value="sorting"
            checked={selected === "login"}
            onChange={() => setSelected("login")}
            className="hidden"
          />
          Log In
        </label>

        <label
          htmlFor="graph-toggle"
          className={`cursor-pointer rounded border px-4 py-2 select-none 
        ${
          selected === "signup"
            ? "bg-gray-600 text-white border-gray-600"
            : "bg-white text-gray-600 border-gray-600 hover:bg-gray-100"
        }`}
        >
          <input
            id="graph-toggle"
            type="radio"
            name="visualizer"
            value="graph"
            checked={selected === "signup"}
            onChange={() => setSelected("signup")}
            className="hidden"
          />
          Sign Up
        </label>
      </div>
      {/* if the current state of our variable selected=sorting then we load the 
        sorting component with its info, otherwise we will load the traversal
        visualiser component
      */}
      {selected === "login" ? <LogInForm /> : <SignUpForm />}
    </div>
  );
};

export default AuthPage;
