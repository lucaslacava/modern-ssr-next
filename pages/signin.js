import React from "react";
import axios from "axios";
import CustomComponent from "../components/CustomInput";
import cookies from "nookies";
import { useRouter } from "next/router";
import validateEmail from "../utils/validators/validateEmail";
import validateRequired from "../utils/validators/validateRequired";
import Link from "next/link";

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [signinInfo, setSigninInfo] = React.useState(initialState);
  const [errorLogin, setErrorLogin] = React.useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    const { email, password } = signinInfo;
    if (!email || !password) {
      return;
    }
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://iwallet-api.herokuapp.com/api/auth/signin`,
        { ...signinInfo }
      );
      cookies.set(null, `token`, response.data.token, { path: `/` });
      const { plannedRoute } = cookies.get();

      const parsedPlannedRoute = plannedRoute && JSON.parse(plannedRoute);

      const plannedHrefRoute = parsedPlannedRoute
        ? parsedPlannedRoute.href
        : `/[country]`;

      const plannedAsRoute = parsedPlannedRoute ? parsedPlannedRoute.as : `/br`;

      router.replace(plannedHrefRoute, plannedAsRoute);
    } catch (error) {
      setErrorLogin(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSigninInfo({ ...signinInfo, [name]: value });
  };

  return (
    <div className="signin">
      <form onSubmit={handleSubmit}>
        <CustomComponent
          name="email"
          type="email"
          placeholder="Enter your e-mail"
          value={signinInfo.email}
          onChange={handleInputChange}
          onBlur={validateEmail}
        />
        <CustomComponent
          name="password"
          type="password"
          placeholder="Enter your password"
          value={signinInfo.password}
          onChange={handleInputChange}
          onBlur={validateRequired}
        />
        {errorLogin && <div className="error">{errorLogin}</div>}
        <Link href="/signup">
          <a>Create an account</a>
        </Link>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
