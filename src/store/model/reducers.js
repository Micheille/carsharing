import { MODEL_CHANGE_TYPE } from './actions'

const defaultState = {
    modelType: ''
};

export const modelReducer = (state = defaultState, action) => {
    switch (action.type) {
        case MODEL_CHANGE_TYPE:
        return {
            ...state,
            modelType: action.payload
        };
        default:
    }
    return state;
};