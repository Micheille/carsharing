export const CHANGE_CITY_DATA = 'CHANGE_CITY_DATA';
export const CHANGE_POINT_DATA = 'CHANGE_POINT_DATA';
export const CHANGE_CATEGORY_DATA = 'CHANGE_CATEGORY_DATA';
export const CHANGE_CAR_DATA = 'CHANGE_CAR_DATA';

export const setCityData = (cityData) => ({
	type: CHANGE_CITY_DATA,
	payload: cityData,
});

export const setPointData = (pointData) => ({
	type: CHANGE_POINT_DATA,
	payload: pointData,
});

export const setCategoryData = (categoryData) => ({
	type: CHANGE_CATEGORY_DATA,
	payload: categoryData,
});

export const setCarData = (carData) => ({
	type: CHANGE_CAR_DATA,
	payload: carData,
});
