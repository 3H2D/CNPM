import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

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
    // console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Tài khoản</p>
      <input
        name="account"
        {...register("account", { required: true })}
        onChange={(e) => setValues({ ...values, account: e.target.value })}
      />
      {errors.account && <p>Bạn phải nhập tài khoản</p>}
      <p>Mật khẩu</p>
      <input
        name="password"
        {...register("password", { required: true })}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />

      {errors.lastName && <p>Bạn phải nhập mật khẩu</p>}

      <input type="submit" />
    </form>
  );
}

export default LogIn;
