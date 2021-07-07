export const SET_CITIES = 'SET_CITIES';
export const SET_POINTS = 'SET_POINTS';

export const setCities = (citiesData) => ({
  type: SET_CITIES,
  payload: citiesData,
});

export const setPoints = (pointsData) => ({
  type: SET_POINTS,
  payload: pointsData,
});
