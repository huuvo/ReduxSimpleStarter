import axios from 'axios';

const API_KEY = 'b3152515eadf968eb0b5fba7fc310344';

const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city},us`;
	const request =axios.get(url);


	return {
		type: FETCH_WEATHER,
		payload: request
	};
}