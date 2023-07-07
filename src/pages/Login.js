import React, { useState } from "react";
import { login } from "../apis/login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const reqData = {
      email,
      password,
    };

    const res = await login(reqData);

    console.log(res);

    if (res === true) navigate("/");
  };

  return (
    <>
      <div>
        <div>
          <label>email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>passsword</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>login</button>
      </div>
    </>
  );
};

export default Login;
