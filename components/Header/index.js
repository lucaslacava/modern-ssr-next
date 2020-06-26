import React from "react";
import { Router, useRouter } from "next/router";
import countries from "../../public/countries.json";
import cookies from "nookies";
import Link from "next/link";
import { isAuthenticated } from "../../utils/withAuthorization";

const Header = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = React.useState(
    router.query.country
  );

  React.useEffect(() => {
    if (selectedCountry) {
      cookies.set(null, "defaultCountry", selectedCountry, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    }
  }, [selectedCountry]);

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
    router.push(`/[country]`, `/${e.target.value}`);
  };

  const renderCountries = () => {
    return countries.map((country) => {
      return (
        <option key={country.Code} value={country.Code}>
          {country.Name}
        </option>
      );
    });
  };
  const handleSignout = () => {
    isAuthenticated() && cookies.destroy(null, "token");
  };
  return (
    <div className="header">
      <select
        className="select-country"
        value={selectedCountry}
        onChange={handleChange}
      >
        {renderCountries()}
      </select>
      {isAuthenticated() && (
        <Link href="/[country]" as={`/${selectedCountry}`}>
          <a onClick={handleSignout}>sign out</a>
        </Link>
      )}
      <style jsx>
        {`
          .header {
            padding: 20px;
            border-radius: 8px;
            background-color: #874e4c;
            color: white;
            text-align: center;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
          }
          .header > :global(a) {
            color: white;
          }
          .select-country {
            cursor: pointer;
            height: 40px;
            width: 300px;
            color: #f7dfd4;
            background-color: #32485c;
            font-size: 18px;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
