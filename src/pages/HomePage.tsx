import { useNavigate } from "react-router-dom";
import apiClient from "../axiosConfig/axios-azure-ad";
import { authService } from "../service/login-service";
import { useAuth } from "../hooks/useAuth";

export default function HomePage() {

const { user } = useAuth();    
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/login"); // quay lại login page
  };

  const callApi = async () => {
    try {
      const res = await apiClient.get("/api/WeatherForecast");
      console.log(res.data);
      // alert(JSON.stringify(res.data, null, 2));
    } catch (err) {
      console.error(err);
      alert("Call API failed, check console");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Home Page</h1>

    <div>
      <h1>Welcome, {user?.name}</h1>
      <p>Email: {user?.username}</p>
      <p>Object Id: {user?.homeAccountId}</p>
    </div>

      <div style={{ marginTop: "30px" }}>
        <button onClick={callApi} style={{ padding: "10px 20px", marginRight: "10px" }}>
          Call API
        </button>
        <button onClick={handleLogout} style={{ padding: "10px 20px" }}>
          Logout
        </button>
      </div>
    </div>
  );
}
