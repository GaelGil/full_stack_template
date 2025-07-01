import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";

type Props = {
  setUser: (user: User) => void;
};

const LogInForm = () => {
  const [username, setUsername] = useState("");
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
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      setMessage(data.msg);
      if (response.ok) {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user); // store in state
        navigate("/profile");
        navigate("/profile");
      }
    } catch (error) {
      setMessage("error signing up");
    }
  };
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <AuthForm
          isLogin={true}
          username={username}
          password={password}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        {message && <p>{message}</p>}
      </div>
    </Container>
  );
};

export default LogInForm;
