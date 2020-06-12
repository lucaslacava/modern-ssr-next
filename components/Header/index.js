import React from "react";
import { useRouter } from "next/router";
import countries from "../../public/countries.json";

// const countries = [
//   {
//     code: "us",
//     name: "United states",
//   },
//   {
//     label: "br",
//     name: "Brazil",
//   },
// ];

const Header = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = React.useState(
    router.query.country
  );

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

  return (
    <div className="header">
      <select
        className="select-country"
        value={selectedCountry}
        onChange={handleChange}
      >
        {renderCountries()}
      </select>

      <style jsx>
        {`
          .header {
            padding: 20px;
            border-radius: 8px;
            background-color: #874e4c;
            color: white;
            text-align: center;
            margin-bottom: 10px;
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
