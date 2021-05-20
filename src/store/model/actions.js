export const MODEL_CHANGE_TYPE = 'MODEL_CHANGE_TYPE';

export const setModelType = (modelType) => ({
    type: MODEL_CHANGE_TYPE,
    payload: modelType
});