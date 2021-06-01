import { combineReducers } from 'redux';

//import { staticReducer } from './static/reducers';
//import { dynamicReducer } from './dynamic/reducers';
import { orderReducer } from './order/reducers';
import { extrasReducer } from './extras/reducers';

const rootReducer = combineReducers({
	//order: staticReducer,
	order: orderReducer,
	extras: extrasReducer,
});

export default rootReducer;
