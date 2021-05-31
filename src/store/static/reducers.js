import {
	CHANGE_CITY,
	CHANGE_POINT,
	CHANGE_CAR_NAME,
	CHANGE_COLOR,
	CHANGE_DATETIME_FROM,
	CHANGE_DATETIME_TO,
	//CHANGE_DURATION,
	CHANGE_TARIFF,
	CHANGE_IS_FULL_TANK,
	CHANGE_IS_BABY_SEAT,
	CHANGE_IS_RIGHT_HAND,
} from './actions';

const defaultState = {
	city: '',
	point: '',
	carName: '',
	color: '',
	dateTimeFrom: '',
	dateTimeTo: '',
	//duration: '',
	tariff: '',
	isFullTank: false,
	isBabySeat: false,
	isRightHand: false,
};

export const staticReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_CITY:
			return {
				...state,
				city: action.payload,
				point: '',
				carName: '',
				color: '',
				dateTimeFrom: '',
				dateTimeTo: '',
				//duration: '',
				tariff: '',
				isFullTank: false,
				isBabySeat: false,
				isRightHand: false,
			};

		case CHANGE_POINT:
			return {
				...state,
				point: action.payload,
                carName: '',
				color: '',
				dateTimeFrom: '',
				dateTimeTo: '',
				//duration: '',
				tariff: '',
				isFullTank: false,
				isBabySeat: false,
				isRightHand: false,
			};
		case CHANGE_CAR_NAME:
			return {
				...state,
				carName: action.payload,
                color: '',
				dateTimeFrom: '',
				dateTimeTo: '',
				//duration: '',
				tariff: '',
				isFullTank: false,
				isBabySeat: false,
				isRightHand: false,
			};
		case CHANGE_COLOR:
			return {
				...state,
				color: action.payload,
			};
		case CHANGE_DATETIME_FROM:
			return {
				...state,
				color: action.payload,
			};
		case CHANGE_DATETIME_TO:
			return {
				...state,
				color: action.payload,
			};
		// case CHANGE_DURATION:
		// 	return {
		// 		...state,
		// 		duration: action.payload,
		// 	};
		case CHANGE_TARIFF:
			return {
				...state,
				tariff: action.payload,
			};
		case CHANGE_IS_FULL_TANK:
			return {
				...state,
				isFullTank: action.payload,
			};
		case CHANGE_IS_BABY_SEAT:
			return {
				...state,
				isBabySeat: action.payload,
			};
		case CHANGE_IS_RIGHT_HAND:
			return {
				...state,
				isRightHand: action.payload,
			};
		default:
	}
	return state;
};
