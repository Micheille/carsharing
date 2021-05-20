export const EXTRAS_CHANGE_COLOR = 'EXTRAS_CHANGE_COLOR';
export const EXTRAS_CHANGE_DATE_FROM = 'EXTRAS_CHANGE_DATE_FROM';
export const EXTRAS_CHANGE_DATE_TO = 'EXTRAS_CHANGE_DATE_TO';
export const EXTRAS_CHANGE_TARIFF = 'EXTRAS_CHANGE_TARIFF';
export const EXTRAS_CHANGE_SERVICES_FULLTANK = 'EXTRAS_CHANGE_SERVICES_FULLTANK';
export const EXTRAS_CHANGE_SERVICES_BABYSEAT = 'EXTRAS_CHANGE_SERVICES_BABYSEAT';
export const EXTRAS_CHANGE_SERVICES_RIGHTHAND = 'EXTRAS_CHANGE_SERVICES_RIGHTHAND';

export const setColor = (color) => ({
    type: EXTRAS_CHANGE_COLOR,
    payload: color
});

export const setDateFrom = (dateFrom) => ({
    type: EXTRAS_CHANGE_DATE_FROM,
    payload: dateFrom
});

export const setDateTo = (dateTo) => ({
    type: EXTRAS_CHANGE_DATE_TO,
    payload: dateTo
});

export const setTariff = (tariff) => ({
    type: EXTRAS_CHANGE_TARIFF,
    payload: tariff
});

export const setFullTank = (fullTank) => ({
    type: EXTRAS_CHANGE_SERVICES_FULLTANK,
    payload: fullTank
});

export const setBabySeat = (babySeat) => ({
    type: EXTRAS_CHANGE_SERVICES_BABYSEAT,
    payload: babySeat
});

export const setRightHand = (rightHand) => ({
    type: EXTRAS_CHANGE_SERVICES_RIGHTHAND,
    payload: rightHand
});