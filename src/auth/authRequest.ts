import { authConfig } from "./authConfig";

export const loginRequest = {
  scopes: ["openid", "profile", authConfig.scope],
};

export const accessTokenRequest = {
  scopes: [authConfig.scope],
};
