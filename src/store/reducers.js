import { combineReducers } from 'redux';

import { locationReducer } from './location/reducers';
import { modelReducer } from './model/reducers';
import { extrasReducer } from './extras/reducers';


export default combineReducers({
    location: locationReducer,
    model: modelReducer,
    extras: extrasReducer
});