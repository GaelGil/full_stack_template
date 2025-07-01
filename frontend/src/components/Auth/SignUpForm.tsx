import React, { useState } from "react";
import { Container } from "react-bootstrap";
// import type { AuthFormProps } from "../../types/AuthFormProp";
import AuthForm from "./AuthForm";

const SignUpForm = () => {
  // const [login, setLogin] = useState("false");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
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
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      setMessage(data.msg);
      if (response.ok) {
        console.log("here");
      }
    } catch (error) {
      setMessage("error signing up");
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1> Sign Up</h1>
      <div style={{ maxWidth: "400px", width: "100%" }}>
        {/* importing algorithm form component with sorting specific values */}
        <AuthForm
          isLogin={false}
          username={username}
          email={email}
          password={password}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        {message && <p>{message}</p>}
      </div>
    </Container>
  );
};

export default SignUpForm;
