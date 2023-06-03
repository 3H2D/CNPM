import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function LogIn() {
  const {
    register,
    formState: { errors },
  } = useForm();

  const [values, setValues] = useState({
    account: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate to "/"
    navigate("/");
    // axios.post("http://localhost:8000/login", values).then((res) => {
    //   Navigate("/");
    // });
    console.log(values);
  };

  return (
    <Card
      color="transparent"
      className="items-center flex h-screen top-10"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray">
        Đăng nhập vào hệ thống
      </Typography>
      <Typography variant="h1" color="blue" textGradient>
        Quản lý tổ dân phố
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="Tài khoản"
            name="account"
            onChange={(e) => setValues({ ...values, account: e.target.value })}
          />
          <Input
            type="password"
            size="lg"
            label="Mật khẩu"
            name="password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
        </div>
        <Button className="mt-6" type="submit">
          Đăng nhập
        </Button>
      </form>
    </Card>
  );
}

export default LogIn;
