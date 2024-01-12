let countries = [];
    
function fetchCountries() {// Função para buscar os dados dos países usando fetch
  fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => {
      countries = data.map(country => {
        return {
          name: country.name,
          flag: country.flags.svg,
          population: country.population,
          id: country.numericCode,
          region: country.region
        };
      });

      countries.sort((a, b) => a.name.localeCompare(b.name));// Ordenar os países em ordem alfabética

      updateCountriesList(countries);// Atualizar a lista de países
    })
    .catch(error => {
      console.error('Erro ao buscar os países:', error);
    });
}

    
function filterCountriesByContinent() {// Função para filtrar os países por continente
  const continentSelect = document.getElementById('continent-select');
  const selectedContinent = continentSelect.value;

  let filteredCountries = [];
  if (selectedContinent !== '') {
    filteredCountries = countries.filter(country => country.region === selectedContinent);
  } else {
    filteredCountries = countries;
  }

  updateCountriesList(filteredCountries);
}

    
function updateCountriesList(countries) {// Função para atualizar a lista de países
  const countriesList = document.getElementById('countries');
  countriesList.innerHTML = '';

  countries.forEach(country => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <button onclick="addToFavorites('${country.id}')">❤️</button>
      <img src="${country.flag}" alt="${country.name}" width="30" height="20">
      ${country.name} - População: ${country.population}`;

    countriesList.appendChild(listItem);
  });

  document.getElementById('total-countries').textContent = countries.length;// Atualizar o total de países e população
  const totalPopulation = countries.reduce((total, country) => total + country.population, 0);
  document.getElementById('total-population').textContent = totalPopulation.toLocaleString();
}

    
function addToFavorites(id) {// Função para adicionar um país aos favoritos
  const country = countries.find(country => country.id === id);

  if (country) {
    const favoritesList = document.getElementById('favorites');

    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <button onclick="removeFromFavorites('${country.id}')">❌</button>
      <img src="${country.flag}" alt="${country.name}" width="30" height="20">
      ${country.name} - População: ${country.population}`;

    favoritesList.appendChild(listItem);

    document.getElementById('total-favorites').textContent = favoritesList.getElementsByTagName('li').length;// Atualizar o total de países favoritos e população favorita
    const totalFavoritePopulation = getFavoritesById(Array.from(favoritesList.getElementsByTagName('li')).map(item => item.querySelector('button').getAttribute('onclick').match(/\d+/)[0]))
      .reduce((total, country) => total + country.population, 0);
    document.getElementById('total-favorite-population').textContent = totalFavoritePopulation.toLocaleString();

    removeFromCountries(country.id);// Remover o país da lista de países
  }
}

    
function removeFromFavorites(id) {// Função para remover um país dos favoritos
  const favoritesList = document.getElementById('favorites');
  const listItem = favoritesList.querySelector(`li button[onclick="removeFromFavorites('${id}')"]`).parentNode;
  favoritesList.removeChild(listItem);

  document.getElementById('total-favorites').textContent = favoritesList.getElementsByTagName('li').length;// Atualizar o total de países favoritos e população favorita
  const totalFavoritePopulation = getFavoritesById(Array.from(favoritesList.getElementsByTagName('li')).map(item => item.querySelector('button').getAttribute('onclick').match(/\d+/)[0]))
    .reduce((total, country) => total + country.population, 0);
  document.getElementById('total-favorite-population').textContent = totalFavoritePopulation.toLocaleString();

  const country = countries.find(country => country.id === id);// Adicionar o país de volta à lista de países
  if (country) {
    addCountry(country);
  }
}

    
function getFavoritesById(ids) { // Função para obter um país favorito pelo seu ID
  const favoritesList = document.getElementById('favorites');
  return Array.from(favoritesList.getElementsByTagName('li')).filter(item => ids.includes(item.querySelector('button').getAttribute('onclick').match(/\d+/)[0]))
    .map(item => ({
      name: item.querySelector('img').getAttribute('alt'),
      flag: item.querySelector('img').getAttribute('src'),
      population: parseInt(item.textContent.match(/População: (\d+)/)[1]),
      id: parseInt(item.querySelector('button').getAttribute('onclick').match(/\d+/)[0])
    }));
}

    
function addCountry(country) {// Função para adicionar um país à lista de países
  const countriesList = document.getElementById('countries');

  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <button onclick="addToFavorites('${country.id}')">Favoritar</button>
    <img src="${country.flag}" alt="${country.name}" width="30" height="20">
    ${country.name} - População: ${country.population}`;

  countriesList.appendChild(listItem);

  document.getElementById('total-countries').textContent = countriesList.getElementsByTagName('li').length;// Atualizar o total de países e população
  const totalPopulation = countries.reduce((total, country) => total + country.population, 0);
  document.getElementById('total-population').textContent = totalPopulation.toLocaleString();
}
   
function removeFromCountries(id) {// Função para remover um país da lista de países
  const countriesList = document.getElementById('countries');
  const listItem = countriesList.querySelector(`li button[onclick="addToFavorites('${id}')"]`).parentNode;
  countriesList.removeChild(listItem);

  document.getElementById('total-countries').textContent = countriesList.getElementsByTagName('li').length;// Atualizar o total de países e população
  const totalPopulation = countries.reduce((total, country) => total + country.population, 0);
  document.getElementById('total-population').textContent = totalPopulation.toLocaleString();
}

fetchCountries();// Chamar a função para buscar os países ao carregar a página