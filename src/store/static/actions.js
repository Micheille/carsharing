export const CHANGE_CITY = 'CHANGE_CITY';
export const CHANGE_POINT = 'CHANGE_POINT';

export const CHANGE_CAR_NAME = 'CHANGE_CAR_NAME';

export const CHANGE_COLOR = 'CHANGE_COLOR';
export const CHANGE_DATETIME_FROM = 'CHANGE_DATE_FROM';
export const CHANGE_DATETIME_TO = 'CHANGE_DATE_TO';
//export const CHANGE_DURATION = 'CHANGE_DURATION';
export const CHANGE_TARIFF = 'CHANGE_TARIFF';
export const CHANGE_IS_FULL_TANK = 'CHANGE_IS_FULL_TANK';
export const CHANGE_IS_BABY_SEAT = 'CHANGE_IS_BABY_SEAT';
export const CHANGE_IS_RIGHT_HAND = 'CHANGE_IS_RIGHT_HAND';

export const setCity = (city) => ({
	type: CHANGE_CITY,
	payload: city,
});
export const setPoint = (point) => ({
	type: CHANGE_POINT,
	payload: point,
});
export const setCarName = (carName) => ({
	type: CHANGE_CAR_NAME,
	payload: carName,
});
export const setColor = (color) => ({
	type: CHANGE_COLOR,
	payload: color,
});
export const setDateTimeFrom = (dateTimeFrom) => ({
	type: CHANGE_DATETIME_FROM,
	payload: dateTimeFrom,
});
export const setDateTimeTo = (dateTimeTo) => ({
	type: CHANGE_DATETIME_TO,
	payload: dateTimeTo,
});
// export const setDuration = (duration) => ({
// 	type: CHANGE_DURATION,
// 	payload: duration,
// });
export const setTariff = (tariff) => ({
	type: CHANGE_TARIFF,
	payload: tariff,
});
export const setIsFullTank = (isFullTank) => ({
	type: CHANGE_IS_FULL_TANK,
	payload: isFullTank,
});
export const setIsBabySeat = (isBabySeat) => ({
	type: CHANGE_IS_BABY_SEAT,
	payload: isBabySeat,
});
export const setIsRightHand = (isRightHand) => ({
	type: CHANGE_IS_RIGHT_HAND,
	payload: isRightHand,
});
