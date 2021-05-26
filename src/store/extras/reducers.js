import { EXTRAS_CHANGE_COLOR,
         EXTRAS_CHANGE_DATE_FROM,
         EXTRAS_CHANGE_DATE_TO,
         EXTRAS_CHANGE_TARIFF, 
         EXTRAS_CHANGE_SERVICES_FULLTANK,
         EXTRAS_CHANGE_SERVICES_BABYSEAT,
         EXTRAS_CHANGE_SERVICES_RIGHTHAND } from './actions'

const defaultState = {
    color: '',
    dateFrom: '',
    dateTo: '',
    tariff: '',
    fullTank: false,
    babySeat: false,
    rightHand: false
};

export const extrasReducer = (state = defaultState, action) => {
    switch (action.type) {
        case EXTRAS_CHANGE_COLOR:
        return {
            ...state,
            color: action.payload
        };
        case EXTRAS_CHANGE_DATE_FROM:
        return {
            ...state,
            dateFrom: action.payload
        };
        case EXTRAS_CHANGE_DATE_TO:
        return {
            ...state,
            dateTo: action.payload
        };
        case EXTRAS_CHANGE_TARIFF:
        return {
            ...state,
            tariff: action.payload
        };
        case EXTRAS_CHANGE_SERVICES_FULLTANK:
        return {
            ...state,
            fullTank: action.payload
        };
        case EXTRAS_CHANGE_SERVICES_BABYSEAT:
        return {
            ...state,
            babySeat: action.payload
        };
        case EXTRAS_CHANGE_SERVICES_RIGHTHAND:
        return {
            ...state,
            rightHand: action.payload
        };
        default:
    }
    return state;
};