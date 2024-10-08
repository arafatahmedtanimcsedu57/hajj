import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  // notification
} from "antd";
import { useLoginUserMutation } from "../../store/apis/authApi";
import { useAppSelector } from "../../store";

// import { ROUTER_PATHS } from "./../../constant/routePaths";

// const { HOME } = ROUTER_PATHS;

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [loginApi, { isLoading }] = useLoginUserMutation();
  const userRedux = useAppSelector((state) => state.user);

  //   const navigate = useNavigate();

  useEffect(() => {
    console.log("userRedux:", userRedux);
  }, [userRedux]);

  const handleSubmit = async () => {
    // console.log(phoneNumber, password);
    loginApi({ email: "hwa@admin.com", password: "LxGyWyL" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-md shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center">সাইন ইন</h2>
        <Form onFinish={handleSubmit} layout="vertical">
          <Form.Item
            label="মোবাইল নম্বর "
            name="phoneNumber"
            rules={[
              { required: true, message: "আপনার মোবাইল নম্বর ইনপুট করুন!" },
            ]}
          >
            <Input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full"
            />
          </Form.Item>
          <Form.Item
            label="পাসওয়ার্ড"
            name="password"
            rules={[
              { required: true, message: "আপনার পাসওয়ার্ড ইনপুট করুন!" },
            ]}
          >
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={isLoading}
            >
              সাবমিট করুন
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
