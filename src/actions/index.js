import axios from 'axios';

const API_KEY='a4757d6296e9a9e2b22d69ba955346e3';
const ROUTE_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	
	const url = `${ROUTE_URL}&q=${city},us`;
	const request = axios.get(url);

	console.log('Request: ',request);
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}