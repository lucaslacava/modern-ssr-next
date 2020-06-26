import React from "react";
import axios from "axios";
import CustomComponent from "../components/CustomInput";
import cookies from "nookies";
import { useRouter } from "next/router";
import validateEmail from "../utils/validators/validateEmail";
import validateRequired from "../utils/validators/validateRequired";
import Link from "next/link";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [signupInfo, setSignupInfo] = React.useState(initialState);
  const [errorLogin, setErrorLogin] = React.useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    const { name, email, password } = signupInfo;
    if (!email || !password || !name) {
      return;
    }
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://iwallet-api.herokuapp.com/api/auth/signup`,
        { ...signupInfo }
      );
      cookies.set(null, `token`, response.data.token, { path: `/` });
      router.replace(`/[country]`, `/br`);
    } catch (error) {
      setErrorLogin(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <CustomComponent
          name="name"
          placeholder="Enter your name"
          value={signupInfo.name}
          onChange={handleInputChange}
          onBlur={validateRequired}
        />
        <CustomComponent
          name="email"
          type="email"
          placeholder="Enter your e-mail"
          value={signupInfo.email}
          onChange={handleInputChange}
          onBlur={validateEmail}
        />
        <CustomComponent
          name="password"
          type="password"
          placeholder="Enter your password"
          value={signupInfo.password}
          onChange={handleInputChange}
          onBlur={validateRequired}
        />
        {errorLogin && <div className="error">{errorLogin}</div>}
        <Link href="/signin">
          <a>Already have an account?</a>
        </Link>
        <button type="submit">Create user</button>
      </form>
    </div>
  );
};

export default Signup;
