import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Country = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState([]);

  const CountryApi = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v2/name/${name}`
      );
      // let newRes = response.data.filter(country => country.name === name);
      setCountry(response.data);
    } catch (error) {
      console.log(error);
      // react tostify
    }
  };

  const RouteCountryBorder = (bor) => {
    navigate(`/country-details/alpha/${bor}`);
  };

  useEffect(() => {
    CountryApi();
  }, []);
  return (
    <>
      {country.map((obj) => {
        return (
          <div key={obj.name} className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src={obj.flag}
                      alt="Card image cap"
                    />
                  </div>
                </div>
              </div>
              <div className="col-3 mt-5">
                <h3 type="text">{obj.name}</h3>
                <p type="text">{`Native Name: ${obj.nativeName}`}</p>
                <p type="text">{`Population: ${obj.population}`}</p>
                <p type="text">{`Region: ${obj.region}`}</p>
                <p type="text">{`Sub Region: ${obj.subregion}`}</p>
                <p type="text">{`Capital: ${obj.capital}`}</p>
              </div>
              <div className="col-3 mt-5">
                <p type="text">{`Top Level Domain: ${obj.topLevelDomain}`}</p>
                <p type="text">{`Currencies: ${obj.currencies.map(
                  (cur) => cur.name
                )}`}</p>
                <p type="text">{`Languages: ${obj.languages.map(
                  (lang) => lang.name
                )}`}</p>
                {obj.borders ? (
                  <p type="text">
                    Borders:
                    {obj.borders.map((bor) => (
                      <button
                        key={bor.name}
                        onClick={() => RouteCountryBorder(bor)}
                        className="btn btn-primary m-1"
                      >
                        {bor}
                      </button>
                    ))}
                  </p>
                ) : (
                  <p>Borders:</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Country;
