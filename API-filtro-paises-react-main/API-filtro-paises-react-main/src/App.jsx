import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Lista de Países - Letícia França</h1>
      <table>
        <thead>
          <tr>
            <th>País</th>
            <th>Sigla</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {countries.map(country => (
            <tr key={country.alpha3Code}>
              <td>{country.name}</td>
              <td>{country.alpha2Code}</td>
              <td>{country.capital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
