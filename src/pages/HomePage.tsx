import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu, Avatar, Typography, Button, Table, message, Space } from "antd";
import { UserOutlined, LogoutOutlined, CloudOutlined, HomeOutlined } from "@ant-design/icons";
import { authService } from "../service/login-service";
import { useAuth } from "../hooks/useAuth";
import apiClient from "../axiosConfig/axios-azure-ad";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

export default function HomePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);

  // Demo Table data
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
  ];

  const data = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  ];

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  const callApi = async () => {
    try {
      setLoading(true);

      const res = await apiClient.get("/api/WeatherForecast");
      console.log(res.data);

      message.success("Demo API called!");
      // Gọi API thật ở đây nếu cần
    } catch (err) {
      console.error(err);
      message.error("Call API failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div style={{ height: 32, margin: 16, background: "rgba(255,255,255,0.3)" }} />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item>
          <Menu.Item key="2" icon={<CloudOutlined />} onClick={callApi}>Call API</Menu.Item>
        </Menu>
      </Sider>

      {/* Main layout */}
      <Layout>
        {/* Navbar / Header */}
        <Header style={{ background: "#fff", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Text strong style={{ fontSize: 18 }}>Dashboard</Text>
          <Space size="middle">
            <Text>{user?.name}</Text>
            <Avatar icon={<UserOutlined />} />
            <Button type="primary" danger icon={<LogoutOutlined />} onClick={handleLogout}>
              Logout
            </Button>
          </Space>
        </Header>

        {/* Content */}
        <Content style={{ margin: "24px", background: "#fff", padding: 24, minHeight: 360 }}>
          <Text strong style={{ fontSize: 16 }}>Demo Table</Text>
          <Table columns={columns} dataSource={data} rowKey="id" style={{ marginTop: 16 }} />
        </Content>
      </Layout>
    </Layout>
  );
}
