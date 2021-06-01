import { CHANGE_CITY_ID, CHANGE_CATEGORY_ID, CHANGE_CAR_ID } from './actions';


const defaultState = {
	server: 'https://api-factory.simbirsoft1.com',
	cityId: '',
	categoryId: '',
	carId: '',
};

export const dynamicReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_CITY_ID:
			return {
				...state,
				cityId: action.payload,
				categoryId: '',
				carId: '',
			};
		case CHANGE_CATEGORY_ID:
			return {
				...state,
				categoryId: action.payload,
				carId: '',
			};
		case CHANGE_CAR_ID:
			return {
				...state,
				carId: action.payload,
			};
		default:
	}
	return state;
};
