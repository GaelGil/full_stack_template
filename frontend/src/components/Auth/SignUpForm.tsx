import React, { useState } from "react";
import { Container } from "react-bootstrap";
// import type { AuthFormProps } from "../../types/AuthFormProp";
import AuthForm from "./AuthForm";

const SignUpForm = () => {
  const [login, setLogin] = useState("false");
  // function to handle if algorithm changes
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setLogin("true");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1> Sign Up</h1>
      <div style={{ maxWidth: "400px", width: "100%" }}>
        {/* importing algorithm form component with sorting specific values */}
        <AuthForm
          value={login}
          options={["Email", "User Name", "Password", "Confirm Password"]}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </Container>
  );
};

export default SignUpForm;
