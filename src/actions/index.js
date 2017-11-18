import axios from 'axios';

const API_KEY = 'd184bf502e1ddcfcf9bb1daeedeb37f8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${
  API_KEY
}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = city => dispatch =>
  axios.get(`${ROOT_URL}&q=${city},us`).then(weather => {
    const action = {
      type: FETCH_WEATHER,
      payload: weather
    };
    dispatch(action);
  });
