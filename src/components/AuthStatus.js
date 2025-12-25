import React from "react";
import { useKeycloak } from "@technospurs/react-keycloak-auth";

const AuthStatus = () => {
  const { token, logout, roles } = useKeycloak();
  console.log(token);

  if (!token) return <p>Not Logged In</p>;

  return (
    <div>
      <p>Token: {token}</p>
      <p>Roles: {roles.join(", ")}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AuthStatus;
