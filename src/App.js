import React from 'react';
import SearchBar from './components/searchBar';
import WeatherList from './components/weatherList';

const App = () => (
  <div className="container">
    <SearchBar />
    <WeatherList />
  </div>
);

export default App;
