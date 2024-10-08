import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

import { ROUTER_PATHS } from "./../../constant/routePaths";

const { HOME } = ROUTER_PATHS;

interface Props {
  subTitle?: string;
}

const NotFound = ({
  subTitle = "Sorry, the page you visited does not exist.",
}: Props) => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle={subTitle}
      extra={
        <Button type="primary" onClick={() => navigate(HOME.PATH)}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
