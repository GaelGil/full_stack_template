import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";

// type Props = {
//   setUser: (user: User) => void;
// };

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
      console.log(data);
      setMessage(data.msg);
      if (response.ok) {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log(data.user);
        const userId = data.user.id;
        navigate(`/profile/${userId}`);
      } else {
        setMessage(data.error);
        // alert(data.error);
      }
    } catch (error) {
      console.error("Login Error", error);
      setMessage("Error Logging in");
    }
  };
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <div>
        <h1> Log In</h1>
        <AuthForm
          isLogin={true}
          username={username}
          password={password}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        {message && <p className="text-danger">{message}</p>}
      </div>
    </Container>
  );
};

export default LogInForm;
