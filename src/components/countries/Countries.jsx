import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./countries.css";

const Countries = () => {
  // state variables
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [filterCountry, setFilterCountry] = useState("");

  /**
   * get countries from third party api
   */
  const GetAllCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
      setFilteredCountry(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = filteredCountry.filter((country) =>
      country.name.toLowerCase().match(filterCountry.toLowerCase())
    );
    setCountries(data);
  }, [filterCountry]);

  useEffect(() => {
    GetAllCountries();
  }, []);

  return (
    <div className="countries__details">
      <input
        type="text"
        placeholder="Search for a country..."
        className="search"
        value={filterCountry}
        onChange={(e) => setFilterCountry(e.target.value)}
      />
      <div className="row">
        {countries.map((country) => {
          return (
            <div key={country.name} className="col-3">
              <div className="card-body">
                <Link to={`/country-details/name/${country.name}`}>
                  <img
                    className="card-img-top"
                    src={country.flag}
                    height="200px"
                    alt="Card image cap"
                  />
                </Link>
                <h3 className="card-title">{country.name}</h3>
                <h6 className="card-title">{`Population: ${country.population}`}</h6>
                <h6 className="card-title">{`Region: ${country.region}`}</h6>
                <h6 className="card-title">{`Capital: ${country.capital}`}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
