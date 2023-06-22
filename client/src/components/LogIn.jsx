import axios from "axios";
import {createContext, useContext, useState} from "react";
import { useForm } from "react-hook-form";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import {RoleContext} from "./Context/RoleContext.jsx";

const LOGIN_URL = "http://localhost:8080/login";

function LogIn() {
  const {
    register,
    formState: { errors },
  } = useForm();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setRole } = useContext(RoleContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(LOGIN_URL, {
        username: values.username,
        password: values.password,
      })
      .then((res) => {
        const role = res.data.role;
        setRole(role)
        navigate("/hokhau");
      })
      .catch((error) => console.log(error));
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
            name="username"
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
          <Input
            type="password"
            size="lg"
            label="Mật khẩu"
            name="password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
        </div>
        <Button className="mt-6" type="submit" fullWidth>
          Đăng nhập
        </Button>
      </form>
    </Card>
  );
}

export default LogIn;
