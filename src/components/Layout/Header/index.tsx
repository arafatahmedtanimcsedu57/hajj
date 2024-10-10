import { Button, Layout as LayoutAntD } from "antd";
import IconLogout from "../../../assets/Icons/IconLogout";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/features/userSlice";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATHS } from "../../../constant/routePaths";
import { LogoutOutlined } from "@ant-design/icons";

const { SIGN_IN } = ROUTER_PATHS;
const { Header: HeaderAntD } = LayoutAntD;

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    dispatch(setUser(null));
    navigate(SIGN_IN.PATH);
  };

  return (
    <HeaderAntD>
      <div className="flex justify-end h-full align-middle">
        <Button
          color="danger"
          variant="solid"
          title="Logout"
          style={{
            marginTop: "1.1em",
          }}
          className="align-middle border-none"
          onClick={handleLogout}
        >
          <LogoutOutlined style={{ fontSize: "20px" }} />
        </Button>
      </div>
    </HeaderAntD>
  );
}
