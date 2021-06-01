export const CHANGE_CITY_ID = 'CHANGE_CITY_ID';
export const CHANGE_CATEGORY_ID = 'CHANGE_CATEGORY_ID';
export const CHANGE_CAR_ID = 'CHANGE_CAR_ID';

export const setCityId = (cityId) => ({
	type: CHANGE_CITY_ID,
	payload: cityId,
})
export const setCategoryId = (categoryId) => ({
	type: CHANGE_CATEGORY_ID,
	payload: categoryId,
});
export const setCarId = (carId) => ({
	type: CHANGE_CAR_ID,
	payload: carId,
});
