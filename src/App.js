import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useKeycloak } from "@technospurs/react-keycloak-auth";
import AuthStatus from "./components/AuthStatus";

const Home = () => <h1>Home - Public Page</h1>;
const Dashboard = () => <h1>Dashboard - Protected Page</h1>;

const ProtectedRoute = ({ children }) => {
  const { initialized, token } = useKeycloak();

  if (!initialized) return <p>Loading...</p>;
  if (!token) return <Navigate to="/" />;

  return children;
};


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/auth-status" element={<AuthStatus />} />
      </Routes>
    </div>
  );
}

export default App;
