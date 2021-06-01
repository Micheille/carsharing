import { CHANGE_CITY_DATA, CHANGE_POINT_DATA } from './actions';

const defaultState = {
	cityData: null,
	pointData: null,
};

export const apiReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_CITY_DATA:
			return {
				...state,
				cityData: action.payload,
				pointData: null,
			};
		case CHANGE_POINT_DATA:
			return {
				...state,
				pointData: action.payload,
			};
		default:
	}
	return state;
};
