import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { msalInstance } from "../auth/msalInstance";
import { accessTokenRequest, loginRequest } from "../auth/authRequest";


export const authService = {

  login: async () => {
    return msalInstance.loginPopup(loginRequest);
  },

  logout: () => {
    return msalInstance.logoutPopup();
  },
  isLoggedIn: () => {
    const accounts = msalInstance.getAllAccounts();
    return accounts && accounts.length > 0;
  },
  getUser: () => {
    const accounts = msalInstance.getAllAccounts();
    return accounts[0] || null;
  },

  getAccessToken: async () => {
    const accounts = msalInstance.getAllAccounts();

    if (accounts.length === 0) {
      throw new Error("User not authenticated");
    }

    try {

      const tokenResult = await msalInstance.acquireTokenSilent({
        ...accessTokenRequest,
        account: accounts[0],

      });

      console.log(tokenResult.accessToken);

      return tokenResult
    } catch (error) {
      if (error instanceof InteractionRequiredAuthError) {
        return await msalInstance.acquireTokenPopup(loginRequest);
      }
      throw error;
    }
  },
};
