import { SET_CITIES, SET_POINTS } from './actions';

const defaultState = {
  citiesData: [],
  pointsData: [],
};

export const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return { ...state, citiesData: action.payload };
    case SET_POINTS:
      return { ...state, pointsData: action.payload };
    default:
  }

  return state;
};
