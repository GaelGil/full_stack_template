import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { login, signup } from "../../api/auth";
import { useUser } from "../../context/UserContext"; // adjust path as needed

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>();
  const { setUser } = useUser();

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
    setLoading(true);
    console.log(loading);
    try {
      const data = await signup(username, email, password);
      setMessage(data.msg);
      setMessage("Account created");
      setLoading(true);
      try {
        setMessage("Logging in");
        const user = await login(username, password);
        setMessage(user.msg);
        localStorage.setItem("token", data.access_token);
        setUser(data.user);
        // const userId = user.user.id;
        navigate("/chat");
      } catch (error) {
        setMessage("error signing up");
      } finally {
        setLoading(false);
      }
    } catch (error) {
      setMessage("error signing up");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h3 className="text-primary-600">
        <span className="text-secondary-300">Sign Up</span>
      </h3>
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
    </div>
  );
};

export default SignUpForm;
