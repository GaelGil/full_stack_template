// components/PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  console.log("Token:", localStorage.getItem("token"));
  console.log("isAuthenticated:", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
