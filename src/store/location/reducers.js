import { LOCATION_CHANGE_CITY, LOCATION_CHANGE_POINT } from './actions'

const defaultState = {
    city: '',
    point: ''
};

export const locationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOCATION_CHANGE_CITY:
        return {
            ...state,
            city: action.payload
        };

        case LOCATION_CHANGE_POINT:
        return {
            ...state,
            point: action.payload
        };
        default:
    }
    return state;
};