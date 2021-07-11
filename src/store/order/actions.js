export const CHANGE_CITY_DATA = 'CHANGE_CITY_DATA';
export const CHANGE_POINT_DATA = 'CHANGE_POINT_DATA';
export const CHANGE_CATEGORY_DATA = 'CHANGE_CATEGORY_DATA';
export const CHANGE_CAR_DATA = 'CHANGE_CAR_DATA';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const CHANGE_RESERVATION_FROM = 'CHANGE_RESERVATION_FROM';
export const CHANGE_RESERVATION_TO = 'CHANGE_RESERVATION_TO';

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

export const setColor = (color) => ({
  type: CHANGE_COLOR,
  payload: color,
});

export const setReservationFrom = (reservationFrom) => ({
  type: CHANGE_RESERVATION_FROM,
  payload: reservationFrom,
});

export const setReservationTo = (reservationTo) => ({
  type: CHANGE_RESERVATION_TO,
  payload: reservationTo,
});
