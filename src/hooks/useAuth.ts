// hooks/useAuth.ts
import { useState, useEffect } from "react";
import { authService } from "../service/login-service";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const loggedIn = authService.isLoggedIn();
    setIsAuthenticated(loggedIn);
    setUser(loggedIn ? authService.getUser() : null);

  }, []);

  return { isAuthenticated, user, authService };
};
