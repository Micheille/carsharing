import {
  SET_CITIES,
  SET_POINTS,
  SET_POINTS_COORDS,
  SET_CATEGORIES,
  SET_CARS_BY_CATEGORY,
} from './actions';

const defaultState = {
  citiesData: [],
  pointsData: [],
  pointsCoords: [],
  categoriesData: [],
  carsByCategory: [],
};

export const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return { ...state, citiesData: action.payload };
    case SET_POINTS:
      return { ...state, pointsData: action.payload };
    case SET_POINTS_COORDS:
      return { ...state, pointsCoords: action.payload };
    case SET_CATEGORIES:
      return { ...state, categoriesData: action.payload };
    case SET_CARS_BY_CATEGORY:
      return { ...state, carsByCategory: action.payload };
    default:
  }

  return state;
};
