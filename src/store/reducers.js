import { combineReducers } from 'redux';

import { staticReducer } from './static/reducers';
//import { dynamicReducer } from './dynamic/reducers';
import { apiReducer } from './api/reducers';

import { extrasReducer } from './extras/reducers';

const rootReducer = combineReducers({
	order: staticReducer,
	api: apiReducer,
	extras: extrasReducer,
});

export default rootReducer;
