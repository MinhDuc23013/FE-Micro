import { useEffect } from "react";
import { authService } from "../service/login-service"; // service MSAL của bạn
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Gọi MSAL logout
    authService.logout(); // hoặc authInstance.logoutRedirect()
    
    // Sau khi logout xong, redirect về trang public
    navigate("/login");
  }, []);

  return <div>Đang logout...</div>;
}
