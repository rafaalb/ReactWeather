import React, {Component} from 'react';
import {connect} from 'react-redux';

//export default class WeatherList extends Component{
class WeatherList extends Component{ // we dont use the export default here because now we are using the connect function

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