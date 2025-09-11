import React, { useState } from "react";
import LogInForm from "../components/Auth/LoginForm";
import SignUpForm from "../components/Auth/SignUpForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { Text, Group, Stack } from "@mantine/core";
import { Navigate } from "react-router-dom";
const AuthPage: React.FC = () => {
  const [selected, setSelected] = useState<"login" | "signup">("login"); // declare the default state as string
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      console.log("No user found, stay on auth page");
    }
  }, [navigate]);

  if (user) return <Navigate to="/" replace />;

  return (
    <Stack align="center" mt="xl" mih={"100vh"} p={"xl"} m={0}>
      {selected === "login" ? <LogInForm /> : <SignUpForm />}

      <Group>
        {selected === "login" ? (
          <>
            <Text c="var(--mantine-color-text-tertiary)">
              Don't have an account yet?
            </Text>
            <Text
              variant="link"
              component="span"
              onClick={() => setSelected("signup")}
              style={{ cursor: "pointer" }}
              c="blue.5"
            >
              Sign Up
            </Text>
          </>
        ) : (
          <>
            <Text c="var(--mantine-color-text-tertiary)">
              Already have an account?
            </Text>
            <Text
              variant="link"
              component="span"
              onClick={() => setSelected("login")}
              style={{ cursor: "pointer" }}
              c="blue.5"
            >
              Log In
            </Text>
          </>
        )}
      </Group>
    </Stack>
  );
};

export default AuthPage;
