import {
	CHANGE_CITY_DATA,
	CHANGE_POINT_DATA,
	CHANGE_CATEGORY_DATA,
	CHANGE_CAR_DATA,
} from './actions';

const defaultState = {
	cityData: null,
	pointData: null,
	categoryData: null,
	carData: null,
};

export const orderReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_CITY_DATA:
			return {
				...state,
				cityData: action.payload,
				pointData: null,
				categoryData: null,
				carData: null,
			};
		case CHANGE_POINT_DATA:
			return {
				...state,
				pointData: action.payload,
				categoryData: null,
				carData: null,
			};
		case CHANGE_CATEGORY_DATA:
			return {
				...state,
				categoryData: action.payload,
				carData: null,
			};
		case CHANGE_CAR_DATA:
			return {
				...state,
				carData: action.payload,
			};
		default:
	}
	return state;
};
