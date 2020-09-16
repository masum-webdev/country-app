import React from 'react';

const Population = (props) => {
  const p=props.population;
  console.log(p);

  const totalPopulation=p.reduce((total,pp)=>total+pp.population,0);
  console.log(totalPopulation);

  return (
    <div>
      <h3>Population: {totalPopulation} </h3>
    </div>
  );
};

export default Population;