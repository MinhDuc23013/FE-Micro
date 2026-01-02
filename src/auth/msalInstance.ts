import { PublicClientApplication } from "@azure/msal-browser";
import { authConfig } from "./authConfig";

export const msalInstance = new PublicClientApplication({
  auth: {
    clientId: authConfig.clientId,
    authority: authConfig.authority,
    redirectUri: authConfig.redirectUri,
  },
  cache: {
    // cacheLocation: "sessionStorage",
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
});
