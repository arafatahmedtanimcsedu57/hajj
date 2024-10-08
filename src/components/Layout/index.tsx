import { Outlet } from "react-router-dom";
import { Layout as LayoutAntD } from "antd";

import Header from "./Header";

const { Content } = LayoutAntD;

const Layout = () => {
  return (
    <LayoutAntD>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </LayoutAntD>
  );
};

export default Layout;
