import React, { useState } from "react";
import { Container, ButtonGroup, ToggleButton } from "react-bootstrap";
import LogInForm from "../components/Auth/LoginForm";
import SignUpForm from "../components/Auth/SignUpForm";

const AuthPage: React.FC = () => {
  const [selected, setSelected] = useState<"login" | "signup">("login"); // declare the default state as string

  return (
    <Container className="mt-5">
      {/* the selection options for sorting options */}
      <ButtonGroup className="mb-4 d-flex justify-content-center">
        <ToggleButton
          id="sorting-toggle"
          type="radio"
          variant="outline-primary"
          name="visualizer"
          value="sorting"
          checked={selected === "login"}
          onChange={() => setSelected("login")}
        >
          Log In
        </ToggleButton>
        <ToggleButton
          id="graph-toggle"
          type="radio"
          variant="outline-secondary"
          name="visualizer"
          value="graph"
          checked={selected === "signup"}
          onChange={() => setSelected("signup")}
        >
          Sign Up
        </ToggleButton>
      </ButtonGroup>

      {/* if the current state of our variable selected=sorting then we load the 
        sorting component with its info, otherwise we will load the traversal
        visualiser component
      */}
      {selected === "login" ? <LogInForm /> : <SignUpForm />}
    </Container>
  );
};

export default AuthPage;
