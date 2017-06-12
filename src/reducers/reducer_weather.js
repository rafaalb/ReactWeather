import { FETCH_WEATHER } from '../actions/index';

export default function(state=[],action){
	console.log('action received ',action);
	switch (action.type){
		case FETCH_WEATHER:
			return [ action.payload.data, ...state ]; // never manipulate the existing array, we create a new instance of the state
			//so we return a completely new array on es6 form (same as state.concat(action.payload.data))

	}
	return state;
}