import { PublicClientApplication, LogLevel } from "@azure/msal-browser";
import { authConfig } from "./authConfig";

export const msalInstance = new PublicClientApplication({
  auth: {
    clientId: authConfig.clientId,
    authority: authConfig.authority,
    redirectUri: authConfig.redirectUri,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          console.log("MSAL PII:", message);
        } else {
          console.log("MSAL:", message);
        }
      },
      piiLoggingEnabled: false,
      logLevel: LogLevel.Info,
    },
  },
  cache: {
    // cacheLocation: "sessionStorage",
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
});
