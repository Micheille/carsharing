// import { combineReducers } from 'redux';

// import { locationReducer } from './location/reducers';
// import { modelReducer } from './model/reducers';
// import { extrasReducer } from './extras/reducers';

// const appReducer =  combineReducers({
//     location: locationReducer,
//     model: modelReducer,
//     extras: extrasReducer
// });

// const rootReducer = (state, action) => {

//     return appReducer(state, action);
// };

// export default rootReducer;

import { combineReducers } from 'redux';

import { staticReducer } from './static/reducers';
import { dynamicReducer } from './dynamic/reducers';

import { extrasReducer } from './extras/reducers';

const rootReducer = combineReducers({
	order: staticReducer,
	api: dynamicReducer,
	extras: extrasReducer,
});

export default rootReducer;
