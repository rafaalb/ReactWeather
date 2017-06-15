import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

//export default class WeatherList extends Component{
class WeatherList extends Component{ // we dont use the export default here because now we are using the connect function
	renderWeather(cityData){
		const name=cityData.city.name;
		const temps=cityData.list.map(weather=>weather.main.temp);
		const pressures=cityData.list.map(pressures=>pressures.main.pressure);
		const humidities=cityData.list.map(humidities=>humidities.main.humidity);
		const {lon , lat} = cityData.city.coord; // find the coord object and grab the long and lat (es6)



		return(
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="orange" units="K"/></td>
				<td><Chart data={pressures} color="red" units="hPa"/></td>
				<td><Chart data={humidities} color="blue" units="%"/></td>
			</tr>
			);
	}
	render(){
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure(hPa)</th>
						<th>Humidity(%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
			);
	}
}

//function mapStateToProps(state){ // Not es6 way
function mapStateToProps({weather}){ //es6 way
	//return {weather: state.weather} not es6 way
	return {weather} //es6 way
}

export default connect(mapStateToProps)(WeatherList);
