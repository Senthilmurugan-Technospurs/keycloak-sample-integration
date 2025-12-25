export const tenant = {
  tenantId: "technospurs-prod", // your tenant id
  url: "http://localhost:8080", // Keycloak server URL
  realm: "technospurs", // Keycloak realm
  clientId: "keycloak-frontend-test", // Client ID
  postLogoutRedirectUri: "http://localhost:3000", // Redirect after logout
  pkceMethod: "S256"
};

