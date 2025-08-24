import { Navigate, Outlet } from "react-router-dom";

// Simulated authentication state
const isAuthenticated = false; // set to true to allow access

function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
