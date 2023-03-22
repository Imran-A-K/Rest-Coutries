import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries(){
//   const API_URL = `https://restcountries.com/v3.1/all`
//   const [countries, setCountries] = useState([]);
//   useEffect( () =>{
//     fetch(API_URL)
//     .then(response => response.json())
//     .then(apiData =>setCountries(apiData) )
//   } , [])
// return (
//   <div>
//     <h1>
//       Visiting Every Country
//     </h1>
//     <h3>
//       Available Countries: {countries.length  }
//     </h3>
//     {
//       countries.map(country => <Country 
//          name={country.name.common}
//         population={country.population}
//       ></Country>)
//     }
//   </div>
// )
// }

// function Country(props){
//   return (
//     <div>
//       <h2> Name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }

export default App;