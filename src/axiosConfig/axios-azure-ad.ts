import axios from "axios";
import { authService } from "../service/login-service";

// let baseURL = `https://localhost:7213`
let baseURL = `/apim`


const apiClient = axios.create({
  baseURL: baseURL,
});

apiClient.interceptors.request.use(async (config) => {
  const token = await authService.getAccessToken();
  config.headers.Authorization = `Bearer ${token.accessToken}`;
  return config;
});

export default apiClient;
