import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/counter/counter";
import Countries from "./components/countries/Countries";
import Country from "./components/country/Country";
import CountryBorders from "./components/countryborders/CountryBorders";
import Header from "./components/header/Header";
import Parent from "./components/parent/Parent";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country-details/name/:name" element={<Country />} />
          <Route
            path="/country-details/alpha/:border"
            element={<CountryBorders />}
          />
          <Route path="/counter" element={<Counter />} />
          <Route path="/parent" element={<Parent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
