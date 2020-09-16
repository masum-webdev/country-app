import React, { useEffect, useState } from 'react';
import './App.css';
import Country from './component/Country/Country';
import Population from './component/Population/Population';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.log(err));
  }, []);

  const [addcountry, setAddCountry] = useState([]);

  const handleAddCountry = (countryName) => {
    const newCountry = [...addcountry, countryName];
    setAddCountry(newCountry);
  }

  return (
    <div className="App">
      <h2>Country Loaded: {countries.length}</h2>
      <h3>Country Added: {addcountry.length}</h3>
      <Population population={addcountry}></Population>
      <ul>
        {
          countries.map(c => <Country key={c.alpha3Code} country={c} handleAddCountry={handleAddCountry} ></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
