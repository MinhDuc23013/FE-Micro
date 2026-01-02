import { useEffect } from "react";
import { authService } from "../service/login-service";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  // const redirectedRef = useRef(false);

  const handleLogin = async () => {
    try {
      await authService.login(); // login bằng MSAL 
      navigate("/"); // chuyển về trang chủ sau login
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  useEffect(() => {
    if (authService.isLoggedIn() && location.pathname === "/login") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  // const handleLogout = () => {
  //   authService.logout();
  //   navigate("/login"); // quay lại login page
  // };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin} style={{ padding: "10px 20px", marginTop: "20px" }}>
        Login
      </button>
      {/* <button onClick={handleLogout} style={{ padding: "10px 20px", marginTop: "20px" }}>
        Logout
      </button> */}
    </div>
  );
}
