import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CountryBorders = () => {
  const { border } = useParams();
  const [borders, setBorders] = useState({});
  const navigate = useNavigate();

  const BorderApi = async () => {
    try{
      const response = await axios.get(
        `https://restcountries.com/v2/alpha/${border}`
      );
      setBorders(response.data);
    }catch(error){
      console.log(error);
    }
  };

  const RouteCountryBorder = (bor) => {
    navigate(`/country-details/alpha/${bor}`);
  };

  useEffect(() => {
    BorderApi();
  }, [border]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <img
                className="card-img-top"
                src={borders.flag}
                alt="Card image cap"
                height="300px"
              />
            </div>
          </div>
        </div>
        <div className="col-3 mt-5">
          <h3 type="text">{borders.name}</h3>
          <p type="text">{`Native Name: ${borders.nativeName}`}</p>
          <p type="text">{`Population: ${borders.population}`}</p>
          <p type="text">{`Region: ${borders.region}`}</p>
          <p type="text">{`Sub Region: ${borders.subregion}`}</p>
          <p type="text">{`Capital: ${borders.capital}`}</p>
        </div>
        <div className="col-3 mt-5">
          <p type="text">{`Top Level Domain: ${borders.topLevelDomain}`}</p>
          <p type="text">{`Currencies: ${
            borders.currencies && borders.currencies.map((obj) => obj.name)
          }`}</p>
          <p type="text">{`Languages: ${
            borders.languages && borders.languages.map((lang) => lang.name)
          }`}</p>
          {borders.borders ? (
            <p type="text">
              Borders:
              {
                borders.borders.map((bor) => (
                  <button key={bor}
                    onClick={() => RouteCountryBorder(bor)}
                    className="btn-btn m-1"
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
};

export default CountryBorders;
