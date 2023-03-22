import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const API_URL = `https://restcountries.com/v3.1/all`
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch(API_URL)
        .then(response => response.json())
        .then(apiData => setCountries(apiData))
    },[])
    return (
        <div >
           <h1>Hello From {countries.length} Countries</h1> 
           <div className='countries-container'>
           {
            countries.map(country => <Country 
                country={country}
                key={country.cca3}
                // name={country.name.common}
                // population={country.population}
                // area={country.area}
                // region={country.region}
                ></Country>)
           }
           </div>
        </div>
    );
};

export default Countries;