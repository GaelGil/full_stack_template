import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";

const SignUpForm = () => {
  // const [login, setLogin] = useState("false");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  // function to handle if algorithm changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      setMessage(data.msg);
      if (response.ok) {
        navigate("/feed");
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage("error signing up");
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1> Sign Up</h1>
      <div>
        {/* importing algorithm form component with sorting specific values */}
        <AuthForm
          isLogin={false}
          username={username}
          email={email}
          password={password}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        {message && <p className="text-danger">{message}</p>}
      </div>
    </Container>
  );
};

export default SignUpForm;
