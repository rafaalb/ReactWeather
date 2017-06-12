import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

//export default class WeatherList extends Component{
class WeatherList extends Component{ // we dont use the export default here because now we are using the connect function
	renderWeather(cityData){
		const name=cityData.city.name;
		const temps=cityData.list.map(weather=>weather.main.temp);
		const pressures=cityData.list.map(pressures=>pressures.main.temp);
		const humidities=cityData.list.map(humidities=>humidities.main.humidity);

		
		console.log(temps);
		return(
			<tr key={name}>
				<td>
					{name}
				</td>
				<td><Chart data={temps} color="orange" /></td>
				<td><Chart data={pressures} color="red" /></td>
				<td><Chart data={humidities} color="blue" /></td>
			</tr>
			);
	}
	render(){
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
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