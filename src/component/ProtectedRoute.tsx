import { Navigate } from "react-router-dom";
import type { JSX } from "react";
import { authService } from "../service/login-service";


export function ProtectedRoute({ children }: { children: JSX.Element }) {
  if (!authService.isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
