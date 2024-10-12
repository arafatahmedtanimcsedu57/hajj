import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout as LayoutAntD, Menu, theme } from "antd";
import { FormOutlined } from "@ant-design/icons";
import Header from "./Header";

const { Content, Sider, Footer } = LayoutAntD;

const Layout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    {
      key: "1",
      label: "হজ্জ রেজিস্ট্রেশন",
      icon: <FormOutlined />,
    },
  ];

  return (
    <LayoutAntD style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ paddingTop: "4.5em" }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <LayoutAntD>
        <Header />
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Content>
      </LayoutAntD>
    </LayoutAntD>
  );
};

export default Layout;
