export const SET_CITIES = 'SET_CITIES';
export const SET_POINTS = 'SET_POINTS';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_CARS_BY_CATEGORY = 'SET_CARS_BY_CATEGORY';

export const setCities = (citiesData) => ({
  type: SET_CITIES,
  payload: citiesData,
});

export const setPoints = (pointsData) => ({
  type: SET_POINTS,
  payload: pointsData,
});

export const setCategories = (categoriesData) => ({
  type: SET_CATEGORIES,
  payload: categoriesData,
});

export const setCarsByCategory = (carsByCategory) => ({
  type: SET_CARS_BY_CATEGORY,
  payload: carsByCategory,
});
