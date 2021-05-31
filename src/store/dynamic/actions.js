export const CHANGE_CATEGORY_ID = 'CHANGE_CATEGORY_ID';
export const CHANGE_CAR_ID = 'CHANGE_CAR_ID';


export const setCategoryId = (categoryId) => ({
	type: CHANGE_CATEGORY_ID,
	payload: categoryId,
});
export const setCarId = (carId) => ({
	type: CHANGE_CAR_ID,
	payload: carId,
});
