export const CHANGE_CITY_DATA = 'CHANGE_CITY_DATA';
export const CHANGE_POINT_DATA = 'CHANGE_POINT_DATA';

export const setCityData = (cityData) => ({
	type: CHANGE_CITY_DATA,
	payload: cityData,
});

export const setPointData = (pointData) => ({
	type: CHANGE_POINT_DATA,
	payload: pointData,
});
