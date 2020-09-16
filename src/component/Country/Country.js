import React from 'react';
import './Country.css'
const Country = (props) => {
  const {name,capital,flag,population}=props.country;
  return (
    <div className="country">
      <img src={flag} alt="flag"/>
      <h3>Country: {name}</h3>
      <h4>Capital: {capital}</h4>
      <h4>Population: {population}</h4>
      <button onClick={()=>props.handleAddCountry(props.country)}>Add Country</button>
    </div>
  );
};

export default Country;