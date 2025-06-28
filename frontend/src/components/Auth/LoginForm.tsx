import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AuthForm from "./AuthForm";

const LogInForm = () => {
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
      <div style={{ maxWidth: "400px", width: "100%" }}>
        {/* importing algorithm form component with sorting specific values */}
        <AuthForm
          value={login}
          options={["User Name", "Password"]}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </Container>
  );
};

export default LogInForm;
