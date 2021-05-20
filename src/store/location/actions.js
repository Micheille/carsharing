export const LOCATION_CHANGE_CITY = 'LOCATION_CHANGE_CITY';
export const LOCATION_CHANGE_POINT = 'LOCATION_CHANGE_POINT';

export const setCity = (city) => ({
    type: LOCATION_CHANGE_CITY,
    payload: city
});

export const setPoint = (point) => ({
    type: LOCATION_CHANGE_POINT,
    payload: point
});