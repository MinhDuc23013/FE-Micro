export const authConfig = {
//   tenantId: import.meta.env.VITE_AAD_TENANT_ID,
//   clientId: import.meta.env.VITE_AAD_CLIENT_ID,
//   apiClientId: import.meta.env.VITE_API_CLIENT_ID,

//   authority: `https://login.microsoftonline.com/${import.meta.env.VITE_AAD_TENANT_ID}`,
//   redirectUri: import.meta.env.VITE_REDIRECT_URI,

//   scope: `api://${import.meta.env.VITE_API_CLIENT_ID}/access_as_user`,

  tenantId: '8447a75a-b220-4a05-8854-b8862b295a4c',
  clientId: '3310633d-7294-4a3b-8a05-6a1743717690',
  apiClientId: 'a6553c79-b796-412c-848f-f11d613ccc9c',

  authority: `https://login.microsoftonline.com/8447a75a-b220-4a05-8854-b8862b295a4c`,
  redirectUri: 'https://localhost:4200',

  scope: `api://00db1137-db13-4ce4-834c-ea3644b4594e/access_as_user`,
};
