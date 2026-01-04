import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Typography, Space, message } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { authService } from "../service/login-service";

const { Title, Text } = Typography;

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await authService.login(); // login bằng MSAL
      message.success("Login successful!");
      navigate("/"); // chuyển về trang chủ
    } catch (err) {
      console.error("Login failed", err);
      message.error("Login failed. Check console.");
    }
  };

  useEffect(() => {
    if (authService.isLoggedIn() && location.pathname === "/login") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5",
        padding: 24,
      }}
    >
      <Card
        style={{ width: 400, textAlign: "center" }}
        hoverable
        bordered={false}
      >
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Title level={2} style={{ margin: 0 }}>
            Welcome Back
          </Title>
          <Text type="secondary">Please login to continue</Text>

          <Button
            type="primary"
            size="large"
            icon={<LoginOutlined />}
            onClick={handleLogin}
            block
          >
            Login
          </Button>
        </Space>
      </Card>
    </div>
  );
}
